import React from "react";

// @Icons
import HeadsetMicOutlinedIcon from '@mui/icons-material/HeadsetMicOutlined';
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
 

export const Items = [
	{
		icon: <PersonOutlineOutlinedIcon />, 
		label: "Área do cliente",
		url: "/publications",
	},
	{
		icon: <HandshakeOutlinedIcon />,
		label: "Parceiros",
		url: "/categories",
	}, 
	{
		icon: <HeadsetMicOutlinedIcon />,
		label: "Atendimento",
		url: "/about",
	},
];