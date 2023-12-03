import React from 'react'
import { useForm } from "react-hook-form"
import { UploadFile } from ".."
import { createRider } from "../../services/rider.service"
import { useAuth } from "../../context/authContext"
import { Link, Navigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { useErrorCreate } from "../../hooks/useErrorCreate"
import Button from '@mui/material/Button';

import SendIcon from '@mui/icons-material/Send';



export const FormRiders = () => {

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
      setRes(await createRider(customFormData));
      setSend(false);
    } else {
      // en este caso no hay imagen y nos quedamos con lo que tenemos en el form data
      const customFormData = {
        ...formData,
      };

      setSend(true);
      setRes(await createRider(customFormData));
      setSend(false);
    }
  };

  useEffect(() => {
    useErrorCreate(res, setRegisterOk, setRes)
  }, [res]);

  return (
    <div className="allForm">
      <div className="formMain">
        <h1 className="titleFormH1">CREATE A RIDER</h1>
        <form className="form" onSubmit={handleSubmit(formSubmit)}>
          <div className="riderInfo formGroup">
            <label htmlFor="name" className="customPlaceholder">
              Name
            </label>
            <input 
            className="inputForm" 
            type="text" 
            id="name" 
            name="name" 
            autoComplete="false"
            placeholder="Marc Márquez" 
            {...register("name", {required: true})}/> 
          </div>

          <div className="numberInfo formGroup">
            <label htmlFor="number" className="customPlaceholder">
              Number
            </label>
            <input 
            className="inputForm" 
            type="number" 
            id="number" 
            name="number" 
            autoComplete="false"
            placeholder="Nº" 
            {...register("number", {required: true})}/> 
          </div>

          <div className="nationalityInfo formGroup">
            <label htmlFor="nationality" className="customPlaceholder">
              Total Length
            </label>
            <input 
            className="inputForm" 
            type="text" 
            id="nationality" 
            name="nationality" 
            autoComplete="false"
            placeholder="Español" 
            {...register("nationality", {required: true})}/> 
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
            placeholder="32" 
            {...register("age", {required: true})}/> 
          </div>

          <div className="ratingInfo formGroup">
            <label htmlFor="rating" className="customPlaceholder">
              Rating
            </label>
            <input 
            className="inputForm" 
            type="number" 
            id="rating" 
            name="rating" 
            autoComplete="false"
            placeholder="91" 
            {...register("rating", {required: true})}/> 
          </div>

          <div className="rankingInfo formGroup">
            <label htmlFor="ranking" className="customPlaceholder">
              Ranking
            </label>
            <input 
            className="inputForm" 
            type="number" 
            id="ranking" 
            name="ranking" 
            autoComplete="false"
            placeholder="14" 
            {...register("ranking", {required: true})}/> 
          </div>

          <div className="pointsInfo formGroup">
            <label htmlFor="points" className="customPlaceholder">
              Points
            </label>
            <input 
            className="inputForm" 
            type="number" 
            id="points" 
            name="points" 
            autoComplete="false"
            placeholder="250" 
            {...register("points", {required: true})}/> 
          </div>

          <div className="victoriesSeasonInfo formGroup">
            <label htmlFor="victoriesSeason" className="customPlaceholder">
              Victories season
            </label>
            <input 
            className="inputForm" 
            type="number" 
            id="victoriesSeason" 
            name="victoriesSeason" 
            autoComplete="false"
            placeholder="7" 
            {...register("victoriesSeason", {required: false})}/> 
          </div>

          <div className="victoriesCarrerInfo formGroup">
            <label htmlFor="victoriesCarrer" className="customPlaceholder">
              Victories career
            </label>
            <input 
            className="inputForm" 
            type="number" 
            id="victoriesCarrer" 
            name="victoriesCarrer" 
            autoComplete="false"
            placeholder="154" 
            {...register("victoriesCarrer", {required: false})}/> 
          </div>

          <div className="championshipsCarrerInfo formGroup">
            <label htmlFor="championshipsCarrer" className="customPlaceholder">
              Championship career
            </label>
            <input 
            className="inputForm" 
            type="number" 
            id="championshipsCarrer" 
            name="championshipsCarrer" 
            autoComplete="false"
            placeholder="6" 
            {...register("championshipsCarrer", {required: false})}/> 
          </div>

          <div className="teamInfo formGroup">
            <label htmlFor="team" className="customPlaceholder">
              Team
            </label>
            <input 
            className="inputForm" 
            type="text" 
            id="team" 
            name="team" 
            autoComplete="false"
            placeholder="Gresini Racing" 
            {...register("team", {required: false})}/> 
          </div>

          <div className="polesSeasonInfo formGroup">
            <label htmlFor="polesSeason" className="customPlaceholder">
              Poles season
            </label>
            <input 
            className="inputForm" 
            type="number" 
            id="polesSeason" 
            name="polesSeason" 
            autoComplete="false"
            placeholder="4" 
            {...register("polesSeason", {required: true})}/> 
          </div>

          <UploadFile/>

          <div className="btnContainer">
          <Button size="large" style= {{backgroundColor: 'var(--color-boton-motogp)', margin: '1.5rem', padding: '0.5rem 2rem'}}  type="submit"
              disabled={send} variant="contained" >
 CREATE RIDER
</Button>

          </div>
        </form>
      </div>
    </div>
  )
};