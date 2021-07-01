import NavBar from "../components/NavBar";
import Header from "../components/Header";
import { ServicesSection } from "../components/ServicesSection";
import { Footer } from "../components/Footer";
import { BreakSection } from "../components/BreakSection";

export default function Index() {
	return (
		<main>
			<Header />
			<BreakSection />
			<ServicesSection />
			<Footer />
		</main>
	);
}
