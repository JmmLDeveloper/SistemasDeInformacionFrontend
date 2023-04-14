import React from 'react'
import { css } from '@emotion/react'

import Image from '../assets/logo-no-text.png'

function Logo() {
  return (
    <div
        css={css`
            display:flex;
            justify-content:center;
            align-items:center;
            width:250px;
            background-color: #D9D9D9;
            height:250px;
            border-radius:1000px;
            margin-bottom: 2rem;

        `}
    >
      <img
        css={css`
          width:270px;
          height:270px;
        `}
        src={Image} alt="logo" />
    </div>
  )
}

export default Logo