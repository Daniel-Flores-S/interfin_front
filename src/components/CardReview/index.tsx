import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Grid, Box, Divider } from "@mui/material";
import { PublicationType } from "../../data/@types/publication";
import { Link } from "../Link";

type Props = { recent: PublicationType[] };

export default function ReviewCard({ recent }: Props) {

	return (
		<Grid
			item
			xs={12}
			md={4}
			sx={{
				backgroundColor: 'rgb(255, 255, 255)',
				border: '1px solid rgba(0, 0, 0, 0.12)',
				overflow: 'hidden',
				display: { xs: "none", md: "flex" },
				flexDirection: 'column',
				paddingLeft: '0.9rem',
			}}
		>
			<Box>
				<Divider
					sx={{
						borderBottom: "3px solid #000000",
						margin: '0.5rem 0 0.5rem 0',
						width: '91%',
					}}
				/>
				<Typography
					variant="h6"
					gutterBottom
					sx={{
						textTransform:
							"uppercase",
					}}
				>
					ÚLTIMAS Histórias
				</Typography>
			</Box>
			{
				Array.isArray(recent) && recent.map((item, key: number) => {
					return (
						<Card
							key={key}
							sx={{ display: "flex", mb: '1.6rem', }}
						>
							<Link href={`/Publication/${item.id}`}>
								<CardMedia
									component="img"
									image={item.image_url}
									alt="Paella dish"
									sx={{
										height: "133px",
										minWidth: '236px',
										width: "230px",
										objectFit: "cover",
										maxHeight: "8.313rem",
										borderRadius: "8px",
										filter: "none",
									}}
								/>
							</Link>
							<CardContent
								sx={{
									padding: "0.188rem 0.563rem !important",
									flexGrow: 1,
									display: "flex",
									flexDirection:
										"column",
									justifyContent:
										"space-between",
									alignItems:
										"flex-start",
									height: "133px",
								}}
							>
								<Typography
									variant="h6"
									color="text.secondary"
									sx={{
										"display": "-webkit-box",
										"-webkit-line-clamp": "2",
										"overflow": "hidden",
										fontSize: '1rem',
										maxWidth: 150,
										"-webkit-box-orient": "vertical",
									}}
								>
									{item.title}
								</Typography>
								<Typography
									variant="body1"
									component="p"
									color="text.secondary"
									sx={{
										margin: "0px",
										fontFamily:
											"Inter, sans-serif",
										fontWeight:
											"400",
										fontSize:
											"0.70rem",
										lineHeight:
											"1.66",
										color: "rgb(103, 119, 136)",
									}}
								>
									{item.createdAt}
								</Typography>
								<Link href={`/Publication/${item.id}`}>
									<Typography
										variant="body2"
										sx={{
											cursor: "pointer",
											textTransform:
												"none",
											fontFamily:
												"Inter, sans-serif",
											fontSize:
												"0.9rem",
											lineHeight:
												"1.75",
											minWidth:
												"64px",
											padding:
												"10px 5px",
											transition:
												"background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
											color: "rgb(55, 125, 255)",
											fontWeight:
												"400",
											borderRadius:
												"5px",
										}}
									>
										Mais informação
									</Typography>
								</Link>
							</CardContent>
						</Card>
					)
				})
			}
			{/* <OurTeamCard /> */}
		</Grid >
	);
}
