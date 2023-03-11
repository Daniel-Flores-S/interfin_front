import type { GetServerSideProps, NextPage } from "next";

// @Mui/material
import { Box } from "@mui/system";
import { Grid } from "@mui/material";
import { PublicationType } from "../data/@types/publication";
import { getAllBanners, getAllPublications, getAllRecent } from "../store/api/publication";

// @Components
import { Review } from "../components/Review";

// @Utils
import GroupButtons from "../components/GroupButtons";
import Typography from "../components/Typography";
import OurTeamCard from "../components/Cards/OurTeamCard";
import CarouselSolutions from "../components/Carousel/CarouselSolutions";
import { MultipleItems } from "../components/Carousel/MultipleItems";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";

type Props = {
	publication: PublicationType[],
	recent: PublicationType[],
	banners: PublicationType[],
}

const Home: NextPage<Props> = ({ recent, banners }) => { 
	//const [isLoading, setIsLoading] = useState(true);
	const [loadedBanners, setLoadedBanners] = useState<PublicationType[]>([]);
	const [loadedRecent, setLoadedRecent] =  useState<PublicationType[]>([]);

	useEffect(() => {
		setLoadedBanners(banners || []);
		setLoadedRecent(recent || []); 
		//setIsLoading(false);

	}, [banners, recent]);

	// if (isLoading) {
	// 	return <Loader loading={isLoading} />;
	// }
	return (
		<Grid container xs={12}>
			<Review
				btnText={"Saiba mais"}
				image="https://i.ibb.co/xXNJLX0/bannerprincipal1.png"
				title="Você sabia?"
				subTitle="Para facilitar ainda mais o seu dia a dia temos um parceiro de peso conosco!"
			/>
			<Grid
				item
				sx={{
					position: "relative",
					zIndex: "3",
					width: "100%",
					boxShadow:
						"0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
				}}
			>
				<Box
					bgcolor={'white'}
					position={"relative"}
					boxShadow={"0px 4px 4px rgba(0, 0, 0, 0.103)"}
				>
					<Box maxWidth={"1250px"} margin={"0 auto"}>
						<GroupButtons />
					</Box>

				</Box>

				<Box bgcolor={'white'}>
					<Box maxWidth={"1250px"} margin={"0 auto"}>
						<Typography
							sx={{
								paddingTop: '20px !important',
								fontSize: '2rem',
								fontWeight: 'bold',
								color: '#242424',
								textAlign: 'center',
							}}

						>
							Soluções Interfin
						</Typography>
						<CarouselSolutions banners={loadedBanners} />
					</Box>
				</Box>
				<Box bgcolor={'#ececec'}>
					<Box maxWidth={"1250px"} margin={"0 auto"}>
						<Typography
							sx={{
								paddingTop: '20px !important',
								fontSize: '2rem',
								fontWeight: 'bold',
								color: '#242424',
								textAlign: 'center',
							}}

						>
							Novidades
						</Typography>
						<MultipleItems banners={loadedRecent} />
					</Box>
				</Box>
				<Box
					bgcolor={"#ffc115"}
					sx={{
						padding: '3px 0px',
					}}
				/>
				<Box
					width={"100%"}
					bgcolor={"#000000"}
				>
					<Box
						maxWidth={"1250px"}
						margin={"0 auto"}
					>
						<Grid item xs={12} pb={10} >
							<OurTeamCard color="#fff" />
						</Grid>
					</Box>
				</Box>
			</Grid>
		</Grid >
	);
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
	// esperar 5 segundos
	await new Promise((resolve) => setTimeout(resolve, 5000));
	const [banners, recent] = await Promise.all([
		getAllBanners(), getAllRecent()
	])

	if (!banners || !recent) {
		return {
			notFound: true,
		};
	}

	return {
		props: {
			banners: banners,
			recent: recent,

		},
	};

	// return {
	// 	props: {
	// 		banners: banners,
	// 		recent: recent,

	// 	},
	// };
};

