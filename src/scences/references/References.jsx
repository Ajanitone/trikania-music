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
const References = ({ isDarkMode }) => {
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

      <Box margin="50px auto" title="artists">

      {/* ARTIST-1 */}
        <Box>
          <Typography fontWeight="bold"   sx={{
              "&:hover": { cursor: "pointer", color: "lime" },
              marginTop: "10px",
              color: isDarkMode ? "white" : "black",
            }}
            
            >Artists</Typography>
          <Typography
            mt="10px"
            sx={{
              "&:hover": { cursor: "pointer", color: "lime" },
              marginTop: "10px",
              color: isDarkMode ? "white" : "black",
            }}
          >
         <a
  href="https://www.instagram.com/alainesinga/?hl=de" target="_blank"
  rel="noopener noreferrer"
  style={{ textDecoration: "none", color: isDarkMode ? "white" : "black" }}
>
  Alaine
</a>
          </Typography>
        </Box>



        {/* ARTIST-2 */}

        <Box>
      
          <Typography
            mt="10px"
            sx={{
              "&:hover": { cursor: "pointer", color: "lime" },
              marginTop: "10px",
              color: isDarkMode ? "white" : "black",
            }}
          >
         <a
  href="http://www.aldubb.de/" target="_blank"
  rel="noopener noreferrer"
  style={{ textDecoration: "none", color: isDarkMode ? "white" : "black" }}
>
 AlDubb
</a>
          </Typography>
        </Box>


        {/* ARTIST-3 */}
        <Box>
      
      <Typography
        mt="10px"
        sx={{
          "&:hover": { cursor: "pointer", color: "lime" },
          marginTop: "10px",
          color: isDarkMode ? "white" : "black",
        }}
      >
     <a
href="https://www.instagram.com/andrudonalds/?hl=de" target="_blank"
rel="noopener noreferrer"
style={{ textDecoration: "none", color: isDarkMode ? "white" : "black" }}
>
Andrew Donalds
</a>
      </Typography>
    </Box>



        {/* ARTIST-4 */}
        <Box>
      
      <Typography
        mt="10px"
        sx={{
          "&:hover": { cursor: "pointer", color: "lime" },
          marginTop: "10px",
          color: isDarkMode ? "white" : "black",
        }}
      >
     <a
href="https://www.instagram.com/anthony_locks/" target="_blank"
rel="noopener noreferrer"
style={{ textDecoration: "none", color: isDarkMode ? "white" : "black" }}
>
Anthony Locks
</a>
      </Typography>
    </Box>



  {/* ARTIST-5 */}
  <Box>
      
      <Typography
        mt="10px"
        sx={{
          "&:hover": { cursor: "pointer", color: "lime" },
          marginTop: "10px",
          color: isDarkMode ? "white" : "black",
        }}
      >
     <a
href="https://www.instagram.com/agentsasco/" target="_blank"
rel="noopener noreferrer"
style={{ textDecoration: "none", color: isDarkMode ? "white" : "black" }}
>
Assassin
</a>
      </Typography>
    </Box>



  {/* ARTIST-6 */}
  <Box>
      
      <Typography
        mt="10px"
        sx={{
          "&:hover": { cursor: "pointer", color: "lime" },
          marginTop: "10px",
          color: isDarkMode ? "white" : "black",
        }}
      >
     <a
href="https://de.wikipedia.org/wiki/Ben_(S%C3%A4nger)" target="_blank"
rel="noopener noreferrer"
style={{ textDecoration: "none", color: isDarkMode ? "white" : "black" }}
>
Ben
</a>
      </Typography>
    </Box>




  {/* ARTIST-7 */}
  <Box>
      
      <Typography
        mt="10px"
        sx={{
          "&:hover": { cursor: "pointer", color: "lime" },
          marginTop: "10px",
          color: isDarkMode ? "white" : "black",
        }}
      >
     <a
href="https://de.wikipedia.org/wiki/Brothers_Keepers" target="_blank"
rel="noopener noreferrer"
style={{ textDecoration: "none", color: isDarkMode ? "white" : "black" }}
>
Brothers Keepers
</a>
      </Typography>
    </Box>





  {/* ARTIST-8 */}
  <Box>
      
      <Typography
        mt="10px"
        sx={{
          "&:hover": { cursor: "pointer", color: "lime" },
          marginTop: "10px",
          color: isDarkMode ? "white" : "black",
        }}
      >
     <a
href="https://www.instagram.com/bush1do/?hl=de" target="_blank"
rel="noopener noreferrer"
style={{ textDecoration: "none", color: isDarkMode ? "white" : "black" }}
>
Bushido
</a>
      </Typography>
    </Box>


      {/* ARTIST-9 */}
  <Box>
      
      <Typography
        mt="10px"
        sx={{
          "&:hover": { cursor: "pointer", color: "lime" },
          marginTop: "10px",
          color: isDarkMode ? "white" : "black",
        }}
      >
     <a
href="https://de.wikipedia.org/wiki/Caramelo_Criminal" target="_blank"
rel="noopener noreferrer"
style={{ textDecoration: "none", color: isDarkMode ? "white" : "black" }}
>
Caramelo  Criminal
</a>
      </Typography>
    </Box>



      {/* ARTIST-10 */}
  <Box>
      
      <Typography
        mt="10px"
        sx={{
          "&:hover": { cursor: "pointer", color: "lime" },
          marginTop: "10px",
          color: isDarkMode ? "white" : "black",
        }}
      >
     <a
href="https://www.criscosmo.com/" target="_blank"
rel="noopener noreferrer"
style={{ textDecoration: "none", color: isDarkMode ? "white" : "black" }}
>
ChrisCosmo
</a>
      </Typography>
    </Box>




      {/* ARTIST-11 */}
  <Box>
      
      <Typography
        mt="10px"
        sx={{
          "&:hover": { cursor: "pointer", color: "lime" },
          marginTop: "10px",
          color: isDarkMode ? "white" : "black",
        }}
      >
     <a
href="https://en.wikipedia.org/wiki/Roydel_Johnson" target="_blank"
rel="noopener noreferrer"
style={{ textDecoration: "none", color: isDarkMode ? "white" : "black" }}
>
Congo Ashantiroy
</a>
      </Typography>
    </Box>
      </Box>

  
    </Box>
  );
};

export default References;
