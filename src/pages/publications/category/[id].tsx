import type { GetServerSideProps, NextPage } from "next";

// @mui/material
import { Grid, } from "@mui/material";

// @components
import { GridContainer } from "../../../components/GridContainer";
import MultiCardByPublications from "../../../components/Cards/MultiCardByPublications";

//  @types and requests
import { PublicationByCategory } from "../../../data/@types/publication";
import { getAllCategoryById } from "../../../store/api/publication";

type Props = {
	publication: PublicationByCategory,
	categoryId: number,
}
const PublicationsByCategory: NextPage<Props> = ({ publication, categoryId }) => {
	return (
		<Grid container>
			<GridContainer container sx={{ minHeight: "30vh", }} />
			<Grid
				item
				xs={12}
				sx={{ zIndex: "3" }}
			>
				<MultiCardByPublications
					publication={publication}
					categoryId={categoryId}
				/>
			</Grid>
		</Grid >
	);
};

export default PublicationsByCategory;

export const getServerSideProps: GetServerSideProps = async ctx => {
	const id = ctx.query.id
	const publication = await getAllCategoryById(`${id}`)

	return {
		props: {
			publication: publication,
			categoryId: parseInt(`${id}`),

		},
	};
};