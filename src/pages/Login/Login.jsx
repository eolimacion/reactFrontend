import { useForm } from "react-hook-form";
import "./Login.css";
import { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { loginUser } from "../../services/user.service";
import { useErrorLogin } from "../../hooks/useErrorLogin";
import { useAuth } from "../../context/authContext";

export const Login = () => {
  const { user } = useAuth();
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
    if (data?.user?.check == false) {
      return <Navigate to="/verifyCode" />;
    } else {
      console.log(res.data.user)
      switch (data?.user?.interestedIn) {
        case "motogp":
          <Navigate to="/motogp" />;
          break;
        case "powerlifting":
          <Navigate to="/powerlifting" />;
          break;
        case "fifa":
          <Navigate to="/fifa" />;
          break;
        default:
          <Navigate to="/"/>
          break;
      }
    }
  }

  return (
    <>
      <div className="formContainer">
        <form onSubmit={handleSubmit(formSubmit)}>
          <input
            type="email"
            id="userEmail"
            name="userEmail"
            autoComplete="false"
            {...register("email", { required: true })}
          />
          <label htmlFor="email">Email</label>
          <input
            type="password"
            id="password"
            name="password"
            autoComplete="false"
            {...register("password", { required: true })}
          />
          <label htmlFor="password">Password</label>
          <div className="buttonContainer">
            <button
              type="submit"
              disabled={isSent}
              style={{
                background: isSent ? "color-boton" : "color-boton-des",
              }}
            >
              Login
            </button>
          </div>
          <p className="bottom-text">
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
