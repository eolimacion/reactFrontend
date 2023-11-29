import { createBrowserRouter } from "react-router-dom";
import {
  About,
  AccountSettings,
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
  UserProfileData,
  VerifyCode,
  Weight,
} from "../pages/index";
import App from "../App";
import { FavoritesNav } from "../components";
import { Protected } from "../components/ProtectedRoutes/Protected";
import { ProtectedCheckChildren } from "../components/ProtectedRoutes/ProtectedCheckChildren";


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
        element: 
        (<ProtectedCheckChildren>
          <VerifyCode />
        </ProtectedCheckChildren>),
      },
      {
        path: "/forgotPassword",
        element: <ForgotPassword />,
      },
      {
        path: "/motogp",
        element: 
        (<Protected>
          <MotoGP />
        </Protected>),
      },
      {
        path: "/fifa",
        element: 
        (<Protected>
          <FIFA />
        </Protected>),
      },
      {
        path: "/motogp/riders",
        element: 
        (<Protected>
          <Riders />
        </Protected>),
      },
      {
        path: "/motogp/circuits",
        element: 
        (<Protected>
          <Circuits/>
        </Protected>),
      },
      {
        path: "/fifa/players",
        element: 
        (<Protected>
          <Players/>
        </Protected>),
      },
      {
        path: "/fifa/teams",
        element: 
        (<Protected>
          <Teams/>
        </Protected>),
      },
      {
        path: "/powerlifting/lifters",
        element: 
        (<Protected>
          <Lifters/>
        </Protected>),
      },
      {
        path: "/powerlifting/weight",
        element:
        (<Protected>
          <Weight/>
        </Protected>),
      },
      {
        path: "/powerlifting",
        element: 
        (<Protected>
          <Powerlifting />
        </Protected>),
      },
      {
        path: "/dashboard",
        element: 
        (<Protected>
          <Dashboard />
        </Protected>),
      },
      {
        path: "/profile",
        element: 
        (<Protected>
          <Profile />
        </Protected>),
        children: [
          {
            path: "/profile/user",
            element: 
            (<Protected>
              <UserProfileData />
            </Protected>),
          },
          {
            path: "/profile/favourites",
<<<<<<< HEAD
            element: 
            (<Protected>
              <FavoritesNav/>
            </Protected>),
            children: [
              {
                path: "/profile/favourites/:sport",
                element: 
                (<Protected>
                  <FavGallery />
                </Protected>),
              },

            ]
=======
            element: <FavoritesNav/>,
          },
          {
            path: "/profile/favourites/:sport",
            element: <FavGallery />,
>>>>>>> ef21eee2d4a367526d5796b3159970e11f60a154
          },
          {
            path: "/profile/edit",
            element: 
            (<Protected>
              <EditProfile />
            </Protected>),
          },
          {
            path: "/profile/settings",
            element: 
            (<Protected>
              <AccountSettings />
            </Protected>),
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

     