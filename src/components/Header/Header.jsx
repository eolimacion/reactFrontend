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
        <div className="search-bar">
          <NavLink to="/">
            <img src="" className="imagen-vecino"></img>
          </NavLink>
          <img src="" className="nombre-vecino"></img>
          <div id="iniciarayuda">
            {user == null && (
              <NavLink to="/login" className="logate">
                <span className="material-symbols-outlined">passkey</span>
                Log In
              </NavLink>
            )}
            {user !== null ? (
              <>
              <div>
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
                  Profile
                </NavLink>
              </>
            ) : null}
          </div>
        </div>
        <div className="nav-links">
          <NavSports/>
        </div>
      </header>
    </>
  );
};
