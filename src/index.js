import React from "react";
import ReactDOM from "react-dom/client";


import App from "./App";

import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import { routes } from "./routes";
import "./index.css"
import { HelmetProvider } from "react-helmet-async";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: routes,
	},
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<HelmetProvider>
		{/* 2. RouterProvider goes INSIDE */}
		<RouterProvider router={router} />
	</HelmetProvider>
);
