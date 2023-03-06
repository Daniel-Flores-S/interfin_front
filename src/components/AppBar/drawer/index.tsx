
// @Mui
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

// @Utils
import * as UT from '../utils';
import { Link } from '../../Link';




export const drawer = (handleDrawerToggle: () => void) => {
    return (
        <Box onClick={handleDrawerToggle} textAlign="center">
            <Link href={`/`}>
                <Typography
                    variant="h6"
                    color="#ffffff"
                    my={2}
                >
                    INTERFIN
                </Typography>
            </Link>

            <Divider />
            <List>
                {UT.ItemsPage.map((item, key) => (
                    <ListItem key={key} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <Link href={`${item.url}`} >
                                <Button
                                    key={key}
                                    startIcon={item.icon}
                                    sx={{ color: "#ffffff" }}
                                >
                                    <ListItemText primary={item.label} />

                                </Button>
                            </Link>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
}