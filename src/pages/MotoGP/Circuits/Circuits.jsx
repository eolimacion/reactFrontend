import React from 'react'
import { createCircuit } from '../../../services/circuit.service'
import { UploadFile } from '../../../components'


export const Circuits = () => {

//TODO------- cambiar donde pone register-------------
  return (
    <div className="allForm">
      <div className="formMain">
        <h1 className="formTitle">CREATE A CIRCUIT</h1>
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

          <div className="circuitInfo formGroup">
            <label htmlFor="location" className="customPlaceholder">
              Location
            </label>
            <input 
            className="inputForm" 
            type="text" 
            id="location" 
            name="location" 
            autoComplete="false" 
            {...register("location", {required: true})}/> 
          </div>

          <div className="totalLengthInfo formGroup">
            <label htmlFor="totalLength" className="customPlaceholder">
              Total Length
            </label>
            <input 
            className="inputForm" 
            type="text" 
            id="totalLength" 
            name="totalLength" 
            autoComplete="false" 
            {...register("totalLength", {required: true})}/> 
          </div>

          <div className="capacityInfo formGroup">
            <label htmlFor="capacity" className="customPlaceholder">
              Capacity
            </label>
            <input 
            className="inputForm" 
            type="text" 
            id="capacity" 
            name="capacity" 
            autoComplete="false" 
            {...register("capacity", {required: true})}/> 
          </div>

          <div className="topSpeedInfo formGroup">
            <label htmlFor="topSpeed" className="customPlaceholder">
              Top Speed
            </label>
            <input 
            className="inputForm" 
            type="text" 
            id="topSpeed" 
            name="topSpeed" 
            autoComplete="false" 
            {...register("topSpeed", {required: true})}/> 
          </div>

          <UploadFile/>

          <div className="btnContainer">
            <button
              className="btn"
              type="submit"
              disabled={send}
              style={{ background: send ? "#49c1a388" : "#2f7a67" }}
            >
              CREATE CIRCUIT
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
