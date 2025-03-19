import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useTheme } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import useMediaQuery from "@mui/material/useMediaQuery";
import { motion } from "framer-motion";
import React, { useCallback, useEffect, useState } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import Logo from "/assets/Svg.svg";

const Navbar = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const [activeTab, setActiveTab] = useState(location.pathname);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        setActiveTab(location.pathname);
    }, [location.pathname]);

    const handleDrawerToggle = useCallback(() => {
        setDrawerOpen((prev) => !prev);
    }, []);

    const menuItems = [
        { label: "Home", path: "/" },
        { label: "Services", path: "/services" },
        { label: "About", path: "/about" },
        { label: "Contact", path: "/contact" },
    ];

    return (
        <AppBar
            position="fixed"
            elevation={scrolled ? 4 : 0}
            component={motion.div}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            sx={{
                backgroundColor: scrolled ? "rgba(15, 25, 50, 0.9)" : "transparent",
                transition: "background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                backdropFilter: scrolled ? "blur(10px)" : "none",
                borderBottom: scrolled ? "1px solid rgba(255, 255, 255, 0.1)" : "none",
                padding: scrolled ? "8px 0" : "16px 0",
            }}
        >
            <Container maxWidth="xl">
                <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
                    {/* Logo */}
                    <Box component={RouterLink} to="/" sx={{ textDecoration: "none" }}>
                        <motion.img 
                            src={Logo} 
                            alt="Logo" 
                            style={{ height: scrolled ? 60 : 80, transition: "height 0.3s ease-in-out" }} 
                        />
                    </Box>

                    {/* Desktop Navigation */}
                    {!isMobile && (
                        <Box sx={{ display: "flex", gap: 4 }}>
                            {menuItems.map((item) => (
                                <motion.div
                                    key={item.label}
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Button
                                        component={RouterLink}
                                        to={item.path}
                                        sx={{
                                            color: activeTab === item.path ? "#00d9ff" : "white",
                                            fontWeight: activeTab === item.path ? "bold" : "normal",
                                            position: "relative",
                                            "&::after": {
                                                content: '""',
                                                display: "block",
                                                width: activeTab === item.path ? "100%" : "0",
                                                height: "2px",
                                                backgroundColor: "#00d9ff",
                                                transition: "width 0.3s ease-in-out",
                                            },
                                            "&:hover::after": {
                                                width: "100%",
                                            },
                                        }}
                                    >
                                        {item.label}
                                    </Button>
                                </motion.div>
                            ))}
                        </Box>
                    )}

                    {/* Mobile Menu Button */}
                    {isMobile && (
                        <IconButton 
                            onClick={handleDrawerToggle} 
                            sx={{ color: "white" }} 
                            aria-label="Open navigation menu"
                        >
                            <MenuIcon />
                        </IconButton>
                    )}
                </Toolbar>
            </Container>

            {/* Mobile Drawer */}
            <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerToggle}>
                <Box
                    sx={{
                        width: 250,
                        backgroundColor: "#0f1932",
                        color: "white",
                        height: "100%",
                        paddingTop: 2,
                    }}
                    component={motion.div}
                    initial={{ x: 250 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                >
                    <List>
                        {menuItems.map((item) => (
                            <ListItem key={item.label} disablePadding>
                                <ListItemButton
                                    component={RouterLink}
                                    to={item.path}
                                    selected={activeTab === item.path}
                                    aria-selected={activeTab === item.path}
                                    sx={{
                                        color: "white",
                                        "&.Mui-selected": {
                                            backgroundColor: "#00d9ff",
                                            color: "black",
                                        },
                                        "&:hover": {
                                            backgroundColor: "rgba(255, 255, 255, 0.2)",
                                        },
                                    }}
                                    onClick={handleDrawerToggle}
                                >
                                    <ListItemText primary={item.label} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>
        </AppBar>
    );
};

export default Navbar;
