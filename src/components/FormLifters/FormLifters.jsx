import React from 'react'
import { useForm } from "react-hook-form"
import { useAuth } from "../../context/authContext"
import { Link, Navigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { useErrorCreate } from "../../hooks/useErrorCreate"
import { createLifterService } from '../../services/lifter.service'
import { UploadFile } from '../UploadFile/UploadFile'


export const FormLifters = () => {
  const { register, handleSubmit } = useForm();
  const [res, setRes] = useState({});
  const [send, setSend] = useState(false);
  const [okRegister, setRegisterOk] = useState(false);

  const formSubmit = async (formData) => { // guarda todos lo que manden por register
  
      // en este caso no hay imagen y nos quedamos con lo que tenemos en el form data
      const customFormData = {
        ...formData,
      };

      setSend(true);
      setRes(await createLifterService(customFormData));
      setSend(false);
    };

  useEffect(() => {
    useErrorCreate(res, setRegisterOk, setRes)
  }, [res]);

  return (
    <div className="allForm">
      <div className="formMain">
        <h1 className="formTitle">CREATE A LIFTER</h1>
        <form className="form" onSubmit={handleSubmit(formSubmit)}>
          <div className="lifterInfo formGroup">
            <label htmlFor="name" className="customPlaceholder">
              Name
            </label>
            <input 
            className="inputForm" 
            type="text" 
            id="name" 
            name="name" 
            autoComplete="false"
            placeholder="" 
            {...register("name", {required: true})}/> 
          </div>

          <div className="ageInfo formGroup">
            <label htmlFor="age" className="customPlaceholder">
              Age
            </label>
            <input 
            className="inputForm" 
            type="number" 
            id="age" 
            name="age" 
            autoComplete="false"
            placeholder="19" 
            {...register("age", {required: true})}/> 
          </div>

          <div className="genderInfo formGroup">
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
            </div>
           </div>

          <div className="birthInfo formGroup">
            <label htmlFor="birthYear" className="customPlaceholder">
              Birth Year
            </label>
            <input 
            className="inputForm" 
            type="number" 
            id="birthYear" 
            name="birthYear" 
            autoComplete="false"
            placeholder="1991" 
            {...register("birthYear", {required: true})}/> 
          </div>

          <div className="benchPressInfo formGroup">
            <label htmlFor="benchPress" className="customPlaceholder">
              Bench Press
            </label>
            <input 
            className="inputForm" 
            type="number" 
            id="benchPress" 
            name="benchPress" 
            autoComplete="false"
            placeholder="80" 
            {...register("benchPress", {required: true})}/> 
          </div>

          <div className="squatInfo formGroup">
            <label htmlFor="squat" className="customPlaceholder">
              Squat
            </label>
            <input 
            className="inputForm" 
            type="number" 
            id="squat" 
            name="squat" 
            autoComplete="false"
            placeholder="30" 
            {...register("squat", {required: true})}/> 
          </div>

          <div className="deadliftInfo formGroup">
            <label htmlFor="deadlift" className="customPlaceholder">
              Dead lift
            </label>
            <input 
            className="inputForm" 
            type="number" 
            id="deadlift" 
            name="deadlift" 
            autoComplete="false"
            placeholder="120" 
            {...register("deadlift", {required: false})}/> 
          </div>

          <div className="totalInfo formGroup">
            <label htmlFor="total" className="customPlaceholder">
              Total
            </label>
            <input 
            className="inputForm" 
            type="number" 
            id="total" 
            name="total" 
            autoComplete="false"
            placeholder="220" 
            {...register("total", {required: false})}/> 
          </div>

          <div className="GLPointsInfo formGroup">
            <label htmlFor="GLPoints" className="customPlaceholder">
              GL Points
            </label>
            <input 
            className="inputForm" 
            type="number" 
            id="GLPoints" 
            name="GLPoints" 
            autoComplete="false"
            placeholder="84.58" 
            {...register("GLPoints", {required: false})}/> 
          </div>
        <UploadFile/>
          <div className="btnContainer">
            <button
              className="btn"
              type="submit"
              disabled={send}
              style={{ background: send ? "#49c1a388" : "#2f7a67" }}
            >
              CREATE LIFTER
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
