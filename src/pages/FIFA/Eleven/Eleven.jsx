import { useEffect, useState } from 'react'
import { useAuth } from '../../../context/authContext';
import { getById, getUsersEleven } from '../../../services/user.service';
import { useForm } from 'react-hook-form';
import { SelectPlayers } from '../../../components';
import { createEleven } from '../../../services/eleven.service';

export const Eleven = () => {
  //! ---- Destructuring ----
  const { register, handleSubmit } = useForm()
  const {user} = useAuth()

  //! ---- Estados ----
  const [res, setRes] = useState({});
  const [userData, setUserData] = useState({})
  const [send, setSend] = useState(false)


  const fetchData = async () => {
    setUserData(await getById(user._id));
  };
  useEffect(() => {
    fetchData();
  }, []);
  const getEleven = async () => {
    const resElevenByUsersId = await getUsersEleven(userData.yourteam[0])
  }

  //! 1. ---- Función que gestiona la asincronía
  const formSubmit = async (formData) => { // guarda todos lo que manden por register
    {
      const customFormData = {
        ...formData,
      };  
      console.log(formData)
       setSend(true);
       setRes(await createEleven(customFormData));
       setSend(false);
       console.log("soy la reeeeeeeeeees", res)
     }
   };

  return (
    <section id = "eleven-section">
      <img id = "field-eleven-img" src="https://res-console.cloudinary.com/dx2arqne6/media_explorer_thumbnails/14656228360dd741c5b395cded3d8186/detailed" alt="soccer field eleven" />
      <div id = "field-size"></div>

      <div className="elevenForm">
      <div className="formMain">
        <h1 className="formTitle">CREATE YOUR IDEAL 11</h1>
        <form className="form" onSubmit={handleSubmit(formSubmit)}>
          <div className="circuitInfo formGroup">
            <label htmlFor="name" className="customPlaceholder">
              Name
            </label>
            <input 
            className="inputForm" 
            type="text" 
            id="name" 
            name="name" 
            autoComplete="false" 
            {...register("name", {required: true})}/> 
          </div>

         

         
          <div className='contenedorPodium'>
          <SelectPlayers registerForm={register("goalkeeper")} position="Goalkeeper" />
          <SelectPlayers registerForm={register("centreback1")} position="Centre Back" />
          <SelectPlayers registerForm={register("centreback2")} position="Centre Back" />
          <SelectPlayers registerForm={register("rightback")} position="Right Back" />
          <SelectPlayers registerForm={register("leftback")} position="Left Back" />
          <SelectPlayers registerForm={register("midfielder1")} position="Midfielder" />
          <SelectPlayers registerForm={register("midfielder2")} position="Midfielder" />
          <SelectPlayers registerForm={register("midfielder3")} position="Midfielder" />
          <SelectPlayers registerForm={register("forward1")} position="Forward" />
          <SelectPlayers registerForm={register("forward2")} position="Forward" />
          <SelectPlayers registerForm={register("forward3")} position="Forward" />
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
    </div>

    </section>
  )
}
