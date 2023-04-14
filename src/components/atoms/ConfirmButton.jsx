import { css } from '@emotion/react'
import { Button, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import Done from '@mui/icons-material/Done'


function ConfirmButton({goTo,onClick,children}) {

    let onClickHandler = onClick || ( () => null )

    return (
        <div
            css={css`
                width:100%;
                display:flex;
                flex-direction:column;
                justify-content:center;
                margin:2rem 0;
                button {
                    padding:0.4rem 4.5rem;
                    align-self:center;
                    background-color: #FF8308;
                }
            `}
        >
            { 
                goTo ? 
                <Link to={goTo} >
                    <Button
                        onClick={onClickHandler}
                        startIcon={<Done />}
                        variant="contained" 
                    >
                        <Typography variant="buttontext" >{children}</Typography>
                    </Button>
                </Link> :
                <Button
                    onClick={onClickHandler}
                    startIcon={<Done />}
                    variant="contained" 
                >
                    <Typography variant="buttontext" >{children}</Typography>
                </Button>
            }
        </div>
    )
}

export default ConfirmButton