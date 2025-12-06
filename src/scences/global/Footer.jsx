import React from "react";
import { useTheme } from "@mui/material";
import { Box, Typography, Button, useMediaQuery } from "@mui/material";
import { shades } from "../../theme";
import { useNavigate } from "react-router-dom";

const Footer = ({ isDarkMode }) => {
  const navigate = useNavigate();
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const {
    palette: { mode },
  } = useTheme();
  const copyRight = new Date().getFullYear();

  function sendEmail() {
    const email = "info@trikaniamusic.de";
    const subject = "Hello TrikaniaMusic";
    const body = "Hi TrikaniaMusic,%0D%0A";

    window.location.href = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  }
  return (
    <Box
      mt="70px"
      p="40px 0"
      sx={{
        backgroundColor: isDarkMode ? "black" : "",
      }}
    >
      <Box
        width="90%"
        margin="auto"
        display="grid"
        gridTemplateColumns={
          isNonMobile ? "repeat(3, minmax(180px, 1fr))" : "1fr"
        }
        gap="28px"
        padding="24px"
        sx={{
          borderRadius: "10px",
          boxShadow: "0 2px 4px rgba(1, 1, 1, 0.1)",
          border: "none",
          backgroundColor: isDarkMode ? "#0f0f0f" : "white",
        }}
      >
        <Box
          textAlign={isNonMobile ? "left" : "center"}
          display="flex"
          flexDirection="column"
          gap="12px"
        >
          <Button
            onClick={() => navigate("/")}
            sx={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: isNonMobile ? "flex-start" : "center",
              textAlign: isNonMobile ? "left" : "center",
              padding: 0,
              transition: "transform 180ms ease, color 180ms ease",
              "&:hover": {
                transform: "translateY(-2px)",
                color: shades.secondary[500],
              },
            }}
          >
            <Typography
              variant="h6"
              fontWeight="600"
              mb="16px"
              color={shades.secondary[500]}
            >
              TrikaniaMusic
            </Typography>
          </Button>

          <div>
            <Typography
              variant="body2"
              color={isDarkMode || mode === "dark" ? "grey.300" : "grey.700"}
            >
              Berlin {copyRight}
            </Typography>
          </div>
        </Box>
        <Box
          textAlign={isNonMobile ? "left" : "center"}
          display="flex"
          flexDirection="column"
          gap="12px"
        >
          <Typography variant="h6" fontWeight="600" mb="16px">
            Company
          </Typography>

          <Button
            onClick={() => navigate("/about")}
            sx={{
              color: isDarkMode ? "white" : "black",
              justifyContent: isNonMobile ? "flex-start" : "center",
              transition: "transform 180ms ease, color 180ms ease",
              "&:hover": {
                transform: "translateY(-2px)",
                color: shades.secondary[500],
              },
            }}
          >
            About Us
          </Button>

          <Button
            sx={{
              color: isDarkMode ? "white" : "black",
              justifyContent: isNonMobile ? "flex-start" : "center",
              transition: "transform 180ms ease, color 180ms ease",
              "&:hover": {
                transform: "translateY(-2px)",
                color: shades.secondary[500],
              },
            }}
            onClick={() => navigate("/terms")}
          >
            Terms And Conditions
          </Button>
          <Button
            sx={{
              color: isDarkMode ? "white" : "black",
              justifyContent: isNonMobile ? "flex-start" : "center",
              transition: "transform 180ms ease, color 180ms ease",
              "&:hover": {
                transform: "translateY(-2px)",
                color: shades.secondary[500],
              },
            }}
            onClick={() => navigate("/privacy")}
          >
            Privacy Policy
          </Button>
        </Box>

        <Box
          textAlign={isNonMobile ? "left" : "center"}
          display="flex"
          flexDirection="column"
          gap="12px"
        >
          <Typography variant="h6" fontWeight="600" mb="16px">
            Contact
          </Typography>
          <Button
            onClick={() => navigate("/contact")}
            sx={{
              color: isDarkMode ? "white" : "black",
              justifyContent: isNonMobile ? "flex-start" : "center",
              transition: "transform 180ms ease, color 180ms ease",
              "&:hover": {
                transform: "translateY(-2px)",
                color: shades.secondary[500],
              },
            }}
          >
            Contact Us
          </Button>

          <Typography mb="8px">
            <a
              href="https://www.google.com/maps/search/?api=1&query=Clayallee%20227%2C%2014195%20Berlin"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: isDarkMode ? "white" : "black",
                textDecoration: "none",
              }}
            >
              Clayallee 227<br />
              14195 Berlin
            </a>
          </Typography>

          <Box
            sx={{
              position: "relative",
              width: "100%",
              borderRadius: "8px",
              overflow: "hidden",
              boxShadow: "0 1px 4px rgba(0,0,0,0.15)",
              backgroundColor: isDarkMode ? "#0f0f0f" : "#f7f7f7",
            }}
          >
            <Box
              component="iframe"
              title="Clayallee 227 map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2429.3276665125165!2d13.287474076514077!3d52.4520610720628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a85200a093fe0b%3A0x662f1268a0a52d57!2sClayallee%20227%2C%2014195%20Berlin!5e0!3m2!1sen!2sde!4v1700000000000!5m2!1sen!2sde"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              sx={{
                border: 0,
                width: "100%",
                height: isNonMobile ? "180px" : "200px",
                display: "block",
              }}
            />
          </Box>
          <Button
            onClick={sendEmail}
            sx={{
              color: isDarkMode ? "white" : "black",
              justifyContent: isNonMobile ? "flex-start" : "center",
              transition: "transform 180ms ease, color 180ms ease",
              "&:hover": {
                transform: "translateY(-2px)",
                color: shades.secondary[500],
              },
            }}
          >
            <Typography mb="4px" p="2px">
              Email: info@trikaniamusic.de
            </Typography>
          </Button>
          <Button
            sx={{
              justifyContent: isNonMobile ? "flex-start" : "center",
              transition: "transform 180ms ease, color 180ms ease",
              "&:hover": {
                transform: "translateY(-2px)",
                color: shades.secondary[500],
              },
            }}
          >
            <a
              href="tel:+4915228503977"
              style={{
                color: isDarkMode ? "white" : "black",
                textDecoration: "none",
              }}
            >
              <Typography mb="4px">Tel: (+49)152-28503977</Typography>
            </a>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
