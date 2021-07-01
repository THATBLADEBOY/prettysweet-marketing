import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Image from "next/image";
import { Typography, Button, Container, Grid } from "@material-ui/core";
import { motion } from "framer-motion";
import { NavBar } from "./NavBar";

const useStyles = makeStyles(() => ({
	header: {
		fontWeight: 600,
		color: "black",
		marginTop: 24,
	},
	caption: {
		display: "block",
	},
	button: {
		marginTop: 16,
	},
	headerContainer: {
		height: "90vh",
		marginLeft: 24,
		marginRight: 24,
	},
}));

const Header = () => {
	const classes = useStyles();
	return (
		<>
			<NavBar />
			<Container maxWidth="lg">
				<Grid
					className={classes.headerContainer}
					container
					alignItems="center"
					spacing={3}
				>
					<Grid item xs={12} s={6}>
						<Typography variant="h1" className={classes.header}>
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
					<Grid item xs={12} s={6}>
						<motion.div
							animate={{
								y: [10, -10],
							}}
							transition={{ repeat: Infinity, repeatType: "reverse" }}
						>
							<Image
								src="/../public/static/img/cyborg-120.png"
								alt="Picture of the author"
								width="800"
								height="800"
							/>
						</motion.div>
					</Grid>
				</Grid>
			</Container>
		</>
	);
};

export default Header;
