import React, { useState, useContext } from "react";
import ScrollTop from "../../../components/ScrollTop";
import { Box, Typography, useMediaQuery, Button } from "@mui/material";
import { HerbContext } from "../../../context/Context";
import { shades } from "../../../theme";
import { useNavigate } from "react-router-dom";
import Kaya from "../../../artistpictures/kaya.jpg";
import profilePicture from "../../../assets/angele-kamp-kcvRHtAyuig-unsplash.jpg";


const KayaTVideos = ({ isDarkMode }) => {
  const { state, dispatchState } = useContext(HerbContext);

  const [isHovered, setIsHovered] = useState(false);

  // Define a styled component with custom CSS
  const navigate = useNavigate();
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const backgroundColor = isDarkMode ? "#000000" : "none";

  return (
    <Box
      className={`home ${isDarkMode ? "dark-mode" : ""}`}
      padding="10px"
      width="75%"
      margin="100px auto"
      textAlign="center"
      sx={{
        background: "hsla(0, 0%, 100%, 0.55)",
        backdropFilter: "blur(30px)",
        backgroundColor: backgroundColor,
        borderRadius: "10px",
        boxShadow: "0 2px 4px rgba(1, 1, 1, 0.1)",
        border: "none",
        position: "relative",
        overflow: "hidden",
      }}
      position="relative"
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
    >
      <ScrollTop isDarkMode={isDarkMode} />

      {/* Moses */}

      <Box margin="50px auto" width="500px" title="video">
        <iframe
          width="600"
          height="400"
          src="https://www.youtube.com/embed/q5M1MNkgWY0?si=BnB2D9gBeWxAzpls"
          frameborder="0"
          allowfullscreen
          title="Moses"
          style={{
            border: "2px solid #ccc", // Example border style
            borderRadius: "10px", // Example border radius
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", // Example box shadow
            // Add more styles as needed
          }}
        ></iframe>
        <Typography
          sx={{
            "&:hover": { cursor: "pointer", color: shades.secondary[500] },
            display: isNonMobile ? "block" : "none",
            margin: "10px",
          }}
          color={!isDarkMode ? shades.primary[500] : undefined}
          title="We Need A Moses"
        >
          Dance In The Moonlight
        </Typography>
      </Box>

      {/* Silent Voices Snippet */}

      <Box margin="50px auto" width="500px" title="video-1">
        <iframe
          width="600"
          height="400"
          src="https://www.youtube.com/embed/isTLPGycbI0?si=WA5weuGS17K_n9zn"
          frameborder="0"
          allowfullscreen
          title="EPK"
          style={{
            border: "2px solid #ccc", // Example border style
            borderRadius: "10px", // Example border radius
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", // Example box shadow
            // Add more styles as needed
          }}
        ></iframe>
        <Typography
          sx={{
            "&:hover": { cursor: "pointer", color: shades.secondary[500] },
            display: isNonMobile ? "block" : "none",
            margin: "10px",
          }}
          color={!isDarkMode ? shades.primary[500] : undefined}
          title="We Need A Moses"
        >
          Run Away From You
        </Typography>
      </Box>

      {/* EPK */}

      <Box margin="50px auto" width="500px" title="video-1">
        <iframe
          width="600"
          height="400"
          src="https://www.youtube.com/embed/zQaleZFt7pc?si=1Jgq-SY8E4RzyjMC"
          frameborder="0"
          allowfullscreen
          title="EPK"
          style={{
            border: "2px solid #ccc", // Example border style
            borderRadius: "10px", // Example border radius
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", // Example box shadow
            // Add more styles as needed
          }}
        ></iframe>
        <Typography
          sx={{
            "&:hover": { cursor: "pointer", color: shades.secondary[500] },
            display: isNonMobile ? "block" : "none",
            margin: "10px",
          }}
          color={!isDarkMode ? shades.primary[500] : undefined}
          title="We Need A Moses"
        >
          Ian Mantis Hillman "World war 3" Live in Bielefeld Ravensberger Park.
        </Typography>
      </Box>


      <Box padding="50px" width="100%" margin="50px auto" textAlign="center">


      <Box title="kaya-t">
          <Button       sx={{
            "&:hover": { cursor: "pointer", color: shades.secondary[500] },
            display: isNonMobile ? "inline" : "inline",
            color: !isDarkMode ? shades.primary[500] : "white",
          }}
          onClick={() => navigate("/kaya")}>
            <img
              src={Kaya || profilePicture}
              alt="profile"
              style={{
                width: "100px",
                aspectRatio: "calc(1 + var(--f))",
                objectFit: "cover",
                cursor: "pointer",
                borderRadius: "50%",
                "--f": "0.1",
                "--r": "10px",
                "--_f": "calc(100% * var(--f) / (1 + var(--f)))",
                "--_a": "calc(90deg * var(--f))",
                clipPath: "inset(0 var(--_f) 0 0 round var(--r))",
                transform: "perspective(400px) var(--_t, rotateY(var(--_a)))",
                transition: "0.5s",
              }}
              onMouseEnter={(e) => {
                e.target.style.clipPath = "inset(0 0 0 var(--_f)) round var(--r)";
                e.target.style.setProperty(
                  "--_t",
                  "translateX(calc(-1 * var(--_f))) rotateY(calc(-1 * var(--_a)))"
                );
              }}
              onMouseLeave={(e) => {
                e.target.style.clipPath = "inset(0 var(--_f) 0 0) round var(--r)";
                e.target.style.setProperty("--_t", "");
              }}
            />
          </Button>
        </Box>




      
        <Button
          sx={{
            "&:hover": { cursor: "pointer", color: shades.secondary[500] },
            display: isNonMobile ? "inline" : "inline",
            color: !isDarkMode ? shades.primary[500] : "white",
          }}
          onClick={() => navigate("/kaya-photos")}
        >
          Photos
        </Button>
        <Button
          sx={{
            "&:hover": { cursor: "pointer", color: shades.secondary[500] },
            display: isNonMobile ? "inline" : "inline",
            color: !isDarkMode ? shades.primary[500] : "white",
          }}
          onClick={() => navigate("/kaya-music")}
        >
          Music
        </Button>{" "}
        <Button
          sx={{
            "&:hover": { cursor: "pointer", color: shades.secondary[500] },
            display: isNonMobile ? "inline" : "inline",
            color: !isDarkMode ? shades.primary[500] : "white",
          }}
          onClick={() => navigate("/kaya-press")}
        >
          Press
        </Button>
      </Box>
    </Box>
  );
};

export default KayaTVideos;
