import { type } from "@testing-library/user-event/dist/type";
import React from "react";

export const FormData = [
{
    name: 'nombre',
    label: 'Nombres',
    type: 'text',
    placeholder: 'Pepito',
    id:'nombre',
},
{
    name: 'cc',
    label: 'Cédula',
    type: 'number',
    placeholder: '123456789',
    id:'cc',
},
{
    name: 'direccion',
    label: 'Dirección',
    type: 'text',
    placeholder: 'Cra 12 n 34 56',
    id:'direccion',
},
{
    name: 'inicontra',
    label: 'Inicio de contrato',
    type: 'date',
    placeholder: '01/01/2022',
    id:'inicontra',
},
{
    name: 'valor',
    label: 'Valor de contrato',
    type: 'number',
    placeholder: '10000000',
    id:'valor',
},


]

export const FormDataR = [
   {
        name: 'apellido',
        label: 'Apellidos',
        type: 'text',
        placeholder: 'Peréz',
        id:'apellido',
    },
    {
        name: 'tel',
        label: 'Teléfono',
        type: 'tel',
        placeholder: '3121234567',
        id:'tel',
    },
    {
        name: 'ciudad',
        label: 'Ciudad',
        type: 'text',
        placeholder: 'Duitama',
        id:'ciudad',
    },
    {
        name: 'fincontra',
        label: 'Fin de contrato',
        type: 'date',
        placeholder: '01/01/2023',
        id:'fincontra',
    },
    {
        name: 'renta',
        label: 'Rentabilidad',
        type: 'number',
        placeholder: '2.5',
        id:'renta',
    },
   
   
    
    ]
    