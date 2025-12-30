import React from "react";
import { useTheme } from "@mui/material";
import { Box, Typography, Button, useMediaQuery, Stack, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
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
    const email = "workmail@trikaniamusic.com";
    const subject = "Hello TrikaniaMusic";
    const body = "Hi TrikaniaMusic,%0D%0A";

    window.location.href = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  }
  return (
    <Box
      mt="70px"
      p="24px 0"
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
        gap="16px"
        padding="16px"
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

          <Stack
            direction="row"
            spacing={1}
            justifyContent={isNonMobile ? "flex-start" : "center"}
          >
            <IconButton
              component="a"
              href="https://www.facebook.com/trikaniamusic/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: isDarkMode ? "white" : "black",
                "&:hover": { color: "#39ff14" },
              }}
              aria-label="TrikaniaMusic on Facebook"
            >
              <FacebookIcon />
            </IconButton>
            <IconButton
              component="a"
              href="https://www.instagram.com/trikaniamusic/?hl=de"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: isDarkMode ? "white" : "black",
                "&:hover": { color: "#39ff14" },
              }}
              aria-label="TrikaniaMusic on Instagram"
            >
              <InstagramIcon />
            </IconButton>
            <IconButton
              component="a"
              href="https://www.youtube.com/@trikaniamusic9902"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: isDarkMode ? "white" : "black",
                "&:hover": { color: "#39ff14" },
              }}
              aria-label="TrikaniaMusic on YouTube"
            >
              <YouTubeIcon />
            </IconButton>
          </Stack>

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
              Email: workmail@trikaniamusic.com
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
