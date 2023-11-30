import React, { useEffect, useState } from "react";
import { createPodium } from "../../../services/podium.service";
import { useForm } from "react-hook-form";
import { SelectRiders } from "../../../components/SelectRiders/SelectRiders";
import { useErrorCreate } from "../../../hooks/useErrorCreate";
import { CardInTheGallery } from "../../../components";
import "./Podium.css";

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
      console.log(customFormData)

      setSend(true);
      setRes(await createPodium(customFormData));
      setSend(false);
      console.log("soy la reeeeeeeeeees", res);
    }
  };

  useEffect(() => {
    console.log(res);
    useErrorCreate(res, setRegisterOk, setRes);
  }, [res]);

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
              Name
            </label>
            <input
              className="inputForm inputFormP"
              type="text"
              id="name"
              name="name"
              autoComplete="false"
              {...register("name", { required: true })}
            />
          </div>

          <div className="contenedorPodium">
            <SelectRiders
              registerForm={register("firstPlace")}
              position="Primero"
            />
            <SelectRiders
              registerForm={register("secondPlace")}
              position="Segundo"
            />
            <SelectRiders
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
