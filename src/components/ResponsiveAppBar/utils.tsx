import React from "react";
// @Icons
import CategoryIcon from '@mui/icons-material/Category';
import GridViewIcon from "@mui/icons-material/GridView";
import SlowMotionVideoIcon from "@mui/icons-material/SlowMotionVideo";
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

export interface AppBarProps {
	windowApp?: () => Window;
}

export const drawerWidth = 240;

export const ItemsPage = [
	{
		icon: <GridViewIcon />,
		label: "Publicações",
		url: "/publications",
	},
	{
		icon: <CategoryIcon />,
		label: "Categorias",
		url: "/categories",
	},
	{
		icon: <AccountBalanceIcon />,
		label: "Contato",
		url: "/",
	},
	{
		icon: <SlowMotionVideoIcon />,
		label: "Sobre",
		url: "/about",
	},
];