import { BreakSection, Header, ServicesSection, Footer } from "../components";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
	main: {
		backgroundImage: "url(/static/img/grit_background.svg)",
		backgroundSize: "700px 490px",
	},
}));

export default function Index() {
	const theme = useTheme();
	const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
	const classes = useStyles();

	return (
		<main className={classes.main}>
			<Header isDesktop={isDesktop} />
			<BreakSection isDesktop={isDesktop} />
			<ServicesSection isDesktop={isDesktop} />
			<Footer isDesktop={isDesktop} />
		</main>
	);
}
