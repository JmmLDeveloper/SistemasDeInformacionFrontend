import { css } from '@emotion/react'
import React from 'react'

function PedidosList({children,onPhone,hidden = false}) {

  const desktopStyles = `
    display: grid; /* 1 */
    grid-template-columns: repeat(auto-fill, 13rem); /* 2 */
    justify-content:initial;
    column-gap:3.5rem;
    row-gap:2.5rem;
  `

  return (
    <ul
        css={css`
            display:flex;
            flex-direction:column;
            justify-content:space-around;
            ${ hidden && 'display:none;' }
            @media (min-width: 801px) {
              ${ onPhone ? '' : desktopStyles  }
            }
        `}
    >
        {children}
    </ul>
  )
}

export default PedidosList