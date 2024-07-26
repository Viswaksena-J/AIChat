import "./chatpage.css";
import NewPrompt from "../../components/newPrompt/NewPrompt";

const Chatpage = () => {
  
  return (
    <div className="chatpage">
      <div className="wrapper">
        <div className="chat">
          <div className="message">Test Message from ai</div>
          <div className="message user">Test Message from user Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis rem, dolores libero nisi tempore animi, veniam ratione culpa est in recusandae laborum architecto sed eligendi praesentium consequuntur dolor, delectus itaque.
          Reiciendis vel soluta quaerat unde explicabo, dolores obcaecati. Laboriosam deserunt expedita consectetur voluptatem illum dolorem, quo commodi beatae aspernatur non sed voluptatibus error fugiat obcaecati, rerum cum nemo libero eligendi.</div>
          <div className="message">Test Message from ai</div>
          <div className="message user">Test Message from user</div>
          <div className="message">Test Message from ai</div>
          <div className="message user">Test Message from user</div>
          <div className="message">Test Message from ai</div>
          <div className="message user">Test Message from user</div>
          <div className="message">Test Message from ai</div>
          <div className="message user">Test Message from user</div>
          <div className="message">Test Message from ai</div>
          <div className="message user">Test Message from user</div>
          <div className="message">Test Message from ai</div>
          <div className="message user">Test Message from user</div>
          <div className="message">Test Message from ai</div>
          <div className="message user">Test Message from user</div>
          <div className="message">Test Message from ai</div>
          <div className="message user">Test Message from user</div>
          <div className="message">Test Message from ai</div>
          <div className="message user">Test Message from user</div>
          <NewPrompt/>
        </div>
      </div>
    </div>
  );
};

export default Chatpage;
