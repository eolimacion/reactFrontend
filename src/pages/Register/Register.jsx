import "./Register.css";

import { useForm } from "react-hook-form";
import { Link, Navigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import { useEffect, useState } from "react";
import { registerUser } from "../../services/user.service";
import { UploadFile } from "../../components";
import { useErrorRegister } from "../../hooks/useErrorRegister";


export const Register = () => {
  // allUser es la respuesta completa del 200 del service de registro
  const { allUser, setAllUser, bridgeData } = useAuth();
  const { register, handleSubmit } = useForm();
  const [res, setRes] = useState({});
  const [send, setSend] = useState(false);
  const [okRegister, setRegisterOk] = useState(false);

  const formSubmit = async (formData) => {
    const inputFile = document.getElementById("file-upload").files;

    if (inputFile.length != 0) {
      // si es diferente a cero quiere decir que tenemos una imagen
      const customFormData = {
        ...formData,
        image: inputFile[0],
      };

      setSend(true);
      setRes(await registerUser(customFormData));
      setSend(false);
    } else {
      // en este caso no hay imagen y nos quedamos con lo que tenemos en el form data
      const customFormData = {
        ...formData,
      };

      setSend(true);
      setRes(await registerUser(customFormData));
      setSend(false);
    }
  };
  useEffect(() => {
    useErrorRegister(res, setRegisterOk, setRes);
    //si es un 200 llama a la funcion puente
    if (res?.status == 200) bridgeData("ALLUSER");
  }, [res]);
  //este useEffect nos da un console para ver que esta pasando.Lo dejo comentado para futuras pruebas
  useEffect(() => {
    console.log("😍", allUser);
  }, [allUser]);

  if (okRegister) {
    //si todo esta ok navega a la pagina del codigo
    return <Navigate to="/verifyCode" />;
  }

  if (okRegister) {
    //si todo esta ok navega a la pagina del codigo
    return <Navigate to="/verifyCode" />;
  }
  return (
    <div className="allForm register">
      <div className="formMain">
        <div className="formTitle">
        <h1>Sign Up</h1>
        <p>Champion Within, Victories Begin</p>
        </div>
        <form className="form" onSubmit={handleSubmit(formSubmit)}>
          <div className="userInfo formGroup">
          <label htmlFor="name" className="customPlaceholder">
              Username
            </label>
            <input
              className="inputForm"
              type="text"
              id="name"
              name="name"
              autoComplete="false"
              {...register("name", { required: true })}
            />
           
          </div>
          <div className="emailInfo formGroup">
          <label htmlFor="email" className="customPlaceholder">
              E-mail
            </label>
            <input
              className="inputForm"
              type="email"
              id="email"
              name="email"
              autoComplete="false"
              {...register("email", { required: true })}
            />
            </div>
          <div className="passwordInfo formGroup">
          <label htmlFor="password" className="customPlaceholder">
              Password
            </label>
            <input
              className="inputForm"
              type="password"
              id="password"
              name="password"
              autoComplete="false"
              {...register("password", { required: true })}
            />
            
          </div>


           <p>Interest</p>
            <div className="formGroup">
            <div className="interest">
              <input
                type="radio"
                name="interest"
                id="futbol"
                value="fifa"
                {...register("interestedIn")}
              />
              <label htmlFor="futbol" className="labelRadio">
                FIFA
              </label>

              <input
                type="radio"
                name="interest"
                id="motogp"
                value="motogp"
                {...register("interestedIn")}
              />
              <label htmlFor="motogp" className="labelRadio ">
                Moto GP
              </label>
              <input
                type="radio"
                name="interest"
                id="powerlifting"
                value="powerlifting"
                {...register("interestedIn")}
              />
              <label htmlFor="powerlifting" className="labelRadio ">Powerlifting
              </label>
            </div>
            </div>
            <p>Gender</p>
           <div className="formGroup">
           <div className="gender">
           
              <input
                type="radio"
                name="gender"
                id="male"
                value="hombre"
                {...register("gender")}
              />
              <label htmlFor="male" className="labelRadio male">
                Male
              </label>

              <input
                type="radio"
                name="gender"
                id="female"
                value="mujer"
                {...register("gender")}
              />
              <label htmlFor="female" className="labelRadio female">
                Female
              </label>

              <input
                type="radio"
                name="gender"
                id="otros"
                value="otros"
                {...register("gender")}
              />
              <label htmlFor="otros" className="labelRadio otros">
                Otros
              </label>
            </div>
           </div>

           
          
          <UploadFile />
          <div className="btnContainer">
            <button
              className={send ? "btn btnSent" : "btn btnNotsent"}
              type="submit"
              disabled={send}
            >
              {send ? "Loading..." : "REGISTER"}
            </button>
            <div className="loginForm">
        <p className="loginParagraph">
          Already a member? <Link to="/login">Login Here</Link>
        </p>
      </div>
          </div>

          <p className="bottomText">
            <small>
              By clicking the Sign Up button, you agree to our{" "} <br />
              <Link to="/terms" className="anchorCustom">
                Terms & Conditions
              </Link>{" "}
              and{" "}
              <Link to="/privacy" className="anchorCustom">
                Privacy Policy
              </Link>
              .
            </small>
          </p>
        </form>
      </div>
    </div>
  );
};
