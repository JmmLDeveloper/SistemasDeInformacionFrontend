import { css } from '@emotion/react'
import React, { useState } from 'react'

function TabButtons({
    labels = ['Button A','Button B'],
    onChange = ( () => null ) ,
    defaultTab = 0
}) {

    const [tab,setTab] = useState(defaultTab)

    return (
        <div
            className='tab-buttons'
            css={css`
                border-radius: 0.5rem;
                background-color:#2E3445;
                display:grid;
                grid-template-columns: repeat(${labels.length},1fr);

                button.tab-btn {
                    padding : 0.2rem 0;
                    font-size:1.2rem ;
                    text-align:center;
                }

                button.active {
                    background-color:#1A202E;
                    color:#7BD7B8;
                }

                button.first {
                    border-radius: 0.5rem 0 0 0.5rem;
                }

                button.last {
                    border-radius: 0rem 0.5rem 0.5rems 0rem;
                }

                button.middle {
                    border-left: solid 1px #7BD7B8;
                    border-right: solid 1px #7BD7B8;
                }
            `}
        >
            {
                labels.map( (label,idx) => {

                    const first = idx == 0 ? 'first ' : '';
                    const middle = idx != 0 && idx != labels.length -1 ? 'middle' : ''
                    const last = idx == labels.length -1 ? 'last ' : ''
                    const active = idx == tab ? 'active ' : ''
                    
                    return (
                        <button

                            key={idx}
                            onClick={()=>{
                                setTab( idx )
                                onChange(idx)
                            }}
                            className={ [first,last,active,middle,'tab-btn'].join('') }
                        >
                            {label}
                        </button>
                    )
                })
            }
        </div>
    )
}

export default TabButtons