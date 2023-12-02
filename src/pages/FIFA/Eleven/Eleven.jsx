import { useEffect, useState } from "react";
import { useAuth } from "../../../context/authContext";
import { getById, getUsersEleven } from "../../../services/user.service";
import { useForm } from "react-hook-form";
import { SelectPlayers } from "../../../components";
import { createEleven } from "../../../services/eleven.service";
import"./Eleven.css"
import { useErrorRegister } from "../../../hooks/useErrorRegister";

export const Eleven = () => {
  //! ---- Destructuring ----
  const { register, handleSubmit } = useForm();
  const { user } = useAuth();

  //! ---- Estados ----
  const [res, setRes] = useState({});
  const [userData, setUserData] = useState({});
  const [send, setSend] = useState(false);
  const [registerOk,setRegisterOk] = useState(false);

  const fetchData = async () => {
    setUserData(await getById(user._id));
  };
  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
  
    useErrorRegister(res, setRegisterOk, setRes);
    
  }, [res]);
  

  //! 1. ---- Función que gestiona la asincronía
  const formSubmit = async (formData) => {
    // guarda todos lo que manden por register
    {
      const customFormData = {
        ...formData,
      };
      console.log(formData);
      setSend(true);
      setRes(await createEleven(customFormData));
      setSend(false);
      console.log("soy la reeeeeeeeeees", res);
    }
  };

  return (
    <>
     
     

 
        <div className="formMainEleven">
          <h1 className="formTitle">CREATE YOUR IDEAL 11</h1>
          <form className="form formEleven" onSubmit={handleSubmit(formSubmit)}>
            <div className="circuitInfo formGroup">
              <label htmlFor="name" className="customPlaceholderE">
              Give a name to your eleven
              </label>
              <input
                className=" inputForm inputFormE"
                type="text"
                id="name"
                name="name"
                autoComplete="false"
                {...register("name", { required: true })}
              />
            </div>

            <div className="contenedorEleven ">
              <div className="contenedorJugadorE goalkeeperE">
                
                <SelectPlayers
                  registerForm={register("goalkeeper")}
                  suPosicion="goalkeeper"
                  position="Goalkeeper"
                />
              </div>
              <div className="contenedorJugadorE centrebackE">
                {" "}
                <SelectPlayers
                  registerForm={register("centreback1")}
                  suPosicion="centre-back"
                  position="Centre Back"
                />
              </div>
              <div className="contenedorJugadorE centreback2E">
                {" "}
                <SelectPlayers
                  registerForm={register("centreback2")}
                  suPosicion="centre-back"
                  position="Centre Back"
                />
              </div>
              <div className="contenedorJugadorE rightbackE">
                {" "}
                <SelectPlayers
                  registerForm={register("rightback")}
                  suPosicion="right-back"
                  position="Right Back"
                />
              </div>
              <div className="contenedorJugadorE leftbackE">
                {" "}
                <SelectPlayers
                  registerForm={register("leftback")}
                  suPosicion="left-back"
                  position="Left Back"
                />
              </div>
              <div className="contenedorJugadorE midfielder1E">
                {" "}
                <SelectPlayers
                  registerForm={register("midfielder1")}
                  suPosicion="midfielder"
                  position="Midfielder"
                />
              </div>
              <div className="contenedorJugadorE midfielder2E">
                {" "}
                <SelectPlayers
                  registerForm={register("midfielder2")}
                  suPosicion="midfielder"
                  position="Midfielder"
                />
              </div>
              <div className="contenedorJugadorE midfielder3E">
                {" "}
                <SelectPlayers
                  registerForm={register("midfielder3")}
                  suPosicion="midfielder"
                  position="Midfielder"
                />
              </div>
              <div className="contenedorJugadorE forward1E">
                {" "}
                <SelectPlayers
                  registerForm={register("forward1")}
                  suPosicion="forward"
                  position="Forward"
                />
              </div>
              <div className="contenedorJugadorE forward2E">
                <SelectPlayers
                  registerForm={register("forward2")}
                  suPosicion="forward"
                  position="Forward"
                />
              </div>
              <div className="contenedorJugadorE forward3E">
                {" "}
                <SelectPlayers
                  registerForm={register("forward3")}
                  suPosicion="forward"
                  position="Forward"
                />
              </div>
            </div>

            <div className="btnContainer">
              <button
                className="btn"
                type="submit"
                disabled={send}
                style={{ background: send ? "#49c1a388" : "#2f7a67" }}
              >
                CREATE PODIUM
              </button>
            </div>
          </form>
        </div>
   
    </>
  );
};
