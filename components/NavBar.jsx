import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
	AppBar,
	ThemeProvider,
	Typography,
	Toolbar,
	Button,
} from "@material-ui/core";

const useStyles = makeStyles(() => ({
	logo: {
		fontWeight: 600,
		color: "black",
	},
	appBar: {
		backgroundColor: "white",
		boxShadow: "none",
		borderBottom: "3px solid black",
	},
}));

export const NavBar = () => {
	const classes = useStyles();
	return (
		<AppBar className={classes.appBar} position="static">
			<Toolbar>
				<Typography variant="h4" className={classes.logo}>
					{"{ pretty sweet }"}
				</Typography>
			</Toolbar>
		</AppBar>
	);
};
