import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';
import { Box } from '@mui/system';

export default function CheckboxList() {

    return (
        <Box
            component="section"
            sx={{ display: 'flex' }}
        >
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>

                {items.map((value) =>
                    <ListItem
                        key={value.id}
                        disablePadding
                    >
                        <ListItemButton role={undefined} dense>
                            <ListItemText sx={{ 
                                color: "text.widget",
                                whiteSpace: "nowrap",
                                 }} primary={value.name} />
                        </ListItemButton>
                    </ListItem>
                )}
            </List>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>

                {items2.map((value) =>
                    <ListItem
                        key={value.id}
                        disablePadding
                    >
                        <ListItemButton role={undefined} dense>
                            <ListItemText sx={{ color: "text.widget" }} primary={value.name} />
                        </ListItemButton>
                    </ListItem>
                )}
            </List>
        </Box>
    );
}

const items = [
    { id: 1, name: 'Documentos importantes' },
    { id: 2, name: 'Correspondente Bancário' },
    { id: 3, name: 'Fale Conosco' },
];

const items2 = [
    { id: 5, name: 'Política de Privacidade' },
    { id: 6, name: 'Termos de Uso' },
    { id: 7, name: 'Tarifas' },
];