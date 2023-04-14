import { Box, css } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

import Navbar from '../components/molecules/Navbar'



function FeatureLink({to,children}) {
  return (
    <Link to={to || '/dashboard'}>
      <h3
        css={css`
          font-size:2rem;
          border: solid darkgray 2px;
          border-radius:0.5rem;
          width: 35rem;
          padding: 0.8rem;
          text-align:center;
        `}

      >
        {children}
      </h3>
    </Link>
  )
}


function Dashboard() {
  return (
    <div>
        <Navbar></Navbar>
        <div
          css={css`
            padding:2rem;
          `}
        >
          <div
            css={css`
              font-size:1.2rem;
            `}
          >
            Bienvino Jose Miguel, ¿ que desea hacer hoy ?
          </div>
          <nav>
            <FeatureLink>
              Codigo QR: Procesar Pedidos
            </FeatureLink>
            <FeatureLink>
              Codigo QR: Procesar Boletos
            </FeatureLink>
            <FeatureLink>
              Adminstrar Pedidos
            </FeatureLink>
            <FeatureLink>
              Administrar Salas
            </FeatureLink>
            <FeatureLink>
              Exportar Datos a PDF
            </FeatureLink>
          </nav>
        </div>
    </div>
  )
}

export default Dashboard