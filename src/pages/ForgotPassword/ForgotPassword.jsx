import { useEffect, useState } from 'react';
import './ForgotPassword.css'
import { useForm } from "react-hook-form";
import { Navigate } from "react-router-dom";
import { forgotPasswordNoAuth } from '../../services/user.service';
import { useForgotPasswordError } from '../../hooks/useForgotPasswordError';


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
    <div className='allForm'>
    
      
     
      

        <form  className="formMain"onSubmit={handleSubmit(formSubmit)}>
        <div className='formTitle
    '>
       <h1>Change your password</h1>
    </div>

          <div className="formGroup">
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

          <div className="btnContainer">
            <button
              className="btn"
              type="submit"
              disabled={send}
              style={{ background: send ? "#49c1a388" : "#49c1a2" }}
            >
              Change password
            </button>
          </div>

          <p className="bottomText">
            <small>Enter your email to send you the new password</small>
          </p>
        </form>
      </div>
     
    </>
  )
}
