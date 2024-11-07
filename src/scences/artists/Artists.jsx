import React, { useState, useContext,  } from "react";
import { Box,   Typography , useMediaQuery,} from "@mui/material";
import { shades } from "../../theme";
import { HerbContext } from "../../context/Context";
import { useNavigate } from "react-router-dom";

import profilePicture from "../../assets/angele-kamp-kcvRHtAyuig-unsplash.jpg";

import ScrollTop from "../../components/ScrollTop";
import Ajani from "../../artistpictures/ajani.png";
import Kaya from "../../artistpictures/kaya.jpg"




const Artists = ({ isDarkMode }) => {
  const { state, dispatchState } = useContext(HerbContext);
  const [loading, setLoading] = useState(false);
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const id = state.user._id;
  console.log("user", state.user);
  const [isHovered, setIsHovered] = useState(false);

  // Define a styled component with custom CSS
 
  const backgroundColor = isDarkMode ? "#000000" : "rgba(242, 38, 19, 0.4)";


  const navigate = useNavigate();
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const isMobile = useMediaQuery(theme => theme.breakpoints.down('sm'));



  return (
    <Box>
     <ScrollTop isDarkMode={isDarkMode}/>
     {/* AJANI */}
      <Box
        className={`home ${isDarkMode ? "dark-mode" : ""}`}
        padding="10px"
        width="80%"
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
   
      <Typography   sx={{
          "&:hover": { cursor: "pointer", color: shades.secondary[500] },
          display: isNonMobile ? "block" : "block",
        }}
        color={!isDarkMode ? shades.primary[500] : undefined}
        title="ajani" onClick={() => navigate("/ajani")}>Ajani</Typography>
       
        
      </Box>
{/* KAYA-T */}

<Box
        className={`home ${isDarkMode ? "dark-mode" : ""}`}
        padding="10px"
        width="80%"
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
            src={Kaya || profilePicture}
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
   
      <Typography   sx={{
          "&:hover": { cursor: "pointer", color: shades.secondary[500] },
          display: isNonMobile ? "block" : "block",
        }}
        color={!isDarkMode ? shades.primary[500] : undefined}
        title="kaya-t" onClick={() => navigate("/kaya")}>Kaya-T</Typography>
       
        
      </Box>
    </Box>
  );
};

export default Artists;
