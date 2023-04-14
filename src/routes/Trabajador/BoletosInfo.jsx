
import React from 'react'
import {  Button,css,Typography } from '@mui/material';
import '../../styles/styles.css';
import { useNavigate } from 'react-router-dom';
import Layout from '../../components/molecules/Layout';
import '../../styles/Trabajador/boletos-info.css'
import {ReactComponent as Ticket} from '../../assets/icons/Ticket3.svg';

import Done from '@mui/icons-material/Done'

function BoletosInfoDesktop() {

  const navigate = useNavigate();

  return (
    <div
      css={css`
        padding:1rem 3rem;
        display:flex;
        flex-direction:column;

        @media (max-width: 800px) {
            display:none;
        }
        h1 {
          font-size:2rem;
          margin-bottom:0.5rem;
        }

        
        .asientos-list  {
          display:inline-flex;

        }

        .info-list li{
          margin: 0 0 0.6rem 1.5rem ;
        }

        .asientos-list li {
            margin:0;
            background-color:#395CEA;
            padding: 0.2rem 1rem;
            border-radius:5rem;
            margin-left:0.6rem;
        }

        .comfirm-btn {

          margin:2rem 0;
          font-size:1.2rem;
          background-color:#FF8308;
          padding:0.4rem 4rem;
          align-self:center;
        }

      `}
    >
      <h1>
        <Typography > Informacion Boletos </Typography>
      </h1>
      <ul className='info-list'>
        <li> <strong>sala: </strong> 2 </li>
        <li> <strong>Pelicula: </strong> Avatar 2: El camino del agua </li>
        <li> <strong>Boletos: </strong> 3 </li>
        <li>
          <strong>Asientos: </strong> 
          <ul className='asientos-list'>
            <li>8-d</li>
            <li>7-d</li>
            <li>6-d</li>
          </ul>
        </li>
      </ul>
        <Button 
          className='comfirm-btn'
          startIcon={<Done />}

          variant="contained" 
          onClick={() => navigate("/dashboard/HomeWorker")}
        >
          <Typography variant="buttontext" >Confirmar</Typography>
        </Button>
    </div>
  )
}


function BoletosInfoPhone() {
  const navigate=useNavigate();

  return (
    <div
      className='boletos-info'
      css={css`
        @media (min-width: 801px) {
          display:none;
        }
        display:flex;
        flex-direction:column;
        align-items:stretch;

        .info-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 1rem 0rem;
          background-color: #1D2334;
          border: solid 1.5px;
          border-color: #395CEA;
          color:white;
          border-radius: 1rem;
          margin: 3rem 2.5rem 2rem 2.5rem;
        }

        button {
          align-self:center;
          padding: 0.6rem 1rem;
        }
        .comfirm-btn {
          margin-top:2rem;
          background-color:#FF8308;
          padding:0.6rem 3rem;
        }
      `}
    >      
      <Layout nombre="Zona de control" link="/dashboard/HomeWorker/validate-boletos" />
      <div className='info-card' >
        <div className='info-card-header info-card-el'>
          <Typography > Dahyana Mendoza </Typography>
          <Typography  className='cedula' > V-15.128.359 </Typography>
        </div>
        <Typography className='info-card-el' variant="h6"> Avatar. El camino del agua </Typography>
        <Typography className='info-card-el' variant="h6"> Sala 4-A </Typography>
        <Button 
          className='info-card-el'
          variant="contained" 
          startIcon={<Ticket />}
        >
          <Typography variant="buttontext" > 5 personas </Typography>
        </Button>
      </div>
      <Button 
        className='comfirm-btn'
        startIcon={<Done />}

        variant="contained" 
        onClick={() => navigate("/dashboard/HomeWorker")}
      >
        <Typography variant="buttontext" >Confirmar</Typography>
      </Button>
    </div>
  )
}

function BoletosInfo() {
  

  return (
    <>
      <BoletosInfoPhone />
      <BoletosInfoDesktop />
    </>
  )
}

export default BoletosInfo