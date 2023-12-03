import { NavLink } from "react-router-dom";
import "./NavSportsPages.css";

export const NavSportsPages = ({ sport }) => {
  switch (sport) {
    case "powerlifting":
      return (
        <div className="navProfile">
          <div className="imageNavDiv">
            <div className='singleImageNavContainer'>
            <NavLink to="/powerlifting/lifters">

                <div className='imageMotoDiv'>
              <img
                src="https://res.cloudinary.com/daxddugwt/image/upload/v1701627415/IMG_4680_iov6xi.png"
                alt="foto moto portada"
                className="imageMotoNav imageNavMotoGP"
              ></img>
              </div>


            </NavLink>
            </div>
            <div className='singleImageNavContainer'>
            <NavLink to="/powerlifting/lifters">
            <div className='imageCircuitsDiv'>
              <img
                src="https://res.cloudinary.com/daxddugwt/image/upload/v1701627782/Untitled_Artwork_25_r8jsb1.png"
                alt="foto circuito portada"
                className="imageMotoNav imageNavCircuits"
              ></img>
              </div>

            </NavLink>
            </div>
            </div>
          </div>
      )
    case "motogp":
      return (
        <div className="navProfile">
          <div className="imageNavDiv">
            <div className='singleImageNavContainer'>
            <NavLink to="/motogp/riders">

                <div className='imageMotoDiv'>
              <img
                src="https://res.cloudinary.com/daxddugwt/image/upload/v1701621943/IMG_4673_qfzwse.png"
                alt="foto moto portada"
                className="imageMotoNav imageNavMotoGP"
              ></img>
              </div>


            </NavLink>
            </div>
            <div className='singleImageNavContainer'>
            <NavLink to="/motogp/circuits">
            <div className='imageCircuitsDiv'>
              <img
                src="https://res.cloudinary.com/daxddugwt/image/upload/v1701621943/IMG_4672_mrswyx.png"
                alt="foto circuito portada"
                className="imageMotoNav imageNavCircuits"
              ></img>
              </div>

            </NavLink>
            </div>
            </div>
          </div>
      );
    case "fifa":
      return (

        <div className="navProfile">
        <div className="imageNavDiv">
          <div className='singleImageNavContainer'>
          <NavLink to="/fifa/players">

              <div className='imageMotoDiv'>
            <img
              src="https://res.cloudinary.com/daxddugwt/image/upload/v1701627294/IMG_4678_a21o7e.png"
              alt="foto cristiano ronaldo"
              className="imageMotoNav imageNavMotoGP"
            ></img>
            </div>


          </NavLink>
          </div>
          <div className='singleImageNavContainer'>
          <NavLink to="/fifa/teams">
          <div className='imageCircuitsDiv'>
            <img
              src="https://res.cloudinary.com/daxddugwt/image/upload/v1701627388/IMG_4681_rorkt2.png"
              alt="foto equipos fifa"
              className="imageMotoNav imageNavCircuits"
            ></img>
            </div>

          </NavLink>
          </div>
          </div>
        </div>
    );
    //     <div className="navProfile">
    //       <div className="imageContainer">
    //         <h1 className="dashboardTitle">Cristiano Ronaldo o lo demás</h1>
    //         <NavLink to="/fifa/players">
    //           <img
    //             src="https://res.cloudinary.com/djfkchzyq/image/upload/v1701286749/tadlpzubaksnp1dawhww.png"
    //             alt="escudos equipos"
    //             className="imageNav der"
    //           ></img>
    //         </NavLink>

    //         <NavLink to="/fifa/teams">
    //           <img
    //             src="https://res.cloudinary.com/djfkchzyq/image/upload/v1701286674/zmewuo8qk5wqlfauopwh.png"
    //             alt="Ronaldo guapo"
    //             className="imageNav izq"
    //           ></img>
    //         </NavLink>
    //       </div>
    //     </div>
    //   );

    default:
      break;
  }
};
