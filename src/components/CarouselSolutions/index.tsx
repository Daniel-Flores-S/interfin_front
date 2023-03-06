import React from 'react';

// @Components
import Carousel from 'react-material-ui-carousel';
import Stack from '@mui/material/Stack';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

// @Types
import { PublicationType } from '../../data/@types/publication';
import { DefaultSettingsT2 } from '../Carousel/Settings';
import { ImgMediaCard } from '../ImgMediaCard';

interface Props {
    banners: PublicationType[];
}

const CarouselSolutions: React.FC<Props> = ({ banners }) => {
    return (
        <Carousel
            {...DefaultSettingsT2}
            navButtonsProps={{
                style: { backgroundColor: 'transparent' }
            }}
            NextIcon={
                <ArrowForwardIosIcon
                    style={{
                        color: '#c5c4c4',
                        fontSize: '2rem',
                    }}
                />
            }
            PrevIcon={
                <ArrowBackIosNewIcon
                    style={{
                        color: '#c5c4c4',
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
                            direction={{ xs: 'column', sm: 'row' }}
                            spacing={{ xs: 1, sm: 2, md: 4 }}
                            sx={{
                                padding: '2rem',
                                width: '100%',
                                justifyContent: 'center',
                            }}
                        >
                            <ImgMediaCard
                                key={index}
                                title={item.title}
                                summary={item.summary}
                                image_url={'/static/Carrossel/02.png'} />
                            <ImgMediaCard
                                key={index}
                                title={item.title}
                                summary={item.summary}
                                image_url={'/static/Carrossel/03.png'} />
                            <ImgMediaCard
                                key={index}
                                title={item.title}
                                summary={item.summary}
                                image_url={'/static/Carrossel/04.png'} />
                        </Stack>
                    )
                })
            }
        </Carousel >
    )
}


// const CarouselSolutions: React.FC<Props> = ({ banners }) => {
//     return (
//         <Carousel {...DefaultSettingsT2}>
//             {
//                 Array.isArray(banners) && banners.map((item, index: number) => {
//                     return (
//                         <ImgMediaCard 
//                             key={index}
//                             title={item.title}
//                             summary={item.summary}
//                             image_url={item.image_url} 
//                         />
//                     )
//                 })
//             }
//         </Carousel >
//     )
// }

export default CarouselSolutions;









