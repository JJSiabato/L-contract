import React from 'react'
import { ButtonCont, ButtonSm, Formulario, Titles } from '../assets/elements'
import { Form, FormR } from '../components/Form'

const Generator = () => {
  return (
    <div id='content'>
    <Titles><h1>Ingrese información</h1></Titles>
      <Formulario action="">
        <Form/>
        <FormR/>
        <ButtonCont><ButtonSm>Generar contrato</ButtonSm></ButtonCont> 
      </Formulario>
    </div>
  )
}

export default Generator