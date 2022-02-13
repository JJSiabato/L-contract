import React from "react";
import {MdHome, MdOutlineEditNote, MdVerifiedUser, MdSettingsInputComposite } from 'react-icons/md'

export const SiderbarDate = [
    {
        title: 'Inicio',
        path: '/',
        icon: <MdHome/>,
        cName: 'nav-text'
    },
    {
        title: 'Generador',
        path: '/generator',
        icon: <MdOutlineEditNote/>,
        cName: 'nav-text'
    },
    {
        title: 'Ultimos',
        path: '/latest',
        icon: <MdVerifiedUser/>,
        cName: 'nav-text'
    },
    {
        title: 'Configuración',
        path: '/setting',
        icon: <MdSettingsInputComposite/>,
        cName: 'nav-text'
    }
];