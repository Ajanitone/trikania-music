import React, { useEffect, useMemo, useState } from "react";
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
  require.context("../../assets-1", false, /\.(png|jpe?g|svg)$/)
);
const MainCarousel = ({ isDarkMode, toggleTheme }) => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  // Normalize the asset imports to plain src strings so we can preload them.
  const heroImages = useMemo(
    () =>
      Object.values(heroTextureImports).map((img) =>
        typeof img === "string" ? img : img?.default || img
      ),
    []
  );
  const [imagesReady, setImagesReady] = useState(false);

  // Preload all carousel images once so they are instantly available when the
  // component mounts or remounts after navigation.
  useEffect(() => {
    let isMounted = true;
    const preloaders = heroImages.map(
      (src) =>
        new Promise((resolve) => {
          const image = new Image();
          image.src = src;
          image.onload = image.onerror = resolve;
        })
    );
    Promise.all(preloaders).then(() => {
      if (isMounted) {
        setImagesReady(true);
      }
    });
    return () => {
      isMounted = false;
    };
  }, [heroImages]);

  const navigate = useNavigate();
  if (!imagesReady) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="500px"
        sx={{ backgroundColor: isDarkMode ? "#111" : "#fafafa" }}
      >
        <Typography variant="h6" color={isDarkMode ? "white" : "black"}>
          Loading photos…
        </Typography>
      </Box>
    );
  }
  return (
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
            // toggleTheme();
          }}
          sx={{
            position: "absolute",
            top: "50%",
            left: "0",
            padding: "5px",
            zIndex: "10",
            color: isDarkMode ? "red" : "white",
          }}
          className={`home ${isDarkMode ? "dark-mode" : ""}`}
        >
          <NavigateBeforeIcon sx={{ fontSize: 40 }} />
        </IconButton>
      )}
      renderArrowNext={(onClickHandler, hasNext, label) => (
        <IconButton
          onClick={() => {
            onClickHandler();
            // toggleTheme();
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
      {heroImages.map((texture, index) => (
        <Box key={`carousel-image-${index}`}>
          <img
            src={texture}
            alt={`carousel-${index}`}
            style={{
              width: "75%",
              height: "500px",
              objectFit: "contain",
              backgroundAttachment: "fixed",
            }}
          />
        
        </Box>
      ))}
    </Carousel>
  );
};

export default MainCarousel;
