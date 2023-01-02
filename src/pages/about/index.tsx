import React from "react";

// @Types
import type { GetServerSideProps, NextPage } from "next";

// @mui
import { Box, Card, CardContent, CardMedia, Grid, Typography, } from "@mui/material";

// @Components
import { GridContainer } from "../../components/GridContainer";
import OurTeamCard from "../../components/OurTeamCard";


const About: NextPage = () => {
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
						p={{
							xs: "0",
							md: "0 1rem",
						}}
						borderRadius={"10px"}
						bgcolor={"#ffffff"}
						mb={4}
					>
						<Card >
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
												Distribuição
											</Typography>
											<Typography
												variant="body1"
												color="#677788"
												component={"p"}

											>
												A distribuição de um site é o processo de torná-lo acessível na internet. Isso envolve a hospedagem do site em um servidor e a configuração de um domínio, que é o endereço pelo qual os usuários podem acessar o site.

												Existem várias opções de hospedagem disponíveis, incluindo servidores compartilhados, VPS (Virtual Private Server) e servidores dedicados. Cada opção tem suas próprias vantagens e desvantagens, como preço, desempenho e recursos. É importante escolher a opção que melhor atenda às necessidades do seu site.

												Além disso, é preciso registrar um domínio para o seu site. Isso pode ser feito através de um registrador de domínio, que é uma empresa que vende nomes de domínio. Existem várias extensões disponíveis, como .com, .net e .org, cada uma com suas próprias regras e restrições.

												Uma vez que o site está hospedado e tem um domínio, ele estará disponível para ser acessado pelos usuários na internet. No entanto, é importante lembrar de continuar mantendo e atualizando o site para garantir que ele esteja sempre funcionando corretamente e fornecendo a melhor experiência possível para os usuários.
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

export const getServerSideProps: GetServerSideProps = async () => {
	return {
		props: {},
	};
};