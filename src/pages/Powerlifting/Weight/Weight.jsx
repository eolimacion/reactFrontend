import { useEffect, useState } from 'react'
import { useForm } from "react-hook-form"
import { useErrorCreate } from '../../../hooks/useErrorCreate'
import { createweightCategory } from '../../../services/weightCategory.service'


export const Weight = () => {
  const { register, handleSubmit } = useForm();
  const [res, setRes] = useState({});
  const [send, setSend] = useState(false);
  const [okRegister, setRegisterOk] = useState(false);

  const formSubmit = async (formData) => { 
    // guarda todos lo que manden por register
      // en este caso no hay imagen y nos quedamos con lo que tenemos en el form data
      const customFormData = {
        ...formData,
      };
      console.log("soy custom form dataaaaa", customFormData)

      setSend(true);
      setRes(await createweightCategory(customFormData));
      setSend(false);
    };

  useEffect(() => {
    useErrorCreate(res, setRegisterOk, setRes)
    console.log(res)
  }, [res]);

  return (
    <div className="allForm">
      <div className="formMain">
        <h1 className="formTitle">CREATE A WEIGHT CATEGORY</h1>
        <form className="form" onSubmit={handleSubmit(formSubmit)}>
        <div className="weightCategoryInfo formGroup">
          <label htmlFor="weight">Weight</label>
          <select id="weight" {...register("weight")}>
          <option value="43">43</option>
            <option value="52">52</option>
            <option value="53">53</option>
            <option value="57">57</option>
            <option value="59">59</option>
            <option value="63">63</option>
            <option value="66">66</option>
            <option value="69">69</option>
            <option value="74">74</option>
            <option value="76">76</option>
            <option value="83">83</option>
            <option value="84">84</option>
            <option value="93">93</option>
            <option value="105">105</option>
            <option value="120">120</option>
            <option value="+120">+120</option>
          </select>
        </div>

          <div className="genderInfo formGroup">
           <div className="gender">
              <input
                type="radio"
                name="gender"
                id="male"
                value="hombre"
                {...register("gender")}
              />
              <label htmlFor="male" className="labelRadio male">
                Male
              </label>

              <input
                type="radio"
                name="gender"
                id="female"
                value="mujer"
                {...register("gender")}
              />
              <label htmlFor="female" className="labelRadio female">
                Female
              </label>
            </div>
           </div>

           <div className="ageInfo formGroup">
          <label htmlFor="age">Age</label>
          <select id="age" {...register("age")}>
            <option value="Subjunior">Subjunior</option>
            <option value="Junior">Junior</option>
            <option value="Open">Open</option>
            <option value="Master 1">Master 1</option>
            <option value="Master 2">Master 2</option>
            <option value="Master 3">Master 3</option>
            <option value="Master 4">Master 4</option>
          </select>
        </div>

          <div className="btnContainer">
            <button
              className="btn"
              type="submit"
              disabled={send}
              style={{ background: send ? "#49c1a388" : "#2f7a67" }}
            >
              CREATE LIFTER
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
