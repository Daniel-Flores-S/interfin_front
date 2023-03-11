import { FC, useEffect, useState } from 'react';

// @Mui
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Container } from '@mui/material';
import { useRouter } from 'next/router';

// @Utils
import * as UT from './utils';
import { Link } from '../Link';
import Image from 'next/image';
import { drawer } from './drawer';


const AppBarMenu: FC<UT.AppBarProps> = ({ windowApp }) => {
	const router = useRouter()
	const [mobileOpen, setMobileOpen] = useState(false);
	const [scrollY, setScrollY] = useState(0);

	const handleDrawerToggle = () => {
		setMobileOpen((prevState) => !prevState);
	};

	const container = windowApp !== undefined ? () => windowApp().document.body : undefined;

	useEffect(() => {
		if (typeof window !== 'undefined') {
			const handleScroll = () => {
				setScrollY(window.scrollY);
			};
			window.addEventListener('scroll', handleScroll);
			return () => {
				window.removeEventListener('scroll', handleScroll);
			};
		}
	}, []);


	return (
		<Box sx={{ display: 'flex' }}>
			<AppBar component="nav"
				position="fixed"
				id="app-bar"
				sx={{
					border: "0",
					borderRadius: "3px",
					fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
					padding: "0.625rem 0",
					marginBottom: "20px",
					color: "#fff",
					backgroundColor: scrollY === 0 ? "transparent" : "#1B1B1B",
					boxShadow:
						scrollY === 0
							? "none"
							: "0 4px 18px 0px rgba(0, 0, 0, 0.12), 0 7px 10px -5px rgba(0, 0, 0, 0.15)",
				}}
			>
				<Container
					maxWidth="xl"
					sx={{
						//height: `${scrollY === 0  ? '40px' : '50px'} !important`,
						height: `45px !important`,
						width: "90%",
						maxWidth: "1600px !important",
						marginLeft: "auto",
						marginRight: "auto",
					}}
				>
					<Toolbar
						sx={{
							alignItems: "center",
							justifyContent: {
								xs: "space-between",
								sm: "start",

							}
							//transform: scrollY === 0 ? "translateY(20px)" : "translateY(0px)"
							//transform:  "translateY(20px)"
						}}
						disableGutters
					>

						<IconButton
							color="inherit"
							aria-label="open drawer"
							edge="start"
							onClick={handleDrawerToggle}
							sx={{
								mr: 2,
								display: { sm: 'none' },
								float: "left",
							}}
						>
							<MenuIcon />
						</IconButton>

						<Box>
							<Image
								onClick={() => router.push(`/`)}
								src={"/static/2Logotipo-PNG/VersaoHorizontal/Horizontal-Principal1.png"}
								alt="logo"
								width={130}
								height={40}
								style={{
									cursor: "pointer",
								}}
							/>
						</Box>
						<Box display={{ xs: 'block', sm: 'none' }} />
						<Box
							sx={{
								display: { xs: 'none', sm: 'block' },
								flexGrow: 1,
								alignItems: "center",
								marginLeft: {
									xs: "0px",
									md: "15px",
								}
							}}
						>
							{UT.ItemsPage.map((item, key) => (
								<Link href={`${item.url}`} key={key}>
									<Button
										color="warning"
										sx={{
											color: "white",
											paddingBottom: '4px'
										}} >
										<Typography
											textAlign="center"
											fontSize={19}
										>
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
					ModalProps={{ keepMounted: true }}
					sx={{
						display: { xs: 'block', sm: 'none' },
						'& .MuiDrawer-paper': { boxSizing: 'border-box', width: UT.drawerWidth },
					}}
				>
					{drawer(handleDrawerToggle)}
				</Drawer>
			</Box>
		</Box >
	);
}

export default AppBarMenu;