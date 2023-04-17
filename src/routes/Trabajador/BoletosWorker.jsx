import React from "react";
import { Button, css, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Scanner from "../../components/Scanner";
import '../../styles/Trabajador/Scan.css';
import Layout from "../../components/molecules/Layout";

function BoletosWorker(){
    const navigate = useNavigate();
    return(
        <div
            css={css`
                height:100%;
                display:grid;
                grid-template-rows:auto 1fr;
            `}
        >
            <Layout nombre="Zona de control" />
            <Scanner direccion={"/dashboard/HomeWorker/validate-boletos/info"} scope="Boletos" />

        </div>
    )
}

export default BoletosWorker;