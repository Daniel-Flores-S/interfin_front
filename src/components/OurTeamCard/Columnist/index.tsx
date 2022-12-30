import { Avatar, Box, Stack, Button } from "@mui/material";
import Typography from "../../Typography";
interface ColumnistProps {
    image: string;
    name: string;
    description: string;
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
                <Avatar
                    src={props.image}
                    alt={props.name}
                    sx={{
                        width: "200px",
                        height: "200px",
                        objectFit: "cover",
                        objectPosition: "50% 50%",
                    }}

                />
                <Stack
                    width="90%"
                    spacing={1}
                    direction={'column'}
                    alignItems={"center"}
                >
                    <Typography
                        variant="subtitle1"
                        fontWeight={600}
                        color={"primary"}
                    >
                        {props.name}
                    </Typography>
                    <Typography
                        variant="body2"
                    >
                        {props.description}
                    </Typography>
                    <Button
                        variant="contained"
                        size="small"
                        sx={{ width: "100px" }}
                    >
                        Seguir
                    </Button>
                </Stack>
            </Stack>
        </Box>
    );
};
