import {
    Box,
    Button,
    Card,
    CardContent,
    Container,
    Grid,
    TextField,
    Typography,
} from "@mui/material";

import EmailIcon from "@mui/icons-material/Email";
import React from "react";
import RoomIcon from "@mui/icons-material/Room";
import { motion } from "framer-motion";

const colors = {
    primary: "#1976D2", // IT Staffing Blue
    accent: "#28A745", // Green for CTA
    background: "#F4F6F8", // Light Grey Background
    text: "#333", // Dark Grey for readability
};

const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const Contact = () => {
    return (
        <Container
            maxWidth="lg"
            sx={{
                mt: { xs: 8, md: 12 },
                mb: 10,
                backgroundColor: colors.background,
                p: 5,
                borderRadius: 2,
                boxShadow: 3,
            }}
        >
            {/* Contact Details */}
            <Grid
                container
                spacing={6}
                justifyContent="center"
                component={motion.div}
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
            >
                {[
                    {
                        icon: (
                            <RoomIcon
                                fontSize="large"
                                sx={{ color: colors.accent }}
                            />
                        ),
                        title: "OUR ADDRESS",
                        text: "16220 N Scottsdale Road, Scottsdale, Arizona 85254-USA",
                    },
                    {
                        icon: (
                            <EmailIcon
                                fontSize="large"
                                sx={{ color: colors.accent }}
                            />
                        ),
                        title: "MESSAGE US",
                        text: "support@madsgroup.com",
                    },
                ].map((item, index) => (
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        md={4}
                        key={index}
                        component={motion.div}
                        variants={fadeInUp}
                    >
                        <motion.div
                            whileHover={{ scale: 1.08 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Card
                                sx={{
                                    textAlign: "center",
                                    p: 3,
                                    boxShadow: 4,
                                    backgroundColor: "white",
                                }}
                            >
                                <CardContent>
                                    {item.icon}
                                    <Typography
                                        variant="h6"
                                        fontWeight="bold"
                                        sx={{ mt: 1, color: colors.primary }}
                                    >
                                        {item.title}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="textSecondary"
                                    >
                                        {item.text}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </Grid>
                ))}
            </Grid>

            {/* Contact Form & Image */}
            <Grid container spacing={4} sx={{ mt: 5 }} alignItems="center">
                {/* Contact Form */}
                <Grid item xs={12} md={6}>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <Typography
                            variant="h5"
                            fontWeight="bold"
                            sx={{ color: colors.primary }}
                            gutterBottom
                        >
                            CONTACT FORM
                        </Typography>
                        <Grid
                            container
                            spacing={2}
                            component={motion.div}
                            variants={staggerContainer}
                            initial="hidden"
                            animate="visible"
                        >
                            {["Name", "Email", "Phone", "Subject"].map(
                                (label, index) => (
                                    <Grid
                                        item
                                        xs={12}
                                        sm={6}
                                        key={index}
                                        component={motion.div}
                                        variants={fadeInUp}
                                    >
                                        <TextField
                                            fullWidth
                                            label={label}
                                            variant="outlined"
                                            sx={{
                                                mb: 2,
                                                "& .MuiOutlinedInput-root": {
                                                    borderRadius: 2,
                                                },
                                                "& label.Mui-focused": {
                                                    color: colors.primary,
                                                },
                                                "& .MuiOutlinedInput-notchedOutline":
                                                    {
                                                        borderColor:
                                                            colors.primary,
                                                    },
                                            }}
                                        />
                                    </Grid>
                                )
                            )}
                            <Grid
                                item
                                xs={12}
                                component={motion.div}
                                variants={fadeInUp}
                            >
                                <TextField
                                    fullWidth
                                    label="Your Message"
                                    variant="outlined"
                                    multiline
                                    rows={4}
                                    sx={{
                                        mb: 2,
                                        "& .MuiOutlinedInput-root": {
                                            borderRadius: 2,
                                        },
                                        "& label.Mui-focused": {
                                            color: colors.primary,
                                        },
                                        "& .MuiOutlinedInput-notchedOutline": {
                                            borderColor: colors.primary,
                                        },
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} textAlign="center">
                                <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <Button
                                        variant="contained"
                                        sx={{
                                            backgroundColor: colors.accent,
                                            color: "white",
                                            fontWeight: "bold",
                                            "&:hover": {
                                                backgroundColor: "#218838",
                                            },
                                        }}
                                    >
                                        SEND MESSAGE
                                    </Button>
                                </motion.div>
                            </Grid>
                        </Grid>
                    </motion.div>
                </Grid>

                {/* Contact Image */}
                <Grid item xs={12} md={6}>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <Box
                            component="img"
                            src="/assets/HeroSectionImage.jpeg" // Replace with actual image path
                            alt="Contact Us"
                            sx={{
                                width: "100%",
                                height: "auto",
                                borderRadius: 2,
                                boxShadow: 4,
                            }}
                        />
                    </motion.div>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Contact;
