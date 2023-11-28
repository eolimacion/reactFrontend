import { createBrowserRouter } from "react-router-dom";
import {
  About,
  ChangePassword,
  Circuits,
  Dashboard,
  EditProfile,
  FIFA,
  FavGallery,
  ForgotPassword,
  Home,
  Lifters,
  Login,
  MotoGP,
  NotFound,
  Players,
  Powerlifting,
  Profile,
  Register,
  Riders,
  Teams,
  VerifyCode,
  Weight,
} from "../pages/index";
import App from "../App";
import { FavoritesNav } from "../components";

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
        path: "/motogp",
        element: <MotoGP />,
      },
      {
        path: "/fifa",
        element: <FIFA />,
      },
      {
        path: "/motogp/riders",
        element: <Riders />,
      },
      {
        path: "/motogp/circuits",
        element: <Circuits/>,
      },
      {
        path: "/fifa/players",
        element: <Players/>,
      },
      {
        path: "/fifa/teams",
        element: <Teams/>,
      },
      {
        path: "/powerlifting/lifters",
        element: <Lifters/>,
      },
      {
        path: "/powerlifting/weight",
        element: <Weight/>,
      },
      {
        path: "/powerlifting",
        element: <Powerlifting />,
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
            path: "/profile/favourites",
            element: <FavoritesNav/>,
          },
          {
            path: "/profile/favourites/:sport",
            element: <FavGallery />,
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

     