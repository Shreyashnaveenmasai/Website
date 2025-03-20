import React, { useEffect, useState } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Drawer from "@mui/material/Drawer";
import FacebookIcon from "@mui/icons-material/Facebook";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Logo from "/assets/Svg.svg";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Toolbar from "@mui/material/Toolbar";
import TwitterIcon from "@mui/icons-material/Twitter";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const Navbar = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [isFixed, setIsFixed] = useState(true);
    const location = useLocation();
    const [activeTab, setActiveTab] = useState(location.pathname);

    useEffect(() => {
        const handleScroll = () => {
            const footer = document.querySelector("footer");
            if (footer) {
                const footerTop = footer.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                setIsFixed(footerTop > windowHeight);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen);
    };

    const menuItems = [
        { label: "Home", path: "/" },
        { label: "Services", path: "/services" },
        { label: "About", path: "/about" },
        { label: "Blog", path: "/blog" },
        { label: "Contact", path: "/contact" },
    ];

    const getDrawer = () => (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={handleDrawerToggle}
        >
            <List>
                {menuItems.map((item) => (
                    <ListItem key={item.label} disablePadding>
                        <ListItemButton
                            component={RouterLink}
                            to={item.path}
                            selected={activeTab === item.path}
                            onClick={() => setActiveTab(item.path)}
                        >
                            <ListItemText primary={item.label} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <AppBar
            position={isFixed ? "fixed" : "absolute"}
            elevation={0}
            sx={{
                backgroundColor: theme.palette.background.paper,
                borderBottom: 1,
                borderColor: "grey.200",
                transition: "all 0.3s ease-in-out",
                top: isFixed ? 0 : "auto",
                bottom: isFixed ? "auto" : 0,
            }}
        >
            <Container maxWidth="lg">
                <Toolbar
                    // disableGutters
                    sx={{
                        paddingY: 1,
                        display: "flex",
                        gap: 3,
                        justifyContent: "space-between",
                    }}
                >
                    {/* Logo */}
                    <Box
                        component={RouterLink}
                        to="/"
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            textDecoration: "none",
                            mr: 4,
                        }}
                    >
                        <img src={Logo} alt="Logo" style={{ height: 60 }} />
                    </Box>

                    {/* Desktop Navigation */}
                    {!isMobile && (
                        <Box sx={{ display: "flex", gap: 3 }}>
                            {menuItems.map((item) => (
                                <Button
                                    key={item.label}
                                    component={RouterLink}
                                    to={item.path}
                                    sx={{
                                        color:
                                            activeTab === item.path
                                                ? theme.palette.primary.main
                                                : theme.palette.text.primary,
                                        "&:hover": {
                                            color: theme.palette.primary.main,
                                            backgroundColor: "transparent",
                                        },
                                    }}
                                    onClick={() => setActiveTab(item.path)}
                                >
                                    {item.label}
                                </Button>
                            ))}
                        </Box>
                    )}

                    {/* Mobile Menu Button */}
                    {isMobile && (
                        <IconButton
                            edge="end"
                            aria-label="menu"
                            onClick={handleDrawerToggle}
                            sx={{ color: theme.palette.text.primary }}
                        >
                            <MenuIcon />
                        </IconButton>
                    )}

                    {/* Mobile Drawer */}
                    <Drawer
                        anchor="right"
                        open={drawerOpen}
                        onClose={handleDrawerToggle}
                    >
                        {getDrawer()}
                    </Drawer>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Navbar;
