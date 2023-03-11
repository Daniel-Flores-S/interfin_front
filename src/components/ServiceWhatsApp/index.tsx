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
                    textAlign: 'left',
                    fontWeight: 400,
                    lineHeight: '18px',
                    borderRadius: '23px',
                    textTransform: 'uppercase',
                    animation:
                        "shake-horizontal 0.8s cubic-bezier(0.455, 0.030, 0.515, 0.955)  both",
                    "@keyframes shake-horizontal": {
                        "0%,\n  100%": { transform: "translateX(0)" },
                        "10%,\n  30%,\n  50%,\n  70%": { transform: "translateX(-10px)" },
                        "20%,\n  40%,\n  60%": { transform: "translateX(10px)" },
                        "80%": { transform: "translateX(8px)" },
                        "90%": { transform: "translateX(-8px)" }
                    }
                }}
            >

                Atendimento WhatsApp <WhatsAppIcon sx={{ fontSize: '35px' }} />

            </Button> </Link>
    )
}

export default ServiceWhatsApp;