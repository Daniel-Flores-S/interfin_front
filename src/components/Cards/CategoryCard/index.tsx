import * as React from "react";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import { Chip, Grid, } from "@mui/material";
import Typography from "@mui/material/Typography";

import moment from "moment";
import { Link } from "../../Link";
import { SimplePublication } from "../../../data/@types/SimplePublication";

type Props = {
	publication: SimplePublication,
}

const CategoryCard: React.FC<Props> = ({ publication }) => {
	const { title, summary, id, user, image_url, category } = publication;
	return (
		<Card
			sx={{
				width: "100%",
				backgroundColor: "rgb(255, 255, 255)",
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
					alt={title}
				/>
			</Link>
			<CardContent>
				<Grid
					item
					xs={12}
					textAlign="center"
				>
					<Grid item xs={12} paddingBottom={2}>
						<Chip
							size="small"
							label={category}
							color="warning"
							sx={{
								color: "rgb(0, 0, 0)",
								fontWeight: "500",
							}}
						/>
					</Grid>
					{/* <Typography
						variant="body2"
						component={"p"}
					>
						{user}
						- {createdAt ? moment(createdAt).format("MM-YYYY") : ""}
					</Typography> */}
					<Link
						href={`/Publication/${id}`}
						style={{
							justifyContent: 'center'
						}}
					>
						<Typography variant="body2" color="text.secondary"
							sx={{
								"display": "-webkit-box",
								"-webkit-line-clamp": "3",
								"overflow": "hidden",
								"-webkit-box-orient": "vertical",
							}}
						>
							{summary}
						</Typography>
					</Link>
				</Grid>
			</CardContent>
		</Card>
	);
}

export default CategoryCard
