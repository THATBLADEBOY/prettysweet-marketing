import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Container, Grid } from "@material-ui/core";

const useStyles = makeStyles(() => ({
	header: {
		fontWeight: 600,
		marginBottom: 8,
	},
	container: {
		borderTop: "3px solid black",
		marginTop: 48,
		backgroundColor: "white",
	},
}));

export const Footer = () => {
	const classes = useStyles();
	return (
		<div className={classes.container}>
			<Container maxWidth="xl">
				<Grid container alignItems="center" justify="space-between" spacing={3}>
					<Grid item xs={4}>
						<Typography className={classes.header} variant="h4">
							{"{ ps }"}
						</Typography>
					</Grid>
					<Grid item xs={4}>
						<Typography variant="caption">
							built with 🤟 by <b>{"{ ps }"}</b>
						</Typography>
					</Grid>
					<Grid item xs={4}>
						<Typography variant="caption">yo@prettysweet.io</Typography>
					</Grid>
				</Grid>
			</Container>
		</div>
	);
};
