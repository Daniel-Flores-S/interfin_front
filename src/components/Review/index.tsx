import * as React from "react";

// @mui/material
import AddIcon from "@mui/icons-material/Add";
import { Button, Grid, Typography } from "@mui/material";

// @Utils
import * as UT from "./utils";

export const Review: React.FC<UT.PropsReview> = (props) => {
	const { image, title, subTitle, btnText, Click } = props;
	return (
		<Grid
			container
			sx={{
				minHeight: {
					xs: "30vh",
					md: "75vh",
				},
				width: "100%",
				opacity: "1",
				background:
					`url(${image}) center top / cover transparent`,
				boxShadow: "none",
				display: "grid",
				"::before": {
					background:
						"linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.4) 100%)",
					content: '""',
					height: "100%",
					left: "0",
					position:
						"absolute",
					top: "0",
					width: "100%",
				},
			}}
		>

			<Grid
				item
				sx={{
					zIndex: "1",
					position:
						"relative",
					width: "90%",
					marginLeft:
						"auto",
					marginRight:
						"auto",
					display: { xs: "none", md: "flex" },
					flexDirection:
						"row",
					paddingLeft:
						"24px",
					paddingRight:
						"24px",
					alignItems:
						"center",
					marginTop: {
						xs: "50px",
						md: "0",
					},
					maxWidth: "1300px !important",
				}}
			>
				<Grid
					item
					sx={{
						width: {
							xs: "100%",
							md: "50%",
						},
						flex: {
							xs: "0 0 100%",
							md: "0 0 50%",
						},
						display:
							"flex",
						flexDirection:
							"column",
						gap: {
							xs: "3px",
							md: "24px",
						},
						textAlign: {
							xs: "justify",
							md: "left",
						},
					}}
				>
					<Typography
						variant="h2"
						sx={{
							color: "#ffffff",
							textAlign:
							{
								xs: "center",
								md: "left",
							},
							fontSize:
							{
								xs: "1.5rem",
								md: "2.2rem",
							},
						}}
					>
						{title}
					</Typography>
					<Typography
						variant="subtitle1"
						sx={{
							color: "#ffffff",
							fontWeight:
								"400",
							textAlign:
							{
								xs: "justify",
								md: "left",
							},
						}}
					>
						{subTitle}
					</Typography>
					<Button
						variant="contained"
						color="primary"
						onClick={Click}
						sx={{
							marginTop:
							{
								xs: "0",
								md: "24px",
							},
							padding: "12px 45px",
							width: {
								xs: "100%",
								md: "fit-content",
							},
						}}
						endIcon={
							<AddIcon />
						}
					>
						{btnText}
					</Button>
				</Grid>
			</Grid>
		</Grid>
	);
}
