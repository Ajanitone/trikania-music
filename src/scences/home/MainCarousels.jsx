import React, { useEffect, useRef } from "react";
import {
  Box,
  IconButton,
} from "@mui/material";
import { Carousel } from "react-responsive-carousel";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the dark mode CSS file
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

// Serve from public/hero to avoid bundler hash/caching issues.
const heroImages = [
  "/hero/hero-ajani-one.jpeg",
  "/hero/hero-ajani-two.jpeg",
  "/hero/hero-joseph-grant-1.jpeg",
  "/hero/hero-joseph-grant-2.jpeg",
  "/hero/hero-kaya-one.jpeg",
  "/hero/hero-kaya-t-2.jpg",
  "/hero/hero-kaya-t-3.jpg",
  "/hero/hero-kaya-t-4.jpeg",
  "/hero/hero-zo-one.jpeg",
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
              borderRadius: "10px",
            }}
            // Force eager loading to avoid blanks on slower connections/cache.
            loading="eager"
            fetchpriority={index === 0 ? "high" : "auto"}
          />

        </Box>
      ))}
    </Carousel>
  );
};

export default MainCarousel;
