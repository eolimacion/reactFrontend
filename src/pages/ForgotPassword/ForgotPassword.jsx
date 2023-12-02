import { useEffect, useState } from 'react';
import './ForgotPassword.css'
import { useForm } from "react-hook-form";
import { Navigate } from "react-router-dom";
import { forgotPasswordNoAuth } from '../../services/user.service';
import { useForgotPasswordError } from '../../hooks/useForgotPasswordError';
import Button from '@mui/material/Button';

import SendIcon from '@mui/icons-material/Send';


export const ForgotPassword = () => {
  const {handleSubmit, register} = useForm();
  const [res, setRes] = useState({});
  const [send, setSend] = useState(false);
  const [forgotOk, setForgotOk] = useState(false);

  const formSubmit = async (formData) => {
    setSend(true);
    setRes(await forgotPasswordNoAuth(formData));
    setSend(false);
  }

  useEffect(() => {
    useForgotPasswordError(res, setRes, setForgotOk); // parametros en orden y con el mismo nombre
  }, [res]);

  if (forgotOk) {
    return <Navigate to="/login" />;
  }

  return (
    <>
    <div className='allForm '>
    
      
     
    <div className="formMain">

        <form  className="form"onSubmit={handleSubmit(formSubmit)}>
        <div className='formTitle
    '>
       <h1 className="titleFormH1" id="titleForgot">FORGOT PASSWORD?</h1>
       <p>Don't worry! We will send you a new one to your email</p>
    </div>

          <div className="inputPlaceHolderForm">
             <label htmlFor="customInput" className="customPlaceholder">
              Email
            </label>
            <input
              className="inputForm"
              type="text"
              id="email"
              name="email"
              autoComplete="false"
              {...register("email", { required: true })}
            />
           
          </div>

          <Button size="large" style= {{backgroundColor: 'var(--color-boton-motogp)', margin: '1.5rem'}}  type="submit"
               variant="contained" endIcon={<SendIcon />}>
SEND
</Button>


          <p className="bottomText">
            <small>Please set a new password as soon as you log into your account.</small>
          </p>
        </form>
      </div>
      </div>
     
    </>
  )
}
