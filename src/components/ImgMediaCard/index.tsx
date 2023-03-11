import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/router';
import { Link } from '@mui/material';
interface Props {
    title: string;
    summary: string;
    image_url: string;
    id: number;
}


export const ImgMediaCard: React.FC<Props> = ({ id, summary, image_url, title }) => {
    const router = useRouter()
     console.log(title === 'Crédito Pessoal: Empréstimo no carnê parcelado em até 18x. ') 
    return (
        <Card
            sx={{
                height: '500px',
                maxWidth: 350,
                backgroundColor: '#e9e6e6',
                p: 2.5,
            }}
        >
            <CardMedia
                component="img"
                alt="green iguana"
                height="300"
                sx={{
                    objectFit: 'cover',
                }}
                image={image_url}
            />
            <CardContent
                sx={{
                    padding: '20px 0px',

                }}
            >
                <Typography variant="body2" color="text.secondary"
                    sx={{
                        "display": "-webkit-box",
                        "-webkit-line-clamp": "3",
                        "overflow": "hidden",
                        "-webkit-box-orient": "vertical",
                        minHeight: '67px',
                    }}
                >

                    {summary}
                </Typography>
            </CardContent>
            <CardActions
                sx={{
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Link
                    target="_blank"
                    href="https://api.whatsapp.com/send/?phone=557781165042"
                    sx={{
                        textDecoration: 'none',
                    }}
                >
                    <Button
                        variant='contained'
                        size="small"
                        color='warning'
                        sx={{ color: '#242424' }}
                        //onClick={() => router.push(`/Publication/${id}`)}
                    >
                       
                        {title === 'Crédito Pessoal: Empréstimo no carnê parcelado em até 18x.'
                            ? 'Simular' : 'Solicitar'
                        }

                    </Button>
                </Link>
                <Button
                    variant='text'
                    size="small"
                    color='warning'
                    sx={{ color: '#242424' }}
                    onClick={() => router.push(`/Publication/${id}`)}
                >
                    Saiba Mais
                </Button>
            </CardActions>
        </Card>
    );
}








