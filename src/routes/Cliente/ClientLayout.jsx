import { css } from "@emotion/react";
import { Outlet } from "react-router-dom";
import BottomNavbar from "../../components/molecules/BottomNavbar";

const ClientLayout = () => {
	return (
		<div
			css={css`
				color:white;
			`}
		>
			<Outlet />
			<BottomNavbar isPhone={true} home="/cliente/home" tickets="/cliente/tickets" pedidos="/cliente/pedidos" />
		</div>
	);
};

export default ClientLayout
