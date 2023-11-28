import { useForm } from "react-hook-form";
import "./Login.css";
import { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { loginUser } from "../../services/user.service";
import { useErrorLogin } from "../../hooks/useErrorLogin";
import { useAuth } from "../../context/authContext";

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
    if (res?.data?.user == false) {
      return <Navigate to="/verifyCode" />;
    } else {
      console.log(res.data.user)
      console.log(res?.data?.user?.interestedIn)
      switch (res?.data?.user?.interestedIn) {
        case "motogp":
          console.log("Vrumm vrumm");
          <Navigate to="/motogp" />;
          break;
        case "powerlifting":
          console.log("Me gusta la proteina");
          <Navigate to="/powerlifting" />;
          break;
        case "fifa":
          console.log("Soy un fifote");
          <Navigate to="/fifa" />
          break;
        default:
          console.log("Default");
          <Navigate to="/"/>
          break;
      }
    }
  }

  return (
    <>
      <div className="allForm">
      
        <form  className="formMain" onSubmit={handleSubmit(formSubmit)}>
          <h1 className="formTitle">Log In!</h1>
          <label className="placeHolder" htmlFor="email">Email</label>
          <input
            type="email"
            id="userEmail"
            name="userEmail"
            autoComplete="false"
            {...register("email", { required: true })}
          />
            <label className="placeHolder" htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            autoComplete="false"
            {...register("password", { required: true })}
          />
        
          <div className="btn">
            <button className="btn"
              type="submit"
              disabled={isSent}
              style={{
                background: isSent ? "color-boton" : "color-boton-des",
              }}
            >
              Login
            </button>
          </div>
          <p className="btn">
            <small>
              Have you forgotten the password?
              <Link to="/forgotPassword" className="anchorCustom">
                Change password
              </Link>
            </small>
          </p>
        </form>
        <div className="footerForm">
          <p className="parrafoLogin">
            Are you not registered? <Link to="/register">Register Here</Link>
          </p>
        </div>
      </div>
    </>
  );
};
