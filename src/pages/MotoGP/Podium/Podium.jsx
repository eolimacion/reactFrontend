import React from 'react'
import { createCircuit } from '../../../services/circuit.service'
import { UploadFile } from '../../../components'
import { useForm } from 'react-hook-form'
import { Link, Navigate } from 'react-router-dom'
import { useAuth } from '../../../context/authContext'
import { useEffect, useState } from "react";
import { useErrorCreate } from '../../../hooks/useErrorCreate'
import {  SelectRiders } from '../../../components/SelectRiders/SelectRiders'
import { createPodium } from '../../../services/podium.service'



export const Podium = () => {
//llamar a la funcion createCircuit

  const { register, handleSubmit } = useForm();
  const [res, setRes] = useState({});
  const [send, setSend] = useState(false);
  const [okRegister, setRegisterOk] = useState(false);

  const formSubmit = async (formData) => { 
   
     
    

      setSend(true);
      setRes(await createPodium(formData));
      setSend(false);
      
    
  };

  useEffect(() => {
    console.log(res)
  }, [res]);

  return (
  
        <form className="form" onSubmit={handleSubmit(formSubmit)}>
          
         
          
<SelectRiders
registerForm={register("firstPlace")}
position="Primero"
 
 
 />
<SelectRiders
registerForm={register("secondPlace")}
position="Segundo"/>
<SelectRiders
registerForm={register("thirdPlace")}
position="Tercero"/>
 <div className="circuitInfo formGroup">
            <label htmlFor="name" className="customPlaceholder">
              Name
            </label>
            <input 
            className="inputForm" 
            type="text" 
            id="name" 
            name="name" 
            autoComplete="false" 
            {...register("name", {required: true})}/> 
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
     
  )
}
