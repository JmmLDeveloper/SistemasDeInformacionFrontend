import React, { useEffect } from "react";
import { Button, css, Typography } from "@mui/material";
import "../../styles/styles.css";
import { useLocation, useNavigate } from "react-router-dom";
import Layout from "../../components/molecules/Layout";
import "../../styles/Trabajador/boletos-info.css";
import { ReactComponent as Ticket } from "../../assets/icons/Ticket3.svg";

import Done from "@mui/icons-material/Done";

function BoletosInfoDesktop({ onConfirm ,orden}) {
  return (
    <div
      css={css`
        padding: 1rem 3rem;
        display: flex;
        flex-direction: column;

        @media (max-width: 800px) {
          display: none;
        }
        h1 {
          font-size: 2rem;
          margin-bottom: 0.5rem;
        }

        .asientos-list {
          display: inline-flex;
        }

        .info-list li {
          margin: 0 0 0.6rem 1.5rem;
        }

        .asientos-list li {
          margin: 0;
          background-color: #395cea;
          padding: 0.2rem 1rem;
          border-radius: 5rem;
          margin-left: 0.6rem;
        }

        .comfirm-btn {
          margin: 2rem 0;
          font-size: 1.2rem;
          background-color: #ff8308;
          padding: 0.4rem 4rem;
          align-self: center;
        }
      `}
    >
      <h1>
        <Typography> Informacion Boletos </Typography>
      </h1>
      <ul className="info-list">
        <li>
          
          <strong>sala: </strong> {orden.funcion.sala.codigo}
        </li>
        <li>
          
          <strong>Pelicula: </strong> {orden.funcion.pelicula.nombre}
        </li>
        <li>
          
          <strong>Boletos: </strong> {orden.asientos.length}
        </li>
        <li>
          <strong>Asientos: </strong>
          <ul className="asientos-list">
            {orden.asientos.map( a => (<li key={a.id}> {a.asiento.codigo}  </li>) )}
          </ul>
        </li>
      </ul>
      <Button
        className="comfirm-btn"
        startIcon={<Done />}
        variant="contained"
        onClick={onConfirm}
      >
        <Typography variant="buttontext">
          Confirmar e invalidar el codigo QR
        </Typography>
      </Button>
    </div>
  );
}

function BoletosInfoPhone({ onConfirm ,orden}) {
  return (
    <div
      className="boletos-info"
      css={css`
        @media (min-width: 801px) {
          display: none;
        }
        display: flex;
        flex-direction: column;
        align-items: stretch;

        .info-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 1rem 0rem;
          background-color: #1d2334;
          border: solid 1.5px;
          border-color: #395cea;
          color: white;
          border-radius: 1rem;
          margin: 3rem 2.5rem 2rem 2.5rem;
        }

        button {
          align-self: center;
          padding: 0.6rem 1rem;
        }
        .comfirm-btn {
          margin-top: 2rem;
          background-color: #ff8308;
          padding: 0.6rem 3rem;
        }
      `}
    >
      <Layout
        nombre="Zona de control"
        link="/dashboard/HomeWorker/validate-boletos"
      />
      <div className="info-card">
        <div className="info-card-header info-card-el">
          <Typography> Dahyana Mendoza </Typography>
          <Typography className="cedula"> V-15.128.359 </Typography>
        </div>
        <Typography className="info-card-el" variant="h6">
          
          {orden.funcion.pelicula.nombre}
        </Typography>
        <Typography className="info-card-el" variant="h6">
          
          Sala {orden.funcion.sala.codigo}
        </Typography>
        <Button
          className="info-card-el"
          variant="contained"
          startIcon={<Ticket />}
        >
          <Typography variant="buttontext"> {orden.asientos.length} personas </Typography>
        </Button>
      </div>
      <Button
        className="comfirm-btn"
        startIcon={<Done />}
        variant="contained"
        onClick={onConfirm}
      >
        <Typography variant="buttontext">
          Confirmar e invalidar el codigo QR
        </Typography>
      </Button>
    </div>
  );
}

function BoletosInfo() {
  const navigate = useNavigate();
  const { state } = useLocation();

  useEffect(() => {
    if (!state.orden || !state.qrId) {
      navigate("/dashboard/HomeWorker/validate-boletos");
    }
  }, [state]);

  const confirmHandler = () => {
    fetch(`https://josesisprueba.life/ordenes/${state.qrId}/invalidar/boletos`, {
      method: "POST",
    })
      .then((res) => {
        navigate("/dashboard/HomeWorker");
      })
      .catch((err) => {
        navigate("/dashboard/HomeWorker");
      });

    
  };

  console.log(state.orden)

  return (
    <>
      <BoletosInfoPhone onConfirm={confirmHandler} orden={state.orden || {} } />
      <BoletosInfoDesktop onConfirm={confirmHandler} orden={state.orden || {} } />
    </>
  );
}

export default BoletosInfo;
