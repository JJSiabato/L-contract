import React, { useEffect, useState } from 'react'
import {FormData, FormDataR} from './FormData'
import {Label, Input, InputGroup, Check} from '../assets/elements'

const Form = (createData, updateData) => {
    const [investment, setInvestment] = useState(0);
    const [rango, setRango] = useState(2.5);
    const [frecuency, setFrecuency] = useState(12);
    const [payTotal, setPayTotal] = useState(0);
    const [cuot, setCuot] = useState(0);
    const [dateForm, setDateForm] = useState({percentage:rango, payFrecuency:frecuency, annualProfit:payTotal, pay:cuot})
    const handleChange = (e)=>{
        setDateForm(
            {   
                ...dateForm,
                [e.target.name]:e.target.value
            }
        )
    }
    const handleSubmit = (e)=>{
        e.preventDefault();        
        createData.createData(dateForm);
    }

    useEffect(()=>{
        setPayTotal(investment*rango/100*12)
        setCuot(payTotal / frecuency)
    })

       
  return (
    <div>
        <form onChange={handleChange}>
            <table>
                <tr><h2>Datos del socio</h2></tr>
                <tr>
                    <td>
                        <label htmlFor="name1">Primer nombre</label>
                        <input type="text" placeholder='Ej. Nicolás' id='name1' name='name1'/>
                    </td>
                    <td>
                        <label htmlFor="name2">Segundo nombre</label>
                        <input type="text" placeholder='Ej. Antonio' id='name2'name='name2'/>
                    </td>
                    <td>
                        <label htmlFor="lastName1">Primer apellido</label>
                        <input type="text" placeholder='Ej. Siabato' name='lastName1' id='lastName1'/>
                    </td>
                    <td>
                        <label htmlFor="lastName2">Segudo apellido</label>
                        <input type="text" placeholder='Ej. Laverde' name='lastName2' id='lastName2'/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label htmlFor="documentType">Tipo de documento</label>
                        <select name="documentType" id="documentType" defaultValue="cc">
                            <option value="cc">Cedula</option>
                            <option value="passport">Pasaporte</option>
                            <option value="ce">C.extranjera</option>
                        </select>
                       
                    </td>
                    <td>
                        <label htmlFor="id">N. Documento</label>
                        <input type="number" placeholder='Ej. 12345678912' id='id' name='id'/>
                    </td>
                    <td>
                        <label htmlFor="expeditionCity">Lugar de expedición</label>
                        <input type="text" placeholder='Ej. Duitama' id='expeditionCity' name='expeditionCity'/>
                    </td>
                    <td>
                        <label htmlFor="dateBirth">Fecha de nacimiento</label>
                        <input type="date"  id='dateBirth' name='dateBirth'/>
                    </td>
                </tr>
                <tr>
                     <td>
                        <label htmlFor="phone">Telefóno</label>
                        <input type="number" placeholder='Ej. 3124567891' id='phone' name='phone'/>
                    </td>
                    <td>
                        <label htmlFor="residenceCity">Ciudad de residencia</label>
                        <input type="text" placeholder='Ej. Duitama' id='residenceCity' name='residenceCity'/>
                    </td>
                    <td>
                        <label htmlFor="adress">Direccion</label>
                        <input type="text" placeholder='Ej. Carrera 12 N 12b - 23' id='adress' name='adress'/>
                    </td>                    
                    <td>
                        <label htmlFor="location">Barrio</label>
                        <input type="text" placeholder='Ej. San José' id='location' name='location'/>
                    </td>
                </tr>
                <h2>Datos del contrato</h2>
                <tr>
                     <td>
                        <label htmlFor="investment">Inversión</label>
                        <input type="number" placeholder='Ej. 18000000' id='investment' name='investment' onChange={(e)=>{setInvestment(e.target.value)}}/>
                    </td>
                    <td>

                        <label htmlFor="percentage">Rentabilidad</label>
                        <input type="range" list='tickmarks' defaultValue={2.5} min={1} max={4} step={0.1} id='percentage' name='percentage' onChange={(e)=>{setRango(e.target.value)}}/><span>{(rango)}%</span>
                    </td>
                    <td>
                        <select name="payFrecuency" id="payFrecuency"  onChange={(e)=>{setFrecuency(e.target.value)}}>
                            <option value={12}>Mensual</option>
                            <option value={4}>Trimestral</option>
                            <option value={2}>Semestral</option>
                        </select>
                    </td>
                    <td>
                        <label htmlFor="gain">Utilidad anual</label>
                        <strong>$ {payTotal}</strong>
                    </td>                    
                    
                </tr>
                <tr>
                    <td><h1>Cuotas  {cuot}</h1></td>
                </tr>
            </table>

            <button type="submit" onClick={handleSubmit}>Visualizar contrato</button>
        </form>
    </div>
  )
}

export default Form

