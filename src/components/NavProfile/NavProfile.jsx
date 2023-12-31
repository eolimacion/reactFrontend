import './NavProfile.css'
import { NavLink, useNavigate } from "react-router-dom"
import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import EditIcon from '@mui/icons-material/Edit';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';

export const NavProfile = () => {
  const navigate = useNavigate()


   const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
<>


    <BottomNavigation sx={{ minWidth: 350 }} value={value} onChange={handleChange} showLabels style={{backgroundColor: 'var(--color-enhance)', borderRadius: '10px'}}>
    <BottomNavigationAction
    style={{color: 'var(--color-h)'}}
      label="Profile"
      value="recents"
      onClick={()=> navigate('/profile/user')}
      icon={<PersonIcon />}
    />
    <BottomNavigationAction
    style={{color: 'var(--color-h)'}}
      label="Favourites"
      value="favorites"
      onClick={()=> navigate('/profile/favourites')}
      icon={<FavoriteIcon />}
    />
    <BottomNavigationAction
    style={{color: 'var(--color-h)'}}
      label="Edit"
      value="nearby"
      onClick={()=> navigate('/profile/edit')}
      icon={<EditIcon />}
    />
    <BottomNavigationAction style={{color: 'var(--color-h)'}} label="Settings" value="folder" onClick={()=> navigate('/profile/settings')} icon={<SettingsIcon />} />
  </BottomNavigation>

    {/* <div className='navProfileProfile'>
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
        <div className='titleNavProfile titleNav'>Settings</div>
        </NavLink>

    </div> */}
    </>
  )
}
