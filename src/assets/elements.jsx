import React from "react";
import styled from 'styled-components';
import {MdOutlineCheckCircleOutline} from 'react-icons/md'

const color = {
    border: "#0075ff",
    error: "#bb2929",
    success: "#1ed12d"
}
export const Formulario = styled.form`
    display: grid;
    width:80%;
    gap:15px;
    margin:10px 0 0 100px;
    grid-template-columns: 1fr 1fr;
        @media (max-width: 600px){
            grid-template-columns: 1fr;
            margin:0;
        }
`
export const InputGroup = styled.div`
        position:relative;
        z-index:9;

`
export const Input = styled.input`
    width:90%;
    margin: 0 0 15px 20px;
    background:#fff;
    font-size:16px;
    border-radius: 3px;
    padding: 0 40px 0 10px;
    line-height: 40px;
    height:35px;
    transition: 0.3s all ease;
    border: solid 3px transparent;
       @media (max-width: 600px){
        width: 70%;
    }
`
export const Label = styled.label`
    width:100%;
    font-size: 17px;
    margin:0 0 0 25px;
    min-height: 40px;
    padding:0;

`
export const Check = styled(MdOutlineCheckCircleOutline)`
    position: absolute;
    right: 0;
    bottom: 27px;
    z-index: 100;
    font-size: 16px;
    opacity: 0;
`
export const Titles = styled.h1`
    grid-column: span 2;
    font-size:15px;
    text-align:center;
`
export const ButtonCont = styled.div`
    margin-top: 15px;
    grid-column: span 2;
    display:flex;
    justify-content:center;
`
export const ButtonSm = styled.button`
    background: #F37257;
    height: 45px;
    line-height: 45px;
    width: 30%;
    color: #f5f5f5;
    border:none;
    cursor:pointer;
    border-radius: 4px;
    font-size:16px;
        &:hover{
            opacity:0.9;
        }
`