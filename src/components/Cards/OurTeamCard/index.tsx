import { Box, Stack, Grid } from '@mui/material';
import { FC } from 'react';
import Typography from '../../Typography';
import { PublishingEditor } from './Columnist';
type Props = {
    margin?: string
}
const OurTeamCard: FC<Props> = ({ margin }) => {
    return (
        <Grid
            xs={12}
            container
            mt={margin ? margin : "5rem"}
            display={'flex'}
            justifyContent={"center"}
        >
            <Typography
                variant="h4"
                marked="center"
                width={"fit-content"}
            >
                Nossa equipe
            </Typography>
            <Grid
                item
                xs={12}
                display={'flex'}
                justifyContent={"center"}
            >
                <Box
                    display="flex"
                    whiteSpace={'normal'}
                >
                    <Box
                        width={'100%'}
                        component={"div"}
                        //overflow={'hidden'}
                        display="flex"
                        flexWrap={'wrap'}
                    >
                        <Stack
                            width="100%"
                            display="flex"
                            direction={"row"}
                            flexWrap={'wrap'}
                            alignItems={"center"}
                            justifyContent={"center"}
                        >
                            {columnist.map((item) => (
                                <PublishingEditor
                                    key={item.name}
                                    name={item.name}
                                    image={item.image}
                                    description={item.description}
                                />
                            ))}
                        </Stack>
                    </Box>
                </Box>
            </Grid>
        </Grid>

    );
}

export default OurTeamCard;

const columnist = [
    {
        name: "Filipe Benedito Costa",
        image: "/static/images/avatars/avatar_1.png",
        description: "An uber-optimistic view of the future",

    },
    {
        name: "Heloise Mariana Teixeira",
        image: "/static/images/avatars/avatar_11.png",
        description: "An uber-optimistic view of the future",
    },
    {
        name: "Carla Oliveira",
        image: "/static/images/avatars/avatar_4.png",
        description: "An uber-optimistic view of the future",
    }

]

