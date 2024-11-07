import React, { useState, useContext,  } from "react";
import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import { shades } from "../../theme";
import { HerbContext } from "../../context/Context";
import { useNavigate } from "react-router-dom";

import profilePicture from "../../assets/angele-kamp-kcvRHtAyuig-unsplash.jpg";


import ScrollTop from "../../components/ScrollTop";
import Ajani from "../../artistpictures/ajani.png";



const Ajanitone = ({ isDarkMode }) => {
  const { state, dispatchState } = useContext(HerbContext);

  const [isHovered, setIsHovered] = useState(false);

  // Define a styled component with custom CSS

  const backgroundColor = isDarkMode ? "#000000" : "rgba(242, 38, 19, 0.4)";

  const navigate = useNavigate();
  const isNonMobile = useMediaQuery("(min-width:600px)");



  return (
    <Box>
      <ScrollTop isDarkMode={isDarkMode} />
      {/* AJANI */}
      <Box
        className={`home ${isDarkMode ? "dark-mode" : ""}`}
        padding="10px"
        width="80%"
        height="250px"
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
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          zIndex={-1}
          sx={{
            content: '""',
            position: "absolute",
            background:
              "linear-gradient(to right, rgba(207, 9, 9, 0.2), #f5f3f4)",
            borderRadius: "10px",
            pointerEvents: "none",
          }}
        />

        <Box title="image">
          <img
            src={Ajani || profilePicture}
            alt="profile"
            style={{
              width: "200px",
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
        </Box>

        <Typography
          sx={{
            "&:hover": { cursor: "pointer", color: shades.secondary[500] },
            display: isNonMobile ? "block" : "none",
            fontSize: "16px",
          }}
          color={!isDarkMode ? shades.primary[500] : undefined}
          title="ajani"
          onClick={() => navigate("/ajani")}
        >
          Ajani
        </Typography>
      </Box>

      <Box padding="5px" width="100%" margin="50px auto" textAlign="center">
        <Typography
          sx={{
            "&:hover": { cursor: "pointer", color: shades.secondary[500] },
            display: isNonMobile ? "block" : "block",
            fontWeight: "bold",
          }}
          color={!isDarkMode ? shades.primary[500] : undefined}
        >
          Genres
        </Typography>

        <Typography>Roots-Reggae</Typography>

        <Typography>Lovers-Rock</Typography>
      </Box>

      <Box padding="50px" width="100%" margin="50px auto" textAlign="center">
        <Typography
          sx={{
            "&:hover": { cursor: "pointer", color: shades.secondary[500] },
            display: isNonMobile ? "block" : "flex",
            flexDirection: "column",
          }}
          color={!isDarkMode ? shades.primary[500] : undefined}
          title="ajani"
          onClick={() => navigate("/ajani")}
        >
          Ajani is a Jamaican musician and producer based in Berlin, Germany. He
          was born and raised in Kingston, where he started to play the keyboard
          at the age of thirteen.<hr></hr> With sixteen he started touring the
          world. As he played more and more in Europe Ajani soon moved to
          Germany. <hr></hr> As a keyboarder and backing vocalist, he is well
          known in the german and international reggae scene.<hr></hr> He has
          played for artists such as Congo Ashanti Roy, Ijahman Levi,Joseph Blue
          Grant, General Degree, Hortense Ellis, Iqulah, President Brown, Cornel
          Campell, L.U.S.T., Pierre Poljak and many more.<hr></hr> In Germany
          Ajani worked with and produced for e.g. Peter Fox, Samy Deluxe,
          Gentleman, Max Herre, Die Fantastischen Vier, Jan Delay, Patrice,
          Oceana and many more.<hr></hr> After 20 years in the background Ajani
          is now stepping into the lime light with his solo project. His first
          studio album "Silent Voices" is available since February, 2020. Ajani
          is presenting his singersongwriter skills to the world. He combines
          old school roots reggae with new school vibes, bringing back the
          falsetto in a fresh new way. From Ajani you get sweet, soulful,
          authentic and hand made music. It is a must for every reggae lover to
          know his works and get this classic album for the collection.
        </Typography>
      </Box>
      <Box padding="50px" width="100%" margin="50px auto" textAlign="center">
        <Button
          sx={{
            "&:hover": { cursor: "pointer", color: shades.secondary[500] },
            display: isNonMobile ? "inline" : "inline",
            color: !isDarkMode ? shades.primary[500] : "white",
          }}
          onClick={() => navigate("/ajani-photos")}
        >
          Photos
        </Button>
        <Button
          sx={{
            "&:hover": { cursor: "pointer", color: shades.secondary[500] },
            display: isNonMobile ? "inline" : "inline",
            color: !isDarkMode ? shades.primary[500] : "white",
          }}
          onClick={() => navigate("/ajani-videos")}
        >
          Videos
        </Button>{" "}
        <Button
          sx={{
            "&:hover": { cursor: "pointer", color: shades.secondary[500] },
            display: isNonMobile ? "inline" : "inline",
            color: !isDarkMode ? shades.primary[500] : "white",
          }}
          onClick={() => navigate("/ajani-music")}
        >
          Music
        </Button>{" "}
        <Button
          sx={{
            "&:hover": { cursor: "pointer", color: shades.secondary[500] },
            display: isNonMobile ? "inline" : "inline",
            color: !isDarkMode ? shades.primary[500] : "white",
          }}
          onClick={() => navigate("/ajani-press")}
        >
          Press
        </Button>
      </Box>
    </Box>
  );
};

export default Ajanitone;
