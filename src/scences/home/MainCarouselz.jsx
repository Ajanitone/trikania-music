import React from "react";
import { Box, IconButton } from "@mui/material";
import { Carousel } from "react-responsive-carousel";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the dark mode CSS file
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

// Serve from public/references to avoid hashed bundle caching issues.
const refImages = [
  "/references/alaine.jpeg",
  "/references/aldubb.jpg",
  "/references/andrew-donalds.jpeg",
  "/references/anthony-locks.jpeg",
  "/references/asassin.jpeg",
  "/references/ben.jpeg",
  "/references/brothers-keepers.jpeg",
  "/references/bushido.jpeg",
  "/references/caramela criminal.jpeg",
  "/references/chris cosmo.jpeg",
  "/references/congo-ashantiroy.jpeg",
  "/references/cornel-campbell.jpeg",
  "/references/d-flame.jpeg",
  "/references/doniki.jpeg",
  "/references/dutchie-gold.jpeg",
  "/references/emersound.jpeg",
  "/references/fanta-vier.jpeg",
  "/references/far-east-band.jpeg",
  "/references/frankie-paul.jpeg",
  "/references/ganjaman.jpeg",
  "/references/general-degree.jpeg",
  "/references/glen-washington.jpeg",
  "/references/half-pint.jpeg",
  "/references/hortense-elllis.jpeg",
  "/references/ijahman.jpeg",
  "/references/iqullah.jpeg",
  "/references/jah-mason.jpeg",
  "/references/jan-delay.jpeg",
  "/references/jaqee.jpeg",
  "/references/joseph-grant.jpeg",
  "/references/junior-kellly.jpeg",
  "/references/kaya-t.jpeg",
  "/references/kesheira.jpeg",
  "/references/queen-omega.jpeg",
  "/references/u-brown.jpeg",
  "/references/yah-meek.jpeg",
];

const MainCarouselz = ({ isDarkMode }) => {
  return (
    <Box
      sx={{
        width: "300px",
        height: "400px",
        borderRadius: "20px",
        overflow: "hidden",
        margin: "auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Carousel
        className={`home ${isDarkMode ? "dark-mode" : ""}`}
        infiniteLoop
        showThumbs={false}
        showIndicators={false}
        showStatus={false}
        autoPlay
        interval={9000}
        stopOnHover
        renderArrowPrev={(onClickHandler) => (
          <IconButton
            onClick={onClickHandler}
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
        renderArrowNext={(onClickHandler) => (
          <IconButton
            onClick={onClickHandler}
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
        {refImages.map((src, index) => (
          <Box key={`carousel-image-${index}`}>
            <img
              src={src}
              alt={`carousel-${index}`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              loading="eager"
            />
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};

export default MainCarouselz;
