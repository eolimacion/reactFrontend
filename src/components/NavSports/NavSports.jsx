import { NavLink } from "react-router-dom"
import { useAuth } from "../../context/authContext"

export const NavSports = () => {
    const { user } = useAuth()

  return (
    <div className="nav-links">
    <NavLink to="/">Home</NavLink>
    <NavLink to="/fifa">FIFA</NavLink>
    <NavLink to="/motogp">Moto GP</NavLink>
    <NavLink to="/powerlifting">Powerlifting</NavLink>
    {user !== null && (
      <div className="especiales">
    
      </div>
    )}
  </div>
  )
}
