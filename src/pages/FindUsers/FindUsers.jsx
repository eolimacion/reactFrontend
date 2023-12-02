import { useEffect, useState } from "react"
import { getUserByName } from "../../services/user.service"
import "./FindUsers.css"
import { Link } from "react-router-dom"

export const FindUsers = () => {
  const [findNameValue, setFindNameValue] = useState()
  const [res, setRes] = useState()

  const handleSubmit = async (e) => {
    let resUserByName = await getUserByName(findNameValue)
    setRes(resUserByName)
    e.target.value = ""
  }

  useEffect(() => {
    if (res?.status == 200) {
      console.log(res)
    }
  }, [res])

  return (
    <div id="userFinderPage">
      <div id = "userFinderContainer">
        <input  id = "userFinderInput" placeholder = "enter a user's name" type="text" onChange={(e) => {setFindNameValue(e.target.value)}}/>
        <button type="submit" id = "findUsersButton" onClick={(e) => handleSubmit(e)}>Find</button>
      </div>
      <div>
        {res && res?.data?.map((user) => {
          return (
          <Link to = {`/users/${user._id}`}>
          <section className="findUserMapResult" key = {user._id}>
            <img src={user.image} alt={user.name} className="userFinderImage"/>
            <h2 className="userFinderName">{user.name}</h2>
          </section>
          </Link>
          )
        })}
      </div>
    </div>
  )
}
