import "./Register.css";

import { useForm } from "react-hook-form";
import { Link, Navigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import { useEffect, useState } from "react";
import { registerUser } from "../../services/user.service";
import { UploadFile } from "../../components";
import { useErrorRegister } from "../../hooks/useErrorRegister";


import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';


export const Register = () => {
  // allUser es la respuesta completa del 200 del service de registro
  const { setAllUser, bridgeData, setIsDeletedUser } = useAuth();
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
  setIsDeletedUser(()=> false);
}, [])


  if (okRegister) {
    //si todo esta ok navega a la pagina del codigo
    return <Navigate to="/verifyCode" />;
  }



  return (
    <div className="allForm register">
      <div className="formMain">
        <div className="formTitle">
        <h1 className="titleFormH1">SIGN UP</h1>
        <p>Champion Within, Victories Begin</p>
        </div>
        <form className="form" onSubmit={handleSubmit(formSubmit)}>
          <div className="inputPlaceHolderForm">

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

           <p className="customPlaceholder">Interest</p>
            <div className="formGroup">
            <div className="interest">
              <input
                type="radio"
                name="interest"
                id="futbol"
                value="fifa"
                {...register("interestedIn", {required: true})}
              />
              <label htmlFor="futbol" className="labelRadio">
                FIFA
              </label>

              <input
                type="radio"
                name="interest"
                id="motogp"
                value="motogp"
                {...register("interestedIn", {required: true})}
              />
              <label htmlFor="motogp" className="labelRadio ">
                Moto GP
              </label>
              <input
                type="radio"
                name="interest"
                id="powerlifting"
                value="powerlifting"
                {...register("interestedIn", {required: true})}
              />
              <label htmlFor="powerlifting" className="labelRadio ">Powerlifting
              </label>
            </div>
            </div>
            <p className="customPlaceholder">Gender</p>
    <div className="radioMUI">
            <FormControl>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        style= {{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}
      >
        <FormControlLabel value="mujer" control={<Radio />} label="Female" {...register("gender", {required: true})}/>
        <FormControlLabel value="hombre" control={<Radio />} label="Male" {...register("gender", {required: true})} />
        <FormControlLabel value="otros" control={<Radio />} label="Other" {...register("gender", {required: true})} />
      </RadioGroup>
    </FormControl>

    </div>

          
          <UploadFile />
          <div className="btnContainer">
          <Button size="large" style= {{backgroundColor: 'var(--color-boton-motogp)', margin: '1.5rem'}}  type="submit"
              disabled={send} variant="contained" endIcon={<SendIcon />}>
 {send ? "Loading..." : "SING UP"}
</Button>

            <div className="loginForm">
        <p className="loginParagraph">
          Already a member? <Link to="/login">Login Here</Link>
        </p>
      </div>
          </div>

          <p className="bottomText">
            <small className="terms">
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
