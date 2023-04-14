import { css } from '@emotion/react'
import { Button } from '@mui/material'
import React from 'react'
import Navbar from '../components/molecules/Navbar'

function ValidateBoletos() {
  return (
    <div className='validate-boletos-container' >
        <Navbar />
        <div
            css={css`
                padding:2rem 4rem;
            `}
        >
            <h1> Informacion de Boletos </h1>
            <div className='info-element' >  <strong>Sala :</strong > 2  </div>
            <div className='info-element' >  <strong>Pelicula :</strong > Avatar 2: el camino del agua  </div>
            <div className='info-element' >  <strong>Boletos :</strong > 3  </div>
            <div className='info-element' >
                <strong>Asientos :</strong > 
                <ul className='asientos-list' >
                    <li> 8-d </li>
                    <li> 7-d </li>
                    <li> 6-d </li>
                </ul>
             </div>

            <div>
                <Button size='large' variant="contained">  Procesar Boletos </Button>
            </div>

        </div>
    </div>
  )
}

export default ValidateBoletos