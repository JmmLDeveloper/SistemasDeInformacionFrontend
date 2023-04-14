import { css } from '@emotion/react'
import React from 'react'
import Navbar from '../components/molecules/Navbar'

import QRImage from '../assets/QR-example.jpg'
import { Button } from '@mui/material'
import { Box } from '@mui/system'
 
function BoletosScaner() {
    const scanner = new Html5QrcodeScanner('reader', { 
        // Scanner will be initialized in DOM inside element with id of 'reader'
        qrbox: {
            width: 250,
            height: 250,
        },  // Sets dimensions of scanning box (set relative to reader element width)
        fps: 20, // Frames per second to attempt a scan
    });


    scanner.render(success, error);
    // Starts scanner

    function success(result) {

        document.getElementById('result').innerHTML = `
        <h2>Success!</h2>
        <p><a href="${result}">${result}</a></p>
        `;
        // Prints result as a link inside result element

        scanner.clear();
        // Clears scanning instance

        document.getElementById('reader').remove();
        // Removes reader element from DOM since no longer needed
    
    }

    function error(err) {
        console.error(err);
        // Prints any errors to the console
    }


  return (
    <div>
        <Navbar />
        <div
            css={css`
                padding:2rem;
                display:flex;
                flex-direction:column;
                align-items:center;
            `}
        >
            <h1> Codigo QR para pedidos </h1>
            
            <div 
            id="reader"></div>
            <div css={css`
             width: 600px;
             text-align: center;
             font-size: 1.5rem;
            `          }
            
            id="result"></div>

            <div>
                <img
                    css={css`
                        width:30rem;
                        height:auto;
                    `}
                src={QRImage} alt="" />
            </div>
            <Box  mb={2} > </Box>
            <Button variant="contained">  Continuar </Button>

        </div>


    </div>
  )
}

export default BoletosScaner