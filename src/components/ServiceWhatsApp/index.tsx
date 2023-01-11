import { Box, Typography } from '@mui/material';
import React from 'react';

import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const ServiceWhatsApp: React.FC = () => {
    return (
        <Box
            sx={{
                position: 'fixed',
                bottom: '60px',
                backgroundColor: '#009ee3',
                left: '50%',
                transform: 'translateX(-50%)',
                color: '#fff',
                padding: '10px 20px',
                height: 'auto',
                //width: '200px',
                zIndex: '20',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-around',
                fontFamily: 'Montserrat',
                textDecoration: 'none',
                lineHeight: '18px',
                borderRadius: '23px',
                textTransform: 'uppercase',
                cursor: 'pointer',
                "&:hover": {
                    backgroundColor: '#47b4e2',
                }
            }}
        >
            <Typography
                variant='caption'
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px'
                }}
            >
                Atendimento WhatsApp <WhatsAppIcon sx={{ fontSize: '35px' }} />
            </Typography>
        </Box>
    )
}

export default ServiceWhatsApp;