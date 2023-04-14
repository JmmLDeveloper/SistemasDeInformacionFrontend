import { css } from '@emotion/react'
import React from 'react'
import {  Button } from '@mui/material';
import { useNavigate } from 'react-router';

function Index() {

    const navigate = useNavigate();
    
    const handleCliente = () => {
        navigate('/login/cliente');
    }
    const handleTrabajador = () => {
        navigate('/login/trabajador')
    }

    return (
        <div 
          css={css`
          padding:20vw;
          display:flex;
          justify-content:center;
          align-items:center;
        `}  
      >
        
      <Button variant="contained" onClick={handleCliente}>Cliente</Button>
      <Button color="success"variant="contained" onClick={handleTrabajador}>Trabajador</Button>
    </div>
  )
}

export default Index