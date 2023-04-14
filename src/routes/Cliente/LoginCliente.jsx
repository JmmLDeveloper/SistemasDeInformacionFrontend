import { css } from '@emotion/react'
import React, { useState } from 'react'
import Logo from '../../components/Logo'
import { Box , Button, InputBase, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

import Input from '../../components/atoms/Input';



const Root = styled('div')(({ theme }) => ({
  padding: theme.spacing(1),
  display:'flex',
  flexDirection: 'column',
  alignItems:'center',
  justifyContent:'center',
}))




function LoginCliente() {

    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/cliente/home');
    }

    return (
      <div
          css={css`
              display:flex;
              justify-content:center;
              align-items:flex-start;
              height:100vh;
              background-color:#0E1321;

              button {
                font-size:1.1rem;
              }

            }
          `}
      >
          <form
              css={css`

                  display:flex;
                  justify-content:flex-start;
                  flex-direction:column;
                  .text-field {
                    align-self:stretch;
                  }                
                  margin-top:5rem;
              `}
          >

          <Root>
              <Logo />

              <div
                css={css`
                  margin-top: 2rem;
                  align-self:stretch;

                `}
              >
                <Input name="Correo Electronico" />
                <Input type='password' name="Contraseña" />
              </div>

              <Button
                  css={css`
                    align-self:stretch; 
                  `}
                  variant="contained" onClick={handleClick}>
                  Iniciar Seccion
                </Button>
          </Root>
         
          </form> 
      </div>
  )
}

export default LoginCliente