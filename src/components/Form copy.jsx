import React from 'react'
import {FormData, FormDataR} from './FormData'
import {Label, Input, InputGroup, Check} from '../assets/elements'


export const Form = () => {
  return (
      
            <div>
                {FormData.map((item, index)=>{
                    return(
                        <>
                            <Label htmlFor={item.name}>{item.label}</Label>
                            <InputGroup>
                            
                            <Input key={index} type={item.type} placeholder={item.placeholder} id={item.id}>
                            </Input>
                             <Check/>
                            </InputGroup>
                        </>
                    )
                })}
                
            </div>
        )
        }

        export const FormR = () => {
            return (
            <div>
                {FormDataR.map((item, index)=>{
                    return(
                        <>
                            <Label htmlFor={item.name}>{item.label}</Label>
                            <Input key={index} type={item.type} placeholder={item.placeholder} id={item.id}>
                            </Input>
                        </>
                    )
                })}
                
            </div>
    )
  }
  
