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
      return <Navigate to="/dashboard" />;
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
        <div className="form">
        <h1 className="formTitle">Verify your code 👌</h1>
        <p>Write the code sent to your email</p>
        <form onSubmit={handleSubmit(formSubmit)}>
          <div className="formGroup">
            <input
              className="inputForm"
              type="text"
              id="name"
              name="name"
              autoComplete="false"
              {...register("confirmationCode", { required: false })}
            />
            <label htmlFor="custom-input" className="customPlaceholder">
              Registration code
            </label>
          </div>
<div className="botonesResend">
<div >
            <button 
              id="btnCheck"
              className={send ? "btn btnSent" : "btn btnNotsent"}
              type="submit"
              disabled={send}
              style={{ background: send ? "#49c1a388" : "#49c1a2" }}
            >
              Verify Code
            </button>
          </div>
          <div >
            <button
              id="btnResend"
              className={send ? "btn btnSent" : "btn btnNotsent"}
              disabled={send}
              style={{ background: send ? "#49c1a388" : "#49c1a2" }}
              onClick={() => handleReSend()}
            >
              Resend Code
            </button>
          </div>
</div>
          

          <p className="bottom-text">
            <small>
              If the code is not correct ❌, your user will be deleted from the
              database and you will need to register again.{" "}
            </small>
          </p>
        </form>
      </div>
      </div>
    </>
  );

}