import React, { useState, useContext, useEffect } from "react";
import {
  Box,
  Button,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { shades } from "../../../theme";
import { HerbContext } from "../../../context/Context";
import { useNavigate } from "react-router-dom";
import { ColorRing } from "react-loader-spinner";
import profilePicture from "../../../assets/angele-kamp-kcvRHtAyuig-unsplash.jpg";

import EditNoteOutlinedIcon from "@mui/icons-material/EditNoteOutlined";
import DeleteSweepOutlinedIcon from "@mui/icons-material/DeleteSweepOutlined";
import { styled } from "@mui/system";

import ScrollTop from "../../../components/ScrollTop";
import Kaya from "../../../artistpictures/kaya.jpg";

const HoverIcon = styled(EditNoteOutlinedIcon)`
  font-size: 30px;
  transition: color 0.3s; /* Add a transition for a smooth effect */

  &:hover {
    color: red; /* Set the desired color on hover */
  }
`;
const HoverIcon1 = styled(DeleteSweepOutlinedIcon)`
  font-size: 30px;
  transition: color 0.3s; /* Add a transition for a smooth effect */

  &:hover {
    color: red; /* Set the desired color on hover */
  }
`;

const KayaT = ({ isDarkMode }) => {
  const { state, dispatchState } = useContext(HerbContext);
  const [loading, setLoading] = useState(false);
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const id = state.user._id;
  console.log("user", state.user);
  const [isHovered, setIsHovered] = useState(false);

  // Define a styled component with custom CSS

  const backgroundColor = isDarkMode ? "#000000" : "rgba(242, 38, 19, 0.4)";

  const navigate = useNavigate();
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  return (
    <Box>
      <ScrollTop isDarkMode={isDarkMode} />
      {/* AJANI */}
      <Box
        className={`home ${isDarkMode ? "dark-mode" : ""}`}
        padding="10px"
        width="80%"
        height="250px"
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
        <Box title="image">
          <img
            src={Kaya || profilePicture}
            alt="profile"
            style={{
              width: "200px",
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
        </Box>

        <Typography
          sx={{
            "&:hover": { cursor: "pointer", color: shades.secondary[500] },
            display: isNonMobile ? "block" : "block",
          }}
          color={!isDarkMode ? shades.primary[500] : undefined}
          title="kaya-t"
          onClick={() => navigate("/kaya")}
        >
          Kaya-T
        </Typography>
      </Box>

<Box padding="5px" width="100%" margin="50px auto" textAlign="center">

<Typography      sx={{
            "&:hover": { cursor: "pointer", color: shades.secondary[500] },
            display: isNonMobile ? "block" : "block",fontWeight:"bold"
          }}
          color={!isDarkMode ? shades.primary[500] : undefined}>Genres</Typography>

<Typography>Reggae-Soul</Typography>

<Typography>R&B</Typography>

<Typography>Jazz-Hop</Typography>
</Box>

      <Box padding="50px" width="100%" margin="50px auto" textAlign="center">
        <Typography
          sx={{
            "&:hover": { cursor: "pointer", color: shades.secondary[500] },
            display: isNonMobile ? "block" : "flex",
            flexDirection: "column",
          }}
          color={!isDarkMode ? shades.primary[500] : undefined}
          title="kaya-t"
          onClick={() => navigate("/ajani")}
        >
          The Berlin based singer and songwriter Kaya-T released her second
          studio album "Kaya-T" on December, 17th, 2022 over her own independent
          label "Trikania Music". The singles "Run Away From You" and "Dance In
          The Moonlight" were released in June and October 2022. <hr></hr>
          With it´s album title the album celebrates the singer herself. It was
          produced by reggae original Kirk "Ajani" McDowell, who collaborates/d
          with artists such as Peter Fox, Samy Deluxe, Max Herre, Die
          Fantastischen Vier and Patrice, among others.<hr></hr> "A good basis for the
          wonderful vocals of Kaya-T, who, coming from jazz, offers many facets
          with her voice." (irieites.com).
      <hr></hr>
          <br></br>
           The album contains eleven partly
          5-minute long compositions with English lyrics, recorded with an
          impressively select group of first-class international musicians.<br></br>
          Stylistically, the German-Cuban artist moves fluidly between the
          genres of Reggae, Soul, R&B and Hip Hop. She herself calls this
          musical mix Reggaesoul. <hr></hr> <br></br>
          Kaya-T is no longer an insider tip. The Dipl. jazz-musician and
          pedagogue has been performing on stages since the age of five, she
          attended music schools, sang in choirs and gained her first
          experiences in various bands as a teenager.<br></br>
          
           After graduating from high
          school, she initially studied history of fine arts, quickly changed
          over to audio engineering and finally finished studying jazz music.

          <hr></hr> <br></br>
          Since then she has worked in various projects as a gala singer, live
          and studio singer, as a vocal coach (Mark Medlock, DSDS) and as a
          vocal teacher. <br></br>
          
           As a background singer she sang live for artists like
          Cornel Campbell, Torch, Oren Lavie, Mantis, Ajani and Martin Jondo,
          and in the studio for Ben, Bushido, Anthony Locks, Shocking Murray and
          many more. <hr></hr> <br></br>
          Under the name Kaya-T, the musician has collaborated with Aldubb &
          Bigfinga ("Mother Earth"), Next Generation Family ("Blue Sky"/Raspect
          Riddim) and Ajani ("My Sunshine", "Ready To Turn"). Kaya-T has been
          tour support for Martin Jondo and opener for Queen Ifrikah and
          Turbulance, among others.<hr></hr> <br></br>
          "Listening to her album, you quickly understand what it's all about:<br></br>
          Kaya-T trusts the music and what she's doing. With varied rhythms and
          expressive vocals, she puts together a consistently danceable
          feel-good package that is unobtrusive but intense, authentic and
          infectiously energetic.
          
     <hr></hr>       <br></br>
           Love & Respect - the message is simple and yet
          universal, in the small lies the great, in the simple the essential.
          If Kaya-T was a party guest, she would probably sneak through the back
          door onto the dance floor, only to end up dancing on the table. So get
          yourself ready!" (Gigi Fakunmoju, My POC Bookshelf)<hr></hr>
        </Typography>
      </Box>
      <Box padding="50px" width="100%" margin="50px auto" textAlign="center">
        <Button
          sx={{
            "&:hover": { cursor: "pointer", color: shades.secondary[500] },
            display: isNonMobile ? "inline" : "inline",
            color: !isDarkMode ? shades.primary[500] : "white",
          }}
          onClick={() => navigate("/kaya-photos")}
        >
          Photos
        </Button>
        <Button
          sx={{
            "&:hover": { cursor: "pointer", color: shades.secondary[500] },
            display: isNonMobile ? "inline" : "inline",
            color: !isDarkMode ? shades.primary[500] : "white",
          }}
          onClick={() => navigate("/kaya-videos")}
        >
          Videos
        </Button>{" "}
        <Button
          sx={{
            "&:hover": { cursor: "pointer", color: shades.secondary[500] },
            display: isNonMobile ? "inline" : "inline",
            color: !isDarkMode ? shades.primary[500] : "white",
          }}
          onClick={() => navigate("/kaya-music")}
        >
          Music
        </Button>{" "}
        <Button
          sx={{
            "&:hover": { cursor: "pointer", color: shades.secondary[500] },
            display: isNonMobile ? "inline" : "inline",
            color: !isDarkMode ? shades.primary[500] : "white",
          }}
          onClick={() => navigate("/kaya-press")}
        >
          Press
        </Button>
      </Box>
    </Box>
  );
};

export default KayaT;
