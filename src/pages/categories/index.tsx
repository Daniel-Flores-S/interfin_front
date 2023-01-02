import {
	Box,
	Grid,
} from "@mui/material";
import type { GetServerSideProps, NextPage } from "next";
import ProductCategories from "../../components/ProductCategories";
import { GridContainer } from "../../components/GridContainer";
import { categories } from "../../data/@types/categories";
import { GetCategories } from "../../store/api/publication/categories";

type Props = {
	categories: categories[],
}

const Categories: NextPage<Props> = ({ categories }) => {
	return (
		<Grid container xs={12}>
			<GridContainer
				container
				sx={{
					minHeight: "30vh",
				}}
			/>
			<Grid
				item
				sx={{
					position:
						"relative",
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
					minHeight={"200vh"}
					margin={"0 auto"}
				>
					<ProductCategories categories={categories}/>
				</Box>
			</Grid>
		</Grid>
	);
};

export default Categories;


export const getServerSideProps: GetServerSideProps = async ctx => {
	const categories = await GetCategories()



	return {
		props: { categories: categories || [] },
	};
};