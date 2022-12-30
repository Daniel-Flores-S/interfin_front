import * as React from "react";

// @mui/material
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Box, Pagination, Stack, } from "@mui/material";

// components and styles
import Typography from "../Typography";
import { PublicationByCategory } from "../../data/@types/publication";
import PublicationsCard from "../PublicationsCard";
import { getAllCategoryById } from "../../store/api/publication";

type Props = {
    publication: PublicationByCategory;
    categoryId: number;
};

const MultiCardByPublications: React.FC<Props> = ({
    publication,
    categoryId
}) => {
    const [obj, setObj] = React.useState(publication)

    const handleChange = async (event: React.ChangeEvent<unknown>, value: number) => {
        const response = await getAllCategoryById(`${categoryId}`, value - 1)
        response && setObj(response)
    };
    return (
        <Box
            minHeight={"80vh"}
            m={"0 auto"}
            p={"0 1rem"}
            borderRadius={"10px"}
            bgcolor={"#ffffff"}
        >
            <Card>

                <CardContent sx={{ display: "flex", mb: "1.6rem", }}>

                    <Box
                        sx={{
                            width: "100%",
                            maxWidth: "1158px",
                            margin: "0 auto",
                        }}
                    >
                        <Typography
                            variant="h4"
                            marked="left"
                            align="center"
                            component="h2"
                        >
                            {obj?.items[0]?.category?.name}
                        </Typography>
                        {obj.items.map((item, key: number) => {
                            return (<PublicationsCard
                                key={key}
                                id={item.id}
                                reverse={Boolean(key % 2 === 0)}
                                image={item.image_url}
                                title={item.title}
                                text={item.summary}
                                createdAt={item.createdAt}
                            />
                            )
                        })}

                        <Stack alignItems={"center"}>
                            <Pagination
                                onChange={handleChange}
                                count={obj?.totalPages}
                                page={obj.currentPage + 1}
                                color="primary"
                            />
                        </Stack>

                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
};

export default MultiCardByPublications;
