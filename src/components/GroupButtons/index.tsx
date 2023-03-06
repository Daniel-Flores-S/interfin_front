
import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Items } from './utils';


const GroupButtons: React.FC = () => {
    return (
        <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 1, sm: 2, md: 4 }}
            sx={{ 
                padding: '2rem',
                width: '100%',
             }}
        >
            {Items.map((item, index) => (
                <Button
                    key={index}
                    variant="contained"
                    color="warning"
                    startIcon={item.icon}
                    fullWidth
                    sx={{
                        color: '#2e2c2c', 
                    }}
                >
                    {item.label}
                </Button>
            ))}
        </Stack>
    );
}

export default GroupButtons;