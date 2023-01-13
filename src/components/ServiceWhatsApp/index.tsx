import { Box, Button, Link, Typography } from '@mui/material';
import React from 'react';

import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const ServiceWhatsApp: React.FC = () => {
    return (
        <Link target="_blank" href="https://wa.me/557781165042">
            <Button
                variant='contained'
                sx={{
                    position: 'fixed',
                    bottom: '60px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    padding: '10px 20px',
                    height: 'auto',
                    width: '200px',
                    zIndex: '20',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    // fontFamily: 'Montserrat',
                    // textDecoration: 'none',
                    textAlign: 'left',
                    fontWeight: 400,
                    lineHeight: '18px',
                    borderRadius: '23px',
                    textTransform: 'uppercase',
                }}
            >

                Atendimento WhatsApp <WhatsAppIcon sx={{ fontSize: '35px' }} />

            </Button> </Link>
    )
}

export default ServiceWhatsApp;