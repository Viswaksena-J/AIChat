import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import Homepage from "./routes/homepage/Homepage.jsx";
import Dashboardpage from "./routes/dashboard/Dashboardpage.jsx";
import Chatpage from "./routes/chatpage/Chatpage.jsx";
import RootLayout from "./layouts/rootLayout/RootLayout.jsx";
import DashborardLayout from "./layouts/dashboardLayout/DashboardLayout.jsx";
import SignInpage from "./routes/signin/SignInpage.jsx";
import SignUppage from "./routes/signup/SignUppage.jsx";

// Routing
const route = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/sign-in/*", // * represents every children of sign-in
        element: <SignInpage />,
      },
      {
        path: "/sign-up/*", // * represents every children of sign-up
        element: <SignUppage />,
      },
      {
        element: <DashborardLayout />,
        children: [
          {
            path: "/dashboard",
            element: <Dashboardpage />,
          },
          {
            path: "/dashboard/chats/:id",
            element: <Chatpage />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={route} />
  </React.StrictMode>
);
