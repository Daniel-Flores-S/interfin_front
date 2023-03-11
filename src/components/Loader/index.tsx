import { Backdrop, Box } from '@mui/material';
import React from 'react';

type Props = {
	loading: boolean;
	children?: React.ReactNode;
};

const Loader: React.FC<Props> = ({ loading }) => {
    return (
        <Backdrop
            sx={{
                color: "primary",
                zIndex: theme =>
                    theme.zIndex
                        .drawer + 1,
            }}
            open={loading}
        >

            <Box
                sx={{
                    position: "relative",
                    width: "88px",
                    height: "88px",
                    "::before,\n::after": {
                        content: "''",
                        width: "100%",
                        height: "100%",
                        animation: "spinner-rfi6tk 1s infinite linear",
                        boxSizing: "border-box",
                        border: "17.6px solid rgba(255,176,32,0.1)",
                        borderRadius: "50%",
                        position: "absolute"
                    },
                    "::before": {
                        animationDirection: "reverse",
                        borderRightColor: "#ffb020",
                        right: "calc(50% - 8.8px)"
                    },
                    "::after": { borderLeftColor: "#ffb020", left: "calc(50% - 8.8px)" },
                    "@keyframes spinner-rfi6tk": {
                        "0%": { transform: "rotate(0deg)" },
                        "50%, 100%": { transform: "rotate(360deg)" }
                    }
                }}
            />
        </Backdrop>
    );
}

export default Loader;