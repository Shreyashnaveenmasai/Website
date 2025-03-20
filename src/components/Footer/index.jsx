import { Box, Container, Grid, Link, Typography } from "@mui/material";

import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { motion } from "framer-motion";

const linkVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const iconVariants = {
    hover: { scale: 1.2, transition: { duration: 0.3 } },
};

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <Box
            id="footer"
            component="footer"
            sx={{
                bgcolor: "grey.900",
                color: "grey.100",
                py: 6,
                mt: 10,
            }}
            component={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <Container maxWidth="lg">
                <Grid
                    container
                    spacing={8}
                    component={motion.div}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Company Info */}
                    <Grid
                        item
                        xs={12}
                        md={4}
                        component={motion.div}
                        variants={linkVariants}
                    >
                        <Typography
                            variant="h6"
                            fontWeight="bold"
                            gutterBottom
                            sx={{ textAlign: { xs: "center", md: "left" } }}
                        >
                            TechSolutions
                        </Typography>
                        <Typography
                            variant="body2"
                            color="grey.300"
                            sx={{ textAlign: { xs: "center", md: "left" } }}
                        >
                            IT staffing and digital transformation services
                            tailored for businesses of all sizes.
                        </Typography>
                    </Grid>

                    {/* Quick Links */}
                    <Grid
                        item
                        xs={12}
                        md={4}
                        component={motion.div}
                        variants={linkVariants}
                    >
                        <Typography
                            variant="h6"
                            fontWeight="bold"
                            gutterBottom
                            sx={{ textAlign: { xs: "center", md: "left" } }}
                        >
                            Quick Links
                        </Typography>
                        <nav>
                            <Box
                                component="ul"
                                sx={{
                                    listStyle: "none",
                                    p: 0,
                                    m: 0,
                                    "& li": {
                                        mb: 1,
                                        textAlign: { xs: "center", md: "left" },
                                    },
                                }}
                            >
                                {["Home", "Services", "About", "Contact"].map(
                                    (item) => (
                                        <motion.li
                                            key={item}
                                            whileHover={{ scale: 1.1 }}
                                        >
                                            <Link
                                                component={RouterLink}
                                                to={`/${item.toLowerCase()}`}
                                                sx={{
                                                    color: "grey.300",
                                                    textDecoration: "none",
                                                    "&:hover": {
                                                        color: "primary.light",
                                                    },
                                                    transition:
                                                        "color 0.3s ease",
                                                }}
                                            >
                                                {item}
                                            </Link>
                                        </motion.li>
                                    )
                                )}
                            </Box>
                        </nav>
                    </Grid>

                    {/* Contact Info & Social Links */}
                    <Grid
                        item
                        xs={12}
                        md={4}
                        component={motion.div}
                        variants={linkVariants}
                    >
                        <Typography
                            variant="h6"
                            fontWeight="bold"
                            gutterBottom
                            sx={{ textAlign: { xs: "center", md: "left" } }}
                        >
                            Contact Us
                        </Typography>
                        <Typography
                            variant="body2"
                            color="grey.300"
                            paragraph
                            sx={{ textAlign: { xs: "center", md: "left" } }}
                        >
                            Email: support@madsgroup.com
                        </Typography>
                        <Typography
                            variant="body2"
                            color="grey.300"
                            paragraph
                            sx={{ textAlign: { xs: "center", md: "left" } }}
                        >
                            Address: 16220 N Scottsdale Road, Scottsdale,
                            Arizona 85254-USA
                        </Typography>
                    </Grid>
                </Grid>

                {/* Bottom Footer */}
                <Box
                    sx={{
                        mt: 6,
                        pt: 3,
                        pb: 3,
                        borderTop: 1,
                        borderColor: "grey.700",
                        textAlign: "center",
                    }}
                    component={motion.div}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5 }}
                >
                    <Typography variant="body2" color="grey.400">
                        © {currentYear} MadsGroupSolutions. All rights reserved.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;
