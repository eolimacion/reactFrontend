import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import "./NavSports.css";

export const NavSports = () => {
  const { user } = useAuth();

  return (
    <>

      <div className="nav-links">
        <NavLink to="/">
          <img
            alt="home logo"
            className="homeLogo"
            src="https://res.cloudinary.com/daxddugwt/image/upload/v1701438523/png-transparent-computer-icons-home-house-home-angle-building-rectangle-thumbnail-removebg-preview_mfluhs.png"
          />
        </NavLink>
        <NavLink to="/fifa">
          <img
            alt="fifa Logo"
            className="motogpLogo logoNav"
            src="https://res.cloudinary.com/daxddugwt/image/upload/v1701430556/af10795cab0afa9fee94b52d4837db73-removebg-preview_vihpjk.png"
          />
        </NavLink>
        <NavLink to="/motogp">
          <img
            alt="motogpLogo"
            className="motogpLogo logoNav"
            src="https://res.cloudinary.com/daxddugwt/image/upload/v1701429094/Moto_Gp_logo.svg_ajiwve.png"
          />
        </NavLink>
        <NavLink to="/powerlifting">
          <img
            alt="powerliftingLogo"
            className="powerliftingLogo"
            src="https://res.cloudinary.com/daxddugwt/image/upload/v1701429167/dda462081fc0dc518ff1ccd3a1d4600e-removebg-preview_bysd1c.png"
          />
        </NavLink>
        {user !== null && <div className="especiales"></div>}
      </div>
    </>
  );
};
