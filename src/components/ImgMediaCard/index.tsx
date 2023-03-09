import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/router';
interface Props {
    title: string;
    summary: string;
    image_url: string;
    id: number;
}


export const ImgMediaCard: React.FC<Props> = ({ id, summary,  image_url }) => {
    const router = useRouter()
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
                    padding: '20px 0px'
                }}
            >
                <Typography variant="body2" color="text.secondary"
                    sx={{
                        "display": "-webkit-box",
                        "-webkit-line-clamp": "3",
                        "overflow": "hidden",
                        "-webkit-box-orient": "vertical",
                    }}
                >

                    <div
                        dangerouslySetInnerHTML={{
                            __html: summary,
                        }}
                    />
                </Typography>
            </CardContent>
            <CardActions
                sx={{
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Button
                    variant='contained'
                    size="small"
                    color='warning'
                    sx={{ color: '#242424' }}
                    onClick={() => router.push(`/Publication/${id}`)}
                >
                    Simular
                </Button>
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

const cardText = 'Em busca de uma solução financeira eficiente e rápida? Conheça o empréstimo com garantia de veículo! Esse tipo de crédito é destinado a clientes que possuem veículos aptos para financiamento e oferece até 85% do valor da tabela <strong>FIPE</strong>. Além disso, o prazo para pagamento pode chegar até 60 meses, oferecendo mais flexibilidade e comodidade. </p><p><br></p'







