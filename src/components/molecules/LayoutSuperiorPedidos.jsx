import React from "react";
import { css, Typography } from "@mui/material";
import { Link } from "react-router-dom";


import '../../styles/styles.css';
import { QrCode } from "@mui/icons-material";


function LayoutSuperiorPedidos({nombre}){

    return(
        <div

            css={css`
                height: 8vh;
                padding: 0.6rem 1rem;
                width:100%;
                background-color:#30374B;
                display:flex;
                align-items:center;
                justify-content:space-between;

                p {
                    font-size: 1.5rem;
                    font-weight:normal;
                }

                .qr-btn {
                    display:flex;
                    justify-content:center;
                    align-items:center;
                    color:#D9D9D9;
                    padding:0.2rem 0.4rem;
                    border-radius: 0.5rem;
                    border: solid 1px #D9D9D9;
                    
                    p {
                        font-size:0.8rem;
                    }

                    svg {
                        margin-right:0.5rem;
                    }

                }

            `}
        >
            <Typography  >{nombre}</Typography>
            

            <Link to={"qr"}>
                <button className="qr-btn" >
                    <QrCode />
                    <Typography> Codigo QR</Typography>
                </button>
            </Link>
        </div>
    );

}

export default LayoutSuperiorPedidos;