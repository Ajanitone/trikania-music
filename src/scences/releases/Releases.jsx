import React, { useState, useContext, useEffect } from "react";
import { Box, Typography, Button, useMediaQuery } from "@mui/material";
import { HerbContext } from "../../context/Context";
import { useNavigate } from "react-router-dom";
import profilePicture from "../../assets/angele-kamp-kcvRHtAyuig-unsplash.jpg";
import ScrollTop from "../../components/ScrollTop";
import Ajani from "../../artistpictures/ajani.png";
import axios from "axios";
import { shades } from "../../theme";

/**
 *
 */
const Ajaniphotos = ({ isDarkMode }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Define a styled component with custom CSS

  const backgroundColor = isDarkMode ? "#000000" : "none";
  const [staticModal, setStaticModal] = useState(false); // Add modal state
  const { state, dispatchState } = useContext(HerbContext);
  const baseUrl = process.env.REACT_APP_BASE_URL;

  const navigate = useNavigate();
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  console.log("products", state.products);

  useEffect(() => {
    async function getData() {
      const response = await axios.get(baseUrl + "/products/listProduct");

      console.log("getData", response);

      if (response.data.success) {
        dispatchState({
          type: "loadProducts",
          payload: response.data.products,
        });
      }
    }
    getData();
  }, []);

  return (
    <Box
      className={`home ${isDarkMode ? "dark-mode" : ""}`}
      padding="10px"
      width="75%"
      height="100%"
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

      <Box
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        justifyContent="center"
        alignItems="center"
        flexWrap={{ xs: "nowrap", md: "wrap" }}
        gap={4}
      >
        {/* Picture-1 */}
        <Box margin="50px auto" title="image">
        <img
          src={state.products[4]?.musicImage || profilePicture}
          alt="profile"
          style={{
            width: "200px",
            aspectRatio: "calc(1 + var(--f))",
            objectFit: "cover",
            cursor: "pointer",
            borderRadius: "5%",
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

        <Box>
          <Typography fontWeight="bold">
            {state.products[4]?.artistName || "Ajani"}
          </Typography>
          <Typography>{state.products[4]?.name || "Silent Voices"}</Typography>

          <Typography>{state.products[4]?.description || "2020"}</Typography>
        </Box>
        <Box>
          <Button
            sx={{
              "&:hover": { cursor: "pointer", color: "lime" },
              marginTop: "10px",
              color: isDarkMode ? "black" : "white",
              backgroundColor: shades.secondary[300],
            }}
            onClick={() => navigate("/ajani-music")}
          >
            Listen It 🎧
          </Button>
        </Box>
      </Box>

        {/* Picture-2 */}
        <Box margin="50px auto" title="image">
        <img
          src={state.products[3]?.musicImage || profilePicture}
          alt="profile"
          style={{
            width: "200px",
            aspectRatio: "calc(1 + var(--f))",
            objectFit: "cover",
            cursor: "pointer",
            borderRadius: "5%",
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

        <Box>
          <Typography fontWeight="bold">
            {state.products[3]?.artistName || "Kaya-T"}
          </Typography>
          <Typography>{state.products[3]?.name || "Kaya-T"}</Typography>

          <Typography>{state.products[3]?.description || "2022"}</Typography>
        </Box>
        <Box>
          <Button
            sx={{
              "&:hover": { cursor: "pointer", color: "lime" },
              marginTop: "10px",
              color: isDarkMode ? "black" : "white",
              backgroundColor: shades.secondary[300],
            }}
            onClick={() => navigate("/kaya-music")}
          >
            Listen It 🎧
          </Button>
        </Box>
      </Box>
        {/* Picture-3 */}
        <Box margin="50px auto" title="image">
        <img
          src={state.products[2]?.musicImage || profilePicture}
          alt="profile"
          style={{
            width: "200px",
            aspectRatio: "calc(1 + var(--f))",
            objectFit: "cover",
            cursor: "pointer",
            borderRadius: "5%",
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

        <Box>
          <Typography fontWeight="bold">
            {state.products[2]?.artistName || "Kaya-T"}
          </Typography>
          <Typography>{state.products[2]?.name || "Lead Me"}</Typography>

          <Typography>{state.products[2]?.description || "2002"}</Typography>
        </Box>
        <Box>
          <Button
            sx={{
              "&:hover": { cursor: "pointer", color: "lime" },
              marginTop: "10px",
              color: isDarkMode ? "black" : "white",
              backgroundColor: shades.secondary[300],
            }}
            onClick={() => navigate("/kaya-music/")}
          >
            Listen It 🎧
          </Button>
        </Box>
      </Box>
        {/* Picture-4 */}
        <Box margin="50px auto" title="image">
        <img
          src={state.products[1]?.musicImage || profilePicture}
          alt="profile"
          style={{
            width: "200px",
            aspectRatio: "calc(1 + var(--f))",
            objectFit: "cover",
            cursor: "pointer",
            borderRadius: "5%",
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

        <Box>
          <Typography fontWeight="bold">
            {state.products[1]?.artistName || "Zo Ataraxie"}
          </Typography>
          <Typography>{state.products[1]?.name || "Ooh la la"}</Typography>

          <Typography>{state.products[1]?.description || "2021"}</Typography>
        </Box>
        <Box>
          <Button
            sx={{
              "&:hover": { cursor: "pointer", color: "lime" },
              marginTop: "10px",
              color: isDarkMode ? "black" : "white",
              backgroundColor: shades.secondary[300],
            }}
            onClick={() => navigate("/zo-music")}
          >
            Listen It 🎧
          </Button>
        </Box>
      </Box>
      </Box>
      {/* Picture-5 */}

      {/* Picture-6 */}

      {/* <Box
          padding="50px"
          width="100%"
          margin="50px auto"
          textAlign="center"
        >
      

      <Box title="ajani">
          <Button       sx={{
            "&:hover": { cursor: "pointer", color: shades.secondary[500] },
            display: isNonMobile ? "inline" : "inline",
            color: !isDarkMode ? shades.primary[500] : "white",
          }}
          onClick={() => navigate("/ajani")}>
       


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
              display: isNonMobile ? "inline" : "inline",color:!isDarkMode ? shades.primary[500] : "white"
            }} onClick={() => navigate("/ajani-videos")}
          >
            Videos
          </Button>{" "}
          <Button
            sx={{
              "&:hover": { cursor: "pointer", color: shades.secondary[500] },
              display: isNonMobile ? "inline" : "inline",color:!isDarkMode ? shades.primary[500] : "white"
            }} onClick={() => navigate("/ajani-music")}
          >
            Music
          </Button>{" "}
          <Button
            sx={{
              "&:hover": { cursor: "pointer", color: shades.secondary[500] },
              display: isNonMobile ? "inline" : "inline",color:!isDarkMode ? shades.primary[500] : "white"
            }} onClick={() => navigate("/ajani-press")}
          >
            Press
          </Button>
        </Box> */}
    </Box>
  );
};

export default Ajaniphotos;
