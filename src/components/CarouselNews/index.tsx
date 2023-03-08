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
  const bannerChunks = banners.reduce(
    (acc: PublicationType[][], banner: PublicationType, i: number) => {
      const chunkIndex = Math.floor(i / 3);
      if (!acc[chunkIndex]) {
        acc[chunkIndex] = [];
      }
      acc[chunkIndex].push(banner);
      return acc;
    },
    []
  );


  return (
    <Carousel
      {...DefaultSettingsT2}
      indicators={false}
      autoPlay={false}
      navButtonsProps={{
        style: {
          backgroundColor: 'transparent',
          color: '#c5c4c4',
        },
      }}
      NextIcon={
        <ArrowForwardIosIcon
          sx={{
            color: '#c5c4c4',
            fontSize: '2rem',
            "&:hover": {
              color: '#000',
            },
          }}
        />
      }
      PrevIcon={
        <ArrowBackIosNewIcon
          sx={{
            color: '#c5c4c4',
            fontSize: '2rem',
            "&:hover": {
              color: '#000',
            },
          }}
        />
      }
    >
      {bannerChunks.map((chunk, chunkIndex) => (
        <Stack
          key={chunkIndex}
          direction={{ xs: 'column', sm: 'row' }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
          sx={{
            padding: '2rem',
            width: '100%',
            justifyContent: 'center',
          }}
        >
          {chunk.map((banner, index) => (
            <ImgMedia
              key={index}
              title={banner.title}
              summary={banner.summary}
              image_url={banner.image_url}
            />
          ))}
        </Stack>
      ))}
    </Carousel>
  )
}








