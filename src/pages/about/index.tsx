import React from "react";

// @Types
import type { GetServerSideProps, NextPage } from "next";

// @mui
import { Box, Card, CardContent, CardMedia, Grid, Typography, } from "@mui/material";

// @Components
import { GridContainer } from "../../components/GridContainer";


const About: NextPage = () => {
	return (
		<Grid container>
			<GridContainer
				container
				sx={{ minHeight: "30vh" }}
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
						background: "#ffffff",
						borderRadius: "10px",
						width: "100%",
						paddingRight: "15px",
						paddingLeft: "15px",
						marginRight: "auto",
						marginLeft: "auto",
						minHeight: "95vh",
					}}
				>
					<Box
						minHeight={"80vh"}
						m={"0 auto"}
						p={{
							xs: "0",
							md: "0 1rem",
						}}
						borderRadius={"10px"}
						bgcolor={"#ffffff"}
						mb={4}
					>
						<Card sx={{ background: "#ffffff" }} >
							<CardContent sx={{
								display: "flex",
								mb: '1.6rem',
								p: {
									xs: "10px 0",
									md: "0 1rem",
								}
							}}

							>
								<Box
									sx={{
										width: '100%',
										maxWidth: '1158px',
										margin: '1% auto'
									}}
								>

									<CardMedia
										component="img"
										//src={"/static/2Logotipo-PNG/Isologo/Principal.png"}
										src="/static/drawkit-illustration1.svg"
										alt="Interfin logo principal"
										sx={{
											height: "400",
											minWidth: '100px',
											width: {
												xs: "100%",
												md: "30%",
											},
											xs: "0px",
											md: "-60px 1.5rem 0px",
											float: "right",
											objectFit: "cover",
											ml: 4,
											mb: 4,
											borderRadius: "10px", 
											filter: "none",

										}}
									/>
									<Typography
										variant="body1"
										component={"span"}
										color="#677788"
										textAlign="justify"
									>
										<Typography
											variant="h3"
											color="#262626"
											mb={2}
											textAlign={{
												xs: "center",
												md: "left",
											}}
										>
											Nossa hist??ria
										</Typography>

										Nosso foco ?? sempre encontrar as melhores pessoas para trabalhar. Nosso
										N??s projetamos e implementamos solu????es criativas para problemas de
										neg??cios di??rios.
										N??s projetamos e implementamos solu????es criativas para problemas de
										neg??cios di??rios.

										<br />

										Somos uma equipe de consultores criativos que ajudam a preencher a lacuna<br />
										digital entre as empresas e seus clientes com sites que n??o servem apenas<br />
										como plataformas de marketing, mas tamb??m fornecem solu????es para<br />
										problemas de neg??cios on-line e estrat??gias de marketing digital que<br />
										conectam voc?? ao cliente ideal e ajudam a criar um cliente leal.<br />
									</Typography>
									{/* <Grid
										container
										xs={12}
										textAlign={{
											xs: "center",
											md: "left",
										}}
										mt={4}
										gap={2}
										justifyContent="space-between"
									>

										<Grid item xs={12} textAlign="justify">
											<Typography
												variant="h5"
												color="#262626"
												mb={2}
												textAlign={{
													xs: "center",
													md: "left",
												}}
											>
												Distribui????o
											</Typography>
											<Typography
												variant="body1"
												color="#677788"
												component={"p"}

											>
												A distribui????o de um site ?? o processo de torn??-lo acess??vel na internet. Isso envolve a hospedagem do site em um servidor e a configura????o de um dom??nio, que ?? o endere??o pelo qual os usu??rios podem acessar o site.

												Existem v??rias op????es de hospedagem dispon??veis, incluindo servidores compartilhados, VPS (Virtual Private Server) e servidores dedicados. Cada op????o tem suas pr??prias vantagens e desvantagens, como pre??o, desempenho e recursos. ?? importante escolher a op????o que melhor atenda ??s necessidades do seu site.

												Al??m disso, ?? preciso registrar um dom??nio para o seu site. Isso pode ser feito atrav??s de um registrador de dom??nio, que ?? uma empresa que vende nomes de dom??nio. Existem v??rias extens??es dispon??veis, como .com, .net e .org, cada uma com suas pr??prias regras e restri????es.

												Uma vez que o site est?? hospedado e tem um dom??nio, ele estar?? dispon??vel para ser acessado pelos usu??rios na internet. No entanto, ?? importante lembrar de continuar mantendo e atualizando o site para garantir que ele esteja sempre funcionando corretamente e fornecendo a melhor experi??ncia poss??vel para os usu??rios.
											</Typography>
										</Grid>
									</Grid> */}
								</Box>
							</CardContent>
						</Card>
					</Box>
				</Box>
			</Grid>
		</Grid >
	);
};

export default About;

export const getServerSideProps: GetServerSideProps = async () => {
	return {
		props: {},
	};
};