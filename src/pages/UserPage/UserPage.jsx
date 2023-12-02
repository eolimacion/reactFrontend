import { useEffect, useState } from "react"
import { getUserById } from "../../services/user.service"
import { useParams } from "react-router-dom"
import { Loading } from "../../components"
import "./UserPage.css"

export const UserPage = () => {
  const [res, setRes] = useState(null)
  const [ok, setOk] = useState(false)

  const {id} = useParams()

  useEffect(() => {
    const fetchUser = async () => {
      setRes(await getUserById(id))
      setOk(true)
    }
    fetchUser()
  }, [])
  return (
    <>
      {!ok && <Loading/>}
      {ok && (
        <div id = "userPagePage">
          <section id = "userPageTopContainer">
            <img src={res.data.image} alt={res.data.name} id="userPageImage"/>
            <div id = "userPageMainInfoNav">
              <div>
                <h1 id="userPageName">{res.data.name}</h1>
                <p id="userPageInterest">Is here for <span>{res.data.interestedIn}</span></p>
              </div>
            </div>
          </section>
          <section id = "userPageInfo">
            <h2>hola</h2>
          </section>
        </div>
      )}
    </>
  )
}
