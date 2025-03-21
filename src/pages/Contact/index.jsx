import { Box, Button, Checkbox, Container, FormControlLabel, Grid, TextField, Typography } from "@mui/material";
import { motion } from "framer-motion";
import React, { useCallback, useState } from "react";

const colors = {
    primary: "#1976D2",
    accent: "#28A745",
    background: "#F4F6F8",
    text: "#333"
};

const animations = {
    fadeInUp: { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } },
    slideInLeft: { hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } } },
    slideInRight: { hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } } }
};

const Contact = () => {
    const [checked, setChecked] = useState(false);
    const handleCheckboxChange = useCallback(() => setChecked((prev) => !prev), []);

    return (
        <Container maxWidth="md" sx={{ mt: 10, mb: 10, p: 5, backgroundColor: "white", borderRadius: 2, boxShadow: 3 }}>
            <Grid container spacing={4} alignItems="center">
                {/* Image Section */}
                <Grid item xs={12} md={6} component={motion.div} initial="hidden" animate="visible" variants={animations.slideInLeft}>
                    <Box
                        component="img"
                        src="/assets/ContactUs.jpg" // Replace with actual image path
                        alt="Contact Us"
                        sx={{
                            width: "100%",
                            height: "auto",
                            borderRadius: 2,
                            boxShadow: 3
                        }}
                    />
                </Grid>

                {/* Contact Form Section */}
                <Grid item xs={12} md={6} component={motion.div} initial="hidden" animate="visible" variants={animations.fadeInUp}>
                    <Typography variant="h5" fontWeight="bold" sx={{ color: colors.primary, textAlign: "center", mb: 3 }}>
                        Contact Us
                    </Typography>

                    <Grid container spacing={2}>
                        {["Name", "User Email", "Number", "Company"].map((label, index) => (
                            <Grid item xs={12} key={index} component={motion.div} variants={animations.fadeInUp}>
                                <TextField fullWidth label={label} variant="outlined" required />
                            </Grid>
                        ))}
                        <Grid item xs={12} component={motion.div} variants={animations.fadeInUp}>
                            <TextField fullWidth label="Message" variant="outlined" multiline rows={4} required />
                        </Grid>

                        <Grid item xs={12} component={motion.div} variants={animations.slideInRight}>
                            <Typography variant="h6" fontWeight="bold">Terms & Conditions</Typography>
                            <FormControlLabel 
                                control={<Checkbox checked={checked} onChange={handleCheckboxChange} color="primary" />} 
                                label={
                                    <Typography variant="body2">
                                        By opting in for text messages, you agree to receive messages from <strong>MADS CONSULTING GROUP LLC</strong> at the number provided. Msg & data rates may apply. View our <a href="#" style={{ color: colors.primary }}>Privacy Policy</a>.
                                    </Typography>
                                }
                            />
                        </Grid>

                        <Grid item xs={12} textAlign="center" component={motion.div} variants={animations.fadeInUp}>
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Button 
                                    variant="contained" 
                                    sx={{ backgroundColor: colors.primary, color: "white", fontWeight: "bold", padding: "10px 20px" }}
                                    disabled={!checked}
                                >
                                    Send Message
                                </Button>
                            </motion.div>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Contact;
