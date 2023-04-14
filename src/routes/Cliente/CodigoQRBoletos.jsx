import React from "react";
import '../../styles/tickets/estilos.css';
import { css, Typography } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Layout from "../../components/molecules/Layout";
import TabButtons from "../../components/atoms/TabButtons";
import { useNavigate } from "react-router-dom";


function CodigoQRBoletos () {

    const navigate = useNavigate()

    return(
        <div
            css={css`
                height: calc(100vh - 56px - 1rem);
                overflow-y: scroll;  
                background-color: #0E1321;
            `}
        >
           <Layout onPhone={true} nombre="Tickets" link="/cliente/tickets" />
            <div
                css={css`
                    padding:2rem;
                `}
            >
                <div>
                    <div 
                        css={css`
                            margin-bottom:1.5rem;
                        `}
                    >   
                        <TabButtons
                            labels={['Puestos','Codigo QR']}
                            onChange={ ( t ) => {
                                if(t == 0) {
                                    navigate('/cliente/tickets/puestos')
                                }
                            } }
                            defaultTab={1}
                        />
                    </div>
                    <Typography
                        variant="h1"
                        css={css`
                            text-align:center;
                            font-size:2rem;
                            font-weight:normal;
                        `}
                    >
                        Mi Codigo QR
                    </Typography>
                    <div
                        css={css`
                            margin-top:2rem;
                            display:flex;
                            justify-content:center;
                            align-items:center;

                            img {
                                border-radius:0.5rem;
                                width: min(20rem,70%);
                            }

                        `}
                    >
                        <img src={`https://upload.wikimedia.org/wikipedia/commons/d/d7/Commons_QR_code.png`} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CodigoQRBoletos;