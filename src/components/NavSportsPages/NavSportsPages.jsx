import { NavLink } from "react-router-dom"
import"./NavSportsPages.css"

export const NavSportsPages = ({ sport }) => {

    switch (sport) {
        case "powerlifting":
            return(
                <div className='navProfile'>
                <div className="imageContainer">
                    <h1 className="dashboardTitle">
                        Know about best Lifters or PL categories
                    </h1>
                    <NavLink to='/powerlifting/lifters'>
                        <img
                            src="https://res.cloudinary.com/djfkchzyq/image/upload/v1701285556/jr6rqujwgigc0luavdb1.jpg"
                            alt="pesas en las manos de un forzudo"
                            className='imageNav der'
                        />
                    </NavLink>
    
                    <NavLink to='/powerlifting/weight'>
                        <img
                            src="https://res.cloudinary.com/djfkchzyq/image/upload/v1701285183/gwpmadtn8ryztmczqscx.jpg"
                            alt="mujer levantando peso"
                            className='imageNav izq'
                        />
                    </NavLink>
                </div>
            </div>
            );
            case "motogp":
                return(
                    <div className='navProfile'>
    <div className="imageContainer">
<h1 className="dashboardTitle">CHOOSE YOUR ROUTE, RIDERS OR CIRCUITS</h1>
                    <NavLink to='/motogp/riders'>
                    <img src="https://res.cloudinary.com/djfkchzyq/image/upload/v1701278876/mgvyrsagdezjv9x055x5.jpg" alt="foto moto portada" className='imageNav der'></img>
                    </NavLink>
            
                    <NavLink to='/motogp/circuits'>
                    <img src="https://res.cloudinary.com/djfkchzyq/image/upload/v1701278579/oj4g80kjntnmvjhu34ha.jpg" alt="foto circuito portada" className='imageNav izq'></img>
                    </NavLink>
                    </div>
                </div>
                );
                case "fifa":
                    return(
                        <div className='navProfile'>
                        <div className="imageContainer">
                    <h1 className="dashboardTitle">Cristiano Ronaldo o lo demás</h1>
                                        <NavLink to='/fifa/players'>
                                        <img src="https://res.cloudinary.com/djfkchzyq/image/upload/v1701286749/tadlpzubaksnp1dawhww.png" alt="escudos equipos" className='imageNav der'></img>
                                        </NavLink>
                                
                                        <NavLink to='/fifa/teams'>
                                        <img src="https://res.cloudinary.com/djfkchzyq/image/upload/v1701286674/zmewuo8qk5wqlfauopwh.png" alt="Ronaldo guapo" className='imageNav izq'></img>
                                        </NavLink>
                                        </div>
                                    </div>
                        
                    );
            
            default:
                break;

    }





}

