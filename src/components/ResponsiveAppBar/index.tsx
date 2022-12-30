import { FC, useEffect, useState } from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


import { Container } from '@mui/material';
import { Link } from '../Link';

// @Icons
import CategoryIcon from '@mui/icons-material/Category';
import GridViewIcon from "@mui/icons-material/GridView";
import SlowMotionVideoIcon from "@mui/icons-material/SlowMotionVideo";

import { AppBarProps, drawerWidth } from './utils';

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
		icon: <SlowMotionVideoIcon />,
		label: "Sobre",
		url: "/about",
	},
];



const MenuAppBar: FC<AppBarProps> = ({ windowApp }) => {
	const [mobileOpen, setMobileOpen] = useState(false);
	const [scrollY, setScrollY] = useState(0);

	const handleDrawerToggle = () => {
		setMobileOpen((prevState) => !prevState);
	};

	const container = windowApp !== undefined ? () => windowApp().document.body : undefined;

	useEffect(() => {
		const handleScroll = () => {
			setScrollY(window.scrollY);
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<Box sx={{ display: 'flex' }}>
			<AppBar component="nav"
				position="fixed"
				id="app-bar"
				sx={{
					border: "0",
					borderRadius: "3px",
					fontFamily:
						'"Roboto", "Helvetica", "Arial", sans-serif',
					padding: "0.625rem 0",
					marginBottom: "20px",
					color:
						scrollY === 0
							? "#fff"
							: "#555",
					backgroundColor:
						scrollY === 0
							? "transparent"
							: "#fff",
					boxShadow:
						scrollY === 0
							? "none"
							: "0 4px 18px 0px rgba(0, 0, 0, 0.12), 0 7px 10px -5px rgba(0, 0, 0, 0.15)",
				}}
			>
				<Container
					maxWidth="xl"
					sx={{
						height: "40px !important",
						width: "90%",
						maxWidth: "1300px !important",
						marginLeft: "auto",
						marginRight: "auto",
					}}
				>
					<Toolbar
						sx={{
							justifyContent:
								"space-between",
							alignItems:
								"center",
							transform:
								"translateY(-13px)",
						}}
						disableGutters
					>

						<IconButton
							color="inherit"
							aria-label="open drawer"
							edge="start"
							onClick={handleDrawerToggle}
							sx={{ mr: 2, display: { sm: 'none' } }}
						>
							<MenuIcon />
						</IconButton>
						<Link href={`/`}>
							<Typography
								variant="h6"
								noWrap
								sx={{
									mr: 2,
									display: {
										xs: "none",
										md: "flex",
									},
									position:
										"relative",
									color: scrollY === 0 ? "#fff" : "#555",
									height: "50px",
									fontSize:
										"1.125rem",
									lineHeight:
										"30px",
									padding:
										"0.625rem 0",
									textDecoration:
										"none",
								}}
							>
								INTERFIN
							</Typography>
						</Link>
						<Box sx={{ display: { xs: 'none', sm: 'block' } }}>
							{ItemsPage.map((item, key) => (
								<Link href={`${item.url}`} >
									<Button
										key={key}
										startIcon={item.icon}
										sx={{ color: scrollY === 0 ? "#fff" : "#555" }}
									>

										<Typography textAlign="center" >
											{item.label}
										</Typography>

									</Button>
								</Link>
							))}
						</Box>
					</Toolbar>

				</Container>
			</AppBar>
			<Box component="nav">
				<Drawer
					container={container}
					variant="temporary"
					open={mobileOpen}
					onClose={handleDrawerToggle}
					ModalProps={{
						keepMounted: true, // Better open performance on mobile.
					}}
					sx={{
						display: { xs: 'block', sm: 'none' },
						'& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
					}}
				>
					{drawer(handleDrawerToggle)}
				</Drawer>
			</Box>
		</Box >
	);
}

export default MenuAppBar;

const drawer = (handleDrawerToggle: () => void) => {
	return (
		<Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
			<Link href={`/`}>
				<Typography
					variant="h6"
					color="#555"
					my={2}
				>
					INTERFIN
				</Typography>
			</Link>

			<Divider />
			<List>
				{ItemsPage.map((item, key) => (
					<ListItem key={key} disablePadding>
						<ListItemButton sx={{ textAlign: 'center' }}>
							<Link href={`${item.url}`} >
								<Button
									key={key}
									startIcon={item.icon}
									sx={{ color: "#555" }}
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