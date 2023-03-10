import React from "react";
// @Icons
import CategoryIcon from '@mui/icons-material/Category';
import GridViewIcon from "@mui/icons-material/GridView";
import SlowMotionVideoIcon from "@mui/icons-material/SlowMotionVideo";

export interface AppBarProps {
	windowApp?: () => Window;
}

export const drawerWidth = 240;

export const ItemsPage = [
	{
		icon: <GridViewIcon />,
		label: "Nossas soluções",
		url: "/publications",
	},
	{
		icon: <CategoryIcon />,
		label: "Simulador",
		url: "/",
	}, 
	{
		icon: <SlowMotionVideoIcon />,
		label: "Quem somos",
		url: "/about",
	},
];