import { Box, Stack, Grid } from '@mui/material';
import { FC } from 'react';
import Typography from '../../Typography';
import { PublishingEditor } from './Columnist'; 

type Props = {
    margin?: string
    color?: string
}
const OurTeamCard: FC<Props> = ({ margin, color }) => {
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
                width={"fit-content"}
                sx={{
                    color: color ? color : "black",
                }}
            >
                Onde estamos
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
                                    description2={item.description2}
                                    Link={item.link}
                                    iframe={item.iframe}
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
        name: "Jequié - BA",
        image: "/static/filiais/interf.jpg",
        description: "Rua 07 de Setembro, 08, Centro,",
        description2: "Jequié - BA | CEP: 45.200-360.",
        link: "https://wa.me/557382255879",
        iframe: <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241.03395384468297!2d-40.83924151574757!3d-14.85087037937338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7463be7f8adaea3%3A0x79b0c72822cbc749!2sInterfin%20Vit%C3%B3ria%20da%20Conquista!5e0!3m2!1spt-BR!2sbr!4v1678027570084!5m2!1spt-BR!2sbr"
            width="200"
            height="200"
            style={{
                clipPath: "polygon(45% 1.33975%, 46.5798% 0.60307%, 48.26352% 0.15192%, 50% 0%, 51.73648% 0.15192%, 53.4202% 0.60307%, 55% 1.33975%, 89.64102% 21.33975%, 91.06889% 22.33956%, 92.30146% 23.57212%, 93.30127% 25%, 94.03794% 26.5798%, 94.48909% 28.26352%, 94.64102% 30%, 94.64102% 70%, 94.48909% 71.73648%, 94.03794% 73.4202%, 93.30127% 75%, 92.30146% 76.42788%, 91.06889% 77.66044%, 89.64102% 78.66025%, 55% 98.66025%, 53.4202% 99.39693%, 51.73648% 99.84808%, 50% 100%, 48.26352% 99.84808%, 46.5798% 99.39693%, 45% 98.66025%, 10.35898% 78.66025%, 8.93111% 77.66044%, 7.69854% 76.42788%, 6.69873% 75%, 5.96206% 73.4202%, 5.51091% 71.73648%, 5.35898% 70%, 5.35898% 30%, 5.51091% 28.26352%, 5.96206% 26.5798%, 6.69873% 25%, 7.69854% 23.57212%, 8.93111% 22.33956%, 10.35898% 21.33975%)",
                borderRadius: "50% 50% 50% 50% / 25% 25% 25% 25%",
            }}
        ></iframe>

    },
    {
        name: "Vitória da Conquista - BA",
        image: "/static/filiais/VCA.jpg",
        description: "Rua Maximiliano Fernandes, 78, Centro,",
        description2: "Vitória da Conquista - BA | CEP: 45.000-530.",
        link: "https://wa.me/557781165042",
        iframe:
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241.03395384468297!2d-40.83924151574757!3d-14.85087037937338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7463be7f8adaea3%3A0x79b0c72822cbc749!2sInterfin%20Vit%C3%B3ria%20da%20Conquista!5e0!3m2!1spt-BR!2sbr!4v1678027570084!5m2!1spt-BR!2sbr"
                width="200"
                height="200"
                style={{
                    clipPath: "polygon(45% 1.33975%, 46.5798% 0.60307%, 48.26352% 0.15192%, 50% 0%, 51.73648% 0.15192%, 53.4202% 0.60307%, 55% 1.33975%, 89.64102% 21.33975%, 91.06889% 22.33956%, 92.30146% 23.57212%, 93.30127% 25%, 94.03794% 26.5798%, 94.48909% 28.26352%, 94.64102% 30%, 94.64102% 70%, 94.48909% 71.73648%, 94.03794% 73.4202%, 93.30127% 75%, 92.30146% 76.42788%, 91.06889% 77.66044%, 89.64102% 78.66025%, 55% 98.66025%, 53.4202% 99.39693%, 51.73648% 99.84808%, 50% 100%, 48.26352% 99.84808%, 46.5798% 99.39693%, 45% 98.66025%, 10.35898% 78.66025%, 8.93111% 77.66044%, 7.69854% 76.42788%, 6.69873% 75%, 5.96206% 73.4202%, 5.51091% 71.73648%, 5.35898% 70%, 5.35898% 30%, 5.51091% 28.26352%, 5.96206% 26.5798%, 6.69873% 25%, 7.69854% 23.57212%, 8.93111% 22.33956%, 10.35898% 21.33975%)",
                }}
            ></iframe>
    },
    {
        name: "Itapetinga - BA",
        image: "/static/filiais/IGA.jpg",
        description: "Rua Dom Pedro II, 51A, Centro,",
        description2: "Itapetinga - BA | CEP:45.700-000.",
        link: "https://wa.me/5577998348492",
        iframe: <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241.03395384468297!2d-40.83924151574757!3d-14.85087037937338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7463be7f8adaea3%3A0x79b0c72822cbc749!2sInterfin%20Vit%C3%B3ria%20da%20Conquista!5e0!3m2!1spt-BR!2sbr!4v1678027570084!5m2!1spt-BR!2sbr"
            width="200"
            height="200"
            style={{
                clipPath: "polygon(45% 1.33975%, 46.5798% 0.60307%, 48.26352% 0.15192%, 50% 0%, 51.73648% 0.15192%, 53.4202% 0.60307%, 55% 1.33975%, 89.64102% 21.33975%, 91.06889% 22.33956%, 92.30146% 23.57212%, 93.30127% 25%, 94.03794% 26.5798%, 94.48909% 28.26352%, 94.64102% 30%, 94.64102% 70%, 94.48909% 71.73648%, 94.03794% 73.4202%, 93.30127% 75%, 92.30146% 76.42788%, 91.06889% 77.66044%, 89.64102% 78.66025%, 55% 98.66025%, 53.4202% 99.39693%, 51.73648% 99.84808%, 50% 100%, 48.26352% 99.84808%, 46.5798% 99.39693%, 45% 98.66025%, 10.35898% 78.66025%, 8.93111% 77.66044%, 7.69854% 76.42788%, 6.69873% 75%, 5.96206% 73.4202%, 5.51091% 71.73648%, 5.35898% 70%, 5.35898% 30%, 5.51091% 28.26352%, 5.96206% 26.5798%, 6.69873% 25%, 7.69854% 23.57212%, 8.93111% 22.33956%, 10.35898% 21.33975%)",

            }}
        ></iframe>
    }

]

