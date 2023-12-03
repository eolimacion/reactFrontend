import { useEffect, useState } from "react"
import { useAuth } from "../../context/authContext"
import { filterPlayers, getAllPlayers, getNamePlayers, sortAscendingPlayers, sortDescendingPlayers } from "../../services/player.service"
import "./Finder.css"
import { useErrorFinder } from "../../hooks/useErrorFinder"
import { FinderChildrenNav } from "../index"
import { buscarAllTeam, buscarTeamAscendente, buscarTeamDescendente, buscarTeamName, fitrarTeam } from "../../services/team.service"
import { buscarAllRider, buscarRiderAscendente, buscarRiderDescendente, buscarRiderName, fitrarRider } from "../../services/rider.service"
import { buscarAllCircuit, buscarCircuitAscendente, buscarCircuitDescendente, buscarCircuitName, fitrarCircuit } from "../../services/circuit.service"
import { filterLifters, getAllLifters, getNameLifters, sortAscendingLifters, sortDescendingLifters } from "../../services/lifter.service"

import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';




export const Finder = ({ setShowGallery, setShowForm, setRes, res, page}) => {
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
      let resAll
      if (page == "players") {
        resAll = await getAllPlayers()
      } else if (page == "teams") {
        resAll = await buscarAllTeam()
      } else if (page == "riders")  {
        resAll = await buscarAllRider()
      } else if (page == "circuits") {
        resAll = await buscarAllCircuit()
      } else if (page == "powerlifters") {
        resAll = await getAllLifters()
      }

      setRes(resAll)
      setController("getall")
      setSend(false)
    }

    //! ------- CASO 2: Buscador por nombre contiene algo =====> GET BY NAME
    if (findNameValue != "") {
      console.log("entro al condicional GET BY NAME")
      console.log(findNameValue)
      setSend(true)
      let resByName
      if (page == "players") {
        resByName = await getNamePlayers(findNameValue)
      } else if (page == "teams") {
        resByName = await buscarTeamName(findNameValue)
      } else if (page == "riders")  {
        resByName = await buscarRiderName(findNameValue)
      } else if (page == "circuits") {
        resByName = await buscarCircuitName(findNameValue)
      } else if (page == "powerlifters") {
        resByName = await getNameLifters(findNameValue)
      }
      setRes(resByName)
      setController("getbyname")
      setSend(false)
    }

    //! ------- CASO 3: El estado de filter tiene los 3 valores: filtro, min, max ==> FILTER
    if (filterValue !== "" && minValue !== 0 && maxValue !== 0) {
      setSend(true)
      let resFilter
      if (page == "players") {
        resFilter = await filterPlayers(filterValue, minValue, maxValue)
      } else if (page == "teams") {
        resFilter = await fitrarTeam(filterValue, minValue, maxValue)
      } else if (page == "riders")  {
        resFilter = await fitrarRider(filterValue, minValue, maxValue)
      } else if (page == "circuits") {
        resFilter = await fitrarCircuit(filterValue, minValue, maxValue)
      } else if (page == "powerlifters") {
        resFilter = await filterLifters(filterValue, minValue, maxValue)
      }

      
      setRes(resFilter)
      setController("filter")
      setSend(false)
    }

    //! ------- CASO 4: El estado de sort tiene los 2 valores: método y el stat que hacer sort ==> SORT
    if (sortValue !== "") {
      if (!isAscending) {
        setSend(true)
        let resDescending
        if (page == "players") {
          resDescending = await sortDescendingPlayers(sortValue)
        } else if (page == "teams") {
          resDescending = await buscarTeamDescendente(sortValue)
        } else if (page == "riders")  {
          resDescending = await buscarRiderDescendente(sortValue)
        } else if (page == "circuits") {
          resDescending = await buscarCircuitDescendente(sortValue)
        } else if (page == "powerlifters") {
          resDescending = await sortDescendingLifters(sortValue)
        }



        
        setRes(resDescending);
        setController("sortdescending")
        setSend(false)
      } else if (isAscending) {
        setSend(true)
        let resAscending
        if (page == "players") {
          resAscending = await sortAscendingPlayers(sortValue)
        } else if (page == "teams") {
          resAscending = await buscarTeamAscendente(sortValue)
        } else if (page == "riders")  {
          resAscending = await buscarRiderAscendente(sortValue)
        } else if (page == "circuits") {
          resAscending = await buscarCircuitAscendente(sortValue)
        }  else if (page == "powerlifters") {
          resAscending = await sortAscendingLifters(sortValue)
        }


        setRes(resAscending);
        setController("sortascending")
        setSend(false)
      }
    }
    // setCurrentPage(1)
    setFindNameValue("")
    setFilterValue("")
    setSortValue("")
    setMinValue(0)
    setMaxValue(0)
    setIsAscending(false)
    setShowGallery(true)
    setShowForm(false)    
  }

  useEffect(() => {
    const printStartingGallery = async () => {
      let resAll
      if (page == "players") {
        resAll = await getAllPlayers()
      } else if (page == "teams") {
        resAll = await buscarAllTeam()
      } else if (page == "riders")  {
        resAll = await buscarAllRider()
      } else if (page == "circuits") {
        resAll = await buscarAllCircuit()
      } else if (page == "powerlifters") {
        resAll = await getAllLifters()
      }
      setRes(resAll)
      setController("getall")
    }
    printStartingGallery()
  }, [])

  //! 2. ---- Función que gestiona los errores
  useEffect(() => {
    useErrorFinder(res, setOkFindPlayer, setRes)
    console.log(`you will print: ${controller} => ${res}`)
  }, [res])

  return (
    <section id = "finder">
      <div id = "float-right-finder">
        {/* <button id = "filter-players" onClick={() => {setMainNav("filter")}}>FILTER</button>
        <button id = "sort-players" onClick={() => {setMainNav("sort")}}>SORT</button> */}
      <Button size="large" style= {{backgroundColor: 'var(--color-boton-search)', padding: '0.4rem 2rem', color: 'white', fontWeight: '600'}} 
              variant="contained" onClick={() => {setMainNav("filter")}}>FILTER</Button>
               <Button size="large" style= {{backgroundColor: 'var(--color-boton-search)', padding: '0.4rem 2rem', color: 'white', fontWeight: '600'}} 
              variant="contained" onClick={() => {setMainNav("sort")}}>SORT</Button>
        {/* <button id = "filter-players" onClick={() => {setMainNav("filter")}}>FILTER</button>
        <button id = "sort-players" onClick={() => {setMainNav("sort")}}>SORT</button> */}
        <FinderChildrenNav action={mainNav} setFilterValue={setFilterValue} setMinValue={setMinValue} minValue={minValue} setMaxValue={setMaxValue} maxValue={maxValue} setSortValue={setSortValue} sortValue = {sortValue} setIsAscending = {setIsAscending} page = {page}/>
        {/* <button type="submit" id = "find-button" onClick={handleSubmit}>Find</button> */}

        {/* <Button   size="large" style= {{color: 'var(--color-boton-search)', fontWeight: '600', width: '20px'}}  onClick={handleSubmit} endIcon={<SearchIcon size="large"  style={{width: '50px'}}/>}>
</Button> */}
<Button  style= {{color: 'var(--color-boton-search)', width: '60px'}}  onClick={handleSubmit} >
<SearchIcon size="large"  style={{width: '50px'}}/>
</Button>
        {/* <button type="submit" id = "find-button" onClick={handleSubmit}>Find</button> */}
      </div>
      <div id = "left-finder">
        {/* <input  id = "find-name" placeholder = "enter the player's name" type="text" onChange={(e) => {setFindNameValue(e.target.value)}}/> */}

      <Box
      sx={{

        width: '50vw',
        maxWidth: '100%',
      }}
    >
      <TextField size="small" fullWidth label="Search" value ={findNameValue} style= {{backgroundColor: 'white', borderRadius: '5px'}} type="text" onChange={(e) => {setFindNameValue(e.target.value)}}/>
    </Box>
        {/* <input  id = "find-name" value ={findNameValue} placeholder = "enter the player's name" type="text" onChange={(e) => {setFindNameValue(e.target.value)}}/> */}
      </div>
    </section>
  )
}
