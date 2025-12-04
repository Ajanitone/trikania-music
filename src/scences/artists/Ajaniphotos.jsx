import React, { useState, useContext } from "react";
import { Box, Button, useMediaQuery } from "@mui/material";
import { HerbContext } from "../../context/Context";
import { useNavigate } from "react-router-dom";
import profilePicture from "../../assets/angele-kamp-kcvRHtAyuig-unsplash.jpg";
import ScrollTop from "../../components/ScrollTop";
import Ajani from "../../artistpictures/ajani.png";
import Ajanione from "../../artistpictures/ajani-1.jpg";
import Ajanitwo from "../../artistpictures/ajani-2.jpeg";
import Ajanithree from "../../artistpictures/ajani-3.jpg";
import Ajanifour from "../../artistpictures/ajani-4.jpg";
import Ajanifive from "../../artistpictures/ajani-5.jpg";

import { shades } from "../../theme";

/**
 *
 */
const Ajaniphotos = ({ isDarkMode }) => {
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

      {/* Picture-1 */}
      <Box margin="50px auto" title="ajani-1">
        <img
          src={Ajani || profilePicture}
          alt="profile"
          style={{
            width: "400px",
            aspectRatio: "calc(1 + var(--f))",
            objectFit: "cover",
            cursor: "pointer",
            borderRadius: "5%",
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

      {/* Picture-2 */}
      <Box title="ajani-2">
        <img
          src={Ajanione || profilePicture}
          alt="profile"
          style={{
            width: "400px",
            aspectRatio: "calc(1 + var(--f))",
            objectFit: "cover",
            cursor: "pointer",
            borderRadius: "5%",
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

      {/* Picture-3 */}
      <Box margin="50px auto" title="ajani-3">
        <img
          src={Ajanitwo || profilePicture}
          alt="profile"
          style={{
            width: "400px",
            aspectRatio: "calc(1 + var(--f))",
            objectFit: "cover",
            cursor: "pointer",
            borderRadius: "5%",
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

      {/* Picture-4 */}
      <Box margin="50px auto" title="ajani-4">
        <img
          src={Ajanithree || profilePicture}
          alt="profile"
          style={{
            width: "400px",
            aspectRatio: "calc(1 + var(--f))",
            objectFit: "cover",
            cursor: "pointer",
            borderRadius: "5%",
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

      {/* Picture-5 */}
      <Box margin="50px auto" title="ajani-5">
        <img
          src={Ajanifour || profilePicture}
          alt="profile"
          style={{
            width: "400px",
            aspectRatio: "calc(1 + var(--f))",
            objectFit: "cover",
            cursor: "pointer",
            borderRadius: "5%",
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
      {/* Picture-6 */}

      <Box margin="50px auto" title="ajani-6">
        <img
          src={Ajanifive || profilePicture}
          alt="profile"
          style={{
            width: "400px",
            aspectRatio: "calc(1 + var(--f))",
            objectFit: "cover",
            cursor: "pointer",
            borderRadius: "5%",
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
      <Box padding="50px" width="100%" margin="50px auto" textAlign="center">
        <Box title="ajani-7">
          <Button
            sx={{
              "&:hover": { cursor: "pointer", color: shades.secondary[500] },
              display: isNonMobile ? "inline" : "inline",
              color: !isDarkMode ? shades.primary[500] : "white",
            }}
            onClick={() => navigate("/ajani")}
          >
            <img
              src={Ajani || profilePicture}
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
                e.target.style.clipPath =
                  "inset(0 0 0 var(--_f)) round var(--r)";
                e.target.style.setProperty(
                  "--_t",
                  "translateX(calc(-1 * var(--_f))) rotateY(calc(-1 * var(--_a)))"
                );
              }}
              onMouseLeave={(e) => {
                e.target.style.clipPath =
                  "inset(0 var(--_f) 0 0) round var(--r)";
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

export default Ajaniphotos;
