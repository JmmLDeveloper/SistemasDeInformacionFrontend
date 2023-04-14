import { Typography } from "@mui/material";
import React from "react";
import '../../styles/styles.css';

function LayoutSuperiorBoletos({nombre}){

    return(
        <div className='Layout-Pedidos'>
            <p className='Layout-Pedidos-text-1'>{nombre}</p>
            <p className='Layout-Pedidos-text-2'>Codigo QR</p>        
        </div>
    );

}

export default LayoutSuperiorBoletos;