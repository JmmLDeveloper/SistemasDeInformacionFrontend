import { css } from '@emotion/react'
import React from 'react'
import {  Button, Icon } from '@mui/material';

function HomeWorker() {

      
  return (
		<div
			css={css`
				display: grid;
				place-items: center;
				align-items: center;
				height: 100vh;
				text-align: center;
				grid-template-rows: 80% 20%;
				background-image: url("src/assets/ScannerBackground.svg");
			`}
		>
			<div
				css={css`
					display: grid;
					gap: 20px;
					place-items: center;
					text-align: center;
					width: 100%;
					max-width: 300px;
				`}
			></div>
		</div>
	);
}

export default HomeWorker