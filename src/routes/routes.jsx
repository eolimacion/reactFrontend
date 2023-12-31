import { createBrowserRouter } from "react-router-dom";
import {
  About,
  AccountSettings,
  Circuits,
  Dashboard,
  EditProfile,
  Eleven,
  FIFA,
  FavGallery,
  FindUsers,
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
  UserPage,
  UserProfileData,
  VerifyCode,
  Weight,
} from "../pages/index";
import App from "../App";
import { CardFifaById, CardMotoById, CardPowerById, CardTeamById, FavoritesNav, Finder } from "../components";
import { Protected } from "../components/ProtectedRoutes/Protected";
import { ProtectedCheckChildren } from "../components/ProtectedRoutes/ProtectedCheckChildren";
import { CardCircuitById } from "../components/CardsById/CardCircuitById/CardCircuitById";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/users",
        element: <FindUsers />,
      },
      {
        path: "/users/:id",
        element: <UserPage />,
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
            path: "/motogp/riders/:id",
            element: 
            (<Protected>
              <CardMotoById />  
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
            path: "/motogp/circuits/:id",
            element: 
            (<Protected>
              <CardCircuitById/>
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
        path: "/eleven",
        element: 
        (<Protected>
          <Eleven/>
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
            path: "/fifa/players/:id",
            element: 
            (<Protected>
              <CardFifaById/>
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
            path: "/fifa/teams/:id",
            element: 
            (<Protected>
              <CardTeamById/>
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
          path: "/powerlifting/lifters/:id",
          element: 
          (<Protected>
            <CardPowerById/>
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
          path: "/powerlifting/weight/:id",
          element:
          (<Protected>
            <Weight/>
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

     