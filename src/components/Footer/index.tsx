import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Container from "@mui/material/Container";
import Typography from "../Typography";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

function Copyright() {
	return (
		<Box
			style={{
				display: "flex",
				justifyContent:
					"center",
				alignItems: "center",
				marginBottom: "1.5rem",
				fontWeight: "bold",
			}}
			flexDirection={{
				xs: "column",
				sm: "row",
			}}
		>
			<Link
				color="inherit"
				href="/"
				sx={{
					textDecoration:
						"none",
				}}
			>
				{`© ${new Date().getFullYear()} Interfin - `}
			</Link>{" "}
			Todos os direitos reservados
		</Box>
	);
}

export default function AppFooter() {
	return (
		<Typography
			component="footer"
			sx={{
				display: "flex",
				backgroundColor: "#d2d2d2",
				width: "100%",
				marginTop: "10px",
			}}
		>
			<Container
				sx={{
					my: 5,
					display: "flex",
				}}
			>
				<Grid container>
					<Grid
						item
						xs={12}
						mb={3}
					>
						<Typography
							variant="subtitle1"
							marked="center"
							align="center"
							gutterBottom
						>
							Siga nas
							redes
							sociais
						</Typography>
						<Box
							gap={2}
							display="flex"
							justifyContent="center"
							color={
								"inherit"
							}
						>
							<Link
								target="_blank"
								href="https://wa.me/557781165042"
								color={
									"inherit"
								}
								sx={{
									"&:hover":
									{
										color: "primary.main",
									},
								}}
							>
								<WhatsAppIcon
									sx={{
										width: 25,
										height: 25,
									}}
								/>
							</Link>
							<Link
								target="_blank"
								href="https://www.instagram.com/elleve.vitoriadaconquista/"
								color={
									"inherit"
								}
								sx={{
									"&:hover":
									{
										color: "primary.main",
									},
								}}
							>
								<InstagramIcon
									sx={{
										width: 25,
										height: 25,
									}}
								/>
							</Link>
							<Link
								target="_blank"
								href="https://www.facebook.com/people/Elleve-Vitoria-da-Conquista-BA/100084598698393/"
								color={
									"inherit"
								}
								sx={{
									"&:hover":
									{
										color: "primary.main",
									},
								}}
							>
								<FacebookIcon
									sx={{
										width: 25,
										height: 25,
									}}
								/>
							</Link>
						</Box>
					</Grid>
					<Grid item xs={12}>
						<Copyright />
					</Grid>
				</Grid>
			</Container>
		</Typography>
	);
}
