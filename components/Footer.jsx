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
	},
}));

export const Footer = () => {
	const classes = useStyles();
	return (
		<div className={classes.container}>
			<Container maxWidth="md">
				<Grid container spacing={3}>
					<Grid item xs={4}>
						<Typography className={classes.header} variant="h4">
							{"{ ps }"}
						</Typography>
						<Typography variant="caption">
							all rights reserved pretty sweet 2021
						</Typography>
					</Grid>
					<Grid item xs={4}>
						<Typography variant="caption">yo@prettysweet.io</Typography>
						<Typography variant="caption">Nashville, TN</Typography>
					</Grid>
					<Grid item xs={4}>
						<Typography variant="caption"></Typography>
					</Grid>
				</Grid>
			</Container>
		</div>
	);
};
