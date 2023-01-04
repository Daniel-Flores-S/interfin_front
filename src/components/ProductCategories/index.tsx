import * as React from "react";
import Router from "next/router";

// @mui/material
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

// @Utils
import Typography from "../Typography";
import * as UT from "./utils";

const ProductCategories: React.FC<UT.PropsProductCategories> = ({ categories }) => {

	return (
		<Container
			component="section"
			sx={{ pt: 8, }}
		>
			<Typography
				variant="h4"
				marked="center"
				align="center"
				component="h2"
			>
				NOSSAS CATEGORIAS
			</Typography>
			<Box
				sx={{
					mt: 8,
					display: "flex",
					flexWrap: "wrap",
				}}
			>
				{categories?.map((item) => (
					<UT.ImageIconButton
						key={
							item.id
						}
						onClick={() => Router.push(`/publications/category/${item.id}`)}
						style={{
							width: (Math.random() * 9.83 + 23.5) + '%',
							flexGrow: 1,
						}}
					>
						<Box
							sx={{
								position:
									"absolute",
								left: 0,
								right: 0,
								top: 0,
								bottom: 0,
								backgroundSize:
									"cover",
								backgroundPosition:
									"center 40%",
								backgroundImage: `url(${item.image})`,
							}}
						/>
						<UT.ImageBackdrop className="imageBackdrop" />
						<Box
							sx={{
								position:
									"absolute",
								left: 0,
								right: 0,
								top: 0,
								bottom: 0,
								display:
									"flex",
								alignItems:
									"center",
								justifyContent:
									"center",
								color: "common.white",
							}}
						>
							<Typography
								component="h3"
								variant="h6"
								color="inherit"
								className="imageTitle"
							>
								{item.name}
								<div className="imageMarked" />
							</Typography>
						</Box>
					</UT.ImageIconButton>
				))}
			</Box>
		</Container>
	);
}

export default ProductCategories
