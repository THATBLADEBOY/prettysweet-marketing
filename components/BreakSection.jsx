import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Container, Grid } from "@material-ui/core";
import Image from "next/image";

const useStyles = makeStyles(() => ({
	breakContainer: {
		paddingTop: 36,
		paddingBottom: 36,
		marginTop: 32,
		marginBottom: 32,
		backgroundColor: "black",
	},
	text: {
		color: "white",
		fontWeight: 600,
	},
	subText: {
		color: "white",
		maxWidth: 500,
	},
}));

export const BreakSection = ({ isDesktop }) => {
	const classes = useStyles();
	return (
		<Grid container justify="center" className={classes.breakContainer}>
			<Grid item>
				<Typography className={classes.text} variant="h2">
					we like products with personality.
				</Typography>
				<Typography className={classes.subText} variant="body1">
					code and pixels are just part of the story. we listen to understand
					your story, your challenges, and your vision. we want to be part of
					your triumph story and create something that represents you, as we
					navigate the treacherous waters between ‘compelling idea’ and
					‘exceptional product’
				</Typography>
			</Grid>
		</Grid>
	);
};
