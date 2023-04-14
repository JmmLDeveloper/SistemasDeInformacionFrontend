import React from "react";
import { css, Typography } from "@mui/material";
import Layout from "../../components/molecules/Layout";
import Pantalla from '../../assets/Pantalla.png';
import TabButtons from "../../components/atoms/TabButtons";
import { useNavigate } from "react-router-dom";

function PuestosRow( {amount = 1,align = 'center',active = []} ) {
    return (
        <div
            css={css`
                display:flex;
                justify-content: ${align};
                width:100%;

            `}
        >
            {
                Array(amount).fill(null).map( (_,idx) => (
                    <div key={idx} className={active.includes(idx) ? 'active puesto' : 'puesto'}></div>
                ) )

            }

        </div>
    )
}

function PuestosCliente() {

    const navigate = useNavigate()

    return(
        <div
            css={css`
                height: calc(100vh - 56px - 1rem);
                overflow-y:scroll;
                display:flex;
                flex-direction:column;

                .puesto {
                    
                    width: min(7vw,2em);
                    border: white 1px solid;
                    border-radius: min( 3vw, 0.85rem );
                    height: min(7vw,2em);
                    margin: 0.3rem;
                }

                .active {
                    background-color:#FF8308;
                    border-color:#FF8308;
                }

            `}
        >
           <Layout onPhone={true} nombre="Tickets" link="/cliente/tickets" />



            <div
                css={css`
                    flex-grow:1;
                    background-color: #0E1321;

                    img {
                        margin-top:1.5rem;
                    }

                `}
            >

                <div 
                    css={css`
                        margin:2rem 2rem 0;
                    `}
                >   
                    <TabButtons
                        labels={['Puestos','Codigo QR']}
                        onChange={ ( t ) => {
                            if(t == 1) {
                                navigate('/cliente/tickets/qr')
                            }
                        } }
                        defaultTab={0}
                    />
                </div>

                <div
                    css={css`
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                    `}
                >
                    <img src={Pantalla} alt="pantalla image" />

                    <div
                        css={css`
                            display:grid;
                            margin-top:1.5rem;
                            grid-template-columns: 1fr 1fr;
                            column-gap: min(5vw,2rem);
                        `}
                    >
                        <div>
                            <PuestosRow amount={3} align="flex-end" />
                            <PuestosRow amount={4}  />
                            <PuestosRow amount={4}  />
                            <PuestosRow amount={4}  />
                            <PuestosRow amount={4}  />
                            <PuestosRow amount={4}  />
                            <PuestosRow amount={4}  />
                            <PuestosRow amount={3} align="flex-end" />

                        </div>
                        <div>
                            <PuestosRow amount={3} align="flex-start" />
                            <PuestosRow amount={4}  />
                            <PuestosRow amount={4} active={[0,1]}  />
                            <PuestosRow amount={4}  />
                            <PuestosRow amount={4}  />
                            <PuestosRow amount={4}  />
                            <PuestosRow amount={4}  />
                            <PuestosRow amount={3} align="flex-start" />
                        </div>
                    </div>



                    <div
                        css={css`
                            display:flex;
                            align-items:center;
                            margin-top:1.5rem;

                            p {
                                margin-left:1rem;
                                color : #FF8308;
                                font-size:1.2rem;
                                font-weight:bold;
                            }
                        `}
                    >
                        <div className="puesto active"></div>
                        <Typography>Puestos elegidos</Typography>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PuestosCliente;