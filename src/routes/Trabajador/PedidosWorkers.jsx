import React, { useEffect, useState } from "react";

import { Button, css, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import Done from "@mui/icons-material/Done";

import Layout from "../../components/molecules/Layout";
import Pedido from "../../components/molecules/Pedido";
import PedidosList from "../../components/molecules/PedidosList";

function PedidosWorkers() {
  const [pedidos, setPedidos] = useState([]);

  const { state } = useLocation();

  const navigate = useNavigate();

  useEffect(() => {
    if (!state.orden) {
      navigate("/dashboard/HomeWorker/Pedidos/scanner");
    } else {
      const p = state.orden.articulos.map((ar) => ({
        img: `https://josesisprueba.life/${ar.articulo.imagen}`,
        name: ar.articulo.nombre,
        cantidad: ar.cantidad,
        descripcion: ar.articulo.descripcion,
      }));
      setPedidos(p);
    }
  }, [state,setPedidos]);



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
          <Typography variant="h4">Articulos Pedidos</Typography>

          <PedidosList>
            {pedidos.map((p, idx) => (
              <li key={idx}>
                <Pedido
                  imgSource={p.img}
                  name={p.name}
                  cantidad={p.cantidad}
                  descripcion={p.descripcion}
                />
              </li>
            ))}
          </PedidosList>
        </div>
        <Button
          startIcon={<Done />}
          variant="contained"
          onClick={() => {
            fetch(
              `https://josesisprueba.life/ordenes/${state.qrId}/invalidar/comida`,
              {
                method: "POST",
              }
            )
              .then((res) => {
                navigate("/dashboard/HomeWorker");
              })
              .catch((err) => {
                navigate("/dashboard/HomeWorker");
              });
          }}
        >
          <Typography variant="buttontext">
            Confirmar e invalidar el codigo QR
          </Typography>
        </Button>
      </div>
    </div>
  );
}

export default PedidosWorkers;
