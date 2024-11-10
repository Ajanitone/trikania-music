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


          {/* ARTIST-12 */}
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
href="https://www.instagram.com/cornelcampbellgorgon/?hl=de" target="_blank"
rel="noopener noreferrer"
style={{ textDecoration: "none", color: isDarkMode ? "white" : "black" }}
>
Cornel Campbell
</a>
      </Typography>
    </Box>


          {/* ARTIST-13 */}
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
href="https://www.facebook.com/DFlameOfficial/?locale=de_DE" target="_blank"
rel="noopener noreferrer"
style={{ textDecoration: "none", color: isDarkMode ? "white" : "black" }}
>
D-Fllame
</a>
      </Typography>
    </Box>


          {/* ARTIST-14 */}
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
href="https://www.diefantastischenvier.de/" target="_blank"
rel="noopener noreferrer"
style={{ textDecoration: "none", color: isDarkMode ? "white" : "black" }}
>
Die Fantastichen Vier
</a>
      </Typography>
    </Box>


              {/* ARTIST-15 */}
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
href="https://www.discogs.com/de/artist/929393-Doniki?srsltid=AfmBOoqli_kGc-p5Ex-KARrp5HEaeBddyakFX9-sV4AHZi7xovoXdvL9" target="_blank"
rel="noopener noreferrer"
style={{ textDecoration: "none", color: isDarkMode ? "white" : "black" }}
>
Doniki
</a>
      </Typography>
    </Box>


              {/* ARTIST-16 */}
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
href="http://www.dutchiegold.com/" target="_blank"
rel="noopener noreferrer"
style={{ textDecoration: "none", color: isDarkMode ? "white" : "black" }}
>
Dutchie Gold
</a>
      </Typography>
    </Box>



              {/* ARTIST-16 */}
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
href="https://emersound.live/" target="_blank"
rel="noopener noreferrer"
style={{ textDecoration: "none", color: isDarkMode ? "white" : "black" }}
>
Emersound
</a>
      </Typography>
    </Box>




              {/* ARTIST-17*/}
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
href="https://de.wikipedia.org/wiki/Far_East_Band" target="_blank"
rel="noopener noreferrer"
style={{ textDecoration: "none", color: isDarkMode ? "white" : "black" }}
>
Far East Band
</a>
      </Typography>
    </Box>



              {/* ARTIST-18*/}
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
href="https://www.youtube.com/watch?v=jyNgI8_AGMQ" target="_blank"
rel="noopener noreferrer"
style={{ textDecoration: "none", color: isDarkMode ? "white" : "black" }}
>
Feueralarm Band
</a>
      </Typography>
    </Box>


              {/* ARTIST-18*/}
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
href="https://de.wikipedia.org/wiki/Frankie_Paul" target="_blank"
rel="noopener noreferrer"
style={{ textDecoration: "none", color: isDarkMode ? "white" : "black" }}
>
Frankie Paul
</a>
      </Typography>
    </Box>



              {/* ARTIST-19*/}
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
href="http://www.ganjaman.info/Ganjaman_Berlin/Willkommen.html" target="_blank"
rel="noopener noreferrer"
style={{ textDecoration: "none", color: isDarkMode ? "white" : "black" }}
>
Ganjaman
</a>
      </Typography>
    </Box>



              {/* ARTIST-20*/}
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
href="https://www.instagram.com/generaldegree1/?hl=de" target="_blank"
rel="noopener noreferrer"
style={{ textDecoration: "none", color: isDarkMode ? "white" : "black" }}
>
General Degree
</a>
      </Typography>
    </Box>


                {/* ARTIST-21*/}
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
href="https://www.instagram.com/glenswashington/?hl=de" target="_blank"
rel="noopener noreferrer"
style={{ textDecoration: "none", color: isDarkMode ? "white" : "black" }}
>
Glen Washington
</a>
      </Typography>
    </Box>



                {/* ARTIST-22*/}
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
href="https://halfpintmusic.com/about/" target="_blank"
rel="noopener noreferrer"
style={{ textDecoration: "none", color: isDarkMode ? "white" : "black" }}
>
Half Pint
</a>
      </Typography>
    </Box>



                {/* ARTIST-23*/}
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
href="https://en.wikipedia.org/wiki/Hortense_Ellis" target="_blank"
rel="noopener noreferrer"
style={{ textDecoration: "none", color: isDarkMode ? "white" : "black" }}
>
Hortense Ellis
</a>
      </Typography>
    </Box>
      </Box>

  
    </Box>
  );
};

export default References;
