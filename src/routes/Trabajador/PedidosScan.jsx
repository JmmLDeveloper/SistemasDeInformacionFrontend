import { css } from "@emotion/react";
import React from "react";
import Layout from "../../components/molecules/Layout";
import Scanner from "../../components/Scanner";

function PedidosScan( ){
    return(
        <div
            css={css`
                height:100%;
                display:grid;
                grid-template-rows: auto 1fr;
            `}
        >
            
            <Layout nombre="Zona de despacho" link="/dashboard/HomeWorker"  />
            <Scanner direccion={"/dashboard/HomeWorker/Pedidos"} />
        </div>
  
    )
}

export default PedidosScan;

