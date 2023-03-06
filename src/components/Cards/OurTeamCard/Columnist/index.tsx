import { Box, Stack, Button, Link } from "@mui/material";
import Typography from "../../../Typography";

interface ColumnistProps {
    image: string;
    name: string;
    description: string;
    description2: string;
    Link: string;
    iframe: JSX.Element;

}

export const PublishingEditor: React.FC<ColumnistProps> = (props) => {
    return (
        <Box
            gap="1"
            alignItems={"center"}
            flexDirection={"row"}
            justifyContent={"center"}
        >
            <Stack
                mt={6}
                spacing={1}
                width="100%"
                display="flex"
                minWidth={345}
                textAlign="center"
                alignItems={"center"}
                sx={{ maxWidth: 345 }}
                justifyContent={"center"}
            >
                <Box
                    sx={{
                        width: "200px",
                        height: "200px",
                        backgroundColor: "transparent",
                        // position: "relative",
                        // clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)"
                    }}

                >
                    {/* iframe */}
                    {props.iframe}

                </Box>
                <Stack
                    width="90%"
                    spacing={1}
                    direction={'column'}
                    alignItems={"center"}
                >
                    <Typography
                        variant="subtitle1"
                        fontWeight={600}
                        color={"#F3A424"}
                    >
                        {props.name}
                    </Typography>
                    <Link
                        target="_blank"
                        href={props.Link}
                        sx={{
                            textDecoration: "none",
                        }}
                    >
                        <Button
                            variant="contained"
                            color="warning"
                            size="small"
                            sx={{
                                width: "100px",
                                color: "#000000"
                            }}
                        >
                            Saiba mais
                        </Button>
                    </Link>
                </Stack>
            </Stack>
        </Box>
    );
};
