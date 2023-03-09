import * as React from 'react';
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import { useRouter } from 'next/router';
interface Props {
    id: number;
    title: string;
    summary: string;
    image_url: string;
}


export const ImgMedia: React.FC<Props> = ({ id, image_url }) => {
    const router = useRouter()
    return (
        <Card
            sx={{
                height: '350px',
                maxWidth: 350,
                backgroundColor: '#e9e6e6', 
            }}
        >
            <CardMedia
                component="img"
                alt="green iguana"
                height="350"
                onClick={() =>  router.push(`/Publication/${id}`)}
                sx={{
                    objectFit: 'cover',
                    cursor: 'pointer',
                    
                }}
                image={image_url}
            /> 
        </Card>
    );
}