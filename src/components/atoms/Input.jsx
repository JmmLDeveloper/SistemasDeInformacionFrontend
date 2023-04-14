import { css } from "@emotion/react"
import React, { useState } from "react"

function Input({id,name,type = 'text'}) {

    const [value,setValue] = useState('')
  
    return (
      <div
        className='text-input'
        css={css`
          height: 3rem;
          color:#C2C2C2;
          font-family: 'Roboto', sans-serif;
          border-radius:0.3rem;
          border:solid #C2C2C2 1px;
          position:relative;
          display:flex;
          justify-content:flex-start;
          align-items:center;
          margin-bottom: 1.6rem ; 
  
          input,label {
            font-family: 'Roboto', sans-serif;
            color:#C2C2C2;
            border:none;
            outline:none;
            background-color:transparent;
          }
  
          input {
            margin:0 1rem;
            height:100%;
  
            font-size:1rem;
          }
          
          label {
            position:absolute;
            top:0;  
            left:0;
            right:0;
            bottom:0;
            display:flex;
            justify-content:ceter;
            align-items:center;
            z-index:1;
            pointer-events:none;
          }
  
          .text {
  
            transition: all 200ms cubic-bezier(0.0, 0, 0.2, 1);
            background-color-trasnparent;
            background-color:#0E1321;
          }
  
          .text {
            margin-left:0.5rem;
            padding:0.2rem 0.5rem;
            padding-bottom:0;
  
  
          }
  
          :focus-within .text , .with-text {
            transform: translate(0,-1.6rem);
            font-size:0.9rem;
          }
  
          
  
        `}
      >
        <input type={type} value={value} onChange={(ev)=>setValue(ev.target.value)} id={id} />
        <label htmlFor={id}>
          <div className={  value ? 'text with-text'  : 'text'} > 
            {name}
          </div>
        </label>
      </div>
    )
  }

export default Input