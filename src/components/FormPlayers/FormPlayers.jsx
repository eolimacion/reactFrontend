import React, { useEffect, useState } from 'react'
import { useErrorCreate } from '../../hooks/useErrorCreate';
import { useForm } from 'react-hook-form';
import { UploadFile } from '..';
import { createPlayerService } from '../../services/player.service';
import Button from '@mui/material/Button';


export const FormPlayers = () => {
  //! ---- Destructuring ----
  const { register, handleSubmit } = useForm();

  //! ---- Estados ----
  const [res, setRes] = useState({});
  const [send, setSend] = useState(false); 
  const [okCreatePlayer, setOkCreatePlayer] = useState(false);

  //! 1. ---- Función que gestiona la asincronía
  const formSubmit = async (createPlayer) => {
  const inputFile = document.getElementById("file-upload").files
  if (inputFile.length > 0) { 
    const customCreatePlayer = {
      ...createPlayer, 
      image: inputFile[0] 
    };

    setSend(true);
    setRes(await createPlayerService(customCreatePlayer))
    setSend(false) 
  } else {
    const customCreatePlayer = { 
      ...createPlayer
    }

    setSend(true);
    setRes(await createPlayerService(customCreatePlayer))
    setSend(false) 
  }
  }

  //! 2. ---- Función que gestiona los errores
  useEffect(() => {
    useErrorCreate(res, setOkCreatePlayer, setRes) //? le pasamos para que utilice como param estas variables/funciones/estados
  }, [res])

  return (
  <>
    <div className="allForm">
      <div className="formMain">
        <h1 className="formTitle">Create Player</h1>
        <form  className="form" onSubmit={handleSubmit(formSubmit)}>
          <div className="playerName formGroup">
            <label htmlFor="name" className="customPlaceholder">
              Name
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

          {/*//! FIX Esto tiene que ser un select de las posiciones  */}
          <div className="playerPosition formGroup">
            <label htmlFor="position" className="customPlaceholder">
              Position
            </label>
            <input
              className="inputForm"
              type="text"
              id="position"
              name="position"
              autoComplete="false"
              {...register("position", { required: true })}
            />
          </div>

          <div className="playerNumber formGroup">
          <label htmlFor="number" className="customPlaceholder">
              Number
            </label>
            <input
              className="inputForm"
              type="number"
              id="number"
              name="number"
              autoComplete="false"
              {...register("number", { required: true })}
            />
          </div>

          <div className="playerAge formGroup">
            <label htmlFor="age" className="customPlaceholder">
              Age
            </label>
            <input
              className="inputForm"
              type="number"
              id="age"
              name="age"
              autoComplete="false"
              {...register("age", { required: true })}
            />
          </div>

          <div className="playerMarketValue formGroup">
            <label htmlFor="marketvalue" className="customPlaceholder">
              Market Value in (M€)
            </label>
            <input
              className="inputForm"
              type="number"
              id="marketvalue"
              name="marketvalue"
              autoComplete="false"
              {...register("marketvalue", { required: true })}
            />
          </div>

          <div className="playerGoals formGroup">
            <label htmlFor="goals" className="customPlaceholder">
              Goals
            </label>
            <input
              className="inputForm"
              type="number"
              id="goals"
              name="goals"
              autoComplete="false"
              {...register("goals", { required: true })}
            />
          </div>

          <div className="playerAssists formGroup">
            <label htmlFor="assists" className="customPlaceholder">
              Assists
            </label>
            <input
              className="inputForm"
              type='number'
              id="assists"
              name="assists"
              autoComplete="false"
              {...register("assists", { required: true })}
            />
          </div>

          <div className="playerRating formGroup">
            <label htmlFor="rating" className="customPlaceholder">
              Rating
            </label>
            <input
              className="inputForm"
              type='number'
              id="rating"
              name="rating"
              autoComplete="false"
              {...register("rating", { required: true })}
            />
          </div>

          <div className="preferredfoot">
            <label htmlFor="preferredfoot" className="customPlaceholder">
              PreferredFoot
            </label>
              <input
                type="radio"
                name="preferredfoot"
                id="left"
                value="left"
                {...register("preferredfoot")}
              />
              <label htmlFor="left" className="labelRadio ">
                Left
              </label>
              <input
                type="radio"
                name="preferredfoot"
                id="right"
                value="right"
                {...register("preferredfoot")}
              />
              <label htmlFor="right" className="labelRadio ">
                Right
              </label>
            </div>

          {/* //! FIX hay que dar la opción de seleccionar de los equipos que existen */}
          {/* <div className="team_container form-group">
            <input
              className="input_user"
              id="team"
              name="team"
              autoComplete="false"
              {...register("team")}
            />
            <label htmlFor="custom-input" className="custom-placeholder">
              team
            </label>
          </div> */}

            <UploadFile />

          <div className="btnContainer">
          <Button size="large" style= {{backgroundColor: 'var(--color-boton-motogp)', margin: '1.5rem', padding: '0.5rem 2rem'}}  type="submit"
              disabled={send} variant="contained" >
 CREATE PLAYER
</Button>

          </div>
        </form>
      </div>
    </div>
  </>
  )
}
