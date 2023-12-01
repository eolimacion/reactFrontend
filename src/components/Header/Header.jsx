import { NavLink, Outlet } from "react-router-dom";
import "./Header.css";
import { useAuth } from "../../context/authContext";

import { useState } from "react";
import { NavSports } from "../NavSports/NavSports";
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
               <span class="material-symbols-outlined account">
account_circle
</span>
              </NavLink>
            )}
            {user !== null ? (
              <>
              <div className="logoutDiv">
              <span onClick={() => logout()} className="material-symbols-outlined logout">logout</span>
            Logout
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
