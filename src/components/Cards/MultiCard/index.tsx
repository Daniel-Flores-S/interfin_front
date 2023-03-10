import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
    Avatar,
    Box,
} from "@mui/material";
import { PublicationType } from "../../../data/@types/publication";
import moment from "moment";

type Props = {
    publication: PublicationType;
};

const MultiCard: React.FC<Props> = ({
    publication,
}) => {
    const isSSR =
        typeof window === "undefined";
    return (
        <Box
            minHeight={"80vh"}
            m={"0 auto"}
            p={"0 1rem"}
            borderRadius={"10px"}
        >
            <Card
                sx={{
                    backgroundColor: "#ffffff",
                }}
            >
                <CardContent
                    sx={{
                        display: "flex", mb: "1.6rem",
                        backgroundColor: "#ffffff",
                    }}
                >
                    <Box
                        sx={{
                            width: "100%",
                            maxWidth: "1158px",
                            margin: "0 auto",
                        }}
                    >
                        <Box
                            width={"100%"}
                            flexDirection={"column"}
                            m={"0 auto"}
                            mb={4}
                        >
                            <Typography
                                variant="h5"
                                color="#262626"
                                sx={{ mb: "1rem" }}
                            >
                                {publication.title}
                            </Typography>
                            {/* <Box
                                component="div"
                                color="primary.contrastTitle"
                                display={
                                    "flex"
                                }
                                alignItems={
                                    "center"
                                }
                                gap={1}
                            >
                                <Avatar
                                    alt="publication.user"
                                    src=""
                                    sx={{
                                        width: 40,
                                        height: 40,
                                    }}
                                />
                                <Box
                                    flexDirection={
                                        "column"
                                    }
                                >
                                    <Typography

                                        variant="subtitle1"
                                    >
                                        {publication.user ||
                                            ""}
                                    </Typography>
                                    <Typography
                                        variant="subtitle2"
                                        lineHeight={
                                            0.9
                                        }
                                    >
                                        {publication.createdAt
                                            ? moment(
                                                publication.createdAt,
                                            ).format(
                                                "LLL",
                                            )
                                            : ""}
                                    </Typography>
                                </Box>
                            </Box> */}
                        </Box>
                        <CardMedia
                            component="img"
                            image={
                                publication?.image_url
                            }
                            alt="Paella dish"
                            sx={{
                                height: "350px",
                                minWidth:
                                    "300px",
                                width: {
                                    xs: "100%",
                                    md: "350px",
                                },
                                xs: "0px",
                                md: "-60px 1.5rem 0px",
                                float: "left",
                                objectFit:
                                    "cover",
                                mr: 4,
                                mb: 4,
                                borderRadius:
                                    "10px",
                                border: "1px solid rgb(235, 235, 235)",
                                filter: "none",
                            }}
                        />
                        {typeof isSSR !==
                            "undefined" && (
                                <React.Suspense
                                    fallback={
                                        <Typography>
                                            Suspense
                                        </Typography>
                                    }
                                >
                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html: publication?.content,
                                        }}
                                    />
                                </React.Suspense>
                            )}

                        {Boolean(publication?.video_url) && (
                            <Box
                                width={
                                    "100%"
                                }
                                sx={{
                                    height: {
                                        xs: "17rem",
                                        md: "31.25rem",
                                        lg: "31.25rem",
                                    },
                                }}
                                display="flex"
                                justifyContent={
                                    "center"
                                }
                                mt={5}
                                bgcolor={
                                    "#262626"
                                }
                            >
                                <iframe
                                    width="90%"
                                    height="100%"
                                    frameBorder="0"
                                    src={
                                        publication?.video_url
                                    }
                                    style={{
                                        borderRadius:
                                            "8px",
                                    }}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            </Box>)}
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
};

export default MultiCard;
