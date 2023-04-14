import React, { useState } from 'react'
import { css } from '@emotion/react'
import LayoutSuperior from '../../components/molecules/LayoutSuperiorPedidos';
import './css/card1.css'

import imagen from './css/cine.jpeg'
import imagen1 from './css/savoychocos.jpg'
import imagen2 from './css/megacombo.jpg'
import PedidosList from '../../components/molecules/PedidosList';
import Pedido from '../../components/molecules/Pedido';
import TabButtons from '../../components/atoms/TabButtons';

import pedidos from '../../data/pedidos';

function PedidosCliente() {

  const [tab,setTab] = useState(0)


  return (
      <div
        css={css`  
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          height: calc(100vh - 56px - 1rem);
          overflow-y:scroll;
          background-color: #0E1321;
          button {
            color:white;
            font-size:1.4rem;
          }

          .hidden {
            display:none;
          }

        `}
      
      >
        <LayoutSuperior nombre="Pedidos" /> 
        <div css={css`
          padding:0;
          align-self:stretch;
        `}>
          
          <div
            css={css`
              margin: 2rem 2rem 1rem;
            `}
          >
            <TabButtons
              onChange={ (t) => setTab(t)}
              labels={['Disponible','Pendientes']} 
              defaultTab={1}
            />
          </div>
          <div
            css={css`
              padding: 0 2rem;  
              margin-bottom:1rem;
            `}
          >            
            <PedidosList hidden={tab != 0 } onPhone={true}>
                {
                  pedidos.map( (p,idx) => ( 
                    <li key={idx}  ><Pedido onPhone={true} imgSource={p.img} name={p.name} /></li>  
                  ))
                }
            </PedidosList>
            <PedidosList hidden={tab != 1 } onPhone={true}>
                {
                  pedidos.reverse().map( (p,idx) => ( 
                    <li key={idx}  ><Pedido onPhone={true} imgSource={p.img} name={p.name} /></li>  
                  ))
                }
            </PedidosList>
          </div>

          <div className="container1 hidden">
            
            <div className="card1">
              <div className="div1">
                <div className="ima">
                  <img src={imagen}></img>
                </div>
              </div>
              <div className="div2">
                <h4>combo familiar</h4>
                <p>cripetas grandes 230 gr bebidad grandes 798ml</p>
                
                <div className="a1">
                  <a href="#">cantidad:  05</a>
                </div>
              </div>
            </div>
            
            <div className="card2">
              <div className="div1">
                <div className="ima">
                  <img src={imagen}></img>
                </div>
              </div>
              <div className="div2">
                <h4>combo familiar</h4>
                <p>cripetas grandes 230 gr bebidad grandes 798ml</p>
                
                <div className="a1">
                  <a href="#">cantidad:  2</a>
                </div>
              </div>
              
              <div className='div1_1'>

                <div className="ima">
                  <img src={imagen1}></img>
                </div>

              </div>
              <div className='div1_2'>

                <h4>chocolates savoy</h4>
                <p>chocolate de 250 gr </p>
                
                <div className="a1">
                  <a href="#">cantidad:  1</a>
                </div>

              </div>

            </div>
            
            
            
            <div className="card1">
              <div className="div1">
                <div className="ima">
                  <img src={imagen2}></img>
                </div>
              </div>
              <div className="div2">
                <h4>megacombo</h4>
                <p>cripetas grandes 500 gr bebidad grandes 798ml y tequeños</p>
                
                <div className="a1">
                  <a href="#">cantidad:  05</a>
                </div>
              </div>
            </div>
            

          </div>
        </div>
      </div>
    )
  }

export default PedidosCliente;