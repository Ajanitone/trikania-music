import React from "react";
import {
  Box,
  Typography,
  IconButton,
  useMediaQuery,
  Button,
} from "@mui/material";
import { Carousel } from "react-responsive-carousel";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the dark mode CSS file
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { shades } from "../../theme";
import { useNavigate } from "react-router-dom";

// import all image from assets folder

const importAll = (r) =>
  r.keys().reduce((acc, item) => {
    acc[item.replace("./", "")] = r(item);
    return acc;
  }, {});

const heroTextureImports = importAll(
  require.context("../../assets-3", false, /\.(png|jpe?g|svg)$/)
);
const MainCarouselz = ({ isDarkMode, toggleTheme }) => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const navigate = useNavigate();
  return (
    <Box
    sx={{
      width: "300px", // Adjust the size of the circle
      height: "400px",
      borderRadius: "20px",
      overflow: "hidden", // Ensures the content stays inside the circle
      margin: "auto", // Centers the carousel (optional)
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <Carousel
      className={`home ${isDarkMode ? "dark-mode" : ""}`}
      infiniteLoop={true}
      showThumbs={false}
      showIndicators={false}
      showStatus={false}
      autoPlay={true}
      interval={9000}
      stopOnHover={true}
      renderArrowPrev={(onClickHandler, hasPrev, label) => (
        <IconButton
          onClick={() => {
            onClickHandler();
          }}
          sx={{
            position: "absolute",
            top: "50%",
            left: "0",
            padding: "5px",
            zIndex: "10",
            color: isDarkMode ? "red" : "white",
          }}
        >
          <NavigateBeforeIcon sx={{ fontSize: 40 }} />
        </IconButton>
      )}
      renderArrowNext={(onClickHandler, hasNext, label) => (
        <IconButton
          onClick={() => {
            onClickHandler();
          }}
          sx={{
            position: "absolute",
            top: "50%",
            right: "0",
            color: isDarkMode ? "red" : "white",
            padding: "5px",
            zIndex: "10",
          }}
        >
          <NavigateNextIcon sx={{ fontSize: 40 }} />
        </IconButton>
      )}
    >
      {Object.values(heroTextureImports).map((texture, index) => (
        <Box key={`carousel-image-${index}`}>
          <img
            src={texture}
            alt={`carousel-${index}`}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover", // Ensures the image fills the circular area
            }}
          />
        </Box>
      ))}
    </Carousel>
  </Box>
  
  );
};

export default MainCarouselz;
