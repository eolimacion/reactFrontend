import { NavLink } from "react-router-dom";
import "./NavSportsPages.css";

export const NavSportsPages = ({ sport }) => {
  switch (sport) {
    case "powerlifting":
      return (
        <div className="navProfile">
          <div className="imageContainer">
            <h1 className="dashboardTitle">
              Know about best Lifters or PL categories
            </h1>
            <NavLink to="/powerlifting/lifters">
              <img
                src="https://res.cloudinary.com/djfkchzyq/image/upload/v1701285556/jr6rqujwgigc0luavdb1.jpg"
                alt="pesas en las manos de un forzudo"
                className="imageNav der"
              />
            </NavLink>

            <NavLink to="/powerlifting/weight">
              <img
                src="https://res.cloudinary.com/djfkchzyq/image/upload/v1701285183/gwpmadtn8ryztmczqscx.jpg"
                alt="mujer levantando peso"
                className="imageNav izq"
              />
            </NavLink>
          </div>
        </div>
      );
    case "motogp":
      return (
        <div className="navProfile">
          {/* <div className="imageContainer"> */}
          <div className="imageNavDiv">
            {/* <h1 className="dashboardTitle">
              CHOOSE YOUR ROUTE, RIDERS OR CIRCUITS
            </h1> */}
            <div className='singleImageNavContainer'>
            <NavLink to="/motogp/riders">

                <div className='positionAbsolute'>
              <img
                src="https://res.cloudinary.com/daxddugwt/image/upload/v1701621943/IMG_4673_qfzwse.png"
                alt="foto moto portada"
                className="imageMotoNav imageNavMotoGP"
              ></img>
              </div>
                <div className='positionAbsolute displayNone'>
                    <img className='blackCoverImg' src='https://res.cloudinary.com/daxddugwt/image/upload/v1701623487/Untitled_Artwork_24_fylqvf.png' alt='cover image'/>
                  
                </div>

            </NavLink>
            </div>
            <div className='singleImageNavContainer'>
            <NavLink to="/motogp/circuits">
            <div className='positionAbsolute'>
              <img
                src="https://res.cloudinary.com/daxddugwt/image/upload/v1701621943/IMG_4672_mrswyx.png"
                alt="foto circuito portada"
                className="imageMotoNav imageNavCircuits"
              ></img>
              </div>
               <div className='positionAbsolute displayNone'>
                    <img className='blackCoverImg' src='https://res.cloudinary.com/daxddugwt/image/upload/v1701623487/Untitled_Artwork_24_fylqvf.png' alt='cover image'/>
                </div>
            </NavLink>
            </div>
            </div>
          </div>
        // </div>
      );
    case "fifa":
      return (
        <div className="navProfile">
          <div className="imageContainer">
            <h1 className="dashboardTitle">Cristiano Ronaldo o lo demás</h1>
            <NavLink to="/fifa/players">
              <img
                src="https://res.cloudinary.com/djfkchzyq/image/upload/v1701286749/tadlpzubaksnp1dawhww.png"
                alt="escudos equipos"
                className="imageNav der"
              ></img>
            </NavLink>

            <NavLink to="/fifa/teams">
              <img
                src="https://res.cloudinary.com/djfkchzyq/image/upload/v1701286674/zmewuo8qk5wqlfauopwh.png"
                alt="Ronaldo guapo"
                className="imageNav izq"
              ></img>
            </NavLink>
          </div>
        </div>
      );

    default:
      break;
  }
};
