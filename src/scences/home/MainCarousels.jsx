import React, { useEffect, useRef } from "react";
import {
  Box,
  IconButton,
} from "@mui/material";
import { Carousel } from "react-responsive-carousel";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the dark mode CSS file
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

// Explicit imports avoid dynamic require issues in some build setups.
import hero1 from "../../assets-1/ajani-1.jpeg";
import hero2 from "../../assets-1/ajani-2.jpeg";
import hero3 from "../../assets-1/joseph-grant-1.jpeg";
import hero4 from "../../assets-1/joseph-grant-2.jpeg";
import hero5 from "../../assets-1/kaya-t-1.jpeg";
import hero6 from "../../assets-1/kaya-t-2.jpg";
import hero7 from "../../assets-1/kaya-t-3.jpg";
import hero8 from "../../assets-1/kaya-t-4.jpeg";
import hero9 from "../../assets-1/zo-ataraxie-1.jpeg";

const heroImages = [
  hero1,
  hero2,
  hero3,
  hero4,
  hero5,
  hero6,
  hero7,
  hero8,
  hero9,
];
const MainCarousel = ({ isDarkMode, toggleTheme }) => {
  const preloadedRef = useRef(false);

  // Preload images in the background (once) but do not block initial render.
  useEffect(() => {
    if (preloadedRef.current) return;
    preloadedRef.current = true;
    heroImages.forEach((src) => {
      const image = new Image();
      image.src = src;
    });
  }, []);

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
            loading={index === 0 ? "eager" : "lazy"}
            fetchpriority={index === 0 ? "high" : "auto"}
          />

        </Box>
      ))}
    </Carousel>
  );
};

export default MainCarousel;
