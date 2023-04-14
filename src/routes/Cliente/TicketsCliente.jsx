import { css } from '@emotion/react'
import React from 'react'
import {  Button, ImageListItem, Typography,Box } from '@mui/material';

import { ReactComponent as Calendar } from '../../assets/icons/Calendar.svg';
import { ReactComponent as Clock } from '../../assets/icons/Clock.svg';
import { ReactComponent as Ticket } from '../../assets/icons/Ticket2.svg';
import { useNavigate } from 'react-router-dom';



function TicketsCliente() {

    const navigate = useNavigate();


    const styles ={
        boton1:{
            backgroundColor:'#0E1321',
            color:'white',
            fontSize:'10pt',
        },
        boton2:{
            backgroundColor:'#505B77',
            color:'white',
            fontSize:'10pt',
        },
        text:{
            color: 'white',
            fontSize: '21.33px',
        },
        main:{
            display: 'flex',
            flexDirection:'column',
            flexWrap:'nowrap',
            justifyContent:'center',
            alignItems:'center',
            alignContent:'stretch',
        },
        fila:{
            display: 'flex',
            flexDirection: 'row'

        },
        centrarhorizontal:{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'nowrap',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            aligncontent: 'stretch',
            width: '100%',
        },
        centrarhorizontalmentepegado:{
            display: 'flex',
	        flexDirection: 'row',
	        justifyContent: 'center',
	        alignItems: 'center',
	        alignContent: 'stretch',
            width:'100%'
        },
        centrarverticalmente:{
            display: 'flex',
	        flexDirection: 'column',
	        flexWrap: 'nowrap',
	        justifyContent: 'center',
	        alignItems: 'center',
	        alignContent: 'stretch',
            boxSizing:'content-box',
        },
        imagen:{
            borderRadius:'30px',
            width: '100%',
            height: '100%',
            overflow: 'hidden',
            position: 'relative',
        },
        cuadro:{
            width:'50%',
            height:'100%',
        },

      
  }
  

  return (
    
    <div
        css={css`
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            background-color: #0E1321;
            height: calc(100vh - 56px - 1rem);
            overflow-y:scroll;

            .content-header {

                height: 8vh;
                width:100%;
                background-color:#30374B;
                display: flex;
                align-items:centel;
                justify-content:space-between;
                h1 {
                    display:flex;
                    justify-content:center;
                    align-items:center;
                    font-size:1.4rem;
                    margin:0;
                    margin-left:0.8rem;
                }
                .tab-btns-cotnainer {
                    display:flex;
                    align-items:flex-end;
                    .tab-btn {
                        font-size:0.9rem;
                        padding:0.3rem 1.2rem;
                        border-radius : 0.5rem 0.5rem 0 0;
                        background-color:#505B77;
                    }
                    .tab-btn.active {  
                        background-color:#0E1321;
                    }
                }
            }


        `}
    >
        <div className='content-header'>
            <h1> Tickets </h1>
            <div className='tab-btns-cotnainer'>
                <button css={css` background-color:#0E1321; `} className='tab-btn active'>
                    <Typography>Boletos</Typography>
                </button>  
                <button className='tab-btn'>
                    <Typography>Historial</Typography>
                </button>   
            </div>
        </div>
        <div 
            css={css`
                padding: 0.5rem 1rem;
                width:100%;
            `}
        >
            <Typography style={styles.text}>N° KFF5TZS</Typography>
            <div
                css={css`
                    display:flex;
                    flex-direction:column;
                    align-items:center;
                `}
            >    
                <img
                    css={css`
                        width:  min(11rem,50%);
                        margin-bottom: 1rem;
                        border-radius: 0.5rem;
                    `}
                    src={`https://lumiere-a.akamaihd.net/v1/images/poster-avatar-2-lat_46034440_1_c359a2d2.png`}
                />
       
   
                <Typography variant="h5" >Avatar. El camino del agua</Typography>
                <Typography variant="subtitle1" sx={{color:'#7BD7B8'}} >Director. James Cameron</Typography>
            </div>

            <Box style={styles.centrarhorizontal}>
                <Typography variant="body1" sx={{color:'#7BD7B8'}}>2022</Typography>
                <Typography variant="body1" sx={{color:'#7BD7B8'}}>Sub. Español</Typography>
                <Typography variant="body1" sx={{color:'#7BD7B8'}}>3h 2m</Typography>
            </Box>

        
        

            <Box style={styles.centrarhorizontal}>
                <Box style={styles.centrarverticalmente}>
                <Calendar />
                <Typography style={styles.text}>03/02</Typography>
                </Box>
                <Box style={styles.centrarverticalmente}>
                <Clock />
                <Typography style={styles.text}>18:15</Typography>
                </Box>
                <Box style={styles.centrarverticalmente}>
                <Ticket />
                <Typography style={styles.text}>3</Typography>
                </Box>
            </Box>
            
            <Box 
                css={css`
                    margin-top:0.6rem;
                `}
                style={styles.centrarhorizontal}
            >
                <Button sx={{ color: '#FFFF', background: '#FF8308'}} variant="contained" onClick={() => navigate('qr')}>Código QR</Button>
                <Button sx={{  background: '#003EE4',}} variant="contained" onClick={() => navigate('puestos')}>Puestos</Button>

            </Box>

        </div>
    </div>
  )

 
}


export default TicketsCliente