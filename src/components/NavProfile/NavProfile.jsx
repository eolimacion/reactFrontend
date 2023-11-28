import './NavProfile.css'
import { Link } from "react-router-dom"

export const NavProfile = () => {
  return (
    <div className='navProfile'>
        <Link to='/profile/user'>
        <div className='titleNavProfile titleNav'>Profile</div>
        </Link>

        <Link to='/profile/favourites'>
        <div className='titleNavProfile titleNav'>My favourites</div>
        </Link>

        <Link to='/profile/edit'>
        <div className='titleNavProfile titleNav'>Edit profile</div>
        </Link>

        <Link to='/profile/settings'>
        <div className='titleNavProfile titleNav'>Account settings</div>
        </Link>

    </div>
  )
}
