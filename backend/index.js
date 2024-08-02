import express from 'express';
import ImageKit from 'imagekit';
import cors from 'cors';
import mongoose from 'mongoose';
import Chat from "./models/chat.js";
import UserChats from "./models/userChats.js";

const port = process.env.PORT || 3000;
const app = express();

app.use(cors(
    {
        origin: process.env.CLIENT_URL,
    }
));

app.use(express.json());

const connect = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("Connected to mongo database")
    } catch (error) {
        console.log(error)
    }
}

const imagekit = new ImageKit({
    urlEndpoint: process.env.IMAGE_KIT_ENDPOINT,
    publicKey: process.env.IMAGE_KIT_PUBLIC_KEY,
    privateKey: process.env.IMAGE_KIT_PRIVATE_KEY,
});

app.post("/api/chats", async (req, res) => {
    const {text, userId} = req.body;

    try {
        //New Chat Creation
        const newChat = new Chat({
            userId : userId,
            history:[
                {
                    role:"user",
                    parts:[
                        {
                            text,
                        }
                    ]
                }
            ]
        })
 
        const savedChat = await newChat.save();

        // Check if the user chat exists
        const userChats = await UserChats.find({userId:userId})

        // Created a array of the user if the user chat does not exist
        if(!userChats.length){
            const newUserChats = new UserChats({
                userId: userId,
                chats:[
                    {
                        _id: savedChat._id,
                        title: text.substring(0, 40),
                    }
                ]
            });
            await newUserChats.save();
        } 
        // If the user chat exists, push the new chat to the array
        else{
            await UserChats.updateOne(
                {userId: userId},
                {
                    $push:{
                        chats:{
                            _id: savedChat._id,
                            title: text.substring(0, 40),
                        }
                    }
                }
            );

            res.status(201).send(newChat._id)
        }   
    } catch (error) {
        console.log(error)
        res.status(500).json("Error created chat!")
        
    }
});

app.get('/api/upload',(req,res) => {
    const result = imagekit.getAuthenticationParameters();
    res.json(result);
})
app.listen(port, ()=> {
    connect();
    console.log(`Server running on ${port}`)
}) 