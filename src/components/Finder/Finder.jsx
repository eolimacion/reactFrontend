import { useEffect, useState } from "react"
import { useAuth } from "../../context/authContext"
import { filterPlayers, getAllPlayers, getNamePlayers, sortAscendingPlayers, sortDescendingPlayers } from "../../services/player.service"
import "./Finder.css"
import { useErrorFinder } from "../../hooks/useErrorFinder"
import { FinderMainNav, FinderChildrenNav } from "../index"
export const Finder = ({ setShowGallery, setShowForm, setRes, res}) => {
  const {user} = useAuth()

  //! ---- Estados ----
  const [send, setSend] = useState(false);
  const [mainNav, setMainNav] = useState()
  const [okFindPlayer, setOkFindPlayer] = useState(false);
  const [controller, setController] = useState()

  const [findNameValue, setFindNameValue] = useState("")
  const [filterValue, setFilterValue] = useState("")
  const [minValue, setMinValue] = useState(0)
  const [maxValue, setMaxValue] = useState(0)

  const [sortValue, setSortValue] = useState("")
  const [isAscending, setIsAscending] = useState(false)

  //todo ----- función gestionadora controladores -------
  const handleSubmit = async () => {
    console.log("filter value", filterValue)
    console.log("min value", minValue)
    console.log("max value", maxValue)
    console.log("sort value", sortValue)
    console.log("metodo", isAscending)
    console.log("name value", findNameValue)
    //! ------- CASO 1: Todos los inputs vacíos =====> GET ALL PLAYERS
    if (findNameValue == "" && (filterValue == "" || minValue == 0 || maxValue == 0) && sortValue == "") {
      console.log("entro al condicional GET ALL")
      setSend(true)
      const resAllPlayers = await getAllPlayers()
      setRes(resAllPlayers)
      setController("getall")
      setSend(false)
    }

    //! ------- CASO 2: Buscador por nombre contiene algo =====> GET BY NAME
    if (findNameValue != "") {
      console.log("entro al condicional GET BY NAME")
      setSend(true)
      const resPlayerByName = await getNamePlayers(findNameValue)
      console.log(resPlayerByName)
      setRes(resPlayerByName)
      setController("getbyname")
      setSend(false)
    }

    //! ------- CASO 3: El estado de filter tiene los 3 valores: filtro, min, max ==> FILTER
    if (filterValue !== "" && minValue !== 0 && maxValue !== 0) {
      setSend(true)
      const resPlayerFilter = await filterPlayers(filterValue, minValue, maxValue)
      setRes(resPlayerFilter)
      setController("filter")
      setSend(false)
    }

    //! ------- CASO 4: El estado de sort tiene los 2 valores: método y el stat que hacer sort ==> SORT
    if (sortValue !== "") {
      if (!isAscending) {
        setSend(true)
        const resPlayerDescending = await sortDescendingPlayers(sortValue)
        setRes(resPlayerDescending);
        setController("sortdescending")
        setSend(false)
      } else if (isAscending) {
        setSend(true)
        const resPlayerAscending = await sortAscendingPlayers(sortValue)
        setRes(resPlayerAscending);
        setController("sortascending")
        setSend(false)
      }
    }
    setFindNameValue("")
    setFilterValue("")
    setSortValue("")
    setMinValue(0)
    setMaxValue(0)
    setIsAscending(false)
    setShowGallery(true)
    setShowForm(false)
  }
  //! 2. ---- Función que gestiona los errores
  useEffect(() => {
    useErrorFinder(res, setOkFindPlayer, setRes)
    console.log(`you will print: ${controller} => ${res}`)
  }, [res])

  return (
    <section id = "finder">
      <div id = "float-right-finder">
        <button id = "filter-players" onClick={() => {setMainNav("filter")}}>FILTER</button>
        <button id = "sort-players" onClick={() => {setMainNav("sort")}}>SORT</button>
        <FinderChildrenNav action={mainNav} setFilterValue={setFilterValue} setMinValue={setMinValue} setMaxValue={setMaxValue} setSortValue={setSortValue} sortValue = {sortValue} setIsAscending = {setIsAscending}/>
        <button type="submit" id = "find-button" onClick={handleSubmit}>Find</button>
      </div>
      <div id = "left-finder">
        <input  id = "find-name" placeholder = "enter the player's name" type="text" onChange={(e) => {setFindNameValue(e.target.value)}}/>
      </div>
    </section>
  )
}
