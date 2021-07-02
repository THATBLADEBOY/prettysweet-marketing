import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
	marquee: {
		height: 25,
		width: "100%",

		overflow: "hidden",
		position: "relative",
		"& $container": {
			display: "block",
			width: "200%",
			height: 30,

			position: "absolute",
			overflow: "hidden",

			animation: "$marquee 10s linear infinite",
		},
		"& $words": {
			float: "left",
			width: "50%",
		},
	},
	container: {
		minHeight: "2.25vh",
		backgroundColor: "#00E5B3",
		marginTop: "0.5vh",
	},
	words: {
		fontWeight: 600,
		color: "#02164b",
		fontStyle: "italic",
	},

	"@keyframes marquee": {
		"0%": {
			left: 0,
		},
		"100%": {
			left: "-100%",
		},
	},
}));

export const ScrollingMessageBar = () => {
	const classes = useStyles();

	return (
		<div className={classes.marquee}>
			<div className={classes.container}>
				<span className={classes.words}>
					ALWAYS LEARNING // ALWAYS GROWING // ALWAYS WINNING //{" "}
					{"{ pretty sweet }"}
				</span>
				<span className={classes.words}>
					ALWAYS LEARNING // ALWAYS GROWING // ALWAYS WINNING //{" "}
					{"{ pretty sweet }"}
				</span>
			</div>
		</div>
	);
};
