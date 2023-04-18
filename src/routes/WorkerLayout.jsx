import { css } from "@emotion/react";
import { Outlet } from "react-router-dom";
import BottomNavbar from "../components/molecules/BottomNavbar";

import Navbar from '../components/molecules/Navbar'

const WorkerLayout = () => {
	return (
		<div
			css={css`
				.outlet-wrapper {
					background-color: #0E1321;
					height: calc(100vh - 56px - 1rem);   
					margin-bottom: calc(56px + 1rem);
					background-color: #0E1321;
					color: white;
					overflow-y:scroll;
				}
				
				@media (min-width: 801px) {
					.outlet-wrapper {
						min-height: calc(100vh - 5rem);
						margin-bottom:0;	
					}
				}
			`}
		>
			<Navbar></Navbar>
			<div className="outlet-wrapper">
				<Outlet />
			</div>
			<BottomNavbar
				home="/dashboard/HomeWorker"
				tickets="/dashboard/HomeWorker/validate-boletos"
				pedidos="/dashboard/HomeWorker/Pedidos/scanner"
			/>
		</div>
	);
};

export default WorkerLayout;
