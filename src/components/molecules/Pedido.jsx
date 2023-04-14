import { Button, css, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import pedidoPhoto from '../../assets/pedido.webp'


function PedidoDesktop({name,onPhone,imgSource,cantidad}) {

    const [seeMore,setSeeMore] = useState(false)

    return (
        <div
            css={css`
                display:flex;
                ${ onPhone && 'display:none;' }
                flex-direction:column;
                justify-content:center;
                align-items:center;
                align-items:center;

                @media (max-width: 800px) {
                    
                    display:none;
                }
                .cantidad {
                    color : #979797;
                }

                .name {
                    margin-top:0.2rem;
                    font-size:1.3rem;
                }

                button {
                    margin:0;
                    margin-top:0.4rem;
                    background-color:#395CEA;
                    padding:0.4rem 2rem;
                    align-self:stretch;
                }

                .see-more-info {
                    background-color:#1D2334;
                    border:solid 1px #395CEA;
                    padding:0.5rem;
                    width:13rem;
                    height:13rem;
                    font-size:0.9rem;
                    border-radius: 0.8rem;
                    ul li {
                        display:flex;
                        align-items:center;
                    }
                    .circle {
                        margin-right:0.5rem;
                        width:0.5rem;
                        height:0.5rem;
                        background-color:white;
                        border-radius:1rem;
                    }
                }

            `}
        >
            {
                seeMore ?
                <div className='see-more-info'>
                    <ul>
                        <li> <div className='circle' ></div> 2 Palomitas Grandes</li>
                        <li> <div className='circle' ></div> 4 Coca-Cola Grandes</li>
                        <li> <div className='circle' ></div> 1 Chocolate </li>
                    </ul>
                </div> :
                <img
                    css={css`
                        width: 13rem;
                        border-radius: 0.5rem;
                    `}
                    src={imgSource} 
                    alt="food-image"
                /> 


            }
            <Typography className='name'>{name}</Typography>
            <Typography className='cantidad' >{cantidad} cantidad</Typography>
            <Button
                variant="contained" 
                onClick={()=>setSeeMore(!seeMore)}
            >
                <Typography variant="buttontext" > {  seeMore ? "Ver Menos" : "Ver Mas" }  </Typography>
            </Button>
        </div>
    )
}

function PedidoPhone({name = 'Tequeños',onPhone,imgSource,cantidad}) {

    const navigate = useNavigate()

    return (
        <div
            css={css`
                color:white;
                align-self:stretch;
                background-color: #1D2334;
                border: solid #395CEA 1px;
                border-radius: 0.5rem;
                align-self: stretch;
                display: flex;
                margin: 0.6rem 0rem;
                padding: 1rem;
                @media (min-width: 801px) {
                    ${ !onPhone && 'display:none;' }
                    
                }
            `}
        >
                <img
                    css={css`
                        width: 4.5rem;
                        border-radius: 0.5rem;
                    `}
                    src={imgSource} 
                    alt="food-image"
                />
                <div
                    css={css`
                        position: relative;
                        flex: 1;
                        height: 4.5rem;
                        padding-left: 1rem ;
                        display:flex;
                        align-items: flex-start;
                        flex-direction: column;
                        justify-content: space-between;
                    `}
                >
                    <Typography variant="h6">{name}</Typography>
                    <div>
                        <div
                            css={css`
                                background-color: #395CEA;
                                padding: 0.3rem 0.7rem;
                                border-radius: 0.5rem;
                                color: white;
                                font-size: 1rem;
                            `}
                        >
                            <Typography>Cantidad : {cantidad}</Typography>
                        </div>
                    <Typography 
                        css={css`
                            position: absolute;
                            bottom: 0;
                            color: #FF8308;
                            font-weight: bolder;
                            right: 0 ;
                        `}
                        onClick={()=> navigate('/dashboard/HomeWorker/ordenes/see-more')}
                    >
                        Ver mas
                    </Typography>
                </div>
            </div>
        </div>
    )
}

function Pedido({name,onPhone = false,imgSource = pedidoPhoto,cantidad= 2}) {
  return (
    <>
        <PedidoPhone  onPhone={onPhone} name={name} imgSource={imgSource} cantidad={cantidad} />
        <PedidoDesktop onPhone={onPhone} name={name}  imgSource={imgSource} cantidad={cantidad} />
    </>
  )
}

export default Pedido