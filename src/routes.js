import NotFound from "./Components/NotFound";
import HomePage from "./pages/Home/HomePage";

export const routes = [
	{ path: "", element: <HomePage /> },
	 {path:"*", element:<NotFound />} ,
];
