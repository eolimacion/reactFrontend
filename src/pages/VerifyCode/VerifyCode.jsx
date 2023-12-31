import "./VerifyCode.css";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";






// import { useAutoLogin } from "../../hooks/useAutoLogin";
import { useResendCodeError } from "../../hooks/useResendCodeError";
import { useAuth } from "../../context/authContext";
import { Navigate, useNavigate } from "react-router";
import { useVerifyCodeError } from "../../hooks/useVerifyCodeError";
import { resendConfirmationCode, verifyConfirmationCode } from "../../services/user.service";
import { useAutoLogin } from "../../hooks/useAutoLogin";
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

export const VerifyCode = () => {
  const navigate = useNavigate();
  const { allUser, login, setUser } = useAuth();
  const { register, handleSubmit } = useForm();
  const [res, setRes] = useState({});
  const [resResend, setResResend] = useState({});
  const [send, setSend] = useState(false);
  const [okCheck, setOkCheck] = useState(false);
  const [okDeleteUser, setOkDeleteUser] = useState(false);
  const [userNotFound, setUserNotFound] = useState(false);

  const formSubmit = async (formData) => {
    const userLocal = localStorage.getItem("user");

    if (userLocal == null) {
      
      const custFormData = {
     
        confirmationCode: parseInt(formData.confirmationCode),
        email: allUser.data.user.email,
      };

      setSend(true);
      setRes(await verifyConfirmationCode(custFormData));
      setSend(false);
    } else {
    
      const parseUser = JSON.parse(userLocal);
      const customFormData = {
        email: parseUser.email,
        confirmationCode: parseInt(formData.confirmationCode),
      };
      setSend(true);
      setRes(await verifyConfirmationCode(customFormData));
      setSend(false);
    }
  };

  const handleReSend = async () => {
    const userLocal = localStorage.getItem("user");
    if (userLocal != null) {
      const parseUser = JSON.parse(userLocal);
      const customFormData = {
        email: parseUser.email,
      };

      setSend(true);
      setResResend(await resendConfirmationCode(customFormData));
      setSend(false);
    } else {
      const customFormData = {
        email: allUser?.data?.user?.email,
      };

      setSend(true);
      setResResend(await resendConfirmationCode(customFormData));
      setSend(false);
    }
  };

  useEffect(() => {
    
    useVerifyCodeError(
      res,
      setRes,
      setOkCheck,
      setOkDeleteUser,
      login,
      setUserNotFound
    );
  }, [res]);

  useEffect(() => {
 
    useResendCodeError(resResend, setResResend, setUserNotFound);
  }, [resResend]); 



  if (okCheck) {
   if (!localStorage.getItem("user")) {
     useAutoLogin(allUser);
    } else {
      return <Navigate to="/" />;
  }
}

if(okDeleteUser) {
  return <Navigate to="/register"/>
}


if(userNotFound) {
return <Navigate to="/login"/>
}


  return (
    <>
      <div className="allForm">
        <div className="formMain">
        <div className="formTitle">
        <h1 className="titleFormH1">Verify your code</h1>
        <p>Write the code sent to your email</p>
        </div>
        <form className="form" onSubmit={handleSubmit(formSubmit)}>
          <div className="inputPlaceHolderForm">
          <label htmlFor="custom-input" className="customPlaceholder">
              Registration code
            </label>
            <input
              className="inputForm"
              type="text"
              id="name"
              name="name"
              autoComplete="false"
              {...register("confirmationCode", { required: false })}
            />
           
          </div>
<div className="botonesResend">


<Button size="large" style= {{backgroundColor: 'var(--color-boton-motogp)'}}  type="submit"
              disabled={send} variant="contained" >
 Verify Code
</Button>
            {/* <button 
              id="btnCheck"
              className={send ? "btn btnSent" : "btn btnNotsent"}
              type="submit"
              disabled={send}
              style={{ background: send ? "#49c1a388" : "#49c1a2" }}
            >
              Verify Code
            </button> */}
  
          <Button size="large" style= {{color: 'var(--color-boton-motogp)', backgroundColor: 'white', margin: '1rem'}}
              disabled={send} onClick={() => handleReSend()} variant="contained" endIcon={<SendIcon />}>
 Resend Code
</Button>
            {/* <button
              id="btnResend"
              className={send ? "btn btnSent" : "btn btnNotsent"}
              disabled={send}
              style={{ background: send ? "#49c1a388" : "#49c1a2" }}
              onClick={() => handleReSend()}
            >
              Resend Code
            </button> */}
         
</div>
          

          <p className="bottom-text">
            <small>
            If the code is not correct, your user will be deleted from the
              database and you will need to register again.{" "}
            </small>
          </p>
        </form>
      </div>
      </div>
    </>
  );

}