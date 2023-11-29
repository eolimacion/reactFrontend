import { NavLink } from "react-router-dom"


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
    
                    <NavLink to='/motogp/riders'>
                    <div className='titleNavProfile titleNav'>Riders</div>
                    </NavLink>
            
                    <NavLink to='/motogp/circuits'>
                    <div className='titleNavProfile titleNav'>Circuits</div>
                    </NavLink>
            
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
