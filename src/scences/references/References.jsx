import React, { useState, useContext, useEffect } from "react";
import { Box, Typography, Button, useMediaQuery } from "@mui/material";
import { HerbContext } from "../../context/Context";
import { useNavigate } from "react-router-dom";
import profilePicture from "../../assets/angele-kamp-kcvRHtAyuig-unsplash.jpg";
import ScrollTop from "../../components/ScrollTop";
import Ajani from "../../artistpictures/ajani.png";
import axios from "axios";
import { shades } from "../../theme";
import MainCarouselz from "../home/MainCarouselz";


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

      <MainCarouselz/>

      <Box margin="50px auto" title="artists">
        {/* ARTIST-1 */}
        <Box>
          <Typography
            fontWeight="bold"
            sx={{
              "&:hover": { cursor: "pointer", color: "lime" },
              marginTop: "10px",
              color: isDarkMode ? "white" : "black",
            }}
          >
            Artists
          </Typography>
          <Typography
            mt="10px"
            sx={{
              "&:hover": { cursor: "pointer", color: "lime" },
              marginTop: "10px",
              color: isDarkMode ? "white" : "black",
            }}
          >
            <a
              href="https://www.instagram.com/alainesinga/?hl=de"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                color: isDarkMode ? "white" : "black",
              }}
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
              href="http://www.aldubb.de/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                color: isDarkMode ? "white" : "black",
              }}
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
              href="https://www.instagram.com/andrudonalds/?hl=de"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                color: isDarkMode ? "white" : "black",
              }}
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
              href="https://www.instagram.com/anthony_locks/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                color: isDarkMode ? "white" : "black",
              }}
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
              href="https://www.instagram.com/agentsasco/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                color: isDarkMode ? "white" : "black",
              }}
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
              href="https://de.wikipedia.org/wiki/Ben_(S%C3%A4nger)"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                color: isDarkMode ? "white" : "black",
              }}
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
              href="https://de.wikipedia.org/wiki/Brothers_Keepers"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                color: isDarkMode ? "white" : "black",
              }}
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
              href="https://www.instagram.com/bush1do/?hl=de"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                color: isDarkMode ? "white" : "black",
              }}
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
              href="https://de.wikipedia.org/wiki/Caramelo_Criminal"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                color: isDarkMode ? "white" : "black",
              }}
            >
              Caramelo Criminal
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
              href="https://www.criscosmo.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                color: isDarkMode ? "white" : "black",
              }}
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
              href="https://en.wikipedia.org/wiki/Roydel_Johnson"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                color: isDarkMode ? "white" : "black",
              }}
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
              href="https://www.instagram.com/cornelcampbellgorgon/?hl=de"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                color: isDarkMode ? "white" : "black",
              }}
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
              href="https://www.facebook.com/DFlameOfficial/?locale=de_DE"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                color: isDarkMode ? "white" : "black",
              }}
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
              href="https://www.diefantastischenvier.de/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                color: isDarkMode ? "white" : "black",
              }}
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
              href="https://www.discogs.com/de/artist/929393-Doniki?srsltid=AfmBOoqli_kGc-p5Ex-KARrp5HEaeBddyakFX9-sV4AHZi7xovoXdvL9"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                color: isDarkMode ? "white" : "black",
              }}
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
              href="http://www.dutchiegold.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                color: isDarkMode ? "white" : "black",
              }}
            >
              Dutchie Gold
            </a>
          </Typography>
        </Box>

        {/* ARTIST-17 */}
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
              href="https://emersound.live/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                color: isDarkMode ? "white" : "black",
              }}
            >
              Emersound
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
              href="https://de.wikipedia.org/wiki/Far_East_Band"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                color: isDarkMode ? "white" : "black",
              }}
            >
              Far East Band
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
              href="https://www.youtube.com/watch?v=jyNgI8_AGMQ"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                color: isDarkMode ? "white" : "black",
              }}
            >
              Feueralarm Band
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
              href="https://de.wikipedia.org/wiki/Frankie_Paul"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                color: isDarkMode ? "white" : "black",
              }}
            >
              Frankie Paul
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
              href="http://www.ganjaman.info/Ganjaman_Berlin/Willkommen.html"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                color: isDarkMode ? "white" : "black",
              }}
            >
              Ganjaman
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
              href="https://www.instagram.com/generaldegree1/?hl=de"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                color: isDarkMode ? "white" : "black",
              }}
            >
              General Degree
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
              href="https://www.instagram.com/glenswashington/?hl=de"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                color: isDarkMode ? "white" : "black",
              }}
            >
              Glen Washington
            </a>
          </Typography>
        </Box>

        {/* ARTIST-24*/}
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
              href="https://halfpintmusic.com/about/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                color: isDarkMode ? "white" : "black",
              }}
            >
              Half Pint
            </a>
          </Typography>
        </Box>

        {/* ARTIST-25*/}
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
              href="https://en.wikipedia.org/wiki/Hortense_Ellis"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                color: isDarkMode ? "white" : "black",
              }}
            >
              Hortense Ellis
            </a>
          </Typography>
        </Box>

        {/* ARTIST-26*/}
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
              href="https://en.wikipedia.org/wiki/U_Brown"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                color: isDarkMode ? "white" : "black",
              }}
            >
              Hugh Brown
            </a>
          </Typography>
        </Box>

        {/* ARTIST-27*/}
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
              href="https://de.wikipedia.org/wiki/Ijahman_Levi"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                color: isDarkMode ? "white" : "black",
              }}
            >
              Ijahman Levi
            </a>
          </Typography>
        </Box>

        {/* ARTIST-27*/}
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
              href="https://www.facebook.com/IQrastafari/?locale=de_DE"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                color: isDarkMode ? "white" : "black",
              }}
            >
              Iqulah
            </a>
          </Typography>
        </Box>

        {/* ARTIST-28*/}
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
              href="https://www.jan-delay.de/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                color: isDarkMode ? "white" : "black",
              }}
            >
              Jan Delay
            </a>
          </Typography>
        </Box>

        {/* ARTIST-29*/}
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
              href="https://www.facebook.com/JahMasonMusic/?locale=de_DE"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                color: isDarkMode ? "white" : "black",
              }}
            >
              Jah Mason
            </a>
          </Typography>
        </Box>

        {/* ARTIST-30*/}
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
              href="http://www.yahmeek.net/index_de.html"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                color: isDarkMode ? "white" : "black",
              }}
            >
              Yah Meek
            </a>
          </Typography>
        </Box>

        {/* ARTIST-31*/}
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
              href="https://www.instagram.com/jrkellyofficial/?hl=de"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                color: isDarkMode ? "white" : "black",
              }}
            >
              Junior Kelly
            </a>
          </Typography>
        </Box>

        {/* ARTIST-32*/}
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
              href="https://www.instagram.com/jaqeenakiriofficial/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                color: isDarkMode ? "white" : "black",
              }}
            >
              Jaqee
            </a>
          </Typography>
        </Box>

        {/* ARTIST-33*/}
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
              href="https://josephgrant.de/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                color: isDarkMode ? "white" : "black",
              }}
            >
              Joseph "Blue" Grant
            </a>
          </Typography>
        </Box>

        {/* ARTIST-33*/}
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
              href="https://kaya-t.jimdofree.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                color: isDarkMode ? "white" : "black",
              }}
            >
              Kaya-T
            </a>
          </Typography>
        </Box>

        {/* ARTIST-34*/}
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
              href="https://www.instagram.com/keisheraj/?hl=de"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                color: isDarkMode ? "white" : "black",
              }}
            >
              Kesheira
            </a>
          </Typography>
        </Box>

        {/* ARTIST-35*/}
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
              href="https://www.instagram.com/direalkiprich/?hl=de"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                color: isDarkMode ? "white" : "black",
              }}
            >
              Kip Rich
            </a>
          </Typography>
        </Box>

        {/* ARTIST-36*/}
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
              href="https://bandliste.de/Bands/Klartext/4857/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                color: isDarkMode ? "white" : "black",
              }}
            >
              Klartext
            </a>
          </Typography>
        </Box>

        {/* ARTIST-37*/}
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
              href="https://kingsmusicinternational.com/2019/12/kulcha-knox-available-for-bookings/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                color: isDarkMode ? "white" : "black",
              }}
            >
              Kulcha Knox
            </a>
          </Typography>
        </Box>

        {/* ARTIST-38*/}
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
              href="https://unitedreggae.com/artists/l/l-u-s-t,1435/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                color: isDarkMode ? "white" : "black",
              }}
            >
              L.U.S.T.
            </a>
          </Typography>
        </Box>

        {/* ARTIST-39*/}
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
              href="https://www.instagram.com/ewartbrownofficialmadcobra/?hl=de"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                color: isDarkMode ? "white" : "black",
              }}
            >
              Mad Cobra
            </a>
          </Typography>
        </Box>

        {/* ARTIST-40*/}
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
              href="https://www.youtube.com/channel/UCqdCEnBORYJOzcRMGXvHVMQ/videos"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                color: isDarkMode ? "white" : "black",
              }}
            >
              Mantis
            </a>
          </Typography>
        </Box>

        {/* ARTIST-41*/}
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
              href="https://de.wikipedia.org/wiki/Mark_Medlock"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                color: isDarkMode ? "white" : "black",
              }}
            >
              Mark Medllock
            </a>
          </Typography>
        </Box>

        {/* ARTIST-42*/}
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
              href="https://www.instagram.com/martinjondo/?hl=de"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                color: isDarkMode ? "white" : "black",
              }}
            >
              Martin Jondo
            </a>
          </Typography>
        </Box>

        {/* ARTIST-43*/}
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
              href="https://www.facebook.com/martinzobel.music/?locale=de_DE"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                color: isDarkMode ? "white" : "black",
              }}
            >
              Martin Zobel
            </a>
          </Typography>
        </Box>

        {/* ARTIST-44*/}
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
              href="https://www.instagram.com/maxherreofficial/?hl=de"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                color: isDarkMode ? "white" : "black",
              }}
            >
              Max Herre
            </a>
          </Typography>
        </Box>

        {/* ARTIST-45*/}
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
              href="https://www.mellowmark.de/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                color: isDarkMode ? "white" : "black",
              }}
            >
              Mellow Mark
            </a>
          </Typography>
        </Box>

        {/* ARTIST-46*/}
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
              href="https://www.mono-nikitaman.de/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                color: isDarkMode ? "white" : "black",
              }}
            >
              Mono & Nikitaman
            </a>
          </Typography>
        </Box>

        {/* ARTIST-47*/}
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
              href="https://www.instagram.com/nardoranksartist/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                color: isDarkMode ? "white" : "black",
              }}
            >
              Nardo Ranks
            </a>
          </Typography>
        </Box>

        {/* ARTIST-48*/}
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
              href="https://nnekaworld.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                color: isDarkMode ? "white" : "black",
              }}
            >
              Nneka
            </a>
          </Typography>
        </Box>

        {/* ARTIST-49*/}
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
              href="https://www.facebook.com/realnosliw/?locale=de_DE"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                color: isDarkMode ? "white" : "black",
              }}
            >
              Nosliw
            </a>
          </Typography>
        </Box>

        {/* ARTIST-50*/}
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
              href="https://de.wikipedia.org/wiki/Oceana_(S%C3%A4ngerin)"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                color: isDarkMode ? "white" : "black",
              }}
            >
              Oceana
            </a>
          </Typography>
        </Box>

        {/* ARTIST-51*/}
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
              href="https://de.wikipedia.org/wiki/Oren_Lavie"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                color: isDarkMode ? "white" : "black",
              }}
            >
              Oren Lavie
            </a>
          </Typography>
        </Box>

        {/* ARTIST-51*/}
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
              href="https://en.wikipedia.org/wiki/Pat_Kelly_(musician)"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                color: isDarkMode ? "white" : "black",
              }}
            >
              Pat Kelly
            </a>
          </Typography>
        </Box>

        {/* ARTIST-52*/}
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
              href="http://www.patrice.net/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                color: isDarkMode ? "white" : "black",
              }}
            >
              Patrice
            </a>
          </Typography>
        </Box>

        {/* ARTIST-53*/}
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
              href="https://www.facebook.com/p/Jamaica-Papa-Curvin-100063706360354/?locale=de_DE"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                color: isDarkMode ? "white" : "black",
              }}
            >
              Papa Curvin
            </a>
          </Typography>
        </Box>

        {/* ARTIST-54*/}
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
              href="https://www.perfectgiddimani.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                color: isDarkMode ? "white" : "black",
              }}
            >
              Perfect Giddimani
            </a>
          </Typography>
        </Box>

        {/* ARTIST-55*/}
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
              href="https://www.peterfox.de/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                color: isDarkMode ? "white" : "black",
              }}
            >
              Peter Fox
            </a>
          </Typography>
        </Box>

        {/* ARTIST-56*/}
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
              href="https://www.youtube.com/playlist?list=PL9n08O54Mr1bQ2rYDqi9JgA2uZPbmtSWa"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                color: isDarkMode ? "white" : "black",
              }}
            >
              Pierre Poljak
            </a>
          </Typography>
        </Box>

        {/* ARTIST-57*/}
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
              href="https://www.instagram.com/prezidentbrown/?hl=de"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                color: isDarkMode ? "white" : "black",
              }}
            >
              Prezident Brown
            </a>
          </Typography>
        </Box>

        {/* ARTIST-57*/}
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
              href="https://www.instagram.com/pressurebusspipe/?hl=de"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                color: isDarkMode ? "white" : "black",
              }}
            >
              Pressure Busspipe
            </a>
          </Typography>
        </Box>

        {/* ARTIST-58*/}
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
              href="https://www.instagram.com/therealqueenomega/?hl=de"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                color: isDarkMode ? "white" : "black",
              }}
            >
              Queen Omega
            </a>
          </Typography>
        </Box>

        {/* ARTIST-58*/}
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
              href="https://www.instagram.com/rc.reggae/?hl=de"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                color: isDarkMode ? "white" : "black",
              }}
            >
              RC
            </a>
          </Typography>
        </Box>

        {/* ARTIST-58*/}
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
              href="https://www.instagram.com/ras_flabba/?hl=de"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                color: isDarkMode ? "white" : "black",
              }}
            >
              Ras Flabba
            </a>
          </Typography>
        </Box>

        {/* ARTIST-59*/}
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
              href="http://www.rhaatid.net/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                color: isDarkMode ? "white" : "black",
              }}
            >
              Rhaatid
            </a>
          </Typography>
        </Box>

        {/* ARTIST-60*/}
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
              href="https://www.roughhouse-music.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                color: isDarkMode ? "white" : "black",
              }}
            >
              Roughhouse
            </a>
          </Typography>
        </Box>

        {/* ARTIST-61*/}
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
              href="https://sattatree.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                color: isDarkMode ? "white" : "black",
              }}
            >
              Sattatree
            </a>
          </Typography>
        </Box>

        {/* ARTIST-62*/}
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
              href="https://sattatree.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                color: isDarkMode ? "white" : "black",
              }}
            >
              Sattatree
            </a>
          </Typography>
        </Box>

        {/* ARTIST-63*/}
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
              href="https://www.samy-deluxe.de/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                color: isDarkMode ? "white" : "black",
              }}
            >
              Samy Deluxe
            </a>
          </Typography>
        </Box>

        {/* ARTIST-64*/}
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
              href="https://www.instagram.com/saralugo/?locale=de&hl=af"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                color: isDarkMode ? "white" : "black",
              }}
            >
              Sara Lugo
            </a>
          </Typography>
        </Box>

        {/* ARTIST-65*/}
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
              href="https://www.instagram.com/shockingmurraymusic_official/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                color: isDarkMode ? "white" : "black",
              }}
            >
              Shocking Murray
            </a>
          </Typography>
        </Box>

        {/* ARTIST-65*/}
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
              href="https://www.facebook.com/sillywalksdisco/?locale=de_DE"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                color: isDarkMode ? "white" : "black",
              }}
            >
              Silly Walks Discotheke
            </a>
          </Typography>
        </Box>

        {/* ARTIST-66*/}
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
              href="https://de.wikipedia.org/wiki/Stranger_Cole"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                color: isDarkMode ? "white" : "black",
              }}
            >
              Stranger Cole
            </a>
          </Typography>
        </Box>

        {/* ARTIST-67*/}
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
              href="http://teflonyoungking.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                color: isDarkMode ? "white" : "black",
              }}
            >
              Teflon
            </a>
          </Typography>
        </Box>

        {/* ARTIST-68*/}
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
              href="https://www.instagram.com/outlaw_terryganzie/?hl=de"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                color: isDarkMode ? "white" : "black",
              }}
            >
              Terry Ganzie
            </a>
          </Typography>
        </Box>

        {/* ARTIST-69*/}
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
              href="https://www.tippairie.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                color: isDarkMode ? "white" : "black",
              }}
            >
              Tippa Irie
            </a>
          </Typography>
        </Box>

        {/* ARTIST-70*/}
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
              href="https://www.instagram.com/realfyahtorch/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                color: isDarkMode ? "white" : "black",
              }}
            >
              Torch
            </a>
          </Typography>
        </Box>

        {/* ARTIST-71*/}
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
              href="https://www.facebook.com/uwebantonfans/?locale=de_DE"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                color: isDarkMode ? "white" : "black",
              }}
            >
              Uwe Banton
            </a>
          </Typography>
        </Box>

        {/* ARTIST-72*/}
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
              href="https://youngvoicesbrandenburg.de/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                color: isDarkMode ? "white" : "black",
              }}
            >
              Young Voices Berlin/Brandenburg
            </a>
          </Typography>
        </Box>

        {/* ARTIST-73*/}
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
              href="https://seydouataraxie.wordpress.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                color: isDarkMode ? "white" : "black",
              }}
            >
              Zo Ataraxie
            </a>
          </Typography>
        </Box>

        {/* ARTIST-74*/}
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
              href="https://www.instagram.com/zoemazahmusic/?hl=de"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                color: isDarkMode ? "white" : "black",
              }}
            >
              Zoe
            </a>
          </Typography>
        </Box>
      </Box>

      <Box margin="50px auto" title="institutions/companies">
        <Typography
          fontWeight="bold"
          sx={{
            "&:hover": { cursor: "pointer", color: "lime" },
            marginTop: "10px",
            color: isDarkMode ? "white" : "black",
          }}
        >
          Institutions/Companies
        </Typography>

        {/* institution-1 */}
        <Box>
          <Typography
            mt="10px"
            sx={{
              "&:hover": { cursor: "pointer", color: "lime" },
              marginTop: "10px",
              color: isDarkMode ? "white" : "black",
            }}
          >
            Bionade
          </Typography>
        </Box>

        {/* institution-2 */}
        <Box>
          <Typography
            mt="10px"
            sx={{
              "&:hover": { cursor: "pointer", color: "lime" },
              marginTop: "10px",
              color: isDarkMode ? "white" : "black",
            }}
          >
            BKV Potsdam e.V.
          </Typography>
        </Box>

        {/* institution-3 */}
        <Box>
          <Typography
            mt="10px"
            sx={{
              "&:hover": { cursor: "pointer", color: "lime" },
              marginTop: "10px",
              color: isDarkMode ? "white" : "black",
            }}
          >
            KMS Lückenwalde
          </Typography>
        </Box>

        {/* institution-4 */}
        <Box>
          <Typography
            mt="10px"
            sx={{
              "&:hover": { cursor: "pointer", color: "lime" },
              marginTop: "10px",
              color: isDarkMode ? "white" : "black",
            }}
          >
            KMS Königs-Wusterhausen
          </Typography>
        </Box>

        {/* institution-5 */}
        <Box>
          <Typography
            mt="10px"
            sx={{
              "&:hover": { cursor: "pointer", color: "lime" },
              marginTop: "10px",
              color: isDarkMode ? "white" : "black",
            }}
          >
            KMS Kleinmachnow
          </Typography>
        </Box>

        {/* institution-6 */}
        <Box>
          <Typography
            mt="10px"
            sx={{
              "&:hover": { cursor: "pointer", color: "lime" },
              marginTop: "10px",
              color: isDarkMode ? "white" : "black",
            }}
          >
            Landesmusikakademie Berlin
          </Typography>
        </Box>

        {/* institution-7 */}
        <Box>
          <Typography
            mt="10px"
            sx={{
              "&:hover": { cursor: "pointer", color: "lime" },
              marginTop: "10px",
              color: isDarkMode ? "white" : "black",
            }}
          >
            Musikschule Wolfsburg
          </Typography>
        </Box>

        {/* institution-8 */}
        <Box>
          <Typography
            mt="10px"
            sx={{
              "&:hover": { cursor: "pointer", color: "lime" },
              marginTop: "10px",
              color: isDarkMode ? "white" : "black",
            }}
          >
            Musikschule Treptow-Köpenick
          </Typography>
        </Box>

        {/* institution-9 */}
        <Box>
          <Typography
            mt="10px"
            sx={{
              "&:hover": { cursor: "pointer", color: "lime" },
              marginTop: "10px",
              color: isDarkMode ? "white" : "black",
            }}
          >
            SVK-Podcast
          </Typography>
        </Box>
      </Box>

      <Box margin="50px auto" title="tv/online">
        {/* tv/online-1 */}
        <Box>
          <Typography
            fontWeight="bold"
            sx={{
              "&:hover": { cursor: "pointer", color: "lime" },
              marginTop: "10px",
              color: isDarkMode ? "white" : "black",
            }}
          >
            TV/Online
          </Typography>
          <Typography
            mt="10px"
            sx={{
              "&:hover": { cursor: "pointer", color: "lime" },
              marginTop: "10px",
              color: isDarkMode ? "white" : "black",
            }}
          >
            DSDS RTL2
          </Typography>
        </Box>

        {/* tv/online-2 */}
        <Box>
          <Typography
            mt="10px"
            sx={{
              "&:hover": { cursor: "pointer", color: "lime" },
              marginTop: "10px",
              color: isDarkMode ? "white" : "black",
            }}
          >
            Kanal 21
          </Typography>
        </Box>

        {/* tv/online-3 */}
        <Box>
          <Typography
            mt="10px"
            sx={{
              "&:hover": { cursor: "pointer", color: "lime" },
              marginTop: "10px",
              color: isDarkMode ? "white" : "black",
            }}
          >
            Moma ZDF
          </Typography>
        </Box>

        {/* tv/online-4 */}
        <Box>
          <Typography
            mt="10px"
            sx={{
              "&:hover": { cursor: "pointer", color: "lime" },
              marginTop: "10px",
              color: isDarkMode ? "white" : "black",
            }}
          >
            Rockpalast, WDR
          </Typography>
        </Box>

        {/* tv/online-5 */}
        <Box>
          <Typography
            mt="10px"
            sx={{
              "&:hover": { cursor: "pointer", color: "lime" },
              marginTop: "10px",
              color: isDarkMode ? "white" : "black",
            }}
          >
            TV Noir
          </Typography>
        </Box>

        {/* tv/online-6 */}
        <Box>
          <Typography
            mt="10px"
            sx={{
              "&:hover": { cursor: "pointer", color: "lime" },
              marginTop: "10px",
              color: isDarkMode ? "white" : "black",
            }}
          >
            TV Total Pro7
          </Typography>
        </Box>
      </Box>

      <Box margin="50px auto" title="festivals">
        <Typography
          fontWeight="bold"
          sx={{
            "&:hover": { cursor: "pointer", color: "lime" },
            marginTop: "10px",
            color: isDarkMode ? "white" : "black",
          }}
        >
          Festivals
        </Typography>
        {/* festival-1 */}
        <Box>
          <Typography
            mt="10px"
            sx={{
              "&:hover": { cursor: "pointer", color: "lime" },
              marginTop: "10px",
              color: isDarkMode ? "white" : "black",
            }}
          >
            Africa Karibik Festival
          </Typography>

          <Typography
            mt="10px"
            sx={{
              "&:hover": { cursor: "pointer", color: "red" },
              marginTop: "10px",
              color: isDarkMode ? "white" : "black",
              fontStyle: "italic",
            }}
          >
            Germany
          </Typography>
        </Box>

        {/* festival-2*/}
        <Box>
          <Typography
            mt="10px"
            sx={{
              "&:hover": { cursor: "pointer", color: "lime" },
              marginTop: "10px",
              color: isDarkMode ? "white" : "black",
            }}
          >
            Chiemsee Reggae Festival
          </Typography>

          <Typography
            mt="10px"
            sx={{
              "&:hover": { cursor: "pointer", color: "red" },
              marginTop: "10px",
              color: isDarkMode ? "white" : "black",
              fontStyle: "italic",
            }}
          >
            Germany
          </Typography>
        </Box>

        {/* festival-3*/}
        <Box>
          <Typography
            mt="10px"
            sx={{
              "&:hover": { cursor: "pointer", color: "lime" },
              marginTop: "10px",
              color: isDarkMode ? "white" : "black",
            }}
          >
            Deichbrand Festival
          </Typography>

          <Typography
            mt="10px"
            sx={{
              "&:hover": { cursor: "pointer", color: "red" },
              marginTop: "10px",
              color: isDarkMode ? "white" : "black",
              fontStyle: "italic",
            }}
          >
            Germany
          </Typography>
        </Box>

        {/* festival-4*/}
        <Box>
          <Typography
            mt="10px"
            sx={{
              "&:hover": { cursor: "pointer", color: "lime" },
              marginTop: "10px",
              color: isDarkMode ? "white" : "black",
            }}
          >
            Garance Reggae Festival
          </Typography>

          <Typography
            mt="10px"
            sx={{
              "&:hover": { cursor: "pointer", color: "red" },
              marginTop: "10px",
              color: isDarkMode ? "white" : "black",
              fontStyle: "italic",
            }}
          >
            France
          </Typography>
        </Box>

        {/* festival-5*/}
        <Box>
          <Typography
            mt="10px"
            sx={{
              "&:hover": { cursor: "pointer", color: "lime" },
              marginTop: "10px",
              color: isDarkMode ? "white" : "black",
            }}
          >
            Gürten Festival
          </Typography>

          <Typography
            mt="10px"
            sx={{
              "&:hover": { cursor: "pointer", color: "red" },
              marginTop: "10px",
              color: isDarkMode ? "white" : "black",
              fontStyle: "italic",
            }}
          >
            Schweiz
          </Typography>
        </Box>

        {/* festival-6*/}
        <Box>
          <Typography
            mt="10px"
            sx={{
              "&:hover": { cursor: "pointer", color: "lime" },
              marginTop: "10px",
              color: isDarkMode ? "white" : "black",
            }}
          >
            Hurricane Festival
          </Typography>

          <Typography
            mt="10px"
            sx={{
              "&:hover": { cursor: "pointer", color: "red" },
              marginTop: "10px",
              color: isDarkMode ? "white" : "black",
              fontStyle: "italic",
            }}
          >
            Germany
          </Typography>
        </Box>

        {/* festival-6*/}
        <Box>
          <Typography
            mt="10px"
            sx={{
              "&:hover": { cursor: "pointer", color: "lime" },
              marginTop: "10px",
              color: isDarkMode ? "white" : "black",
            }}
          >
            One Love Reggae Festival
          </Typography>

          <Typography
            mt="10px"
            sx={{
              "&:hover": { cursor: "pointer", color: "red" },
              marginTop: "10px",
              color: isDarkMode ? "white" : "black",
              fontStyle: "italic",
            }}
          >
            Poland
          </Typography>
        </Box>

        {/* festival-7*/}
        <Box>
          <Typography
            mt="10px"
            sx={{
              "&:hover": { cursor: "pointer", color: "lime" },
              marginTop: "10px",
              color: isDarkMode ? "white" : "black",
            }}
          >
            Juicy Beats Festival
          </Typography>

          <Typography
            mt="10px"
            sx={{
              "&:hover": { cursor: "pointer", color: "red" },
              marginTop: "10px",
              color: isDarkMode ? "white" : "black",
              fontStyle: "italic",
            }}
          >
            Germany
          </Typography>
        </Box>

        {/* festival-8*/}
        <Box>
          <Typography
            mt="10px"
            sx={{
              "&:hover": { cursor: "pointer", color: "lime" },
              marginTop: "10px",
              color: isDarkMode ? "white" : "black",
            }}
          >
            One Race One Human Festival
          </Typography>

          <Typography
            mt="10px"
            sx={{
              "&:hover": { cursor: "pointer", color: "red" },
              marginTop: "10px",
              color: isDarkMode ? "white" : "black",
              fontStyle: "italic",
            }}
          >
            Germany
          </Typography>
        </Box>

        {/* festival-9*/}
        <Box>
          <Typography
            mt="10px"
            sx={{
              "&:hover": { cursor: "pointer", color: "lime" },
              marginTop: "10px",
              color: isDarkMode ? "white" : "black",
            }}
          >
            Peace And Love Festival
          </Typography>

          <Typography
            mt="10px"
            sx={{
              "&:hover": { cursor: "pointer", color: "red" },
              marginTop: "10px",
              color: isDarkMode ? "white" : "black",
              fontStyle: "italic",
            }}
          >
            Börlange, Sweden
          </Typography>
        </Box>

        {/* festival-10*/}
        <Box>
          <Typography
            mt="10px"
            sx={{
              "&:hover": { cursor: "pointer", color: "lime" },
              marginTop: "10px",
              color: isDarkMode ? "white" : "black",
            }}
          >
            Popkomm
          </Typography>

          <Typography
            mt="10px"
            sx={{
              "&:hover": { cursor: "pointer", color: "red" },
              marginTop: "10px",
              color: isDarkMode ? "white" : "black",
              fontStyle: "italic",
            }}
          >
            Berlin, Germany
          </Typography>
        </Box>

        {/* festival-11*/}
        <Box>
          <Typography
            mt="10px"
            sx={{
              "&:hover": { cursor: "pointer", color: "lime" },
              marginTop: "10px",
              color: isDarkMode ? "white" : "black",
            }}
          >
            Reggae On The River Festival
          </Typography>

          <Typography
            mt="10px"
            sx={{
              "&:hover": { cursor: "pointer", color: "red" },
              marginTop: "10px",
              color: isDarkMode ? "white" : "black",
              fontStyle: "italic",
            }}
          >
            USA
          </Typography>
        </Box>

        {/* festival-12*/}
        <Box>
          <Typography
            mt="10px"
            sx={{
              "&:hover": { cursor: "pointer", color: "lime" },
              marginTop: "10px",
              color: isDarkMode ? "white" : "black",
            }}
          >
            Reggaejam Festival
          </Typography>

          <Typography
            mt="10px"
            sx={{
              "&:hover": { cursor: "pointer", color: "red" },
              marginTop: "10px",
              color: isDarkMode ? "white" : "black",
              fontStyle: "italic",
            }}
          >
            Germany
          </Typography>
        </Box>

        {/* festival-13*/}
        <Box>
          <Typography
            mt="10px"
            sx={{
              "&:hover": { cursor: "pointer", color: "lime" },
              marginTop: "10px",
              color: isDarkMode ? "white" : "black",
            }}
          >
            Reeperbahn Festival
          </Typography>

          <Typography
            mt="10px"
            sx={{
              "&:hover": { cursor: "pointer", color: "red" },
              marginTop: "10px",
              color: isDarkMode ? "white" : "black",
              fontStyle: "italic",
            }}
          >
            Germany
          </Typography>
        </Box>




          {/* festival-14*/}
          <Box>
          <Typography
            mt="10px"
            sx={{
              "&:hover": { cursor: "pointer", color: "lime" },
              marginTop: "10px",
              color: isDarkMode ? "white" : "black",
            }}
          >
            Rock Am Ring Festival
          </Typography>

          <Typography
            mt="10px"
            sx={{
              "&:hover": { cursor: "pointer", color: "red" },
              marginTop: "10px",
              color: isDarkMode ? "white" : "black",
              fontStyle: "italic",
            }}
          >
            Germany
          </Typography>
        </Box>




          {/* festival-14*/}
          <Box>
          <Typography
            mt="10px"
            sx={{
              "&:hover": { cursor: "pointer", color: "lime" },
              marginTop: "10px",
              color: isDarkMode ? "white" : "black",
            }}
          >
            Rock Im Park Festival
          </Typography>

          <Typography
            mt="10px"
            sx={{
              "&:hover": { cursor: "pointer", color: "red" },
              marginTop: "10px",
              color: isDarkMode ? "white" : "black",
              fontStyle: "italic",
            }}
          >
            Germany
          </Typography>
        </Box>




          {/* festival-15*/}
          <Box>
          <Typography
            mt="10px"
            sx={{
              "&:hover": { cursor: "pointer", color: "lime" },
              marginTop: "10px",
              color: isDarkMode ? "white" : "black",
            }}
          >
            Rototom Festival
          </Typography>

          <Typography
            mt="10px"
            sx={{
              "&:hover": { cursor: "pointer", color: "red" },
              marginTop: "10px",
              color: isDarkMode ? "white" : "black",
              fontStyle: "italic",
            }}
          >
           Italy
          </Typography>
        </Box>



          {/* festival-16*/}
          <Box>
          <Typography
            mt="10px"
            sx={{
              "&:hover": { cursor: "pointer", color: "lime" },
              marginTop: "10px",
              color: isDarkMode ? "white" : "black",
            }}
          >
          Ruhr Reggae Summer
          </Typography>

          <Typography
            mt="10px"
            sx={{
              "&:hover": { cursor: "pointer", color: "red" },
              marginTop: "10px",
              color: isDarkMode ? "white" : "black",
              fontStyle: "italic",
            }}
          >
         Germany
          </Typography>
        </Box>



           {/* festival-17*/}
           <Box>
          <Typography
            mt="10px"
            sx={{
              "&:hover": { cursor: "pointer", color: "lime" },
              marginTop: "10px",
              color: isDarkMode ? "white" : "black",
            }}
          >
         Sakifo Music Festival
          </Typography>

          <Typography
            mt="10px"
            sx={{
              "&:hover": { cursor: "pointer", color: "red" },
              marginTop: "10px",
              color: isDarkMode ? "white" : "black",
              fontStyle: "italic",
            }}
          >
        Reunion Island
          </Typography>
        </Box>


           {/* festival-18*/}
           <Box>
          <Typography
            mt="10px"
            sx={{
              "&:hover": { cursor: "pointer", color: "lime" },
              marginTop: "10px",
              color: isDarkMode ? "white" : "black",
            }}
          >
         St. Galllen Festival
          </Typography>

          <Typography
            mt="10px"
            sx={{
              "&:hover": { cursor: "pointer", color: "red" },
              marginTop: "10px",
              color: isDarkMode ? "white" : "black",
              fontStyle: "italic",
            }}
          >
     Schweiz
          </Typography>
        </Box>




           {/* festival-19*/}
           <Box>
          <Typography
            mt="10px"
            sx={{
              "&:hover": { cursor: "pointer", color: "lime" },
              marginTop: "10px",
              color: isDarkMode ? "white" : "black",
            }}
          >
         St. Galllen Festival
          </Typography>

          <Typography
            mt="10px"
            sx={{
              "&:hover": { cursor: "pointer", color: "red" },
              marginTop: "10px",
              color: isDarkMode ? "white" : "black",
              fontStyle: "italic",
            }}
          >
     Schweiz
          </Typography>
        </Box>


           {/* festival-20*/}
           <Box>
          <Typography
            mt="10px"
            sx={{
              "&:hover": { cursor: "pointer", color: "lime" },
              marginTop: "10px",
              color: isDarkMode ? "white" : "black",
            }}
          >
         Summerjam Festival
          </Typography>

          <Typography
            mt="10px"
            sx={{
              "&:hover": { cursor: "pointer", color: "red" },
              marginTop: "10px",
              color: isDarkMode ? "white" : "black",
              fontStyle: "italic",
            }}
          >
    Germany
          </Typography>
        </Box>



          {/* festival-21*/}
          <Box>
          <Typography
            mt="10px"
            sx={{
              "&:hover": { cursor: "pointer", color: "lime" },
              marginTop: "10px",
              color: isDarkMode ? "white" : "black",
            }}
          >
        Touchroad Reggae Festival
          </Typography>

          <Typography
            mt="10px"
            sx={{
              "&:hover": { cursor: "pointer", color: "red" },
              marginTop: "10px",
              color: isDarkMode ? "white" : "black",
              fontStyle: "italic",
            }}
          >
    Germany
          </Typography>
        </Box>
      </Box>



      
    </Box>
  );
};

export default References;
