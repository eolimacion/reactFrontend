import React, { useEffect, useState } from "react";
import { createPodium } from "../../../services/podium.service";
import { useForm } from "react-hook-form";
import { SelectRiders } from "../../../components/SelectRiders/SelectRiders";
import { useErrorCreate } from "../../../hooks/useErrorCreate";
import { CardInTheGallery } from "../../../components";
import "./Podium.css";
import { Navigate } from "react-router-dom";

export const Podium = () => {
  const { register, handleSubmit } = useForm();
  const [res, setRes] = useState({});
  const [send, setSend] = useState(false);
  const [okRegister, setRegisterOk] = useState(false);
  const formSubmit = async (formData) => {
    // guarda todos lo que manden por register
    {
      const customFormData = {
        ...formData,
      };

      setSend(true);
      setRes(await createPodium(customFormData));
      setSend(false);
    }
  };

  useEffect(() => {
    useErrorCreate(res, setRegisterOk, setRes);
  }, [res]);
 
 
  if (okRegister) {
      //si todo esta ok navega a la pagina del codigo
      return <Navigate to="/motogp/riders" />;
    }

  return (
    <>


      <div className="formMain formMainP">
        <h1 className="formTitle  formTitleP">CREATE A PODIUM</h1>
        <form className="form formP" onSubmit={handleSubmit(formSubmit)}>
          <div className="formGroup formGroupP">
            <label
              htmlFor="name"
              
              className="customPlaceholder customPlaceholderP"
            >
             Your Podium Name
            </label>
            <input
              className="inputForm inputFormP"
              type="text"
              placeHolder="Alex's podium."
              id="name"
              name="name"
              autoComplete="false"
              {...register("name", { required: true })}
            />
          </div>

          <div className="contenedorPodiumP">
          <SelectRiders
            classEspecial="segundo"
              registerForm={register("secondPlace")}
              position="Segundo"
            />
            <SelectRiders
            classEspecial="primero"
              registerForm={register("firstPlace")}
              position="Primero"
            />
          
            <SelectRiders
            classEspecial="tercero"
              registerForm={register("thirdPlace")}
              position="Tercero"
            />
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
