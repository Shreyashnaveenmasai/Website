import { Box, Container, Divider, Grid, Link, Typography } from "@mui/material";

import { motion } from "framer-motion";
import { Link as RouterLink } from "react-router-dom";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <Box
            component="footer"
            sx={{
                bgcolor: "#02225B",
                color: "#ffffff",
                py: 8,
                position: "relative",
                "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background: "linear-gradient(45deg, rgba(0, 158, 197, 0.1) 0%, rgba(46, 126, 237, 0.1) 100%)",
                    zIndex: 0,
                },
            }}
        >
            <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
                <Grid
                    container
                    spacing={6}
                    component={motion.div}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Company Info */}
                    <Grid item xs={12} md={4}>
                        <Typography 
                            variant="h6" 
                            fontWeight="bold" 
                            gutterBottom
                            sx={{
                                background: "linear-gradient(45deg, #00d9ff 0%, #009EC5 100%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            MADS CONSULTING GROUP LLC
                        </Typography>
                        <Typography variant="body2" sx={{ opacity: 0.9 }}>
                            IT staffing and digital transformation services
                            tailored for businesses of all sizes.
                        </Typography>
                    </Grid>

                    {/* Quick Links */}
                    <Grid item xs={12} md={4}>
                        <Typography 
                            variant="h6" 
                            fontWeight="bold" 
                            gutterBottom
                            sx={{
                                background: "linear-gradient(45deg, #00d9ff 0%, #009EC5 100%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            Quick Links
                        </Typography>
                        <Box
                            component="ul"
                            sx={{
                                listStyle: "none",
                                p: 0,
                                m: 0,
                                "& li": { mb: 1.5 },
                            }}
                        >
                            {["Home", "Services", "About", "Contact"].map(
                                (item) => (
                                    <motion.li
                                        key={item}
                                        whileHover={{ x: 5 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <Link
                                            component={RouterLink}
                                            to={`/${
                                                item === "Home"
                                                    ? ""
                                                    : item.toLowerCase()
                                            }`}
                                            sx={{
                                                color: "#00d9ff",
                                                textDecoration: "none",
                                                fontSize: "0.95rem",
                                                "&:hover": {
                                                    color: "#009EC5",
                                                },
                                                transition: "color 0.3s ease",
                                            }}
                                        >
                                            {item}
                                        </Link>
                                    </motion.li>
                                )
                            )}
                        </Box>
                    </Grid>

                    {/* Contact Info */}
                    <Grid item xs={12} md={4}>
                        <Typography 
                            variant="h6" 
                            fontWeight="bold" 
                            gutterBottom
                            sx={{
                                background: "linear-gradient(45deg, #00d9ff 0%, #009EC5 100%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            Contact Us
                        </Typography>
                        <Typography variant="body2" sx={{ opacity: 0.9, mb: 1 }}>
                            Email:{" "}
                            <Link
                                href="mailto:support@madsgroup.com"
                                sx={{
                                    color: "#00d9ff",
                                    textDecoration: "none",
                                    "&:hover": { 
                                        color: "#009EC5",
                                    },
                                    transition: "color 0.3s ease",
                                }}
                            >
                                support@madsgroup.com
                            </Link>
                        </Typography>
                        <Typography variant="body2" sx={{ opacity: 0.9 }}>
                            Address: 16220 N Scottsdale Road, Scottsdale,
                            Arizona 85254-USA
                        </Typography>
                    </Grid>
                </Grid>

                {/* Bottom Footer */}
                <Divider sx={{ my: 4, borderColor: "rgba(255, 255, 255, 0.1)" }} />
                <Box sx={{ textAlign: "center" }}>
                    <Typography variant="body2" sx={{ opacity: 0.7 }}>
                        © {currentYear} MadsConsultingGroup. All rights reserved.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;
