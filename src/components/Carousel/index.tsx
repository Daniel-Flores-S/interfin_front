import Carousel from 'react-material-ui-carousel';
import { DefaultSettingsT2 } from './Settings';
import {
    Card,
    CardMedia,
    Typography,
    Grid,
} from '@mui/material';
import { PublicationType } from '../../data/@types/publication';
import { FC } from 'react';
import { useRouter } from 'next/router';
interface Props {
    banners: PublicationType[];
}

export const ExampleCarousel: FC<Props> = ({ banners }) => {
    const router = useRouter();


    return (
        <Carousel {...DefaultSettingsT2}>
            {
                Array.isArray(banners) && banners.map((item, index: number) => {
                    return (
                        <Card
                            raised
                            sx={{
                                height: '500px',
                                position: 'relative',
                                backgroundColor: 'rgb(255, 255, 255)',
                            }}
                        >
                            <Grid container spacing={0}
                                sx={{
                                    height: '100%',
                                    position: 'relative',
                                }}
                            >
                                <Grid item xs={12} key={index} >
                                    <CardMedia
                                        sx={{
                                            backgroundColor: 'white',
                                            height: '100%',
                                            overflow: 'hidden',
                                            position: 'relative',
                                            cursor:"pointer",
                                        }}
                                        image={item.image_url}
                                        title={item.title}
                                        onClick={() => router.push(`/Publication/${item.id}`)}
                                    >
                                        <Typography
                                            sx={{
                                                textOverflow: 'ellipsis',
                                                position: 'absolute',
                                                bottom: 0,
                                                padding: '15px',
                                                backgroundColor: 'black',
                                                color: 'white',
                                                opacity: 0.6,
                                                width: '100%',
                                                height: '10%',
                                            }}
                                            component={"div"}
                                        >

                                            {item.title}
                                        </Typography>
                                    </CardMedia>
                                </Grid >
                            </Grid>
                        </Card>
                    )
                })
            }
        </Carousel>
    );
}




