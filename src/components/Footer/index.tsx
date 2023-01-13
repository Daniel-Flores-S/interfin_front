import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Container from "@mui/material/Container";
import Typography from "../Typography";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import Image from "next/image";
import Divider from "@mui/material/Divider";
import CheckboxList from "../List";
import { Button } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// Branch office
function BranchesOffice() {
	return (
		<Box
			display={"Block"}
			sx={{ display: "flex", flexDirection: "column", alignItems: "center", }}
		>
			<Box>
				<Typography variant="body2" color="text.widget" align="center">
					Matriz
				</Typography>
				<Typography variant="body2" color="text.widget" align="center">
					Matriz: R. Maximiliano Fernandes 78 – Centro Vitória da Conquista – BA  –  CNPJ:42.979.043/0001-00
				</Typography>
			</Box>


			<Box
				display={"Block"}
			>
				{/* Filial */}
				<Typography variant="body2" color="text.widget" align="center">
					Filial
				</Typography>
				<Typography variant="body2" color="text.widget" align="center">
					R. 7 de Setembro 8 – Centro – Jequié – BA  –  CNPJ:42.979.043/0002-91
				</Typography>
			</Box>
		</Box>
	)
}

function Copyright() {
	return (
		<Box
			// 	font-size: 16px;
			// font-weight: 400;
			// color: #fff;
			color="text.widget"
			fontSize={16}
			fontWeight={400}
			display={"flex"}
			flexDirection={"column"}
			alignItems={"center"}
			
		>
			<Link
				color="inherit"
				href="/"
				sx={{ textDecoration: "none", }}
			>
				{/*INTERFIN INTERMEDIAÇÃO FINANCEIRA  LTDA */}
				{`© ${new Date().getFullYear()} Interfin Intermediação Financeira LTDA`}
			</Link>
			<Divider
				orientation="vertical"
				flexItem
				sx={{ mx: 1, }}
			/>
			<BranchesOffice />
		</Box>
	);
}

export default function AppFooter() {
	return (
		<Box
			component="footer"
			bgcolor={"background.paper"}
			display={"flex"}
		>
			<Container sx={{ my: 5, display: "flex", height: 400 }}>
				<Grid container>
					<Grid item xs={12} display="flex" alignItems={"center"}>
						<Button
							variant="outlined"
							sx={{
								border: '4px solid #00a857',
								maxWidth: '197px',
								maxHeight: '183px',
								color: "#ffffff",

								borderRadius: "0",
								display: "flex",
								flexDirection: "column",
								alignItems: "flex-end",
							}}
						>
							<Typography
								variant="h6"
								align="center"
								color="text.primary"
								gutterBottom

								sx={{
									color: '#fff',
									fontSize: '16px',
									fontWeight: '700',
									letterSpacing: '-.89px',
									lineHeight: '1.3',
									textAlign: 'left',
									padding: '20px 20px 0',

								}}
							>
								Conheça os nossos serviços e
								faça parte da Interfin, a melhor
								opção para você!
							</Typography>
							<ArrowForwardIcon
								sx={{
									color: '#fff',
									fontSize: '30px',
									fontWeight: '700',
									letterSpacing: '-.89px',
									lineHeight: '1.3',
									textAlign: 'left',
									marginTop: '10px',
								}}
							/>


						</Button>
						<CheckboxList />
					</Grid>

					<Divider
						orientation="horizontal"
						//flexItem
						sx={{ width: "100%", }}
					/>

					<Grid item xs={12} display="flex" alignItems={"center"}>
						<Image
							src="/static/images/LogotipoInterfinPrincipal1.png"
							alt="Logotipo Interfin"
							width={100}
							height={80}
						/>
						<Copyright />
					</Grid>
					{/* <Grid item xs={12} mb={3}>
						<Typography
							variant="subtitle1"
							marked="center"
							align="center"
							gutterBottom
						>
							Siga nas redes sociais
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
					</Grid> */}
				</Grid>
			</Container>
		</Box>
	);
}
