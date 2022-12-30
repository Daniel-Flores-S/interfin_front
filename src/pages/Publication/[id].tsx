import { Grid, } from "@mui/material";
import type { GetServerSideProps, NextPage } from "next";
import { GridContainer } from "../../components/GridContainer";
import MultiCard from "../../components/MultiCard";
import { PublicationType } from "../../data/@types/publication";
import { getPublicationById } from "../../store/api/publication";

type Props = {
	publication: PublicationType,
}
const Publication: NextPage<Props> = ({ publication }) => {
	console.log("publication: ", publication)
	return (
		<Grid container>
			<GridContainer container sx={{ minHeight: "30vh", }} />
			<Grid
				item
				xs={12}
				sx={{ zIndex: "3" }}
			>
				<MultiCard publication={publication} />
			</Grid>
		</Grid >
	);
};

export default Publication;

export const getServerSideProps: GetServerSideProps = async ctx => {
	const id = ctx.query.id
	const publication = await getPublicationById(`${id}`)

	return {
		props: {
			publication: publication,

		},
	};
};