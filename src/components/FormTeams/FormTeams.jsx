import { createCircuit } from '../../services/circuit.service'
import { UploadFile } from '..'
import { useForm } from 'react-hook-form'
import { useEffect, useState } from "react";
import { useErrorCreate } from '../../hooks/useErrorCreate'
import Button from '@mui/material/Button';


export const FormTeams = () => {
  //! ---- Destructuring ----
  const { register, handleSubmit } = useForm();

  //! ---- Estados ----
  const [res, setRes] = useState({});
  const [send, setSend] = useState(false);
  const [okRegister, setRegisterOk] = useState(false);

  //! 1. ---- Función que gestiona la asincronía
  const formSubmit = async (formData) => { // guarda todos lo que manden por register
    const inputFile = document.getElementById("file-upload").files;

    if (inputFile.length != 0) {
      // si es diferente a cero quiere decir que tenemos una imPointsn
      const customFormData = {
        ...formData,
        imPoints: inputFile[0],
      };

      setSend(true);
      setRes(await createCircuit(customFormData));
      setSend(false);
    } else {
      // en este caso no hay imPointsn y nos quedamos con lo que tenemos en el form data
      const customFormData = {
        ...formData,
      };

      setSend(true);
      setRes(await createCircuit(customFormData));
      setSend(false);
      console.log("soy la reeeeeeeeeees", res)
    }
  };

  //! 2. ---- Función que gestiona los errores
  useEffect(() => {
    useErrorCreate(res, setRegisterOk, setRes)
  }, [res]);
  //este useEffect nos da un console para ver que esta pasando.Lo dejo comentado para futuras pruebas


    return (
  <>
    <div className="allForm">
      <div className="formMain">
        <h1 className="formTitle">Create Team</h1>
        <form  className="form" onSubmit={handleSubmit(formSubmit)}>
          <div className="teamName formGroup">
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

          {/*//! FIX Esto tiene que ser un select de las ligas  */}
          <div className="teamLeague formGroup">
            <label htmlFor="League" className="customPlaceholder">
              League
            </label>
            <input
              className="inputForm"
              type="text"
              id="league"
              name="league"
              autoComplete="false"
              {...register("league", { required: true })}
            />
          </div>

          <div className="teamRanking formGroup">
          <label htmlFor="ranking" className="customPlaceholder">
              Ranking
            </label>
            <input
              className="inputForm"
              type="number"
              id="ranking"
              name="ranking"
              autoComplete="false"
              {...register("ranking", { required: true })}
            />
          </div>

          <div className="teamPoints formGroup">
            <label htmlFor="points" className="customPlaceholder">
              Points
            </label>
            <input
              className="inputForm"
              type="number"
              id="points"
              name="points"
              autoComplete="false"
              {...register("points", { required: true })}
            />
          </div>

          <div className="teamOverallTrophies formGroup">
            <label htmlFor="overalltrophies" className="customPlaceholder">
              Overall Trophies
            </label>
            <input
              className="inputForm"
              type="number"
              id="overalltrophies"
              name="overalltrophies"
              autoComplete="false"
              {...register("overalltrophies", { required: true })}
            />
          </div>

          <div className="teamSeasonTrophies formGroup">
            <label htmlFor="seasontrophies" className="customPlaceholder">
              Season Trophies
            </label>
            <input
              className="inputForm"
              type="number"
              id="seasontrophies"
              name="seasontrophies"
              autoComplete="false"
              {...register("seasontrophies", { required: true })}
            />
          </div>

          <div className="teamNetWorth formGroup">
            <label htmlFor="networth" className="customPlaceholder">
              Net Worth
            </label>
            <input
              className="inputForm"
              type='number'
              id="networth"
              name="networth"
              autoComplete="false"
              {...register("networth", { required: true })}
            />
          </div>

          <div className="teamStadium formGroup">
            <label htmlFor="stadium" className="customPlaceholder">
              Stadium
            </label>
            <input
              className="inputForm"
              type='number'
              id="stadium"
              name="stadium"
              autoComplete="false"
              {...register("stadium", { required: true })}
            />
          </div>

            <UploadFile />

          <div className="btnContainer">
          <Button size="large" style= {{backgroundColor: 'var(--color-boton-motogp)', margin: '1.5rem', padding: '0.5rem 2rem'}}  type="submit"
              disabled={send} variant="contained" >
CREATE TEAM
</Button>

          </div>
        </form>
      </div>
    </div>
  </>
  )
}
