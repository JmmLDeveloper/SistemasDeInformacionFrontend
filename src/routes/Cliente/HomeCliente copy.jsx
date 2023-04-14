import React from 'react'
import { css } from '@emotion/react'
import {Paper, Box, Card, Typography,CardContent,CardActions,Button,Grid} from '@mui/material';
import '../../styles/styles.css';

const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      
    </Box>
  );
  


function HomeCliente (){
    return(
            <div
            css={css`
            display: grid;
            place-items: center;
                align-items:center;
                height:100vh;
                text-align: center;
            background-color: #0E1321;
            `}
            >

<div css={css`
            display: grid;
            place-items: center;
            text-align: center;
            width: 75%;
            max-width: 300px; 
        `}>
        <h4 css={
          css`
          color:white;
          `
        }
        className="holi"
        
        >CINES UNIDOS</h4>
        <hr css={css`
            width: 100%;
            max-width: 300px;
            color:white; 
        `} />
    </div>
    
    <Grid container justifyContent="flex-start" sx={{ml:'10%'}}>
    <Typography variant="h5" component="div">
          Ultimos recibos
        </Typography>
    </Grid>

    <Grid container justifyContent="flex-start" sx={{ml:'30%'}}>
    <Typography variant="h5" component="div">
          Febrero, 2023
        </Typography>
    </Grid>
   

    {/* <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
          be{bull}nev{bull}o{bull}lent
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card> */}









            </div>
    );
}

export default HomeCliente;
