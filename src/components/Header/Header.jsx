import { NavLink, Outlet } from "react-router-dom";
import "./Header.css";
import { useAuth } from "../../context/authContext";
import { useState } from "react";
import { NavSports } from "../NavSports/NavSports";
import { DarkMode } from "../DarkMode/DarkMode";
import LogoutIcon from '@mui/icons-material/Logout';

export const Header = () => {
  const [mostrarBarra,setMostrarbarra]=useState(false)
  const handleMostrarBarra=()=>{
    setMostrarbarra(!mostrarBarra)
  }
  const { user, logout } = useAuth();
  return (
    <>
    { (!mostrarBarra && user == null)&&
    <div className="mensaje-registro">
    <div className="mensajeyboton"> 
    <div>
      
    </div>
     
      </div>
      {/* <NavLink to="/register" onClick={handleMostrarBarra}>Register here  </NavLink>
      <button className='cierre'  onClick={handleMostrarBarra}>
              <span className="material-symbols-outlined">cancel</span>
            </button>
    <p>"Join and enjoy exclusive offers."</p> */}
    </div>
    }
   
      <header className="main-header">
      <div className="nav-links">
          <NavSports/>
        </div>
          <div id="iniciarayuda">
            {user == null && (
              <NavLink to="/login" className="logate">
               <span className="material-symbols-outlined account">
account_circle
</span>
              </NavLink>
            )}
            {user !== null ? (
              <>
              <DarkMode/>
              <div className="logoutDiv">
             <LogoutIcon sx={{ fontSize: 30 }} color="var(--color-h)" onClick={() => logout()}/>
              </div>
             
                <NavLink className="profileCircle" to ="/profile/user">
                  <img
                    //cambia a la imagen del user
                    className="profileCircle"
                    src={user.image}
                    alt={user.user}
                  />
                
                </NavLink>
              </>
            ) : null}
          </div>


      </header>
    </>
  );
};
