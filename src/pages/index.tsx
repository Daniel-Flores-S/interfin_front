import type { GetServerSideProps, NextPage } from "next";

// @Mui/material
import { Box } from "@mui/system";
import { Button, Container, Grid } from "@mui/material";
import { PublicationType } from "../data/@types/publication";
import { getAllBanners, getAllPublications, getAllRecent } from "../store/api/publication";

// @Components
import { Link } from "../components/Link";
import { Review } from "../components/Review";
import Typography from "../components/Typography";
import ReviewCard from "../components/Cards/CardReview";
import { ExampleCarousel } from "../components/Carousel";
import OurTeamCard from "../components/Cards/OurTeamCard";
import RecipeReviewCard from "../components/Cards/RecipeReviewCard";
import PublicationsCard from "../components/Cards/PublicationsCard";

// @Utils
import { patternDT } from "../utils/pattern";

type Props = {
	publication: PublicationType[],
	recent: PublicationType[],
	banners: PublicationType[],
}

const Home: NextPage<Props> = ({ publication, banners, recent }) => {
	return (
		<Grid container xs={12}>
			<Review
				btnText={"Saiba mais"}
				image="/static/images/newbg1.jpg"
				title="Seja bem-vindo(a) à Interfin!"
				subTitle="Na Interfin, oferecemos crédito personalizado, sem burocracia, para atender suas necessidades financeiras únicas, seja para realizar um sonho, quitar uma dívida ou qualquer outra finalidade."
			/>
			<Grid
				item
				sx={{
					position: "relative",
					zIndex: "3",
					width: "100%",
					borderRadius: "6px",
					boxShadow:
						"0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
				}}
			>
				<Box
					bgcolor={"#ffffff"}
					width={"100%"}
					height={"100%"}
					borderRadius={"6px"}
				>
					<Box
						maxWidth={"1250px"}
						margin={"0 auto"}
					>
						<Grid
							pt={3}
							gap={3}
							xs={12}
							container
							m={"0 auto"}
							display="flex"
							justifyContent={"center"}
							p={{
								xs: "2px 5px",
								md: "10px 5px",
							}}
						>
							<Grid item xs={12} md={7} >
								<ExampleCarousel banners={banners} />
							</Grid>
							<ReviewCard recent={recent} />
						</Grid>
						<Grid
							container
							xs={12}
							display="inline-flex"
							justifyContent="space-between"
							p={{
								xs: "14px 12px",
								md: "20px 40px",
							}}
						>
							<Typography
								variant="h4"
								component="h2"
								sx={{
									whiteSpace: "nowrap",
									overflow: "hidden",
									textOverflow: "ellipsis",
									fontSize: {
										xs: "1.2rem",
										md: "inherit",
									}
								}}
							>
								Publicações
							</Typography>
							<Link
								href={`/publications`}
							>
								<Button
									variant="outlined"
									size="small"
								>
									Saiba mais
								</Button>
							</Link>
						</Grid>
						<Grid
							p={{
								xs: "2px 7px",
								md: "0px 0px",
							}}
							container
							justifyContent={"center"}
							xs={12}
							gap={2}
						>
							{publication.map((item) => (
								<RecipeReviewCard publication={item} />
							))}
						</Grid>

						<Grid
							item
							xs={12}
							mt={5}
							mb={12}
							bgcolor={'#fffefe'}
							borderTop={'2px solid #d8d8d8'}
						>
							<Container
								sx={{
									mt: 8,
									mb: 4,
								}}
								component="section"
							>
								<Typography
									variant="h4"
									align="center"
									component="h1"
								>
									As notícias
									mais
									populares
								</Typography>
								<Typography
									component="p"
									align="center"
									variant="body1"
									color="textSecondary"
									sx={{
										fontSize: "1.25rem",
									}}
								>
									Fique por dentro do
									que estamos trabalhando!
								</Typography>
							</Container>
						</Grid>
						{publication.map((item: PublicationType, key: number) => {
							return (
								!item.isBanners
								&& <PublicationsCard
									id={item.id}
									reverse={Boolean(key % 2 === 0)}
									image={item.image_url}
									title={item.title}
									text={item.summary}
									createdAt={item.createdAt}
								/>
							)
						})}
						<Grid
							item
							xs={12}
							bgcolor={'primary.contrastText'}
							borderTop={'2px solid #d8d8d8'}
							marginY={10}
						>
							<OurTeamCard />
						</Grid>
					</Box>
				</Box>
			</Grid>
		</Grid >
	);
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
	const [publication, banners, recent] = await Promise.all([
		getAllPublications(), getAllBanners(), getAllRecent()
	])



	return {
		props: {
			publication: publication?.content ?? patternDT,
			banners: banners,
			recent: recent,

		},
	};
};

