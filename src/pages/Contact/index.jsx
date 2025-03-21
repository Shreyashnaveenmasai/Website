import { Button, Checkbox, Container, FormControlLabel, Grid, TextField, Typography } from "@mui/material";
import { motion } from "framer-motion";
import React, { useState } from "react";

const colors = {
    primary: "#1976D2",
    accent: "#28A745",
    background: "#F4F6F8",
    text: "#333"
};

const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const slideInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const slideInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const Contact = () => {
    const [checked, setChecked] = useState(false);

    return (
        <Container maxWidth="sm" sx={{ mt: 10, mb: 10, p: 5, backgroundColor: "white", borderRadius: 2, boxShadow: 3 }} component={motion.div} initial="hidden" animate="visible" variants={fadeInUp}>
            <Typography variant="h5" fontWeight="bold" sx={{ color: colors.primary, textAlign: "center", mb: 3 }} component={motion.div} variants={slideInLeft}>
                Contact Us
            </Typography>
            <Grid container spacing={2} component={motion.div} initial="hidden" animate="visible">
                {["Name", "User Email", "Number", "Company"].map((label, index) => (
                    <Grid item xs={12} key={index} component={motion.div} variants={fadeInUp}>
                        <TextField fullWidth label={label} variant="outlined" />
                    </Grid>
                ))}
                <Grid item xs={12} component={motion.div} variants={fadeInUp}>
                    <TextField fullWidth label="Message" variant="outlined" multiline rows={4} />
                </Grid>
                <Grid item xs={12} component={motion.div} variants={slideInRight}>
                    <Typography variant="h6" fontWeight="bold">Terms & Conditions</Typography>
                    <FormControlLabel 
                        control={<Checkbox checked={checked} onChange={() => setChecked(!checked)} color="primary" />} 
                        label={
                            <Typography variant="body2">
                                By opting in for text messages, you agree to receive messages from 22nd Century Technologies Inc. at the number provided. Msg & data rates may apply. View our <a href="#" style={{ color: colors.primary }}>Privacy Policy</a>.
                            </Typography>
                        }
                    />
                </Grid>
                <Grid item xs={12} textAlign="center" component={motion.div} variants={fadeInUp}>
                    <motion.div whileHover={{ scale: 1.1, rotate: 2 }} whileTap={{ scale: 0.9 }}>
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
        </Container>
    );
};

export default Contact;
