import React, { useState, useContext, useEffect } from "react";
import ScrollTop from "../../../components/ScrollTop";
import MusicPlayer3 from "../../../components/players/musicplayer/MusicPlayer3";
import { shades } from "../../../theme";
import { Box, Typography, Button, useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { HerbContext } from "../../../context/Context";
import Kaya from "../../../artistpictures/kaya.jpg";
import profilePicture from "../../../assets/angele-kamp-kcvRHtAyuig-unsplash.jpg";

import MusicPlayer4 from "../../../components/players/musicplayer/MusicPlayer4";

const KayaTMusic = ({ isDarkMode }) => {
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
  const Artist = "Kaya-T";
  const AlbumName = "Kaya-T";
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

      <Typography
        sx={{
          fontWeight: "bold",
          "&:hover": { cursor: "pointer", color: shades.secondary[500] },
        }}
      >
        Kaya-T-Music
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
        {`${state?.products[2]?.artistName} ` || Artist}`s Album{" "}
        {`${state?.products[3]?.name}` || AlbumName}.
      </Typography>

      <Button
        sx={{
          "&:hover": { cursor: "pointer", color: "lime" },
          marginTop: "10px",
          color: isDarkMode ? "black" : "white",
          backgroundColor: shades.secondary[300],
        }}
        onClick={() => navigate(`item/${state?.products[3]?._id}`)}
      >
        Buy it
      </Button>

      <Box>
        {" "}
        <MusicPlayer3
          isDarkMode={isDarkMode}
          staticModal={staticModal}
          setStaticModal={setStaticModal}
        />
      </Box>

      {/* LEAD ME */}
      <Box m="200px 0px">
        <Typography
          sx={{
            "&:hover": {
              cursor: "pointer",
              color: isDarkMode ? "red" : shades.secondary[500],
            },
            marginTop: "20px",
          }}
        >
          {`${state?.products[2]?.artistName} ` || Artist}`s Album{" "}
          {`${state?.products[2]?.name}` || AlbumName}.
        </Typography>
        <Button
          sx={{
            "&:hover": { cursor: "pointer", color: "lime" },
            marginTop: "10px",
            color: isDarkMode ? "black" : "white",
            backgroundColor: shades.secondary[300],
          }}
          onClick={() => navigate(`item/${state?.products[2]?._id}`)}
        >
          Buy it
        </Button>{" "}
        <MusicPlayer4
          isDarkMode={isDarkMode}
          staticModal={staticModal}
          setStaticModal={setStaticModal}
        />
      </Box>
      <Box padding="50px" width="100%" margin="100px auto" textAlign="center">
        <Box title="kaya-t">
          <Button
            sx={{
              "&:hover": { cursor: "pointer", color: shades.secondary[500] },
              display: isNonMobile ? "inline" : "inline",
              color: !isDarkMode ? shades.primary[500] : "white",
            }}
            onClick={() => navigate("/kaya")}
          >
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
          onClick={() => navigate("/kaya-press")}
        >
          Press
        </Button>
      </Box>
    </Box>
  );
};

export default KayaTMusic;
