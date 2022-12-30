import * as React from "react";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import { Chip, Grid, } from "@mui/material";
import Typography from "@mui/material/Typography";

import moment from "moment";
import { Link } from "../Link";
import { PublicationType } from "../../data/@types/publication";

type Props = {
	publication: PublicationType,
}

const RecipeReviewCard: React.FC<Props> = ({ publication }) => {

	const { id, title, image_url,  createdAt } = publication;
	return (
		<Card
			sx={{
				maxWidth: {
					xs: "100%",
					md: 380,
				},
				backgroundColor:
					"rgb(255, 255, 255)",
				color: "rgb(30, 32, 34)",
				transition:
					"box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
				boxShadow:
					"rgba(140, 152, 164, 0.25) 0px 3px 6px 0px",
				overflow: "hidden",
				borderRadius: "8px",
				height: 460,
			}}
		>
			<Link href={`/Publication/${id}`}>
				<CardMedia
					component="img"
					height="300"
					image={image_url}
					alt="Paella dish"
				/>
			</Link>
			<CardContent>
				<Grid
					item
					xs={12}
					sx={{
						textAlign:
							"center",
					}}
				>
					<Grid
						item
						xs={12}
						sx={{
							display:
								"flex",
							flexFlow:
								"row wrap",
							alignItems:
								"center",
							justifyContent:
								"center",
							gap: "16px",
							lineHeight:
								"1.5",
							paddingBottom:
								"16px",
						}}
					>
						<Chip
							size="small"
							onClick={() => {
								console.log(
									"clicked",
								);
							}}
							label="Projeto"
							color="primary"
						/>
					</Grid>
					<Typography
						variant="body2"
						component={"p"}
					>
						Clara Bertoletti
						- {createdAt ? moment(createdAt).format("MM-YYYY") : ""}
					</Typography>					
					<Link
						href={`/Publication/${id}`}
						style={{
							justifyContent: 'center'
						}}
					>
						<Typography
							variant="h5"
							component="h3"
							style={{
								whiteSpace: "nowrap",
								overflow: "hidden",
								textOverflow: "ellipsis",
							}}
							color="initial"
						>
							{title}
						</Typography>

					</Link>
				</Grid>
			</CardContent>
		</Card>
	);
}

export default RecipeReviewCard
