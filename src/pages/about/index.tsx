import {
	Box,
	Card,
	CardContent,
	CardMedia,
	Grid,
	Typography,
} from "@mui/material";
import type { GetServerSideProps, NextPage } from "next";
import { GridContainer } from "../../components/GridContainer";
import OurTeamCard from "../../components/OurTeamCard";
import React from "react";


const About: NextPage = () => {
	//const isSSR = typeof window === 'undefined';
	return (
		<Grid container>
			<GridContainer
				container
				sx={{
					minHeight: "30vh",
				}}
			/>
			<Grid
				item
				sx={{
					position: "relative",
					zIndex: "3",
					width: "100%",

				}}
			>
				<Box
					sx={{
						background:
							"#ffffff",
						borderRadius:
							"10px",
						width: "100%",
						paddingRight:
							"15px",
						paddingLeft:
							"15px",
						marginRight:
							"auto",
						marginLeft:
							"auto",
						minHeight:
							"160vh",
					}}
				>
					<Box
						minHeight={"80vh"}
						m={"0 auto"}
						p={"0 1rem"}
						borderRadius={"10px"}
						bgcolor={"#ffffff"}
					>
						<Card >
							<CardContent sx={{ display: "flex", mb: '1.6rem' }}>
								<Box
									sx={{
										width: '100%',
										maxWidth: '1158px',
										margin: '0 auto'
									}}
								>

									<CardMedia
										component="img"
										src={"/static/drawkit-illustration1.svg"}
										alt="Paella dish"
										sx={{
											height: "400px",
											minWidth: '300px',
											width: {
												xs: "100%",
												md: "50%",
											},
											xs: "0px",
											md: "-60px 1.5rem 0px",
											float: "right",
											objectFit: "cover",
											ml: 4,
											mb: 4,
											borderRadius: "10px",
											border: "1px solid rgb(235, 235, 235)",
											filter: "none",

										}}
									/>
									<Typography
										variant="body1"
										component={"span"}
										color="#677788"
									>
										<Typography
											variant="h3"
											color="#262626"
											mb={2}

										>
											Nossa história
										</Typography>

										Nosso foco é sempre encontrar as melhores pessoas para trabalhar. Nosso
										Nós projetamos e implementamos soluções criativas para problemas de
										negócios diários.
										Nós projetamos e implementamos soluções criativas para problemas de
										negócios diários.

										<br />

										Somos uma equipe de consultores criativos que ajudam a preencher a lacuna<br />
										digital entre as empresas e seus clientes com sites que não servem apenas<br />
										como plataformas de marketing, mas também fornecem soluções para<br />
										problemas de negócios on-line e estratégias de marketing digital que<br />
										conectam você ao cliente ideal e ajudam a criar um cliente leal.<br />
									</Typography>
									<Grid
										container
										xs={12}
									>
										<Grid
											item
											xs={12}
											sm={12}
											md={6}
											lg={6}
										>
											<Typography
												variant="h5"
												color="#262626"
												mb={2}

											>
												Nossa história
											</Typography>
											<Typography
												variant="body1"
												component={"p"}
												color="#677788"
											>
												Nosso cadastro é simples. Exigimos apenas as informações básicas da sua empresa
												e o tipo de armazenamento de dados que você deseja. Nossa inscrição é muito
												simples. Exigimos apenas as informações básicas da sua empresa e o tipo de
												armazenamento de dados que você deseja.
											</Typography>

										</Grid>
										<Grid
											item
											xs={12}
											sm={12}
											md={6}
											lg={6}
										>
											<Typography
												variant="h5"
												color="#262626"
												mb={2}
											>
												Nossa história
											</Typography>
											<Typography
												variant="body1"
												color="#677788"
												component={"p"}
											>
												Oferecemos suporte a upload em massa via SQL, integrações com a maioria dos produtos de
												armazenamento de dados ou você pode usar nossa API. Basta selecionar para onde gostaria de
												transferir seus dados e iniciaremos o processo de migração instantaneamente.
											</Typography>
										</Grid>
									</Grid>
								</Box>
							</CardContent>
						</Card>

					</Box>
					<OurTeamCard margin={"0"} />
				</Box>
			</Grid>
		</Grid >
	);
};

export default About;

export const getServerSideProps: GetServerSideProps = async ctx => {
	return {
		props: {},
	};
};