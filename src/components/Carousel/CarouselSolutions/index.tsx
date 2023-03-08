import React from 'react'; 
import { ImgMediaCard } from '../../ImgMediaCard'; 
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Stack from '@mui/material/Stack'; 
import { PublicationType } from '../../../data/@types/publication';

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';


interface Props {
    banners: PublicationType[];
}

const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
};

const CarouselSolutions: React.FC<Props> = ({ banners }) => {
    const items =
        banners.map((banner, index) => (
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
                <ImgMediaCard
                    key={index}
                    title={banner.title}
                    summary={banner.summary}
                    image_url={banner.image_url}
                />
            </Stack>
        ))

    return (
        <AliceCarousel
            items={items}
            responsive={responsive}
            keyboardNavigation={true}
            disableDotsControls
            controlsStrategy="responsive"
            infinite={true}
            renderPrevButton={() => (
                <ArrowBackIosNewIcon
                    sx={{
                        color: '#c5c4c4',
                        position: 'absolute',
                        left: '0',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        fontSize: '2rem',
                        '&:hover': {
                            color: '#000',
                        },
                    }}
                />
            )}
            renderNextButton={() => (
                <ArrowForwardIosIcon
                    sx={{
                        color: '#c5c4c4',
                        position: 'absolute',
                        right: '0',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        fontSize: '2rem',
                        '&:hover': {
                            color: '#000',
                        },
                    }}
                />
            )}
        />
    );
}

export default CarouselSolutions;
