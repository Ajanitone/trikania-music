import React, { useState, useContext, useEffect } from "react";
import { Box, Typography, Button, useMediaQuery } from "@mui/material";
import { HerbContext } from "../../context/Context";
import { useNavigate } from "react-router-dom";

import ScrollTop from "../../components/ScrollTop";

import axios from "axios";

import FindYourVoice from "../../disco-assets/find-voice.jpg";
import TaniaFind from "../../disco-assets/tania-find.jpg";
import AjaniFind from "../../disco-assets/ajani-find.jpg";
/**
 *
 */

const FindVoice = ({ isDarkMode }) => {
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

      <Box margin="50px auto" title="find-your-voice">
        {/* Header */}
        <Box>
          <Typography
            fontWeight="bold"
            sx={{
              fontSize: "24px", // Specify your desired font size
              "&:hover": { cursor: "pointer", color: "lime" },
              marginTop: "10px",
              color: isDarkMode ? "white" : "red",
            }}
          >
            Find. Your. Voice.
          </Typography>
          <Typography
            mt="10px"
            sx={{
              fontSize: "16px", // Specify your desired font size
              "&:hover": { cursor: "pointer", color: "lime" },
              marginTop: "10px",
              color: isDarkMode ? "white" : "black",
            }}
          >
            Vocal Empowerment Workshop
          </Typography>
        </Box>

        <Box mt="40px" margin="50px auto">
          <Typography
            mt="10px"
            sx={{
              fontSize: "15px", // Specify your desired font size
              "&:hover": { cursor: "pointer", color: "lime" },
              marginTop: "10px",
              color: isDarkMode ? "white" : "black",
            }}
          >
            "Wir Menschen sind im Singen schöpfende und schöpferische
            Klangwesen. Wir vermögen durch Gesang unsere Welt und unser Handeln
            zu beseelen, singend Liebe, Freude, Hoffnung, Zuversicht zu
            schenken, uns aber auch den Schmerz von der Seele zu singen." (Sir
            Yehudi Menuhin)
          </Typography>
        </Box>

        <Box mt="40px" display="flex" flexDirection="row" margin="50px auto">
          <Box width="50%">
            <Typography
              sx={{
                fontSize: "15px", // Specify your desired font size
                "&:hover": { cursor: "pointer", color: "red" },
                marginTop: "10px",
                color: isDarkMode ? "white" : "black",
              }}
            >
              Die Stimme ist eine der ersten Ausdrucksformen des Menschen.
              Direkt nach der Geburt wird sie (noch unbewusst) eingesetzt. Sie
              symbolisiert das Leben selbst und steht in enger Verbindung mit
              der eigenen Persönlichkeit. Schnell lernen wir, mit ihr zu
              kommunizieren und uns auszudrücken.
            </Typography>

            <Typography
              mt="80px"
              sx={{
                fontSize: "15px", // Specify your desired font size
                "&:hover": { cursor: "pointer", color: "red" },
                marginTop: "10px",
                color: isDarkMode ? "white" : "black",
              }}
            >
              Gesang ist eines der Werkzeuge, durch das die meisten Menschen zum
              ersten Mal mit Musik in Verbindung kommen. Und diese Verbindung,
              die über den eigenen Körper stattfindet, ist magisch!
            </Typography>

            <Typography
              mt="80px"
              sx={{
                fontSize: "15px", // Specify your desired font size
                "&:hover": { cursor: "pointer", color: "red" },
                marginTop: "10px",
                color: isDarkMode ? "white" : "black",
              }}
            >
              Leider lernen viele von uns jedoch schon sehr früh, unsere Stimmen
              zu unterdrücken, wenn wir z.B. nicht gehört werden, wenn wir nicht
              auffallen und leise sein sollen oder wenn unsere Stimmen von
              anderen negativ bewertet werden. Dann laufen wir Gefahr, den
              Kontakt zu dieser Magie zu verlieren, sie zu vergessen oder sogar
              dysfunktionale Beziehungen zu unseren Stimmen zu entwickeln. Dies
              kann dann auch unsere Seelen verletzen und wir verlernen, unsere
              eigenen Stimmen zu lieben.
            </Typography>

            <Typography
              mt="80px"
              sx={{
                fontSize: "15px", // Specify your desired font size
                "&:hover": { cursor: "pointer", color: "red" },
                marginTop: "10px",
                color: isDarkMode ? "white" : "black",
              }}
            >
              Leider lernen viele von uns jedoch schon sehr früh, unsere Stimmen
              zu unterdrücken, wenn wir z.B. nicht gehört werden, wenn wir nicht
              auffallen und leise sein sollen oder wenn unsere Stimmen von
              anderen negativ bewertet werden. Dann laufen wir Gefahr, den
              Kontakt zu dieser Magie zu verlieren, sie zu vergessen oder sogar
              dysfunktionale Beziehungen zu unseren Stimmen zu entwickeln. Dies
              kann dann auch unsere Seelen verletzen und wir verlernen, unsere
              eigenen Stimmen zu lieben.
            </Typography>

            <Typography
              mt="80px"
              sx={{
                fontSize: "15px", // Specify your desired font size
                "&:hover": { cursor: "pointer", color: "red" },
                marginTop: "10px",
                color: isDarkMode ? "white" : "black",
              }}
            >
              Dem wollen wir in unseren Workshops entgegenwirken. Musik hören
              und Singen, also Musik machen, schüttet nachweislich Glückshormone
              aus und ist deshalb von jeher ein wirkungsvolles Empowerment-Tool
              mit therapeutischer Wirkung. Komm (wieder) in Kontakt mit Deinem
              magischen Instrument Stimme und so zurück zu Dir selbst! Komm in
              Deine eigene Kraft und finde Deine Stimme!
            </Typography>
          </Box>
          <Box width="50%">
            {/*Melllow-mark-the -5th-element*/}

            <Box margin="10px auto" width="100%" title="find-voice">
              {/* Picture-3*/}
              <Box margin="50px auto" title="image">
                <img
                  src={FindYourVoice}
                  alt="Disiswo"
                  style={{
                    width: "500px",
                    aspectRatio: "calc(1 + var(--f))",
                    objectFit: "cover",
                    cursor: "pointer",
                    borderRadius: "5%",
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
              </Box>
            </Box>
          </Box>
        </Box>

        <Box mt="40px" display="flex" flexDirection="row" margin="50px auto">
          <Box width="50%">
            <Box margin="10px auto" width="100%" title="find-voice">
              {/* Picture-3*/}
            </Box>
            <Typography
              fontWeight="bold"
              sx={{
                fontSize: "24px", // Specify your desired font size
                "&:hover": { cursor: "pointer", color: "lime" },
                marginTop: "10px",
                color: isDarkMode ? "white" : "red",
              }}
            >
              Workshop Leitung
            </Typography>

            <Typography
              mt="10px"
              sx={{
                fontSize: "16px", // Specify your desired font size
                "&:hover": { cursor: "pointer", color: "lime" },
                marginTop: "10px",
                color: isDarkMode ? "white" : "black",
              }}
            >
              Tania Esperanza Hensen
            </Typography>

            <Box margin="50px auto" title="tania-hensen">
              <img
                src={TaniaFind}
                alt="Disiswo"
                style={{
                  width: "200px",
                  aspectRatio: "calc(1 + var(--f))",
                  objectFit: "cover",
                  cursor: "pointer",
                  borderRadius: "5%",
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
            </Box>
          </Box>
          <Box width="50%">
            {" "}
            <Typography
              fontWeight="bold"
              sx={{
                fontSize: "24px", // Specify your desired font size
                "&:hover": { cursor: "pointer", color: "lime" },
                marginTop: "10px",
                color: isDarkMode ? "white" : "red",
              }}
            >
              Korrepetition
            </Typography>
            <Typography
              mt="10px"
              sx={{
                fontSize: "16px", // Specify your desired font size
                "&:hover": { cursor: "pointer", color: "lime" },
                marginTop: "10px",
                color: isDarkMode ? "white" : "black",
              }}
            >
              Kirk McDowell
            </Typography>
            <Box margin="50px auto" title="kirk-mcdowell">
              <img
                src={AjaniFind}
                alt="Disiswo"
                style={{
                  width: "200px",
                  aspectRatio: "calc(1 + var(--f))",
                  objectFit: "cover",
                  cursor: "pointer",
                  borderRadius: "5%",
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
            </Box>
          </Box>
        </Box>

        <Box mt="40px" display="flex" flexDirection="row" margin="50px auto">
          <Box></Box>
          <Box></Box>
          <Box></Box>
        </Box>
      </Box>
    </Box>
  );
};

export default FindVoice;
