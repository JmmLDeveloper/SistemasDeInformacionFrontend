import React, { useState } from "react";
import { BottomNavigation, BottomNavigationAction, css, Paper, Typography } from "@mui/material";
import { ReactComponent as Food } from "../../assets/icons/Food.svg";
import { ReactComponent as Home } from "../../assets/icons/Home.svg";
import { ReactComponent as Ticket } from "../../assets/icons/Ticket.svg";
import { useNavigate } from "react-router-dom";

function BottomNavbar(props) {

	const styles={
		navbar:{
			background:'#1D2334',
		},
		text:{
			color:'#DEBF4E',
		},
	};
	const [value, setValue] = useState(0);

	const navigate=useNavigate();

	const handleHome = () => {
		navigate(props.home);
	}
	
	const handleTickets =() =>{
		navigate(props.tickets);
	}

	const handlePedidos = () => {
		navigate(props.pedidos);
	}

	return (
		<Paper
			css={css`
				@media (min-width: 801px) {
					${ props.isPhone ? '' : 'display:none;' }
				}
				border-radius:0;
				background-color:#1D2334;
				padding: 0.5rem 0rem;
			`}
			sx={{  position: 'fixed', bottom: 0, left: 0, right: 0}}
		>	
			<BottomNavigation 
				showLabels
				value={value}
				style={styles.navbar}
				onChange={(event, newValue) => {
					setValue(newValue);
				}}
			>
				<BottomNavigationAction
					style={styles.navbar}
					
					label={<Typography style={styles.text}>Home</Typography>}
					icon={<Home stroke="#DEBF4E" />} /* fill solo */
					onClick={handleHome}
				/>
				<BottomNavigationAction
					label={<Typography style={styles.text}>Boletos</Typography>}
					onClick={handleTickets}
					icon={<Ticket fill="#DEBF4E" stroke="#DEBF4E" />}
				/>
				<BottomNavigationAction
				
					label={<Typography style={styles.text}>Pedidos</Typography>}
					onClick={handlePedidos}
					icon={	<Food fill="#DEBF4E" />	}
				/>
			</BottomNavigation>
		</Paper>
	);
}

export default BottomNavbar;
