import React, { useState, useContext } from "react";
import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import { HerbContext } from "../../../context/Context";
import { useNavigate } from "react-router-dom";
import profilePicture from "../../../assets/angele-kamp-kcvRHtAyuig-unsplash.jpg";
import ScrollTop from "../../../components/ScrollTop";
import { shades } from "../../../theme";


import KeysTwo from "../../../assets-2/kaya-press.jpeg";
import Kaya from "../../../artistpictures/kaya.jpg";

const KayaTPress = ({ isDarkMode }) => {
  const { state, dispatchState } = useContext(HerbContext);

  const [isHovered, setIsHovered] = useState(false);

  // Define a styled component with custom CSS

  const backgroundColor = isDarkMode ? "#000000" : "none";

  const navigate = useNavigate();
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  return (
    <Box
      className={`home ${isDarkMode ? "dark-mode" : ""}`}
      padding="10px"
      width="100%"
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
      <Box sx={{ marginTop: "50px" }}>
        <Typography
          sx={{
            "&:hover": { cursor: "pointer", color: shades.secondary[500] },
            display: isNonMobile ? "block" : "none",
            margin: "10px",
            fontWeight: "bold",
          }}
          color={!isDarkMode ? shades.primary[500] : undefined}
          title="Keyboards Interview"
        >
          Press Voices
        </Typography>
      </Box>

      {/* Picture-1 */}
      <Box margin="50px auto" title="interview-1">
       



<a href=" https://www.irieites.de/pkritiken/2010_aldubb_album.htm" target="_blank" style={{marginTop:"30px"}} >   www.irieites.de via Aldubb "Dub Files 04    </a>

        <Typography>
          "...a good basis for the wonderful singing of Kaya T, who, coming from
          jazz, offers a lot of facets with her voice."
        </Typography>
        <Typography marginTop="30px">
          - www.houseofreggae.de via Aldubb "Dub Files 04":
        </Typography>

        <Typography>
          "...and singer Kaya-T begins her ode to Mother Earth. Kaya-T's
          meditative voice fits perfectly into the Dub instrumental."
        </Typography>

      
        <a href=" https://www.irieites.de/pkritiken/2010_aldubb_album.htm" target="_blank" style={{marginTop:"30px"}} >   www.irieites.de about Aldubb "Let There Be Dub"   </a>
        <Typography>
          "Kaya-T's magical voice is always a pleasure to hear."
        </Typography>

        <Typography marginTop="30px">
          - www.oleejah.de about Aldubb "Let There Be Dub":
        </Typography>

        <Typography>
          "With "Mother Earth" and the brilliant voice of Kaya T there is
          another nice roots dub for your ears."
        </Typography>
      </Box>

      {/* Picture-2 */}
   

      <Box sx={{ marginTop: "50px" }}>
        <Typography
          sx={{
            "&:hover": { cursor: "pointer", color: shades.secondary[500] },
            display: isNonMobile ? "block" : "none",
            margin: "10px",
            fontWeight: "bold",
          }}
          color={!isDarkMode ? shades.primary[500] : undefined}
          title="Keyboards Interview"
        >
        Blitz Weimar 2012
        </Typography>




        <Box margin="50px auto" title="interview-1">
        <img
          src={KeysTwo || profilePicture}
          alt="profile"
          style={{
            width: "100%",
            aspectRatio: "calc(1 + var(--f))",
            objectFit: "cover",
            cursor: "pointer",
            borderRadius: "5px",
            transition: "transform 0.3s", // Add transition for smooth effect
            ":hover": {
              transform: "scale(1.1)", // Scale up the image on hover
            },
          }}
        />
      </Box>
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
          onClick={() => navigate("/kaya-videos")}
        >
          Videos
        </Button>{" "}
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

export default KayaTPress;
