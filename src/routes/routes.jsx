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
  Podium,
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
import { FavoritesNav, Finder } from "../components";
import { Protected } from "../components/ProtectedRoutes/Protected";
import { ProtectedCheckChildren } from "../components/ProtectedRoutes/ProtectedCheckChildren";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/finder",
        element: <Finder />,
      },
      {
        path: "/",
        element: <Home />,
      },
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
        </Protected>)
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
        path: "/podium",
        element: 
        (<Protected>
          <Podium />
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
      path: "/powerlifting",
      element: 
      (<Protected>
        <Powerlifting/>
      </Protected>)
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
            element: 
            (<Protected>
              <FavGallery/>
            </Protected>),
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

     