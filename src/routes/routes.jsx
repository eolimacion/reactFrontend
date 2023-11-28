import { createBrowserRouter } from "react-router-dom";
import {
  About,
  ChangePassword,
  Dashboard,
  EditProfile,
  ForgotPassword,
  Home,
  Login,
  NotFound,
  Profile,
  Register,
  VerifyCode,
} from "../pages/index";
import App from "../App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/verifyCode",
        element: <VerifyCode />,
      },
      {
        path: "/forgotPassword",
        element: <ForgotPassword />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/profile",
        element: <Profile />,
        children: [
          {
            path: "/profile/edit",
            element: <EditProfile />,
          },
          {
            path: "/profile/changePassword",
            element: <ChangePassword />,
          },
        ],
      },

      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
