import { BreakSection, Header, ServicesSection, Footer } from "../components";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";

export default function Index() {
	const theme = useTheme();
	const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

	return (
		<main>
			<Header isDesktop={isDesktop} />
			<BreakSection isDesktop={isDesktop} />
			<ServicesSection isDesktop={isDesktop} />
			<Footer isDesktop={isDesktop} />
		</main>
	);
}
