import React from 'react';

// @Components
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Carousel from 'react-material-ui-carousel';
import Stack from '@mui/material/Stack';

// @Types
import { PublicationType } from '../../data/@types/publication';
import { DefaultSettingsT2 } from '../Carousel/Settings'; 
import { ImgMedia } from '../ImgMedia';

interface Props {
    banners: PublicationType[];
}

export const CarouselNews: React.FC<Props> = ({ banners }) => {
    return (
        <Carousel
            {...DefaultSettingsT2}
            navButtonsProps={{
                style: {
                    backgroundColor: 'transparent',  
                }
            }}
            NextIcon={
                <ArrowForwardIosIcon
                    style={{
                        color: '#000000',
                        fontSize: '2rem',
                    }}
                />
            }
            PrevIcon={
                <ArrowBackIosNewIcon
                    style={{
                        color: '#000000',
                        fontSize: '2rem',
                    }}
                />
            }
        >
            {
                Array.isArray(banners) && banners.map((item, index: number) => {
                    // exibindo 3 itens por vez
                    return (
                        <Stack
                            key={index}
                            direction={{ xs: 'column', sm: 'row' }}
                            spacing={{ xs: 1, sm: 2, md: 4 }}
                            sx={{
                                padding: '2rem',
                                width: '100%',
                                justifyContent: 'center',
                            }}
                        >
                            <ImgMedia
                                key={index}
                                title={item.title}
                                summary={item.summary}
                                image_url={"/static/Banners/Banner1Mobile.png"} />
                            <ImgMedia
                                key={index}
                                title={item.title}
                                summary={item.summary}
                                image_url={"/static/Banners/Banner3.png"} />
                            <ImgMedia
                                key={index}
                                title={item.title}
                                summary={item.summary}
                                image_url={"/static/Banners/Banner1Mobile.png"} />
                        </Stack>
                    )
                })
            }
        </Carousel >
    )
}








