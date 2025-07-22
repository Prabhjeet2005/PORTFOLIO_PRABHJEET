import NavbarComponent from "./Components/Navbar/NavbarComponent";
import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
	return (
		<>
			<NavbarComponent />
			<section className="outlet">
				<Outlet />
			</section>
		</>
	);
}

export default App;
