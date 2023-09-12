// Inicio.jsx
import React from 'react'
import Aviao from '../../assets/aviao.svg'
import fundo from '../../assets/fundo.png'
import imagens from '../../assets/imagens.svg'
import nuven from '../../assets/nuven.svg'
import nuvenDark from '../../assets/nuven-dark.svg'
import './Inicio.css'
import Switch from '@mui/material/Switch';

const label = { inputProps: { 'aria-label': 'Switch demo' } }

export const Inicio = (props) => {

    const { theme, toggleTheme } = props; // obtém o theme e o toggleTheme das propriedades

    return (
        <div className="frame">
            <div className="overlap-group-wrapper">
                <div className="overlap-group">
                    <img className='nuven' src={theme === 'light' ? nuven : nuvenDark} alt="" />
                    <img className="fundo" alt="Fundo" src={fundo} />
                    <div className='centro'>
                        <p className="p">Agende já a sua viajem</p>
                        <div className='imagemdiv'>
                            <img className="imagens" src={imagens} alt="" />
                        </div>
                        <div className='toggle_btn'>
                            Alterar modo do tema
                            <Switch onClick={toggleTheme} {...label} />
                        </div>
                    </div>
                    <img className="aviao" alt="Aviao" src={Aviao} />
                </div>
            </div>
        </div>
    )
}

export default Inicio
