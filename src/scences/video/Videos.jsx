import React, { useState, useContext } from "react";
import ScrollTop from "../../components/ScrollTop";
import { Box, Typography, useMediaQuery ,  Button,} from "@mui/material";
import { HerbContext } from "../../context/Context";
import { shades } from "../../theme";
import { useNavigate } from "react-router-dom";
import Ajani from "../../artistpictures/ajani.png";
import profilePicture from "../../assets/angele-kamp-kcvRHtAyuig-unsplash.jpg";
import Kaya from "../../artistpictures/kaya.jpg";

const Videos = ({ isDarkMode }) => {
  const { state, dispatchState } = useContext(HerbContext);

  const [isHovered, setIsHovered] = useState(false);

  // Define a styled component with custom CSS
  const navigate = useNavigate();
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const backgroundColor = isDarkMode ? "#000000" : "none";

  return (
    <Box
      className={`home ${isDarkMode ? "dark-mode" : ""}`}
      padding="0px"
      width="100%"
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

      {/* Alles Neu Peter Fox */}

      <Box margin="50px auto" width="500px" title="video">
        <iframe
          width="500"
          height="300"
          src="https://www.youtube.com/embed/remj-hvdegI?si=fEbA1Ko_azSW0w92" 
          frameborder="0"
          allowfullscreen
          title="Moses"
          style={{
            border: "2px solid #ccc", // Example border style
            borderRadius: "10px", // Example border radius
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", // Example box shadow
            // Add more styles as needed
          }}
        ></iframe>

{/* Ajani Picture Link */}
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
              width: "35px",
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


        {/* Text Info */}
        <Typography
          sx={{
            "&:hover": { cursor: "pointer", color: shades.secondary[500] },
            display: isNonMobile ? "block" : "none",
            margin: "10px",
          }}
          color={!isDarkMode ? shades.primary[500] : undefined}
          title="We Need A Moses"
        >
       Playing keyboards and singing backing vocals for Peter Fox, 2009

live @ Berlin, Germany
        </Typography>
      </Box>

      {/* I´M GAD SAMORY I*/}

      <Box margin="50px auto" width="500px" title="video">
        <iframe
          width="500"
          height="300"
          src="https://www.youtube.com/embed/teGJuyrEZQo?si=Ys12eM2X4u1jCJtZ"  
          frameborder="0"
          allowfullscreen
          title="Moses"
          style={{
            border: "2px solid #ccc", // Example border style
            borderRadius: "10px", // Example border radius
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", // Example box shadow
            // Add more styles as needed
          }}
        ></iframe>

{/* Ajani Picture Link */}
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
              width: "35px",
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


        {/* Text Info */}
        <Typography
          sx={{
            "&:hover": { cursor: "pointer", color: shades.secondary[500] },
            display: isNonMobile ? "block" : "none",
            margin: "10px",
          }}
          color={!isDarkMode ? shades.primary[500] : undefined}
          title="We Need A Moses"
        >
   Playing keyboards for Silly Walks, 2016

Song: I Am Gad (Samory-I)
        </Typography>
      </Box>

      {/* CORNEL CAMPBELL LIVE*/}

      <Box margin="50px auto" width="500px" title="video">
        <iframe
          width="500"
          height="300"
          src="https://www.youtube.com/embed/YL_txSjIcTU?si=TWtl7S39jrywlD-_" 
          frameborder="0"
          allowfullscreen
          title="Moses"
          style={{
            border: "2px solid #ccc", // Example border style
            borderRadius: "10px", // Example border radius
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", // Example box shadow
            // Add more styles as needed
          }}
        ></iframe>

{/* Ajani Picture Link */}
<Box display="flex" justifyContent="center">
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
                  width: "35px",
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


            <Box title="kaya-t">
          <Button       sx={{
            "&:hover": { cursor: "pointer", color: shades.secondary[500] },
            display: isNonMobile ? "inline" : "inline",
            color: !isDarkMode ? shades.primary[500] : "white",
          }}
          onClick={() => navigate("/kaya")}>
            <img
              src={Kaya || profilePicture}
              alt="profile"
              style={{
                width: "35px",
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

</Box>


        {/* Text Info */}
        <Typography
          sx={{
            "&:hover": { cursor: "pointer", color: shades.secondary[500] },
            display: isNonMobile ? "block" : "none",
            margin: "10px",
          }}
          color={!isDarkMode ? shades.primary[500] : undefined}
          title="We Need A Moses"
        >
    On keys and backing vocals for Cornell Campbell, 2012

live @ Hamburg, Germany
        </Typography>
      </Box>
      {/* Lust Live */}
      <Box margin="50px auto" width="500px" title="video">
        <iframe
          width="500"
          height="300"
          src="https://www.youtube.com/embed/e_fDRLjaKO4?si=7IxQIE9-fcz9eaDn" 
          frameborder="0"
          allowfullscreen
          title="Moses"
          style={{
            border: "2px solid #ccc", // Example border style
            borderRadius: "10px", // Example border radius
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", // Example box shadow
            // Add more styles as needed
          }}
        ></iframe>

{/* Ajani Picture Link */}
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
              width: "35px",
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


        {/* Text Info */}
        <Typography
          sx={{
            "&:hover": { cursor: "pointer", color: shades.secondary[500] },
            display: isNonMobile ? "block" : "none",
            margin: "10px",
          }}
          color={!isDarkMode ? shades.primary[500] : undefined}
          title="We Need A Moses"
        >
   As MD, playing keyboards and singing backing vocals for L.U.S.T., 2014

live @ Reggaejam, Germany
        </Typography>
      </Box>


            {/* JOY SHUGA */}
            <Box margin="50px auto" width="500px" title="video">
        <iframe
          width="500"
          height="300"
          src="https://www.youtube.com/embed/3fJydMiuhQI?si=iXhBhghS14NquqKa" 
          frameborder="0"
          allowfullscreen
          title="Moses"
          style={{
            border: "2px solid #ccc", // Example border style
            borderRadius: "10px", // Example border radius
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", // Example box shadow
            // Add more styles as needed
          }}
        ></iframe>

{/* Ajani Picture Link */}
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
              width: "35px",
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


        {/* Text Info */}
        <Typography
          sx={{
            "&:hover": { cursor: "pointer", color: shades.secondary[500] },
            display: isNonMobile ? "block" : "none",
            margin: "10px",
          }}
          color={!isDarkMode ? shades.primary[500] : undefined}
          title="We Need A Moses"
        >
  Playing keyboards for Silly Walks, 2016;

Song: Joy (Shuga)
        </Typography>
      </Box>


        {/* TORCH Live */}
        <Box margin="50px auto" width="500px" title="video">
        <iframe
          width="500"
          height="300"
          src="https://www.youtube.com/embed/KmXI6FUW99I?si=7T_KvJNm32bcIe4p" 
          frameborder="0"
          allowfullscreen
          title="Moses"
          style={{
            border: "2px solid #ccc", // Example border style
            borderRadius: "10px", // Example border radius
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", // Example box shadow
            // Add more styles as needed
          }}
        ></iframe>

{/* Ajani Picture Link */}
<Box display="flex" justifyContent="center">
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
                  width: "35px",
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


            <Box title="kaya-t">
          <Button       sx={{
            "&:hover": { cursor: "pointer", color: shades.secondary[500] },
            display: isNonMobile ? "inline" : "inline",
            color: !isDarkMode ? shades.primary[500] : "white",
          }}
          onClick={() => navigate("/kaya")}>
            <img
              src={Kaya || profilePicture}
              alt="profile"
              style={{
                width: "35px",
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

</Box>


        {/* Text Info */}
        <Typography
          sx={{
            "&:hover": { cursor: "pointer", color: shades.secondary[500] },
            display: isNonMobile ? "block" : "none",
            margin: "10px",
          }}
          color={!isDarkMode ? shades.primary[500] : undefined}
          title="We Need A Moses"
        >
  On keys and backing vocals for Torch, 2014

live @ Reggae Jam, Germany
        </Typography>
      </Box>



            {/* Remember Patrice */}
            <Box margin="50px auto" width="500px" title="video">
        <iframe
          width="500"
          height="300"
          src="https://www.youtube.com/embed/qW6GczSonWs?si=dGOAIRg72_1sQDk0" 
          frameborder="0"
          allowfullscreen
          title="Moses"
          style={{
            border: "2px solid #ccc", // Example border style
            borderRadius: "10px", // Example border radius
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", // Example box shadow
            // Add more styles as needed
          }}
        ></iframe>

{/* Ajani Picture Link */}
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
              width: "35px",
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


        {/* Text Info */}
        <Typography
          sx={{
            "&:hover": { cursor: "pointer", color: shades.secondary[500] },
            display: isNonMobile ? "block" : "none",
            margin: "10px",
          }}
          color={!isDarkMode ? shades.primary[500] : undefined}
          title="We Need A Moses"
        >
 Playing keyboards and singing backing vocals for Patrice, 2005

"Rememba" live @ Zenith Paris


        </Typography>
      </Box>


              {/* Papa Curvin Live */}
              <Box margin="50px auto" width="500px" title="video">
        <iframe
          width="500"
          height="300"
          src="https://www.youtube.com/embed/ilZbr9npoYY?si=8FP8dE2V0Ie5912W" title="YouTube video player" 
          frameborder="0"
          allowfullscreen
      
          style={{
            border: "2px solid #ccc", // Example border style
            borderRadius: "10px", // Example border radius
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", // Example box shadow
            // Add more styles as needed
          }}
        ></iframe>

{/* Ajani Picture Link */}
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
              width: "35px",
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


        {/* Text Info */}
        <Typography
          sx={{
            "&:hover": { cursor: "pointer", color: shades.secondary[500] },
            display: isNonMobile ? "block" : "none",
            margin: "10px",
          }}
          color={!isDarkMode ? shades.primary[500] : undefined}
          title="We Need A Moses"
        >
Playing keyboards and singing backing vocals for Jamaica Papa Curvin, 1999

live @ Chiemsee, Germany


        </Typography>
      </Box>


   {/* Give Thanks Shocking Murray*/}
   <Box margin="50px auto" width="500px" title="video">
        <iframe
          width="500"
          height="300"
          src="https://www.youtube.com/embed/frgMLeyvQSA?si=F8HuDrbqvVnX8YGA" 
          frameborder="0"
          allowfullscreen
          title="Give Thanks"
          style={{
            border: "2px solid #ccc", // Example border style
            borderRadius: "10px", // Example border radius
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", // Example box shadow
            // Add more styles as needed
          }}
        ></iframe>

{/* Ajani Picture Link */}
<Box display="flex" justifyContent="center">
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
                  width: "35px",
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


            <Box title="kaya-t">
          <Button       sx={{
            "&:hover": { cursor: "pointer", color: shades.secondary[500] },
            display: isNonMobile ? "inline" : "inline",
            color: !isDarkMode ? shades.primary[500] : "white",
          }}
          onClick={() => navigate("/kaya")}>
            <img
              src={Kaya || profilePicture}
              alt="profile"
              style={{
                width: "35px",
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

</Box>


        {/* Text Info */}
        <Typography
          sx={{
            "&:hover": { cursor: "pointer", color: shades.secondary[500] },
            display: isNonMobile ? "block" : "none",
            margin: "10px",
          }}
          color={!isDarkMode ? shades.primary[500] : undefined}
          title="We Need A Moses"
        >
On keys and backing vocals for for Shocking Murray, 2011

 

        </Typography>
      </Box>

      



              {/* Patrice Live */}
              <Box margin="50px auto" width="500px" title="video">
        <iframe
          width="500"
          height="300"
          src="https://www.youtube.com/embed/aPdo_ebgmxo?si=LMG54KsADwFhIE7c"title="YouTube video player" 
          frameborder="0"
          allowfullscreen
      
          style={{
            border: "2px solid #ccc", // Example border style
            borderRadius: "10px", // Example border radius
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", // Example box shadow
            // Add more styles as needed
          }}
        ></iframe>

{/* Ajani Picture Link */}
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
              width: "35px",
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


        {/* Text Info */}
        <Typography
          sx={{
            "&:hover": { cursor: "pointer", color: shades.secondary[500] },
            display: isNonMobile ? "block" : "none",
            margin: "10px",
          }}
          color={!isDarkMode ? shades.primary[500] : undefined}
          title="We Need A Moses"
        >
Production, playing keyboards and singing backing vocals for Patrice, 2002

"Sneakers" live 


        </Typography>
      </Box>




           {/* So SIMPLE RHAATID*/}
           <Box margin="50px auto" width="500px" title="video">
        <iframe
          width="500"
          height="300"
          src="https://www.youtube.com/embed/xD7sBRL_iKc?si=EEV8y6yXa_lG0g2s"title="YouTube video player" 
          frameborder="0"
          allowfullscreen
        
          style={{
            border: "2px solid #ccc", // Example border style
            borderRadius: "10px", // Example border radius
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", // Example box shadow
            // Add more styles as needed
          }}
        ></iframe>

{/* Ajani Picture Link */}
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
              width: "35px",
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


        {/* Text Info */}
        <Typography
          sx={{
            "&:hover": { cursor: "pointer", color: shades.secondary[500] },
            display: isNonMobile ? "block" : "none",
            margin: "10px",
          }}
          color={!isDarkMode ? shades.primary[500] : undefined}
          title="We Need A Moses"
        >
Playing keyboards and singing backing vocals for Rhaatid, 2008

"So Simple", live in


        </Typography>
      </Box>




        {/* Can´t You See Mantis*/}
   <Box margin="50px auto" width="500px" title="video">
        <iframe
          width="500"
          height="300"
          src="https://www.youtube.com/embed/o6WKHqO1xW8?si=VPyQbKWZ_HbLnnLj" 
          frameborder="0"
          allowfullscreen
          title="Give Thanks"
          style={{
            border: "2px solid #ccc", // Example border style
            borderRadius: "10px", // Example border radius
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", // Example box shadow
            // Add more styles as needed
          }}
        ></iframe>

{/* Ajani Picture Link */}
<Box display="flex" justifyContent="center">
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
                  width: "35px",
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


            <Box title="kaya-t">
          <Button       sx={{
            "&:hover": { cursor: "pointer", color: shades.secondary[500] },
            display: isNonMobile ? "inline" : "inline",
            color: !isDarkMode ? shades.primary[500] : "white",
          }}
          onClick={() => navigate("/kaya")}>
            <img
              src={Kaya || profilePicture}
              alt="profile"
              style={{
                width: "35px",
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

</Box>


        {/* Text Info */}
        <Typography
          sx={{
            "&:hover": { cursor: "pointer", color: shades.secondary[500] },
            display: isNonMobile ? "block" : "none",
            margin: "10px",
          }}
          color={!isDarkMode ? shades.primary[500] : undefined}
          title="We Need A Moses"
        >
On keys and backing vocals for Mantis, 2010

live @ Ravensburger Park, Bielefeld, Germany

 

        </Typography>
      </Box>




           {/* JAH JAH DEH DEH PATRICE*/}
           <Box margin="50px auto" width="500px" title="video">
        <iframe
          width="500"
          height="300"
          src="https://www.youtube.com/embed/unBObkuNO6c?si=NGivEIeP1AQMHszD" title="YouTube video player" 
          frameborder="0"
          allowfullscreen
        
          style={{
            border: "2px solid #ccc", // Example border style
            borderRadius: "10px", // Example border radius
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", // Example box shadow
            // Add more styles as needed
          }}
        ></iframe>

{/* Ajani Picture Link */}
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
              width: "35px",
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


        {/* Text Info */}
        <Typography
          sx={{
            "&:hover": { cursor: "pointer", color: shades.secondary[500] },
            display: isNonMobile ? "block" : "none",
            margin: "10px",
          }}
          color={!isDarkMode ? shades.primary[500] : undefined}
          title="We Need A Moses"
        >
(keys) with Patrice, 2002

Album: How Do You Call It


        </Typography>
      </Box>



           {/*BROADWAY RHAATID*/}
           <Box margin="50px auto" width="500px" title="video">
        <iframe
          width="500"
          height="300"
          src="https://www.youtube.com/embed/VzlpK4sjf7M?si=ptxazfCf4-b4cs0k"   title="YouTube video player" 
          frameborder="0"
          allowfullscreen
        
          style={{
            border: "2px solid #ccc", // Example border style
            borderRadius: "10px", // Example border radius
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", // Example box shadow
            // Add more styles as needed
          }}
        ></iframe>

{/* Ajani Picture Link */}
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
              width: "35px",
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


        {/* Text Info */}
        <Typography
          sx={{
            "&:hover": { cursor: "pointer", color: shades.secondary[500] },
            display: isNonMobile ? "block" : "none",
            margin: "10px",
          }}
          color={!isDarkMode ? shades.primary[500] : undefined}
          title="We Need A Moses"
        >
Playing keyboards and singing backing vocals for Rhaatid, 2008

"Broadway", live 


        </Typography>
      </Box>




        {/* World War 3 Mantis*/}
        <Box margin="50px auto" width="500px" title="video">
        <iframe
          width="500"
          height="300"
          src="https://www.youtube.com/embed/zQaleZFt7pc?si=piVs9DytH6SueoAk" 
          frameborder="0"
          allowfullscreen
          title="Give Thanks"
          style={{
            border: "2px solid #ccc", // Example border style
            borderRadius: "10px", // Example border radius
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", // Example box shadow
            // Add more styles as needed
          }}
        ></iframe>

{/* Ajani Picture Link */}
<Box display="flex" justifyContent="center">
    {/* <Box title="ajani">
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
                  width: "35px",
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
            </Box> */}


            <Box title="kaya-t">
          <Button       sx={{
            "&:hover": { cursor: "pointer", color: shades.secondary[500] },
            display: isNonMobile ? "inline" : "inline",
            color: !isDarkMode ? shades.primary[500] : "white",
          }}
          onClick={() => navigate("/kaya")}>
            <img
              src={Kaya || profilePicture}
              alt="profile"
              style={{
                width: "35px",
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

</Box>


        {/* Text Info */}
        <Typography
          sx={{
            "&:hover": { cursor: "pointer", color: shades.secondary[500] },
            display: isNonMobile ? "block" : "none",
            margin: "10px",
          }}
          color={!isDarkMode ? shades.primary[500] : undefined}
          title="World War 3 Mantis"
        >
With Mantis, 2010

"Show A Little/World War Three" live @ Ravensburger Park, Bielefeld, Germany

 

 

        </Typography>
      </Box>




           {/*ENDLESS SUMMER OCEANA*/}
           <Box margin="50px auto" width="500px" title="video">
        <iframe
          width="500"
          height="300"
          src="https://www.youtube.com/embed/_Kjv9H6BxpI?si=4YxSvbEPUCFpPZDq"   title="YouTube video player" 
          frameborder="0"
          allowfullscreen
        
          style={{
            border: "2px solid #ccc", // Example border style
            borderRadius: "10px", // Example border radius
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", // Example box shadow
            // Add more styles as needed
          }}
        ></iframe>

{/* Ajani Picture Link */}
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
              width: "35px",
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


        {/* Text Info */}
        <Typography
          sx={{
            "&:hover": { cursor: "pointer", color: shades.secondary[500] },
            display: isNonMobile ? "block" : "none",
            margin: "10px",
          }}
          color={!isDarkMode ? shades.primary[500] : undefined}
          title="Endless Summer Oceana"
        >
(keys) with Oceana, 2012

Song: Endless Summer (reggae version), 2012


        </Typography>
      </Box>



         {/*VIDO LIVE*/}
         <Box margin="50px auto" width="500px" title="video">
        <iframe
          width="500"
          height="300"
          src="https://www.youtube.com/embed/IZ6r0cTcB3M?si=B_DO_J8bDYHLnwwp"   title="YouTube video player" 
          frameborder="0"
          allowfullscreen
        
          style={{
            border: "2px solid #ccc", // Example border style
            borderRadius: "10px", // Example border radius
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", // Example box shadow
            // Add more styles as needed
          }}
        ></iframe>

{/* Ajani Picture Link */}
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
              width: "35px",
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


        {/* Text Info */}
        <Typography
          sx={{
            "&:hover": { cursor: "pointer", color: shades.secondary[500] },
            display: isNonMobile ? "block" : "none",
            margin: "10px",
          }}
          color={!isDarkMode ? shades.primary[500] : undefined}
          title="Vido Live"
        >
Playing keyboards and singing backing vocals for Vido Jelashe, 

Yaam Anthem live @ Yaam, Berlin, Germany

        </Typography>
      </Box>



        {/*LoYAL FLAMES LIVE*/}
        <Box margin="50px auto" width="500px" title="video">
        <iframe
          width="500"
          height="300"
          src="https://www.youtube.com/embed/8Vk1KuMxPsQ?si=k2YK9ZNbj4VaEEGH"   title="YouTube video player" 
          frameborder="0"
          allowfullscreen
        
          style={{
            border: "2px solid #ccc", // Example border style
            borderRadius: "10px", // Example border radius
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", // Example box shadow
            // Add more styles as needed
          }}
        ></iframe>

{/* Ajani Picture Link */}
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
              width: "35px",
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


        {/* Text Info */}
        <Typography
          sx={{
            "&:hover": { cursor: "pointer", color: shades.secondary[500] },
            display: isNonMobile ? "block" : "none",
            margin: "10px",
          }}
          color={!isDarkMode ? shades.primary[500] : undefined}
          title="Loyal Flames Live"
        >
As MD, playing keyboards and singing backing vocals for Loyal Flames, 2014

live @ Reggaejam, Germany

        </Typography>
      </Box>



        {/*WUNDERLAMPE MARTIN JONDO*/}
        <Box margin="50px auto" width="500px" title="video">
        <iframe
          width="500"
          height="300"
          src="https://www.youtube.com/embed/z0Fh6YBYx9Q?si=PNHHh82wAtqyatlZ"   title="YouTube video player" 
          frameborder="0"
          allowfullscreen
        
          style={{
            border: "2px solid #ccc", // Example border style
            borderRadius: "10px", // Example border radius
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", // Example box shadow
            // Add more styles as needed
          }}
        ></iframe>

{/* Ajani Picture Link */}
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
              width: "35px",
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


        {/* Text Info */}
        <Typography
          sx={{
            "&:hover": { cursor: "pointer", color: shades.secondary[500] },
            display: isNonMobile ? "block" : "none",
            margin: "10px",
          }}
          color={!isDarkMode ? shades.primary[500] : undefined}
          title="Loyal Flames Live"
        >
Playing keyboards for Martin Jondo/Silly Walks, 2010

Song: Wunderlampe

        </Typography>
      </Box>





           {/* MARTIN JONDO LIVE*/}
   <Box margin="50px auto" width="500px" title="video">
        <iframe
          width="500"
          height="300"
          src="https://www.youtube.com/embed/bUT7Vpp7_YA?si=EW3i8Qc6vK5_4iiA" 
          frameborder="0"
          allowfullscreen
          title="Martin Jondo Live"
          style={{
            border: "2px solid #ccc", // Example border style
            borderRadius: "10px", // Example border radius
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", // Example box shadow
            // Add more styles as needed
          }}
        ></iframe>

{/* Ajani Picture Link */}
<Box display="flex" justifyContent="center">
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
                  width: "35px",
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


            <Box title="kaya-t">
          <Button       sx={{
            "&:hover": { cursor: "pointer", color: shades.secondary[500] },
            display: isNonMobile ? "inline" : "inline",
            color: !isDarkMode ? shades.primary[500] : "white",
          }}
          onClick={() => navigate("/kaya")}>
            <img
              src={Kaya || profilePicture}
              alt="profile"
              style={{
                width: "35px",
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

</Box>


        {/* Text Info */}
        <Typography
          sx={{
            "&:hover": { cursor: "pointer", color: shades.secondary[500] },
            display: isNonMobile ? "block" : "none",
            margin: "10px",
          }}
          color={!isDarkMode ? shades.primary[500] : undefined}
          title="Martin Jondo Live"
        >
On keys and backing vocals for Martin Jondo, 2012

live @ Hamburg, Germany
 

        </Typography>
      </Box>



              {/*Nneka Live*/}
              <Box margin="50px auto" width="500px" title="video">
        <iframe
          width="500"
          height="300"
          src="https://www.youtube.com/embed/M8Zh7hlBgUA?si=x96usGG5my6DsDD8"   title="YouTube video player" 
          frameborder="0"
          allowfullscreen
        
          style={{
            border: "2px solid #ccc", // Example border style
            borderRadius: "10px", // Example border radius
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", // Example box shadow
            // Add more styles as needed
          }}
        ></iframe>

{/* Ajani Picture Link */}
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
              width: "35px",
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


        {/* Text Info */}
        <Typography
          sx={{
            "&:hover": { cursor: "pointer", color: shades.secondary[500] },
            display: isNonMobile ? "block" : "none",
            margin: "10px",
          }}
          color={!isDarkMode ? shades.primary[500] : undefined}
          title="Nneka Live"
        >
Playing keyboards and singing backing vocals for Nneka 

live @Elysées Montmartre, Paris, 2008

        </Typography>
      </Box>




              {/*Uwe Banton & Yah Meek Live*/}
              <Box margin="50px auto" width="500px" title="video">
        <iframe
          width="500"
          height="300"
          src="https://www.youtube.com/embed/Ur112rMqlkM?si=NQ291fw3zWwBmc2f"   title="YouTube video player" 
          frameborder="0"
          allowfullscreen
        
          style={{
            border: "2px solid #ccc", // Example border style
            borderRadius: "10px", // Example border radius
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", // Example box shadow
            // Add more styles as needed
          }}
        ></iframe>

{/* Ajani Picture Link */}
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
              width: "35px",
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


        {/* Text Info */}
        <Typography
          sx={{
            "&:hover": { cursor: "pointer", color: shades.secondary[500] },
            display: isNonMobile ? "block" : "none",
            margin: "10px",
          }}
          color={!isDarkMode ? shades.primary[500] : undefined}
          title="Uwe Banton & Yah Meek Live"
        >
Playing keyboards and singing backing vocals for Uwe Banton & Yah Meek, 2013

        </Typography>
      </Box>




        {/* Martin Jondo Live 2*/}
        <Box margin="50px auto" width="500px" title="video">
        <iframe
          width="500"
          height="300"
          src="https://www.youtube.com/embed/ys3TrkcOPcQ?si=h79FJzNz5pjoQ6ld" 
          frameborder="0"
          allowfullscreen
          title="Give Thanks"
          style={{
            border: "2px solid #ccc", // Example border style
            borderRadius: "10px", // Example border radius
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", // Example box shadow
            // Add more styles as needed
          }}
        ></iframe>

{/* Ajani Picture Link */}
<Box display="flex" justifyContent="center">
    {/* <Box title="ajani">
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
                  width: "35px",
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
            </Box> */}


            <Box title="kaya-t">
          <Button       sx={{
            "&:hover": { cursor: "pointer", color: shades.secondary[500] },
            display: isNonMobile ? "inline" : "inline",
            color: !isDarkMode ? shades.primary[500] : "white",
          }}
          onClick={() => navigate("/kaya")}>
            <img
              src={Kaya || profilePicture}
              alt="profile"
              style={{
                width: "35px",
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

</Box>


        {/* Text Info */}
        <Typography
          sx={{
            "&:hover": { cursor: "pointer", color: shades.secondary[500] },
            display: isNonMobile ? "block" : "none",
            margin: "10px",
          }}
          color={!isDarkMode ? shades.primary[500] : undefined}
          title="World War 3 Mantis"
        >
Singing backing vocals for Martin Jondo, 2010

live @ Ruhr Reggae Summer, Germany

 

 

        </Typography>
      </Box>



        {/* Kaya-T Live 2*/}
        <Box margin="50px auto" width="500px" title="video">
        <iframe
          width="500"
          height="300"
          src="https://www.youtube.com/embed/Cd9mu6zw3V0?si=eWSte0T2bEQXDDXl" 
          frameborder="0"
          allowfullscreen
          title="Give Thanks"
          style={{
            border: "2px solid #ccc", // Example border style
            borderRadius: "10px", // Example border radius
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", // Example box shadow
            // Add more styles as needed
          }}
        ></iframe>

{/* Ajani Picture Link */}
<Box display="flex" justifyContent="center">
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
                  width: "35px",
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


            <Box title="kaya-t">
          <Button       sx={{
            "&:hover": { cursor: "pointer", color: shades.secondary[500] },
            display: isNonMobile ? "inline" : "inline",
            color: !isDarkMode ? shades.primary[500] : "white",
          }}
          onClick={() => navigate("/kaya")}>
            <img
              src={Kaya || profilePicture}
              alt="profile"
              style={{
                width: "35px",
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

</Box>


        {/* Text Info */}
        <Typography
          sx={{
            "&:hover": { cursor: "pointer", color: shades.secondary[500] },
            display: isNonMobile ? "block" : "none",
            margin: "10px",
          }}
          color={!isDarkMode ? shades.primary[500] : undefined}
          title="World War 3 Mantis"
        >
Kaya-T as support for Queen Ifrika and Turbulence, 2007

live @ Kesselhaus, Berlin, Germany

 

 

        </Typography>
      </Box>



        {/*Ganjaman Live*/}
        <Box margin="50px auto" width="500px" title="video">
        <iframe
          width="500"
          height="300"
          src="https://www.youtube.com/embed/f_MzEeZvqb8?si=CvbVj8ZKlptoDA8h"   title="YouTube video player" 
          frameborder="0"
          allowfullscreen
        
          style={{
            border: "2px solid #ccc", // Example border style
            borderRadius: "10px", // Example border radius
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", // Example box shadow
            // Add more styles as needed
          }}
        ></iframe>

{/* Ajani Picture Link */}
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
              width: "35px",
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


        {/* Text Info */}
        <Typography
          sx={{
            "&:hover": { cursor: "pointer", color: shades.secondary[500] },
            display: isNonMobile ? "block" : "none",
            margin: "10px",
          }}
          color={!isDarkMode ? shades.primary[500] : undefined}
          title="Ganjaman Live"
        >
Playing keyboards and singing backing vocals for Ganjaman, 2011

"Das Gleiche Alte Lied", live in
        </Typography>
      </Box>



        {/* Out OF NOWHERE TANIA*/}
        <Box margin="50px auto" width="500px" title="video">
        <iframe
          width="500"
          height="300"
          src="https://www.youtube.com/embed/drl81BXNyAw?si=axAn_hgjV7rUPUav" 
          frameborder="0"
          allowfullscreen
          title="Give Thanks"
          style={{
            border: "2px solid #ccc", // Example border style
            borderRadius: "10px", // Example border radius
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", // Example box shadow
            // Add more styles as needed
          }}
        ></iframe>

{/* Ajani Picture Link */}
<Box display="flex" justifyContent="center">
    {/* <Box title="ajani">
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
                  width: "35px",
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
            </Box> */}


            <Box title="kaya-t">
          <Button       sx={{
            "&:hover": { cursor: "pointer", color: shades.secondary[500] },
            display: isNonMobile ? "inline" : "inline",
            color: !isDarkMode ? shades.primary[500] : "white",
          }}
          onClick={() => navigate("/kaya")}>
            <img
              src={Kaya || profilePicture}
              alt="profile"
              style={{
                width: "35px",
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

</Box>


        {/* Text Info */}
        <Typography
          sx={{
            "&:hover": { cursor: "pointer", color: shades.secondary[500] },
            display: isNonMobile ? "block" : "none",
            margin: "10px",
          }}
          color={!isDarkMode ? shades.primary[500] : undefined}
          title="Out Of Nowhere"
        >
Tania @ her diploma concert, 2010

"Out Of Nowhere" (collabo with Mr. Bugslow)

live @ Kasseturm, Weimar, Germany

 

 

        </Typography>
      </Box>



        {/* WARUM EIGENTLICH NICHT LATIN BLUES TANIA*/}
        <Box margin="50px auto" width="500px" title="video">
        <iframe
          width="500"
          height="300"
          src="https://www.youtube.com/embed/Ps5uBZqaWKI?si=ELj2FvwrmCyQ8Wxz" 
          frameborder="0"
          allowfullscreen
          title="Give Thanks"
          style={{
            border: "2px solid #ccc", // Example border style
            borderRadius: "10px", // Example border radius
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", // Example box shadow
            // Add more styles as needed
          }}
        ></iframe>

{/* Ajani Picture Link */}
<Box display="flex" justifyContent="center">
    {/* <Box title="ajani">
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
                  width: "35px",
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
            </Box> */}


            <Box title="kaya-t">
          <Button       sx={{
            "&:hover": { cursor: "pointer", color: shades.secondary[500] },
            display: isNonMobile ? "inline" : "inline",
            color: !isDarkMode ? shades.primary[500] : "white",
          }}
          onClick={() => navigate("/kaya")}>
            <img
              src={Kaya || profilePicture}
              alt="profile"
              style={{
                width: "35px",
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

</Box>


        {/* Text Info */}
        <Typography
          sx={{
            "&:hover": { cursor: "pointer", color: shades.secondary[500] },
            display: isNonMobile ? "block" : "none",
            margin: "10px",
          }}
          color={!isDarkMode ? shades.primary[500] : undefined}
          title="Warum Eigentlich Nicht Latin Blues"
        >
Tania @ her diploma concert, 2010

"Warum Eigentlich Nicht Latin Blues" live @ Kasseturm, Weimar, Germany

 

 

        </Typography>
      </Box>


         {/*DE MIS REQUEDES TANIA*/}
         <Box margin="50px auto" width="500px" title="video">
        <iframe
          width="500"
          height="300"
          src="https://www.youtube.com/embed/ZsEKzinNA-I?si=PqW9O0hu62UiPIAg" 
          frameborder="0"
          allowfullscreen
          title="Give Thanks"
          style={{
            border: "2px solid #ccc", // Example border style
            borderRadius: "10px", // Example border radius
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", // Example box shadow
            // Add more styles as needed
          }}
        ></iframe>

{/* Ajani Picture Link */}
<Box display="flex" justifyContent="center">
    {/* <Box title="ajani">
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
                  width: "35px",
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
            </Box> */}


            <Box title="kaya-t">
          <Button       sx={{
            "&:hover": { cursor: "pointer", color: shades.secondary[500] },
            display: isNonMobile ? "inline" : "inline",
            color: !isDarkMode ? shades.primary[500] : "white",
          }}
          onClick={() => navigate("/kaya")}>
            <img
              src={Kaya || profilePicture}
              alt="profile"
              style={{
                width: "35px",
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

</Box>


        {/* Text Info */}
        <Typography
          sx={{
            "&:hover": { cursor: "pointer", color: shades.secondary[500] },
            display: isNonMobile ? "block" : "none",
            margin: "10px",
          }}
          color={!isDarkMode ? shades.primary[500] : undefined}
          title="De Mis Requerdes"
        >
Tania @ her diploma concert, 2010

"De Mis Requerdes"  live at Kasseturm, Weimar, Germany

 

 

        </Typography>
      </Box>


        {/*Perfect Circle TANIA*/}
        <Box margin="50px auto" width="500px" title="video">
        <iframe
          width="500"
          height="300"
          src="https://www.youtube.com/embed/prp-8I4UDYg?si=v7x2vweeSAs8Aeeu" 
          frameborder="0"
          allowfullscreen
          title="Give Thanks"
          style={{
            border: "2px solid #ccc", // Example border style
            borderRadius: "10px", // Example border radius
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", // Example box shadow
            // Add more styles as needed
          }}
        ></iframe>

{/* Ajani Picture Link */}
<Box display="flex" justifyContent="center">
    {/* <Box title="ajani">
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
                  width: "35px",
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
            </Box> */}


            <Box title="kaya-t">
          <Button       sx={{
            "&:hover": { cursor: "pointer", color: shades.secondary[500] },
            display: isNonMobile ? "inline" : "inline",
            color: !isDarkMode ? shades.primary[500] : "white",
          }}
          onClick={() => navigate("/kaya")}>
            <img
              src={Kaya || profilePicture}
              alt="profile"
              style={{
                width: "35px",
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

</Box>


        {/* Text Info */}
        <Typography
          sx={{
            "&:hover": { cursor: "pointer", color: shades.secondary[500] },
            display: isNonMobile ? "block" : "none",
            margin: "10px",
          }}
          color={!isDarkMode ? shades.primary[500] : undefined}
          title="Perfect Circle"
        >
Tania @ her diploma concert, 2010

"Perfect Circle" (collabo with Mr. Bugslow) live at Kasseturm, Weimar, Germany

 

 

        </Typography>
      </Box>


    {/* NAVIGATION BUTTONS */}
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
              display: isNonMobile ? "inline" : "inline", color:!isDarkMode ? shades.primary[500] : "white"
            }} onClick={() => navigate("/ajani-photos")} 
          >
            Photos
          </Button>
       
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

export default Videos;
