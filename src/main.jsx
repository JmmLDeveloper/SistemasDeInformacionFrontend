import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";



import HomeWorker from "./routes/Trabajador/HomeWorker";
import HomeCliente from "./routes/Cliente/HomeCliente";
import PedidosCliente from "./routes/Cliente/PedidosCliente";
import TicketsCliente from "./routes/Cliente/TicketsCliente";
import Index from "./routes/Index";
import LoginCliente from "./routes/Cliente/LoginCliente";
import LoginTrabajador from "./routes/Trabajador/LoginTrabajador";
import CodigoQRBoletos from "./routes/Cliente/CodigoQRBoletos";
import CodigoQRPedidos from "./routes/Cliente/CodigoQRPedidos";
import BoletosWorker from "./routes/Trabajador/BoletosWorker";
import BoletosInfo from "./routes/Trabajador/BoletosInfo";
import PedidosWorkers from "./routes/Trabajador/PedidosWorkers";
import PedidosScan from "./routes/Trabajador/PedidosScan";
import PuestosCliente from "./routes/Cliente/PuestosCliente";
import Ordenes from "./routes/Trabajador/Ordenes/Ordenes";
import PedidoSeeMore from "./routes/Trabajador/Ordenes/PedidoSeeMore";

import ClientLayout from "././routes/Cliente/ClientLayout";
import WorkerLayout from "././routes/WorkerLayout";

import "./index.css";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Index/>
	},
	{
		path: "/dashboard",
		
		element: <WorkerLayout />,

		children: [
			{ path: "HomeWorker", element: <HomeWorker /> },
			{ path: "HomeWorker/validate-boletos", element: <BoletosWorker /> },
			{ path: "HomeWorker/validate-boletos/info", element: <BoletosInfo />},
			{ path: "HomeWorker/Pedidos", element:<PedidosWorkers />},
			{ path: "HomeWorker/Pedidos/scanner",element:<PedidosScan /> },
			{ path: "HomeWorker/ordenes",element:<Ordenes /> },
			{ path: "HomeWorker/ordenes/see-more",element:<PedidoSeeMore /> },
		],
	},
	
	{
		path: "/cliente",
		element: <ClientLayout />,
		children: [
			{ path: "home", element: <HomeCliente /> },
			{ path: "pedidos", element: <PedidosCliente /> },
			{ path: "tickets", element: <TicketsCliente /> },
			{path: "tickets/puestos", element: <PuestosCliente />},
			{ path: "tickets/qr", element: <CodigoQRBoletos/>},
			{path:"pedidos/qr",element:<CodigoQRPedidos /> },
		],
	},
  {
    path:'/login/cliente',
    element: <LoginCliente />,
  },
  {
    path:'/login/trabajador',
    element: <LoginTrabajador />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
