import React from "react";
import { css, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function Layout({nombre,link,onPhone}) {

    const navigate = useNavigate()

    return(
        <div
            css={css` 
                justify-content: flex-start;
                align-items: center;
                height: 8vh;
                background-color: #30374B;

                ${ onPhone ? 'display:flex;' : 'display:none;' } 
                @media (max-width: 800px) {
                    display:flex;
                }

                a {
                    display:flex;
                }

                svg {
                    margin-left:0.6rem;
                    font-size:1.8rem;
                    align-self:stretch;
                }

                h5 {
                    padding-left:1.2rem;
                    margin:0;
                }
            `}

        >
            {
                link ? 
                <Link to={link}>
                    <ArrowBackIcon  />
                </Link> :
                <Link onClick={() => navigate(-1) }>
                    <ArrowBackIcon  />
                </Link>
            }
            <Typography variant="h5" >{nombre}</Typography>
        </div>
    )
}

export default Layout;