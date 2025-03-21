import { Box, Container, Divider, Grid, Link, Typography } from "@mui/material";

import { Link as RouterLink } from "react-router-dom";
import { grey } from "@mui/material/colors";
import { motion } from "framer-motion";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <Box
            component="footer"
            sx={{
                bgcolor: "background.default",
                color: "primary.dark",
                py: 6,
                // mt: 8,
                borderTop: 1,
                borderColor: grey[300],
                boxShadow: "0px -4px 12px rgba(0, 0, 0, 0.08)", // Subtle shadow effect
            }}
        >
            <Container maxWidth="lg">
                <Grid
                    container
                    spacing={6}
                    component={motion.div}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    {/* Company Info */}
                    <Grid item xs={12} md={4}>
                        <Typography variant="h6" fontWeight="bold" gutterBottom>
                            MADS CONSULTING GROUP LLC
                        </Typography>
                        <Typography variant="body2" sx={{ opacity: 0.8 }}>
                            IT staffing and digital transformation services
                            tailored for businesses of all sizes.
                        </Typography>
                    </Grid>

                    {/* Quick Links */}
                    <Grid item xs={12} md={4}>
                        <Typography variant="h6" fontWeight="bold" gutterBottom>
                            Quick Links
                        </Typography>
                        <Box
                            component="ul"
                            sx={{
                                listStyle: "none",
                                p: 0,
                                m: 0,
                                "& li": { mb: 1 },
                            }}
                        >
                            {["Home", "Services", "About", "Contact"].map(
                                (item) => (
                                    <motion.li
                                        key={item}
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        <Link
                                            component={RouterLink}
                                            to={`/${
                                                item === "Home"
                                                    ? ""
                                                    : item.toLowerCase()
                                            }`}
                                            sx={{
                                                color: "primary.main",
                                                textDecoration: "none",
                                                fontSize: "0.95rem",
                                                "&:hover": {
                                                    textDecoration: "underline",
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
                        <Typography variant="h6" fontWeight="bold" gutterBottom>
                            Contact Us
                        </Typography>
                        <Typography variant="body2" sx={{ opacity: 0.8 }}>
                            Email:{" "}
                            <Link
                                href="mailto:support@madsgroup.com"
                                sx={{
                                    color: "primary.main",
                                    textDecoration: "none",
                                    "&:hover": { textDecoration: "underline" },
                                }}
                            >
                                support@madsgroup.com
                            </Link>
                        </Typography>
                        <Typography variant="body2" sx={{ opacity: 0.8 }}>
                            Address: 16220 N Scottsdale Road, Scottsdale,
                            Arizona 85254-USA
                        </Typography>
                    </Grid>
                </Grid>

                {/* Bottom Footer */}
                <Divider sx={{ my: 4 }} />
                <Box sx={{ textAlign: "center" }}>
                    <Typography variant="body2" sx={{ opacity: 0.7 }}>
                        © {currentYear} MadsGroupSolutions. All rights reserved.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;
