import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Image from "next/image";
import { Typography, Button, Container, Grid } from "@material-ui/core";
import { motion } from "framer-motion";
import { NavBar } from "./NavBar";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import { ScrollingMessageBar } from "./ScrollingMessageBar";

const useStyles = makeStyles(() => ({
	header: {
		fontWeight: 900,
		color: "black",
		marginTop: (isDesktop) => (isDesktop ? 24 : 0),
		textAlign: (isDesktop) => (isDesktop ? null : "center"),
	},
	caption: {
		display: "block",
		textAlign: (isDesktop) => (isDesktop ? null : "center"),
	},
	button: {
		marginTop: 16,
		width: "100%",
		backgroundColor: "#00E5B3",
	},
	headerContainer: {
		minHeight: "90vh",
	},
}));

export const Header = () => {
	const theme = useTheme();
	const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
	const classes = useStyles(isDesktop);

	return (
		<>
			<NavBar />
			<ScrollingMessageBar />
			<Container maxWidth="xl">
				<Grid
					className={classes.headerContainer}
					container
					alignItems="center"
					direction={isDesktop ? null : "column-reverse"}
					justify="center"
					spacing={2}
				>
					<Grid item xs={12} md={6}>
						<Typography
							variant={isDesktop ? "h1" : "h3"}
							className={classes.header}
						>
							we bring your ideas to life.
						</Typography>
						<Typography className={classes.caption} variant="caption">
							<b>{"{ pretty sweet }"}</b> is a scrappy and experienced design
							and development team obsessed with your success
						</Typography>
						<Button className={classes.button} variant="outlined">
							CONTACT US
						</Button>
					</Grid>
					<Grid item xs={12} md={6}>
						<motion.div
							animate={{
								y: [10, -10],
							}}
							transition={{ repeat: Infinity, repeatType: "reverse" }}
						>
							<div>
								<Image
									src="/../public/static/img/cyborg-120.png"
									alt="robot head creating a lightbulb to represent bringing ideas to life"
									width={isDesktop ? "800" : "350"}
									height={isDesktop ? "800" : "350"}
								/>
							</div>
						</motion.div>
					</Grid>
				</Grid>
			</Container>
		</>
	);
};
