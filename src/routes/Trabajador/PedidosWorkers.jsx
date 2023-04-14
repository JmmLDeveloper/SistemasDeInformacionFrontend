import React, { useEffect, useState } from "react";

import { Button, css, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import Done from "@mui/icons-material/Done";

import Layout from "../../components/molecules/Layout";
import Pedido from "../../components/molecules/Pedido";
import PedidosList from "../../components/molecules/PedidosList";

import TequeñoImg from "../../assets/food-4.jpeg";

function PedidosWorkers() {
  const [pedidos, setPedidos] = useState([]);

  const { state } = useLocation();

  const navigate = useNavigate();

  useEffect(() => {
    if (!state.qrId) {
      navigate(-1);
    }
  }, [state]);

  useEffect(() => {
    if (state.qrId) {
      fetch(`http://localhost:3333/ordenes/${state.qrId}`)
        .then((response) => response.json())
        .then((data) => {
          const p = data.articulos.map((ar) => ({
            img: `http://localhost:3333/${ar.articulo.imagen}` ,
            name: ar.articulo.nombre,
            cantidad: ar.cantidad,
          }));
          setPedidos(p);
          console.log(p);
        });
    }
  }, []);

  return (
    <div
      css={css`
        button {
          margin-top: 2.5rem;
          align-self: center;
          padding: 0.8rem 3rem;
          font-weight: bold;
          background-color: #ff8308;
        }
        h4 {
          text-align: center;
          margin-bottom: 1.5rem;
        }
        .content {
          background-color: #0e1321;
          padding: 2rem 7%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
      `}
    >
      <Layout nombre="Pedidos" link="/dashboard/HomeWorker" />
      <div className="content">
        <div>
          <Typography variant="h4">Pedidos pendientes:</Typography>
          <PedidosList>
            {pedidos.map((p, idx) => (
              <li key={idx}>
                <Pedido imgSource={p.img} name={p.name} cantidad={p.cantidad}/>
              </li>
            ))}
          </PedidosList>
        </div>
        <Button
          startIcon={<Done />}
          variant="contained"
          onClick={() => navigate("/dashboard/HomeWorker/ordenes")}
        >
          <Typography variant="buttontext">Escanear Pedido</Typography>
        </Button>
      </div>
    </div>
  );
}

export default PedidosWorkers;
