import type { GetServerSideProps, NextPage } from "next";

// @mui/material
import { Box } from "@mui/system";
import { Button, Container, Grid, } from "@mui/material";

// @components
import CategoryCard from "../../components/Cards/CategoryCard";
import { GridContainer } from "../../components/GridContainer";
import Typography from "../../components/Typography";
import { Link } from "../../components/Link";

// @types and requests
import { SimpleCategory } from "../../data/@types/SimpleCategory";
import { SimplePublication } from "../../data/@types/SimplePublication";
import { getPublicationsCategories } from "../../store/api/publication";

export interface Root {
	category: SimpleCategory,
	publications: SimplePublication[]
}

type Props = {
	publication: Root[],
}

const Publications: NextPage<Props> = ({ publication }) => {
	return (
		<Grid container>
			<GridContainer container sx={{ minHeight: "30vh", }} />
			<Grid
				item
				xs={12}
				sx={{ zIndex: "3" }}
			>
				<Box
					bgcolor={"#ffffff"}
					width={"100%"}
					minHeight={"100vh"}
					margin={"0 auto"}
				>
					{publication?.map((item, key) => (
						<Container
							key={key}
							component="section"
							sx={{
								display: "flex",
								pt: 3,
								mb: 4,
							}}

						>
							<Grid
								container
								xs={12}
								spacing={{
									xs: 0,
									sm: 1,
									md: 3,
								}}
							>
								<Grid
									item
									xs={12}
									direction="row"
									display="flex"
									justifyContent="space-between"
									pb={{
										xs: 2,
										md: 0
									}}
								>
									<Typography
										variant="h6"
										component="h2"
										marked="left"
										lineHeight={1.66}
									>
										{item?.category?.name}
									</Typography>
									<Link
										href={`/publications/category/${item?.category?.id}`}
									>

										<Button
											variant="contained"
											size="medium"
											color="warning"
											sx={{ height: "40px", }}
										>
											Saiba mais
										</Button>
									</Link>
								</Grid>
								{item?.publications?.map((item, key) => {
									return (
										<Grid
											item
											xs={12}
											md={4}
											pb={{
												xs: 3,
												md: 0
											}}
											key={key}
										>
											<CategoryCard publication={item} />
										</Grid>
									)
								})}
							</Grid>
						</Container>
					))}
				</Box>
			</Grid>
		</Grid >
	);
};

export default Publications;

export const getServerSideProps: GetServerSideProps = async () => {
	const res = await getPublicationsCategories()
	return {
		props: {
			publication: res ?? [],
		},
	}
};
