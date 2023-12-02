import './NavProfile.css'
import { NavLink } from "react-router-dom"

export const NavProfile = () => {
  return (
    <div className='navProfileProfile'>
        <NavLink to='/profile/user'>
        <div className='titleNavProfile titleNav'>Profile</div>
        </NavLink>

        <NavLink to='/profile/favourites'>
        <div className='titleNavProfile titleNav'>My favourites</div>
        </NavLink>

        <NavLink to='/profile/edit'>
        <div className='titleNavProfile titleNav'>Edit profile</div>
        </NavLink>

        <NavLink to='/profile/settings'>
        <div className='titleNavProfile titleNav'>Account settings</div>
        </NavLink>

    </div>
  )
}
