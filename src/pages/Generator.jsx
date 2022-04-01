import React, { useState } from 'react'
import { ButtonCont, ButtonSm, Formulario, Titles } from '../assets/elements'
import Form from '../components/Form'

const Generator = () => {
const [dataToEdit, setDataToEdit] = useState(null )
const createData = ()=>{};
const updateData = ()=>{};
const deleteData = ()=>{};


  return (
    <div id='content'>
    <Titles><h1>Ingrese información</h1></Titles>
      
        <Form/>

    </div>
  )
}

export default Generator