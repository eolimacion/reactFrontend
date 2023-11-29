import { NavLink } from "react-router-dom"
import"./NavSportsPages.css"

export const NavSportsPages = ({ sport }) => {

    switch (sport) {
        case "powerlifting":
            return(
                <div className='navProfile'>

                <NavLink to='/powerlifting/lifters'>
                <div className='titleNavProfile titleNav'>Lifters</div>
                </NavLink>
        
                <NavLink to='/powerlifting/weight'>
                <div className='titleNavProfile titleNav'>Weight Categories</div>
                </NavLink>
        
            </div>
            );
            case "motogp":
                return(
                    <div className='navProfile'>
    <div className="imageContainer">

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
        
                        <NavLink to='/fifa/players'>
                        <div className='titleNavProfile titleNav'>Players</div>
                        </NavLink>
                
                        <NavLink to='/fifa/teams'>
                        <div className='titleNavProfile titleNav'>Teams</div>
                        </NavLink>
                
                    </div>
                    );
            
            default:
                break;

    }





}
