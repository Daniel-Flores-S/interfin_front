import { Grid, } from "@mui/material";
import { styled } from '@mui/material/styles';


export const GridContainer = styled(Grid)(() => ({
    minHeight: "98vh",
    width: "100%",
    opacity: "1",
    background:
        'url("https://i.ibb.co/xXNJLX0/bannerprincipal1.png") center top / cover transparent',
    boxShadow: "none",
    display: "grid",
    "::before": {
        background:
            "linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.4) 100%)",
        content: '""',
        height: "100%",
        left: "0",
        position:
            "absolute",
        top: "0",
        width: "100%",
    },
}));
