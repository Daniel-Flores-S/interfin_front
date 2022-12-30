import { FC } from "react";
import {
	Box,
	Button,
	Chip,
	Container,
	Grid,
	useMediaQuery,
} from "@mui/material";

import moment from "moment";
import { Link } from "../Link";
import Typography from "../Typography";

type Props = {
	id?: string;
	title: string;
	reverse?: boolean;
	image: string;
	text: string;
	createdAt?: string;
};

const Publications: FC<Props> = ({
	id,
	reverse,
	image,
	title,
	text,
	createdAt
}) => {
	const matches = useMediaQuery(
		"(max-width:570px)",
	);	

	return (
		<Container
			component="section"
			sx={{
				mt: 8,
				pb: 4,
			}}
		>
			<Box
				sx={{
					mt: 8,
					display: "flex",
					flexWrap: "wrap",
				}}
			>
				<Grid
					container
					sx={{
						boxSizing:
							"border-box",
						display: "flex",
						flexFlow:
							"row wrap",
						marginTop:
							"-32px",
						width: "calc(100% + 32px)",
						flexDirection:
							reverse === true
								? "row-reverse"
								: "row",
					}}
				>
					<Grid
						item
						xs={12}
						sm={6}
						md={6}
						sx={{
							paddingLeft:
								"32px",
							paddingRight:
								"32px",

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
							<Chip
								size="small"
								onClick={() => {
									console.log(
										"clicked",
									);
								}}
								label="Temas"
								color="primary"
							/>
							<Chip
								size="small"
								onClick={() => {
									console.log(
										"clicked",
									);
								}}
								label="Fotografia"
								color="primary"
							/>
						</Grid>
						<Grid
							item
							xs={12}
							sx={{
								paddingBottom:
									"16px",
							}}
						>
							<Typography
								variant="h5"
								component="h3"
								sx={{
									fontSize:
										"1.25rem",
									margin: "0px",
									fontFamily:
										"Inter, sans-serif",
									lineHeight:
										"1.6",
									fontWeight:
										"700",
									textTransform:
										"uppercase",
								}}
							>
								{title}
							</Typography>
						</Grid>
						<Grid
							item
							xs={12}
							sx={{
								paddingBottom:
									"16px",
							}}
						>
							<Typography
								variant="body2"
								component={
									"p"
								}
							>
								Clara
								Bertoletti
								- {createdAt ? moment(createdAt).format("LLL") : ""}
							</Typography>
						</Grid>
						<Grid
							item
							xs={12}
							display={"flex"}
							flexDirection={"column"}
							justifyContent={"space-between"}
							gap={2}
							sx={{
								mb: {
									xs: "1.5rem",
									md: 0,
								},
							}}
						>
							<Typography
								variant="body1"
								component="p"
								sx={{
									display: '-webkit-box',
									WebkitLineClamp: '5',
									overflow: 'hidden',
									WebkitBoxOrient: 'vertical'
								}}
							>
								{text}
							</Typography>
							<Link href={`/Publication/${id}`} >
								<Button
									variant="outlined"
									color="primary"
									size="small"
									sx={{
										display:
											"flex",
										justifyContent:
											"flex-end",
									}}
								>
									Mais informação
								</Button>
							</Link>
						</Grid>
					</Grid>
					<Grid
						item
						xs={12}
						sm={6}
						md={6}
						sx={{
							filter: "blur(0)",
							transition:
								"filter .3s",
							height: "100%",
							cursor: "pointer",
						}}
					>
						<Link href={`/Publication/${id}`}>

							<img
								src={image}
								alt="img3"
								loading="lazy"
								style={{
									height: matches
										? "fit-content"
										: "100%",
									width: "100%",
									objectFit:
										"cover",
									maxHeight:
										"360px",
									borderRadius:
										"8px",
									filter: "none",
								}}
							/>
						</Link>
					</Grid>
				</Grid>
			</Box>
		</Container>
	);
};
export default Publications;
