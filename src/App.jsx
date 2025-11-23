import { useEffect } from "react";
import NavbarComponent from "./Components/Navbar/NavbarComponent";
import { Outlet } from "react-router-dom";
import "./App.css";

// Import the new libraries and component
import Lenis from "lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import ThreeBackground from "./Components/ThreeBackground";

function App() {
	useEffect(() => {
		// --- SETUP SMOOTH SCROLL (LENIS) ---
		const lenis = new Lenis({
			duration: 1.2,
			easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
			smoothWheel: true,
		});

		// Synchronize Lenis scroll with GSAP ScrollTrigger
		lenis.on("scroll", ScrollTrigger.update);

		// Add Lenis to the animation frame loop
		gsap.ticker.add((time) => {
			lenis.raf(time * 1000);
		});

		// Turn off GSAP's default lag smoothing to prevent stutter
		gsap.ticker.lagSmoothing(0);

		// Cleanup function
		return () => {
			gsap.ticker.remove(lenis.raf);
			lenis.destroy();
		};
	}, []);

	return (
		<>
			{/* The 3D Background stays fixed behind everything */}
			<ThreeBackground />

			<NavbarComponent />
			<section className="outlet">
				<Outlet />
			</section>
		</>
	);
}

export default App;
