import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LoginPage } from "./components/LoginPage.jsx";
import store from "./redux/store.js";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RegisterPage } from "./components/RegisterPage.jsx";
import { Profile } from "./components/Profile.jsx";
import SendTweetMobile from "./components/altComponents/SendTweetMobile.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <App />
      </div>
    ),
  },
  {
    path: "/login",
    element: (
      <>
        <LoginPage />
      </>
    ),
  },{
    path: "/register",
    element: (
      <>
        <RegisterPage />
      </>
    ),
  },{
    path: "/profile",
    element: (
      <>
        <Profile/>
      </>
    ),
  },
  {
    path: "/sendtweetmobile",
    element: (
      <>
        <SendTweetMobile/>
      </>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
      <ToastContainer autoClose={3000} closeOnClick theme="dark"/>
    <RouterProvider router={router}></RouterProvider>
  </Provider>
);
