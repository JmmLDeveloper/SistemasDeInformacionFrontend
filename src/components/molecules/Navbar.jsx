import { css } from '@emotion/react';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from "react-router-dom";
import LogoNoText from '../../assets/logo-no-text.png'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


function NavigationLink({to,children}) {
  return (
    <Link
      to={to}
    >    
      <h2
        css={css`
          margin-left:1rem;
          font-weight: bolder;
          font-size:1.1rem;
        `}
      >
        {children}
      </h2>
    </Link>
  )
}

function Navbar() {
  return (
    <div 
      css={css`
        display:flex;
        flex-direction:row;
        justify-content:space-between;
        align-items:center;
        background-color: #1D2334;
        height:5rem;
        padding: 1rem;
        color:#FF8308;
        @media (max-width: 800px) {
          display:none;
				}

        .left-side-header {
          display:flex;
          align-items:center;
        }

        .logo-and-name {
          display:flex;
          align-items:center;
        }

      `}
    >
      <div className="left-side-header" >
        <div className="logo-and-name">
          <img
            css={css`
              width:2.5rem;
            `}
            src={LogoNoText}
            alt="logo"
          />

          <span
            css={css`
              margin-left:0.5rem;
              font-weight: bolder;
              font-size:1rem;
            `}
          >
            CineWorld
          </span>
        </div>
        <Box
          css={css`
            margin-left:2rem;
            display:flex;
            flex-direction:row;
          `}
        >
          <NavigationLink to="/dashboard/HomeWorker" > Menu Principal </NavigationLink>
          <NavigationLink to="/dashboard/HomeWorker/validate-boletos"> Procesar Boletos </NavigationLink>
          <NavigationLink to="/dashboard/HomeWorker/Pedidos/scanner"> Procesar Pedidos  </NavigationLink>
        </Box>
      </div>


      <div
        css={css`
          display:flex;
          align-items:center;
        `}
      >
        <span
          css={css`
            margin-right:0.8rem;
            font-size:1.2rem;
          `}
        > Jose Marquez </span>
        <AccountCircleIcon  fontSize='large' />
      </div>
    </div>
  )
}
export default Navbar;