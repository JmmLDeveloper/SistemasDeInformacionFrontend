import React from 'react'
import { css } from '@emotion/react'
import {Typography,Button} from '@mui/material';

import { ShoppingCartOutlined,Logout } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

function Pedido() {
  return (
    <div
      css={css`
        display:grid;
        padding:0.8rem; 
        grid-template-columns:auto 1fr auto;
        background-color: #1D2334;
        border: solid 2.5px #395CEA;
        border-radius: 1rem;
        width:100%;

        .icon {
          font-size:3rem;
          margin-right:1.5rem;
        }

      `}
    >
      <ShoppingCartOutlined className='icon' />
      <div> 
        <Typography css={css` color: #9EA0A9; font-size:1.2rem;`} > Pedidos </Typography>
        <Typography css={css` color: white; font-size:1.1rem; `} > Bs. 300,00 </Typography>
      </div>
      <Typography css={css` color: #4F5361;`} > SHAJSA8 </Typography>

      


    </div>
  )
}

function HomeCliente () {

  const navigate = useNavigate()

  return(          
    <div
      css={css`
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 0 2rem;
        background-color: #0E1321;
        height: calc(100vh - 1rem - 56px);
        overflow-y:scroll;
        margin-bottom: calc(1rem + 56px);
        
        .header {
          position:relative;
          display:flex;
          width:100%;
          justify-content:center;
          align-items:center;
          padding-top:0.5rem;
          border-bottom: white 1px solid;
          
          h4 {
            font-size: min(8vw,1.8rem);
            text-align:center;
          }
          svg {
            position:absolute;
            font-size:1.8rem;
            color:#DEBF4E;
            left:0;
            transform: scale(1,1) scale(-1,1);
            font-size:1.8rem;
          }
        }
      `}
    >

      <div className='header'>

        <Logout onClick={()=> navigate('/login/cliente') }  />
        <Typography variant="h4" >
          CINES UNIDOS
        </Typography>
      </div>

      <div
        css={css`
          color:white;
          width: 100%;
          margin-top:1rem;
        `}
      >
        <div >
          <Typography   variant="h5" component="div">
            Ultimos recibos
          </Typography>
        </div>
        <div >
          <Typography variant="subtitle1" sx={{color:'#7BD7B8',marginTop:'2%',marginLeft:'10%'}} component="div">
            Febrero, 2023
          </Typography>
        </div>
      </div>
      <div
        css={css`
          display:grid;
          grid-template-columns: 1fr;
          color:white;
          align-self:stretch;
          background-color: #1D2334;
          border: solid 2.5px #395CEA;
          border-radius: 1rem;
          align-items:center;
          padding:1rem 0.8rem;
          margin: 1rem 0rem;
          p {
            line-height:1.3rem;

          }

          .divisor-line {
            border-bottom: solid 1px #395CEA;
          }

          .info-row {
            display:flex;
            flex-direction:row;
            justify-content:space-between;
            .name {
              color:#9EA0A9;
            }
          }



        `}
      >     
            <div css={css` padding-bottom:0.1rem; margin-bottom:0.6rem; `}   className='grid-item divisor-line' >
              <Typography css={css` color:#9EA0A9; font-size:1.4rem; `}  >Boletos</Typography>
              <Typography css={css` color:#4F5361; font-size:1rem; `}  >San Cristóbal</Typography>
            </div>

            <div  css={css`margin-bottom:0.6rem; `}  className='grid-item info-row ' >
              <Typography className='name'>No. Factura</Typography>
              <Typography >KFF5TZS</Typography>
            </div>

            <div css={css`margin-bottom:0.6rem; `} className='grid-item info-row' >
              <Typography className='name'>Fecha</Typography>
              <Typography >1 febrero, 2023</Typography>
            </div>

            <div css={css`padding-bottom:0.6rem; `} className='grid-item info-row divisor-line' >
              <Typography className='name'> Hora </Typography>
              <Typography >  01:41 pm </Typography>
            </div>

            <div css={css`padding:0.6rem 0; `} className='grid-item info-row divisor-line' >
              <Typography className='name'> Cantidad </Typography>
              <Typography > 3 </Typography>
            </div>

            <div css={css`padding:1rem 0 0 0; `} className='grid-item info-row ' >
              <Typography className='name'> Total a pagar </Typography>
              <Typography css={css`font-size:1.2rem`} > 100,0 Bs </Typography>
            </div>

      </div>

      <Pedido />

   </div>
  );
}

export default HomeCliente;
