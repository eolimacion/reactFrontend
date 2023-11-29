import React from 'react'
import { createCircuit } from '../../../services/circuit.service'
import { UploadFile } from '../../../components'
import { useForm } from 'react-hook-form'
import { Link, Navigate } from 'react-router-dom'
import { useAuth } from '../../../context/authContext'
import { useEffect, useState } from "react";
import { useErrorCreate } from '../../../hooks/useErrorCreate'

export const Circuits = () => {
//llamar a la funcion createCircuit

  const { register, handleSubmit } = useForm();
  const [res, setRes] = useState({});
  const [send, setSend] = useState(false);
  const [okRegister, setRegisterOk] = useState(false);

  const formSubmit = async (formData) => { // guarda todos lo que manden por register
    const inputFile = document.getElementById("file-upload").files;

    if (inputFile.length != 0) {
      // si es diferente a cero quiere decir que tenemos una imagen
      const customFormData = {
        ...formData,
        image: inputFile[0],
      };

      setSend(true);
      setRes(await createCircuit(customFormData));
      setSend(false);
    } else {
      // en este caso no hay imagen y nos quedamos con lo que tenemos en el form data
      const customFormData = {
        ...formData,
      };

      setSend(true);
      setRes(await createCircuit(customFormData));
      setSend(false);
      console.log("soy la reeeeeeeeeees", res)
    }
  };

  useEffect(() => {
    useErrorCreate(res, setRegisterOk, setRes)
  }, [res]);
  //este useEffect nos da un console para ver que esta pasando.Lo dejo comentado para futuras pruebas

  return (
    <div className="allForm">
      <div className="formMain">
        <h1 className="formTitle">CREATE A CIRCUIT</h1>
        <form className="form" onSubmit={handleSubmit(formSubmit)}>
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

          <div className="circuitInfo formGroup">
            <label htmlFor="location" className="customPlaceholder">
              Location
            </label>
            <input 
            className="inputForm" 
            type="text" 
            id="location" 
            name="location" 
            autoComplete="false" 
            {...register("location", {required: true})}/> 
          </div>

          <div className="totalLengthInfo formGroup">
            <label htmlFor="totalLength" className="customPlaceholder">
              Total Length
            </label>
            <input 
            className="inputForm" 
            type="number" 
            id="totalLength" 
            name="totalLength" 
            autoComplete="false" 
            {...register("totalLength", {required: true})}/> 
          </div>

          <div className="capacityInfo formGroup">
            <label htmlFor="capacity" className="customPlaceholder">
              Capacity
            </label>
            <input 
            className="inputForm" 
            type="number" 
            id="capacity" 
            name="capacity" 
            autoComplete="false" 
            {...register("capacity", {required: true})}/> 
          </div>

          <div className="topSpeedInfo formGroup">
            <label htmlFor="topSpeed" className="customPlaceholder">
              Top Speed
            </label>
            <input 
            className="inputForm" 
            type="number" 
            id="topSpeed" 
            name="topSpeed" 
            autoComplete="false" 
            {...register("topSpeed", {required: true})}/> 
          </div>

          <UploadFile/>

          <div className="btnContainer">
            <button
              className="btn"
              type="submit"
              disabled={send}
              style={{ background: send ? "#49c1a388" : "#2f7a67" }}
            >
              CREATE CIRCUIT
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
