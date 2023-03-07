import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Container from "@mui/material/Container";
import Typography from "../Typography";
import Divider from "@mui/material/Divider";
import CheckboxList from "../List";

// @ icons
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

// Branch office
function SocialNetworks() {
	return (
		<Box
			gap={2}
			display="flex"
			justifyContent="center"
			alignItems="center"
		>
			<Link
				target="_blank"
				href="https://wa.me/557781165042"
			>
				<WhatsAppIcon sx={{ color: '#ffc115' }} />
			</Link>
			<Link
				target="_blank"
				href="https://www.instagram.com/interfin.vitoriadaconquista/"
			>
				<InstagramIcon sx={{ color: '#ffc115' }} />
			</Link>
			<Link
				target="_blank"
				href="https://www.facebook.com/people/Elleve-Vitoria-da-Conquista-BA/100084598698393/"
			>
				<FacebookIcon sx={{ color: '#ffc115' }} />
			</Link>
		</Box>
	)
}

function Copyright() {
	return (
		<Box
			fontSize={13}
			fontWeight={400}
			display={"flex"}
			flexDirection={"column"}
			sx={{
				color: '#dfe2e2',
			}}
			textAlign={{
				xs: "center",
				sm: "center",
				md: "left",
				lg: "left",
			}}

		>
			<Link
				color="inherit"
				href="/"
				sx={{
					textDecoration: "none",
					marginBottom: 2,
				}}
			>
				{`${new Date().getFullYear()} Interfin Intermediação Financeira LTDA © `}
			</Link>
			<Typography variant="inherit">
				Matriz: Rua Maximiliano Fernandes 78 – Centro Vitória da<br /> Conquista – BA  –  CNPJ:42.979.043/0001-00
			</Typography>
			{/* <Typography variant="inherit">
				Filial: Rua 7 de Setembro 8 – Centro – Jequié – BA  –  CNPJ:42.979.043/0002-91
			</Typography> */}

		</Box>
	);
}

export default function AppFooter() {
	return (
		<Box
			component="footer"
			bgcolor={"#000000"}
			display={"flex"}
			alignItems={"center"}
			justifyContent={"center"}
			pb={3}
		>
			<Container sx={{
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				flexWrap: "wrap", 
			}}>
				<Grid
					container
					spacing={2}
					pt={6} 
				>
					<Grid
						item
						xs={12}
						gap={{
							xs: 2,
							sm: 0,
							md: 0,
							lg: 0,
						}}
						display="flex"
						flexWrap={"wrap"}
						alignItems={"center"}
						justifyContent="space-around"
					>
						<img
							src="/static/images/LogotipoInterfinPrincipal1.png"
							alt="Logotipo Interfin"
							style={{
								maxWidth: '197px',
								maxHeight: '183px',
							}}
						/>
						<CheckboxList />

					</Grid>

					<Divider
						orientation="horizontal"
						sx={{
							width: "100%",
							my: 2,
							borderColor: "#ffc115",
						}}
					/>
					<Grid
						item
						xs={12}
						spacing={1}
						display="flex"
						justifyContent={{
							xs: "center",
							sm: "center",
							md: "center",
							lg: "space-between",
						}}
						alignItems="center"
						flexWrap={"wrap"}
						sx={{
							minHeight: `50px`,
							gap: {
								xs: 2,
								sm: 2,
								md: 0,
							},
						}}
					>
						<Copyright />
						<SocialNetworks />
					</Grid>


				</Grid>
			</Container>
		</Box>
	);
}
