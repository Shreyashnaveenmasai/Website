import { Box, Button, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";

const About = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 10, mb: 10 }}>
      <Box
        component={motion.div}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        display="grid"
        gridTemplateColumns={{ xs: "1fr", md: "1fr 1fr" }}
        alignItems="center"
        gap={6}
      >
        {/* Left Side - Image */}
        <motion.img
          src="/path-to-uploaded-image.png"
          alt="About Us"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          style={{
            width: "100%",
            height: "auto",
            borderRadius: "8px",
            boxShadow: "3px 3px 10px rgba(0,0,0,0.1)",
          }}
        />

        {/* Right Side - Text Content */}
        <Box>
          <Typography
            component={motion.div}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            variant="h4"
            fontWeight="bold"
            gutterBottom
          >
            Adapting Technology to Fit Your Business
          </Typography>
          <Typography variant="body1" color="textSecondary" sx={{ mb: 3 }}>
            MADS Consulting Services LLC is a trusted provider of IT consulting services, 
            specializing in software development, cloud-based solutions, ERP implementations, 
            and project management. For over six years, we have helped businesses across 
            industries optimize their technology infrastructure, improve operational efficiency, 
            and achieve long-term success.
          </Typography>
        </Box>
      </Box>

      {/* New Section - Beyond Consulting – Our In-House Projects */}
      <Box
        component={motion.div}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        textAlign="center"
        sx={{ pl: 2, mt: 8 }}
      >
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Beyond Consulting – Our In-House Projects
        </Typography>

        <Typography variant="body1" color="textSecondary" sx={{ mb: 3 }}>
          At MADS Consulting, we not only provide IT consulting and implementation services 
          but also develop our own in-house projects. These projects allow us to stay ahead 
          of technology trends and provide cutting-edge solutions to our clients.
        </Typography>

        {/* Bullet List */}
        <Box component="ul" sx={{ pl: 2, textAlign: "left", display: "inline-block" }}>
          {[
            "Enterprise Business Applications – Custom-built solutions for finance, HR, and supply chain management.",
            "AI-Driven Analytics & Automation Tools – Machine learning-based insights and process automation.",
            "Cloud-Native SaaS Products – Scalable cloud-based applications for industry needs.",
            "Cybersecurity & Compliance Solutions – Proprietary security tools for compliance.",
          ].map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              style={{ marginBottom: "8px" }}
            >
              <Typography variant="body1" color="textSecondary">
                {item}
              </Typography>
            </motion.li>
          ))}
        </Box>

        {/* Image Grid */}
        <Box
          display="grid"
          gridTemplateColumns={{ xs: "1fr", md: "1fr 1fr" }}
          gap={4}
          justifyContent="center"
          sx={{ mt: 4 }}
        >
          {[1, 2].map((num) => (
            <motion.img
              key={num}
              src={`/mnt/data/image.png`}
              alt={`Small Apps ${num}`}
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              style={{
                width: "100%",
                maxWidth: "400px",
                height: "auto",
                borderRadius: "8px",
                boxShadow: "3px 3px 10px rgba(0,0,0,0.1)",
              }}
            />
          ))}
        </Box>
      </Box>

      {/* New Section - Become a Patron */}
      <Box
        component={motion.div}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        textAlign="center"
        sx={{ mt: 10, py: 10, bgcolor: "#f8f9fa" }}
      >
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Become a Consultant - Join a Creator’s Page
        </Typography>
        <Typography variant="body1" color="textSecondary" sx={{ mb: 4 }}>
          <strong>Our Mission:</strong> "To empower businesses with innovative and scalable IT solutions that optimize performance, enhance security, and drive growth."
        </Typography>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button variant="contained" color="primary" size="large">
            Contact Us
          </Button>
        </motion.div>
      </Box>
    </Container>
  );
};

export default About;
