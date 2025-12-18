import React, { useState, useContext, useEffect } from "react";
import ScrollTop from "../../components/ScrollTop";
import MusicPlayer2 from "../../components/players/musicplayer/MusicPlayer2";
import { shades } from "../../theme";
import { Box, Typography, Button, useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import { HerbContext } from "../../context/Context";
import Ajani from "../../artistpictures/ajani.png";
import profilePicture from "../../assets/angele-kamp-kcvRHtAyuig-unsplash.jpg";

const Ajanimusic = ({ isDarkMode }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [staticModal, setStaticModal] = useState(false); // Add modal state
  const { state, dispatchState } = useContext(HerbContext);

  const isNonMobile = useMediaQuery("(min-width:600px)");

  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  console.log("products", state.products);
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const backgroundColor = isDarkMode ? "#000000" : "none";
  const toggleShow = () => {
    setStaticModal((prevState) => !prevState);
  };
  const navigate = useNavigate();
  const Artist = "Ajanitone";
  const AlbumName = "Silent Voices";
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
      width="80%"
      minHeight="100vh"
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
        overflow: "visible",
      }}
      position="relative"
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
    >
      <ScrollTop isDarkMode={isDarkMode} />
      <Box padding="50px" width="100%" margin="2px auto" textAlign="center">
        <Box>
          <Typography
            sx={{
              "&:hover": { cursor: "pointer", color: shades.secondary[500] },
            }}
          >
            Ajani-Music
          </Typography>
          <Typography
            sx={{
              "&:hover": {
                cursor: "pointer",
                color: isDarkMode ? "red" : shades.secondary[500],
              },
              marginTop: "20px",
            }}
          >
            {`${state?.products[4]?.artistName} ` || Artist}`s Debut Album{" "}
            {`${state?.products[4]?.name}` || AlbumName} is out now.
          </Typography>

          <Button
            sx={{
              "&:hover": { cursor: "pointer", color: "lime" },
              marginTop: "10px",
              color: isDarkMode ? "black" : "white",
              backgroundColor: shades.secondary[300],
            }}
            onClick={() => navigate(`item/${state?.products[4]?._id}`)}
          >
            Buy it
          </Button>
        </Box>
        <Box>
          <MusicPlayer2
            isDarkMode={isDarkMode}
            staticModal={staticModal}
            setStaticModal={setStaticModal}
          />
        </Box>
      </Box>
      <Box padding="50px" width="100%" margin="400px auto" textAlign="center">
        <Box title="ajani">
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
          onClick={() => navigate("/ajani-press")}
        >
          Press
        </Button>
      </Box>
    </Box>
  );
};

export default Ajanimusic;
