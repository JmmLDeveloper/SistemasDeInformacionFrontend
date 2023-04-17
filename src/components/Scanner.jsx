import React, { useState } from "react";
import QrReader from "react-web-qr-reader";
import { useNavigate } from "react-router-dom";
import { css } from "@emotion/react";

function Scanner({ direccion,scope = 'Comida' }) {
  const navigate = useNavigate();

  const delay = 500;
  const handleScan = (result) => {
    fetch(`http://164.90.211.190:8181/ordenes/${result.data}`).then(
      async (response) => {
        if (response.status === 200) {
          const data = await response.json();
          if (data.comida_es_valido && scope == 'Comida' ) {
            navigate(direccion, { state: { orden: data, qrId: result.data } });
          } 

          if (data.boletos_es_valido && scope == 'Boletos' ) {
            navigate(direccion, { state: { orden: data, qrId: result.data } });
          } 
        }
      }
    );
  };

  const handleError = (error) => {
    console.log(error, "hubo un error");
  };

  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        @media (max-width: 800px) {
          h1 {
            display: none;
          }
        }
      `}
    >
      <h1> Escaneador de Codigo QR </h1>

      <QrReader
        delay={delay}
        style={{
          width: "min(25rem,100vw)",
        }}
        onError={handleError}
        onScan={handleScan}
      />
    </div>
  );
}

export default Scanner;
