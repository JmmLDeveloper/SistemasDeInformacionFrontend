import React from 'react'
import {  Button,css,Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import {ReactComponent as Food2} from '../../assets/icons/Food2.svg';
import {ReactComponent as Ticket} from '../../assets/icons/Ticket3.svg';
import { Logout } from '@mui/icons-material';
import Scanner from '../../components/Scanner';

function HomeWorker() {
  const navigate=useNavigate();
  return (
    
    <div
      css={css`          
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;

          @media (min-width: 800px) {
            .phone {
              display:none;
            } 
          }


        

          .home-worker-topside {
            width:100%
          }

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

          .home-worker-main {
            margin:0 2rem;
          }

          .main-buttons {
              display: flex;
              flex-direction: column;
              align-items: stretch;
              align-self: stretch;
              margin: 2rem 10%;

              button {
                width: 100%;
                margin-bottom: 2.5rem;
                padding:1rem 3rem;
              }

          }

      `}
    >


      <div className='home-worker-topside'>
        <div className='home-worker-main phone'>
        <div className='header'>
          <Logout onClick={()=> navigate('/login/trabajador') } />
          <Typography variant="h4" >
            CINES UNIDOS
          </Typography>
        </div>
        </div>

        <div
          className='phone'
          css={css`
            background-color: #1D2334;
            display: flex;
            flex-direction: column;
            border: solid 1.5px #395CEA;
            border-radius: 0.5rem;
            align-items: center;
            align-self: stretch;
            margin: 1rem 3rem;
            color:white;
            margin-top:1.5rem;
            padding:2rem;


            h4 , h5 , span {
              margin-top:0.5rem;
            }



          `}
        >
            <Typography variant="h4" >¡Bienvenida!</Typography>
            <Typography variant="h5" >Dahyana Nimo</Typography>
            <Typography variant="outlined" >V-123.456.789</Typography>
        </div>
      </div>
      <div className='main-buttons'>
        <Button 
          startIcon={<Ticket />}
          variant="contained" 
          onClick={() => navigate("validate-boletos")}
        >
          <Typography variant="buttontext" >Procesar Boletos</Typography>
        </Button>
        <Button
          startIcon={<Food2 />}
          variant="contained"
          onClick={() => navigate("/dashboard/HomeWorker/Pedidos/scanner") }
        >
            <Typography variant="buttontext" >Procesar Pedidos</Typography>
        </Button>
      </div>
    </div>
  )
}

export default HomeWorker