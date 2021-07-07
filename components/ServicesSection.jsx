import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Container, Grid } from "@material-ui/core";
import Image from "next/image";

const useStyles = makeStyles(() => ({
	header: {
		fontWeight: 600,
		marginBottom: 8,
	},
	item: {
		border: "3px solid black",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
	},
}));

export const ServicesSection = () => {
	const classes = useStyles();
	return (
		<>
			<Container maxWidth="xl">
				<Grid justify="center" container spacing={5}>
					<Grid item container xs={12} md={4}>
						<Grid item container alignItems="center" className={classes.item}>
							<Grid item>
								<Image
									src="/static/img/cyborg-106.png"
									width="200"
									height="200"
								/>
							</Grid>
							<Grid item>
								<Typography className={classes.header} variant="h5">
									{"{ e-commerce }"}
								</Typography>
							</Grid>
							<Grid item>
								<Typography variant="body1">
									online stores make up most of the internet. we think we're
									really good at building them.
								</Typography>
							</Grid>
						</Grid>
					</Grid>
					<Grid container item xs={12} md={4}>
						<Grid item container alignItems="center" className={classes.item}>
							<Grid item>
								<Image
									src="/static/img/cyborg-116.png"
									width="200"
									height="200"
								/>
							</Grid>
							<Grid item>
								<Typography className={classes.header} variant="h5">
									{"{ custom solutions }"}
								</Typography>
							</Grid>

							<Grid item>
								<Typography variant="body1">
									if it deals with software, we can do it. website? done. custom
									app? done. automated processes? done. we are only limited by
									your imagination.
								</Typography>
							</Grid>
						</Grid>
					</Grid>
					<Grid item xs={12} md={4}>
						<Grid item container alignItems="center" className={classes.item}>
							<Grid item>
								<Image
									src="/static/img/cyborg-78.png"
									width="200"
									height="200"
								/>
							</Grid>

							<Grid item>
								<Typography className={classes.header} variant="h5">
									{"{ branding }"}
								</Typography>
							</Grid>

							<Grid item>
								<Typography variant="body1">
									from logos to complete branding style and design guides, we
									have the power to make your brand look good.. real good.
								</Typography>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Container>
		</>
	);
};
