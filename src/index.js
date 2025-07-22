import React from "react";
import ReactDOM from "react-dom/client";


import App from "./App";

import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import { routes } from "./routes";
import "./index.css"

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: routes,
	},
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<RouterProvider router={router}>
		<App />
	</RouterProvider>
);
