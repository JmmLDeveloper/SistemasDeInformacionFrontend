import { css } from '@emotion/react'
import { Typography } from '@mui/material'
import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


import PedidoPhoto from '../../../assets/big-pedido.webp'
import { Link, useNavigate } from 'react-router-dom';



function PedidoSeeMore() {

    const navigate = useNavigate()

  return (
    <div
        css={css`
            position:relative;
            img {
                width : 100%;
                border-radius : 0 0 1.5rem 1.5rem;
            }
            text-align:left;
            color:white;
            h1 {
                margin-top:0.5rem;
                font-size:1.6rem;
                text-align:center;
            }
            h3 {
                margin-top:0.5rem;
                text-align:left;
                font-size:1.4rem;
            }
            .sub-text {
                color:#A8A8A8;
                text-align:center;
            }
            ul {
                padding: 1rem 0 0 1rem;
            }
            ul li {
                margin-bottom:0.5rem;
                display:flex;
                align-items:center;
            }

            ul li .circle {
                border-radius:100%;
                background-color:white;
                width:0.6rem;
                height:0.6rem;
                margin-right:0.5rem;
            }
            
            .info {
                padding:0  1rem;
            }

            .back-arrow {
                display:flex;
                justify-content:center;
                align-items:center;
                background-color: rgba(0,0,0,0.5);
                position:absolute;
                margin:0;
                left:0;
                top:0;
                padding:0.3rem;
            }
            .back-arrow a {
                margin:0;
                display:flex;
                justify-content:center;
                align-items:center;
            }

            .back-arrow a svg {
                margin:0;
            }
        `}
    >
        <div className='back-arrow' >
            <Link  className="back-arrow-link" onClick={()=>navigate(-1)}>
                <ArrowBackIcon />
            </Link>
        </div>
        <img src={PedidoPhoto} alt="imagen de comida" />
        <div className='info'>
            <Typography variant="h1" > Combo Familiar </Typography>
            <Typography className='sub-text'> Tiempo de preparacion {'>'} 3 min </Typography>
            <Typography variant="h3" > Ingredientes </Typography>
            <ul>
                <li>
                    <div className='circle' ></div>
                    <Typography > Palomitas de maíz grandes. 230 gr </Typography>
                </li>
                <li>
                    <div className='circle' ></div>
                    <Typography > 3 bebidas grandes. 900 ml </Typography>
                </li>

            </ul>
        </div>
        
    </div>
  )
}

export default PedidoSeeMore