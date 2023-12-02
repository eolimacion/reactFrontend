import { useForm } from "react-hook-form";
import "./Login.css";
import { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { loginUser } from "../../services/user.service";
import { useErrorLogin } from "../../hooks/useErrorLogin";
import { useAuth } from "../../context/authContext";
import Button from '@mui/material/Button';

import SendIcon from '@mui/icons-material/Send';


export const Login = () => {
  const { register, handleSubmit } = useForm();
  const { login, setUser } = useAuth();
  const navigate = useNavigate();

  const [isSent, setIsSent] = useState(false); //isSent maneja los botones, el disable
  const [res, setRes] = useState({});
  const [successfulLogin, setSuccessfulLogin] = useState(false);

  const formSubmit = async (formData) => {
    setIsSent(true);
    setRes(await loginUser(formData));
    setIsSent(false);
  };

  useEffect(() => {
    console.log("res en el primer useEffect", res);
    useErrorLogin(res, setRes, login, setSuccessfulLogin);
  }, [res]);

  useEffect(() => {
    setUser(() => null);
    localStorage.removeItem("user");
  }, []);

  if (successfulLogin) {
    console.log("succesfullogin", res);
    if (res?.data?.user.check == false) {
      return <Navigate to="/verifyCode" />;
    } else {
      console.log(res.data.user);
      console.log(res?.data?.user?.interestedIn);
      switch (res?.data?.user?.interestedIn) {
        case "motogp":
          console.log("Vrumm vrumm");
          return <Navigate to="/motogp" />;
        case "powerlifting":
          console.log("Me gusta la proteina");
          return <Navigate to="/powerlifting" />;
        case "fifa":
          console.log("Soy un fifote");
          return <Navigate to="/fifa" />;
        default:
          console.log("Default");
          return <Navigate to="/" />;
      }
    }
  }

  return (
    <>
      <div className="allForm register">
      <div className="formMain">
      <div className="formTitle">
          <h1 className="titleFormH1">LOG IN</h1>
          </div>
          <form className="form" onSubmit={handleSubmit(formSubmit)}>
          <div className="inputPlaceHolderForm">
          <label className="placeHolder" htmlFor="email">
            Email
          </label>
          <input
            className="inputForm"
            type="email"
            id="userEmail"
            name="userEmail"
            autoComplete="false"
            {...register("email", { required: true })}
          />
          <label className="placeHolder" htmlFor="password">
            Password
          </label>
          <input
            className="inputForm"
            type="password"
            id="password"
            name="password"
            autoComplete="false"
            {...register("password", { required: true })}
          />

</div>

          <div className="btnContainer">
          <Button size="large" style= {{backgroundColor: 'var(--color-boton-motogp)', margin: '1.5rem'}}  type="submit"
               variant="contained" endIcon={<SendIcon />}>
 LOG IN
</Button>
          </div>
          <p className="loginParagraph changePassword">
            
              Have you forgotten the password?{" "}
              <Link to="/forgotPassword" className="anchorCustom">
                Change password
              </Link>
            
          </p>
        </form>
        <div className="footerForm">
          <p className="parrafoLogin">
            Are you not registered? <Link to="/register">Register Here</Link>
          </p>
        </div>
      </div>
      </div>
    </>
  );
};
