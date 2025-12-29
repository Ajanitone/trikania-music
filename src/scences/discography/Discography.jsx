import React, { useState, useContext } from "react";
import ScrollTop from "../../components/ScrollTop";
import { Box, Typography, useMediaQuery, Button } from "@mui/material";
import { HerbContext } from "../../context/Context";
import { shades } from "../../theme";
import { useNavigate } from "react-router-dom";

// Album Covers served from public/disco to avoid hash/caching issues.
const Ajani = "/disco/ajani.png";
const profilePicture = "/disco/angele-kamp-kcvRHtAyuig-unsplash.jpg";
const Kaya = "/disco/kaya.jpg";
const PeterFoxLive = "/disco/peter-fox-live.jpeg";
const AnotherIntensity = "/disco/gentleman-another-intensity.jpeg";
const DisIstWo = "/disco/samy-delluxe-dis-ist-wo.jpeg";
const Live = "/disco/samy-deluxe-live.jpeg";
const SchwarzWeiss = "/disco/samy-deluxe-schwarz-weiss.jpeg";
const Viel = "/disco/fanta-vier-viel.jpeg";
const MaxHerre = "/disco/max-herre-max-herre.jpeg";
const LichtKultur = "/disco/brothers-keepers-lichtkutur.jpeg";
const Bush = "/disco/bushido-23.jpg";
const AncientSpirit = "/disco/patrice-ancient-spirit.jpg";
const SillywalksPatrice = "/disco/sillywallks-patrice.jpg";
const Nile = "/disco/patrice-nile.jpg";
const RawUncut = "/disco/patrice-raw&uncut.jpg";
const Nine = "/disco/patrice-9.jpeg";
const Super = "/disco/patrice-super.jpeg";
const HowDo = "/disco/patrice-how-do-you.jpg";
const Caramelo = "/disco/caramelo-criminal.jpg";
const DasElement = "/disco/mellow-mark-das-5th-element.jpg";
const Mother = "/disco/kaya-t-mother-earth.jpg";
const LetDub = "/disco/aldubb-let-there-be-dub.jpg";
const DubFiles = "/disco/all-dubb-dub-files.jpg";
const CloudDancer = "/disco/mark-medlock-cloud-dancer.jpg";
const Summer = "/disco/mark-medlock-summer.jpg";
const Engel = "/disco/ben-engell.jpg";
const Troddin = "/disco/shocking-murray-troddin-on.jpg";
const Sing = "/disco/young-voices-sing.png";
const Touched = "/disco/yah-meek-touched.jpg";
const LoveControl = "/disco/mantis-love-take-control.jpg";
const Rightful = "/disco/uwe-banton-rightful-place.jpg";
const CryFreedom = "/disco/anthony-locks-cry-freedom.jpg";
const MyIntention = "/disco/roughhouse-my-intention.jpg";
const Mittendrin = "/disco/nosliw-mittendrin.jpg";
const MehrDavon = "/disco/noslliw-mehr-davon.jpg";
const Zing = "/disco/flabba-zing.gif";
const MusicInMe = "/disco/flabba-music-in-me.gif";
const RockReggae = "/disco/rhaatid-rock-reggae.jpg";
const Irieddim = "/disco/irie-daily-irie-riddim.jpg";
const Dutchie = "/disco/dutchie-gold-dutchie-gold.jpg";
const SafeSound = "/disco/safe&sound-sampler.jpg";
const Sunvibe = "/disco/sunvibe-showcase.jpg";
const TheDawning = "/disco/owen-casey-the-dawning.jpg";
const Kleinvieh = "/disco/klartext-kleinvieh.jpg";
const BigCity = "/disco/congo-ahantiroy&-jah-power-band-big-city.jpg";
const SongMelody = "/disco/sillly-walks-movement-songs-of-melody.jpg";
const LeadMe = "/disco/kaya-t-llead-me.jpg";
const AjaniKaya = "/disco/ajani-kaya-t.jpg";
const BlueSky = "/disco/kaya-t-blue-sky.jpg";
const Supieras = "/disco/emersound-supieras.jpg";
const Silentvoices = "/disco/ajani-silent.jpg";
const FearFactor = "/disco/ajani-fear-factor.jpg";
const FathersCry = "/disco/joseph-fatherscry.jpeg";
const DirectFlight = "/disco/joseph-direct-fllight.jpeg";
const OohLala = "/disco/zo-ataraxie-1.jpeg";
const WarumHaltenWir = "/disco/mellow-mark-warum-halten-wir.png";

const Discography = ({ isDarkMode }) => {
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

      <Box
        display="grid"
        gridTemplateColumns={{
          xs: "1fr",
          md: "repeat(3, minmax(220px, 1fr))",
        }}
        justifyItems="center"
        alignItems="start"
        gap={4}
        width="100%"
      >
        {/* Live aus Berlin Peter Fox */}

        <Box margin="50px auto" width="200px" title="peter-fox&cold-steel">
          {/* Picture-1 */}
          <Box margin="50px auto" title="image">
            <img
              src={PeterFoxLive}
              alt="liveausberllin"
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

            <Box>
              <Typography fontWeight="bold">Peter Fox & Cold Steel</Typography>
              <Typography>Live Aus Berlin</Typography>

              <Typography>2010</Typography>
            </Box>
          </Box>

          {/* Ajani Picture Link */}
          <Box title="ajani">
            <Button
              sx={{
                "&:hover": { cursor: "pointer", color: shades.secondary[500] },
                display: isNonMobile ? "inline" : "inline",
                color: !isDarkMode ? shades.primary[500] : "white",
              }}
              onClick={() => navigate("/ajani")}
            >
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
            </Button>
          </Box>
        </Box>

        {/* Another Intensity Gentleman */}

        <Box
          margin="50px auto"
          width="200px"
          title="another-intensity-gentleman"
        >
          {/* Picture-2 */}
          <Box margin="50px auto" title="image">
            <img
              src={AnotherIntensity}
              alt="another-intensity"
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

            <Box>
              <Typography fontWeight="bold">Gentleman</Typography>
              <Typography>Another Intensity</Typography>

              <Typography>2012</Typography>
            </Box>
          </Box>

          {/* Ajani Picture Link */}
          <Box title="ajani">
            <Button
              sx={{
                "&:hover": { cursor: "pointer", color: shades.secondary[500] },
                display: isNonMobile ? "inline" : "inline",
                color: !isDarkMode ? shades.primary[500] : "white",
              }}
              onClick={() => navigate("/ajani")}
            >
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
            </Button>
          </Box>
        </Box>

        {/* Samy Deluxe Dis is wo ich herkomm*/}

        <Box
          margin="50px auto"
          width="200px"
          title="another-intensity-gentleman"
        >
          {/* Picture-3*/}
          <Box margin="50px auto" title="image">
            <img
              src={DisIstWo}
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

            <Box>
              <Typography fontWeight="bold">Samy Deluxe</Typography>
              <Typography>Dis Is Wo Ich Herkomm</Typography>

              <Typography>2009</Typography>
            </Box>
          </Box>

          {/* Ajani Picture Link */}
          <Box title="ajani">
            <Button
              sx={{
                "&:hover": { cursor: "pointer", color: shades.secondary[500] },
                display: isNonMobile ? "inline" : "inline",
                color: !isDarkMode ? shades.primary[500] : "white",
              }}
              onClick={() => navigate("/ajani")}
            >
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
            </Button>
          </Box>
        </Box>

        {/* Samy Deluxe und Tsunami band(Live)*/}

        <Box
          margin="50px auto"
          width="200px"
          title="another-intensity-gentleman"
        >
          {/* Picture-3*/}
          <Box margin="50px auto" title="image">
            <img
              src={Live}
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

            <Box>
              <Typography fontWeight="bold">
                Samy Deluxe & Tsunami Band
              </Typography>
              <Typography>Live</Typography>

              <Typography>2010</Typography>
            </Box>
          </Box>

          {/* Ajani Picture Link */}
          <Box title="ajani">
            <Button
              sx={{
                "&:hover": { cursor: "pointer", color: shades.secondary[500] },
                display: isNonMobile ? "inline" : "inline",
                color: !isDarkMode ? shades.primary[500] : "white",
              }}
              onClick={() => navigate("/ajani")}
            >
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
            </Button>
          </Box>
        </Box>

        {/* Samy Deluxe Schwarz-Weiss*/}

        <Box
          margin="50px auto"
          width="200px"
          title="another-intensity-gentleman"
        >
          {/* Picture-3*/}
          <Box margin="50px auto" title="image">
            <img
              src={SchwarzWeiss}
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

            <Box>
              <Typography fontWeight="bold">Samy Deluxe</Typography>
              <Typography>Schwarz-Weiss</Typography>

              <Typography>2012</Typography>
            </Box>
          </Box>

          {/* Ajani Picture Link */}
          <Box title="ajani">
            <Button
              sx={{
                "&:hover": { cursor: "pointer", color: shades.secondary[500] },
                display: isNonMobile ? "inline" : "inline",
                color: !isDarkMode ? shades.primary[500] : "white",
              }}
              onClick={() => navigate("/ajani")}
            >
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
            </Button>
          </Box>
        </Box>

        {/*Die Fanta Vier Viel*/}

        <Box
          margin="50px auto"
          width="200px"
          title="another-intensity-gentleman"
        >
          {/* Picture-3*/}
          <Box margin="50px auto" title="image">
            <img
              src={Viel}
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

            <Box>
              <Typography fontWeight="bold">Die Fantastischen Vier</Typography>
              <Typography>Viel</Typography>

              <Typography>2004</Typography>
            </Box>
          </Box>

          {/* Ajani Picture Link */}
          <Box title="ajani">
            <Button
              sx={{
                "&:hover": { cursor: "pointer", color: shades.secondary[500] },
                display: isNonMobile ? "inline" : "inline",
                color: !isDarkMode ? shades.primary[500] : "white",
              }}
              onClick={() => navigate("/ajani")}
            >
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
            </Button>
          </Box>
        </Box>

        {/*Max-Herre-Max-Herre*/}

        <Box
          margin="50px auto"
          width="200px"
          title="another-intensity-gentleman"
        >
          {/* Picture-3*/}
          <Box margin="50px auto" title="image">
            <img
              src={MaxHerre}
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

            <Box>
              <Typography fontWeight="bold">Max Herre</Typography>
              <Typography>Max Herre</Typography>

              <Typography>2004</Typography>
            </Box>
          </Box>

          {/* Ajani Picture Link */}
          <Box title="ajani">
            <Button
              sx={{
                "&:hover": { cursor: "pointer", color: shades.secondary[500] },
                display: isNonMobile ? "inline" : "inline",
                color: !isDarkMode ? shades.primary[500] : "white",
              }}
              onClick={() => navigate("/ajani")}
            >
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
            </Button>
          </Box>
        </Box>

        {/*Brothers Keepers Lichtkultur*/}

        <Box
          margin="50px auto"
          width="200px"
          title="another-intensity-gentleman"
        >
          {/* Picture-3*/}
          <Box margin="50px auto" title="image">
            <img
              src={LichtKultur}
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

            <Box>
              <Typography fontWeight="bold">Brothers Keepers</Typography>
              <Typography>Lichtkultur</Typography>

              <Typography>2001</Typography>
            </Box>
          </Box>

          {/* Ajani Picture Link */}
          <Box title="ajani">
            <Button
              sx={{
                "&:hover": { cursor: "pointer", color: shades.secondary[500] },
                display: isNonMobile ? "inline" : "inline",
                color: !isDarkMode ? shades.primary[500] : "white",
              }}
              onClick={() => navigate("/ajani")}
            >
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
            </Button>
          </Box>
        </Box>

        {/*Bushido-23*/}

        <Box
          margin="50px auto"
          width="200px"
          title="another-intensity-gentleman"
        >
          {/* Picture-3*/}
          <Box margin="50px auto" title="image">
            <img
              src={Bush}
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

            <Box>
              <Typography fontWeight="bold">Bushido</Typography>
              <Typography>23</Typography>

              <Typography>2011</Typography>
            </Box>
          </Box>

          <Box
            display="flex"
            flexDirection="row" // Ensures horizontal alignment
            justifyContent="center" // Center items horizontally
            alignItems="center" // Center items vertically (if needed)
            flexWrap="wrap" // Optional: Makes items wrap to the next row if the screen is too small
          >
            {/* Ajani Picture Link */}
            <Box title="ajani">
              <Button
                sx={{
                  "&:hover": {
                    cursor: "pointer",
                    color: shades.secondary[500],
                  },
                  display: isNonMobile ? "inline" : "inline",
                  color: !isDarkMode ? shades.primary[500] : "white",
                }}
                onClick={() => navigate("/ajani")}
              >
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
                    transform:
                      "perspective(400px) var(--_t, rotateY(var(--_a)))",
                    transition: "0.5s",
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
              </Button>
            </Box>

            {/* kaya Picture Link */}
            <Box title="kaya-t">
              <Button
                sx={{
                  "&:hover": {
                    cursor: "pointer",
                    color: shades.secondary[500],
                  },
                  display: isNonMobile ? "inline" : "inline",
                  color: !isDarkMode ? shades.primary[500] : "white",
                }}
                onClick={() => navigate("/kaya")}
              >
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
                    transform:
                      "perspective(400px) var(--_t, rotateY(var(--_a)))",
                    transition: "0.5s",
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
              </Button>
            </Box>
          </Box>
        </Box>

        {/*Patrice Ancient Spirit*/}

        <Box margin="50px auto" width="200px" title="ancient-spirit-patrice">
          {/* Picture-3*/}
          <Box margin="50px auto" title="image">
            <img
              src={AncientSpirit}
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

            <Box>
              <Typography fontWeight="bold">Patrice</Typography>
              <Typography>Ancient Spirit</Typography>

              <Typography>2000</Typography>
            </Box>
          </Box>

          {/* Ajani Picture Link */}
          <Box title="ajani">
            <Button
              sx={{
                "&:hover": { cursor: "pointer", color: shades.secondary[500] },
                display: isNonMobile ? "inline" : "inline",
                color: !isDarkMode ? shades.primary[500] : "white",
              }}
              onClick={() => navigate("/ajani")}
            >
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
            </Button>
          </Box>
        </Box>

        {/*Patrice Sillywalks meets Patrice*/}

        <Box margin="50px auto" width="200px" title="ancient-spirit-patrice">
          {/* Picture-3*/}
          <Box margin="50px auto" title="image">
            <img
              src={SillywalksPatrice}
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

            <Box>
              <Typography fontWeight="bold">Sillywalks & Patrice</Typography>
              <Typography>Sillywalks meets Patrice</Typography>

              <Typography>2004</Typography>
            </Box>
          </Box>

          {/* Ajani Picture Link */}
          <Box title="ajani">
            <Button
              sx={{
                "&:hover": { cursor: "pointer", color: shades.secondary[500] },
                display: isNonMobile ? "inline" : "inline",
                color: !isDarkMode ? shades.primary[500] : "white",
              }}
              onClick={() => navigate("/ajani")}
            >
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
            </Button>
          </Box>
        </Box>

        {/*Patrice Nile*/}

        <Box margin="50px auto" width="200px" title="Nile-patrice">
          {/* Picture-3*/}
          <Box margin="50px auto" title="image">
            <img
              src={Nile}
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

            <Box>
              <Typography fontWeight="bold">Patrice</Typography>
              <Typography>Nile</Typography>

              <Typography>2005</Typography>
            </Box>
          </Box>

          {/* Ajani Picture Link */}
          <Box title="ajani">
            <Button
              sx={{
                "&:hover": { cursor: "pointer", color: shades.secondary[500] },
                display: isNonMobile ? "inline" : "inline",
                color: !isDarkMode ? shades.primary[500] : "white",
              }}
              onClick={() => navigate("/ajani")}
            >
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
            </Button>
          </Box>
        </Box>

        {/*Patrice Raw & Uncut*/}

        <Box margin="50px auto" width="200px" title="ancient-spirit-patrice">
          {/* Picture-3*/}
          <Box margin="50px auto" title="image">
            <img
              src={RawUncut}
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

            <Box>
              <Typography fontWeight="bold">Patrice</Typography>
              <Typography>Raw & Uncut</Typography>

              <Typography>2006</Typography>
            </Box>
          </Box>

          {/* Ajani Picture Link */}
          <Box title="ajani">
            <Button
              sx={{
                "&:hover": { cursor: "pointer", color: shades.secondary[500] },
                display: isNonMobile ? "inline" : "inline",
                color: !isDarkMode ? shades.primary[500] : "white",
              }}
              onClick={() => navigate("/ajani")}
            >
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
            </Button>
          </Box>
        </Box>

        {/*Patrice 9*/}

        <Box margin="50px auto" width="200px" title="ancient-spirit-patrice">
          {/* Picture-3*/}
          <Box margin="50px auto" title="image">
            <img
              src={Nine}
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

            <Box>
              <Typography fontWeight="bold">Patrice</Typography>
              <Typography>9</Typography>

              <Typography>2023</Typography>
            </Box>
          </Box>

          {/* Ajani Picture Link */}
          <Box title="ajani">
            <Button
              sx={{
                "&:hover": { cursor: "pointer", color: shades.secondary[500] },
                display: isNonMobile ? "inline" : "inline",
                color: !isDarkMode ? shades.primary[500] : "white",
              }}
              onClick={() => navigate("/ajani")}
            >
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
            </Button>
          </Box>
        </Box>

        {/*Patrice Super*/}

        <Box margin="50px auto" width="200px" title="Super-album-patrice">
          {/* Picture-3*/}
          <Box margin="50px auto" title="image">
            <img
              src={Super}
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

            <Box>
              <Typography fontWeight="bold">Patrice</Typography>
              <Typography>Super Allbum</Typography>

              <Typography>2022</Typography>
            </Box>
          </Box>

          {/* Ajani Picture Link */}
          <Box title="ajani">
            <Button
              sx={{
                "&:hover": { cursor: "pointer", color: shades.secondary[500] },
                display: isNonMobile ? "inline" : "inline",
                color: !isDarkMode ? shades.primary[500] : "white",
              }}
              onClick={() => navigate("/ajani")}
            >
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
            </Button>
          </Box>
        </Box>

        {/*Patrice How-do-you-call-it*/}

        <Box
          margin="50px auto"
          width="200px"
          title="How Do you Call it-patrice"
        >
          {/* Picture-3*/}
          <Box margin="50px auto" title="image">
            <img
              src={HowDo}
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

            <Box>
              <Typography fontWeight="bold">Patrice</Typography>
              <Typography>How Do You Call It</Typography>

              <Typography>2002</Typography>
            </Box>
          </Box>

          {/* Ajani Picture Link */}
          <Box title="ajani">
            <Button
              sx={{
                "&:hover": { cursor: "pointer", color: shades.secondary[500] },
                display: isNonMobile ? "inline" : "inline",
                color: !isDarkMode ? shades.primary[500] : "white",
              }}
              onClick={() => navigate("/ajani")}
            >
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
            </Button>
          </Box>
        </Box>

        {/*Caramello*/}

        <Box margin="50px auto" width="200px" title="Caramelo Criminal">
          {/* Picture-3*/}
          <Box margin="50px auto" title="image">
            <img
              src={Caramelo}
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

            <Box>
              <Typography fontWeight="bold">Caramelo Criminal</Typography>
              <Typography>Caramelo Criminal</Typography>

              <Typography>2004</Typography>
            </Box>
          </Box>

          {/* Ajani Picture Link */}
          <Box title="ajani">
            <Button
              sx={{
                "&:hover": { cursor: "pointer", color: shades.secondary[500] },
                display: isNonMobile ? "inline" : "inline",
                color: !isDarkMode ? shades.primary[500] : "white",
              }}
              onClick={() => navigate("/ajani")}
            >
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
            </Button>
          </Box>
        </Box>

        {/*Melllow-mark-the -5th-element*/}

        <Box margin="50px auto" width="200px" title="Melllow-mark-the -5th-element">
          {/* Picture-3*/}
          <Box margin="50px auto" title="image">
            <img
              src={DasElement}
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

            <Box>
              <Typography fontWeight="bold">Mellow Mark</Typography>
              <Typography>The 5th Element</Typography>

              <Typography>2004</Typography>
            </Box>
          </Box>

          {/* Ajani Picture Link */}
          <Box title="ajani">
            <Button
              sx={{
                "&:hover": { cursor: "pointer", color: shades.secondary[500] },
                display: isNonMobile ? "inline" : "inline",
                color: !isDarkMode ? shades.primary[500] : "white",
              }}
              onClick={() => navigate("/ajani")}
            >
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
            </Button>
          </Box>
        </Box>


             {/*Melllow-mark-Warum-Hallten-Wir/}

           <Box margin="50px auto" width="200px" title="Melllow-mark-Warum-Hallten-Wir">
          {/* Picture-3*/}
          <Box margin="50px auto" title="image">
            <img
              src={WarumHaltenWir}
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

            <Box>
              <Typography fontWeight="bold">Mellow Mark</Typography>
              <Typography>Warum Hallten Wir Nicht Zusammen</Typography>

              <Typography>2023</Typography>
            </Box>

              {/* Ajani Picture Link */}
          <Box title="ajani">
            <Button
              sx={{
                "&:hover": { cursor: "pointer", color: shades.secondary[500] },
                display: isNonMobile ? "inline" : "inline",
                color: !isDarkMode ? shades.primary[500] : "white",
              }}
              onClick={() => navigate("/ajani")}
            >
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
            </Button>
          </Box>
          </Box>

        {/*Kaya-T MotherEarth*/}

        <Box margin="50px auto" width="200px" title="Kaya-T-Mother-Earth">
          {/* Picture-3*/}
          <Box margin="50px auto" title="image">
            <img
              src={Mother}
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

            <Box>
              <Typography fontWeight="bold">Kaya-T</Typography>
              <Typography>Mother Earth(Chapter-13)</Typography>

              <Typography>2010</Typography>
            </Box>
          </Box>

          <Box
            display="flex"
            flexDirection="row" // Ensures horizontal alignment
            justifyContent="center" // Center items horizontally
            alignItems="center" // Center items vertically (if needed)
            flexWrap="wrap" // Optional: Makes items wrap to the next row if the screen is too small
          >
            {/* kaya Picture Link */}
            <Box title="kaya-t">
              <Button
                sx={{
                  "&:hover": {
                    cursor: "pointer",
                    color: shades.secondary[500],
                  },
                  display: isNonMobile ? "inline" : "inline",
                  color: !isDarkMode ? shades.primary[500] : "white",
                }}
                onClick={() => navigate("/kaya")}
              >
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
                    transform:
                      "perspective(400px) var(--_t, rotateY(var(--_a)))",
                    transition: "0.5s",
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
              </Button>
            </Box>
          </Box>
        </Box>

        {/*Aldubb-Let-there-be-dub*/}

        <Box margin="50px auto" width="200px" title="al-dubb-llet-there-be-dub">
          {/* Picture-3*/}
          <Box margin="50px auto" title="image">
            <img
              src={LetDub}
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

            <Box>
              <Typography fontWeight="bold">Al Dubb</Typography>
              <Typography>Let There Be Dub</Typography>

              <Typography>2010</Typography>
            </Box>
          </Box>

          <Box
            display="flex"
            flexDirection="row" // Ensures horizontal alignment
            justifyContent="center" // Center items horizontally
            alignItems="center" // Center items vertically (if needed)
            flexWrap="wrap" // Optional: Makes items wrap to the next row if the screen is too small
          >
            {/* kaya Picture Link */}
            <Box title="kaya-t">
              <Button
                sx={{
                  "&:hover": {
                    cursor: "pointer",
                    color: shades.secondary[500],
                  },
                  display: isNonMobile ? "inline" : "inline",
                  color: !isDarkMode ? shades.primary[500] : "white",
                }}
                onClick={() => navigate("/kaya")}
              >
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
                    transform:
                      "perspective(400px) var(--_t, rotateY(var(--_a)))",
                    transition: "0.5s",
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
              </Button>
            </Box>
          </Box>
        </Box>

        {/*Aldubb-dub-files-04*/}

        <Box margin="50px auto" width="200px" title="al-dubb-dub-files-04">
          {/* Picture-3*/}
          <Box margin="50px auto" title="image">
            <img
              src={DubFiles}
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

            <Box>
              <Typography fontWeight="bold">Al Dubb</Typography>
              <Typography>Dub Files 04</Typography>

              <Typography>2009</Typography>
            </Box>
          </Box>

          <Box
            display="flex"
            flexDirection="row" // Ensures horizontal alignment
            justifyContent="center" // Center items horizontally
            alignItems="center" // Center items vertically (if needed)
            flexWrap="wrap" // Optional: Makes items wrap to the next row if the screen is too small
          >
            {/* kaya Picture Link */}
            <Box title="kaya-t">
              <Button
                sx={{
                  "&:hover": {
                    cursor: "pointer",
                    color: shades.secondary[500],
                  },
                  display: isNonMobile ? "inline" : "inline",
                  color: !isDarkMode ? shades.primary[500] : "white",
                }}
                onClick={() => navigate("/kaya")}
              >
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
                    transform:
                      "perspective(400px) var(--_t, rotateY(var(--_a)))",
                    transition: "0.5s",
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
              </Button>
            </Box>
          </Box>
        </Box>

        {/*Mark medlock Cloud dancer*/}

        <Box margin="50px auto" width="200px" title="cloud-dancer-mark-medlock">
          {/* Picture-3*/}
          <Box margin="50px auto" title="image">
            <img
              src={CloudDancer}
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

            <Box>
              <Typography fontWeight="bold">Mark Medllock</Typography>
              <Typography>Cloud Dancer</Typography>

              <Typography>2004</Typography>
            </Box>
          </Box>

          <Box
            display="flex"
            flexDirection="row" // Ensures horizontal alignment
            justifyContent="center" // Center items horizontally
            alignItems="center" // Center items vertically (if needed)
            flexWrap="wrap" // Optional: Makes items wrap to the next row if the screen is too small
          >
            {/* kaya Picture Link */}
            <Box title="kaya-t">
              <Button
                sx={{
                  "&:hover": {
                    cursor: "pointer",
                    color: shades.secondary[500],
                  },
                  display: isNonMobile ? "inline" : "inline",
                  color: !isDarkMode ? shades.primary[500] : "white",
                }}
                onClick={() => navigate("/kaya")}
              >
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
                    transform:
                      "perspective(400px) var(--_t, rotateY(var(--_a)))",
                    transition: "0.5s",
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
              </Button>
            </Box>
          </Box>
        </Box>

        {/*Mark medlock Summer*/}

        <Box margin="50px auto" width="200px" title="summer-mark-medlock">
          {/* Picture-3*/}
          <Box margin="50px auto" title="image">
            <img
              src={Summer}
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

            <Box>
              <Typography fontWeight="bold">Mark Medlock</Typography>
              <Typography>Summer</Typography>

              <Typography>2004</Typography>
            </Box>
          </Box>

          <Box
            display="flex"
            flexDirection="row" // Ensures horizontal alignment
            justifyContent="center" // Center items horizontally
            alignItems="center" // Center items vertically (if needed)
            flexWrap="wrap" // Optional: Makes items wrap to the next row if the screen is too small
          >
            {/* kaya Picture Link */}
            <Box title="kaya-t">
              <Button
                sx={{
                  "&:hover": {
                    cursor: "pointer",
                    color: shades.secondary[500],
                  },
                  display: isNonMobile ? "inline" : "inline",
                  color: !isDarkMode ? shades.primary[500] : "white",
                }}
                onClick={() => navigate("/kaya")}
              >
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
                    transform:
                      "perspective(400px) var(--_t, rotateY(var(--_a)))",
                    transition: "0.5s",
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
              </Button>
            </Box>
          </Box>
        </Box>

        {/*Ben Engel*/}

        <Box margin="50px auto" width="200px" title="engel-ben">
          {/* Picture-3*/}
          <Box margin="50px auto" title="image">
            <img
              src={Engel}
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

            <Box>
              <Typography fontWeight="bold">Ben</Typography>
              <Typography>Engel</Typography>

              <Typography>2002</Typography>
            </Box>
          </Box>

          <Box
            display="flex"
            flexDirection="row" // Ensures horizontal alignment
            justifyContent="center" // Center items horizontally
            alignItems="center" // Center items vertically (if needed)
            flexWrap="wrap" // Optional: Makes items wrap to the next row if the screen is too small
          >
            {/* kaya Picture Link */}
            <Box title="kaya-t">
              <Button
                sx={{
                  "&:hover": {
                    cursor: "pointer",
                    color: shades.secondary[500],
                  },
                  display: isNonMobile ? "inline" : "inline",
                  color: !isDarkMode ? shades.primary[500] : "white",
                }}
                onClick={() => navigate("/kaya")}
              >
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
                    transform:
                      "perspective(400px) var(--_t, rotateY(var(--_a)))",
                    transition: "0.5s",
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
              </Button>
            </Box>
          </Box>
        </Box>

        {/*troddin-shocking-murray*/}

        <Box margin="50px auto" width="200px" title="troddin-shocking-murray">
          {/* Picture-3*/}
          <Box margin="50px auto" title="image">
            <img
              src={Troddin}
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

            <Box>
              <Typography fontWeight="bold">Shocking Murray</Typography>
              <Typography>Troddin</Typography>

              <Typography>2011</Typography>
            </Box>
          </Box>

          <Box
            display="flex"
            flexDirection="row" // Ensures horizontal alignment
            justifyContent="center" // Center items horizontally
            alignItems="center" // Center items vertically (if needed)
            flexWrap="wrap" // Optional: Makes items wrap to the next row if the screen is too small
          >
            {/* kaya Picture Link */}
            <Box title="kaya-t">
              <Button
                sx={{
                  "&:hover": {
                    cursor: "pointer",
                    color: shades.secondary[500],
                  },
                  display: isNonMobile ? "inline" : "inline",
                  color: !isDarkMode ? shades.primary[500] : "white",
                }}
                onClick={() => navigate("/kaya")}
              >
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
                    transform:
                      "perspective(400px) var(--_t, rotateY(var(--_a)))",
                    transition: "0.5s",
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
              </Button>
            </Box>
          </Box>
        </Box>

        {/*Sing Young Voices*/}

        <Box margin="50px auto" width="200px" title="sing-young-voices">
          {/* Picture-3*/}
          <Box margin="50px auto" title="image">
            <img
              src={Sing}
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

            <Box>
              <Typography fontWeight="bold">
                Young Voices Brandenburg
              </Typography>
              <Typography>Sing!</Typography>

              <Typography>2005</Typography>
            </Box>
          </Box>

          <Box
            display="flex"
            flexDirection="row" // Ensures horizontal alignment
            justifyContent="center" // Center items horizontally
            alignItems="center" // Center items vertically (if needed)
            flexWrap="wrap" // Optional: Makes items wrap to the next row if the screen is too small
          >
            {/* kaya Picture Link */}
            <Box title="kaya-t">
              <Button
                sx={{
                  "&:hover": {
                    cursor: "pointer",
                    color: shades.secondary[500],
                  },
                  display: isNonMobile ? "inline" : "inline",
                  color: !isDarkMode ? shades.primary[500] : "white",
                }}
                onClick={() => navigate("/kaya")}
              >
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
                    transform:
                      "perspective(400px) var(--_t, rotateY(var(--_a)))",
                    transition: "0.5s",
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
              </Button>
            </Box>
          </Box>
        </Box>

        {/*Jah Meek Touched*/}

        <Box
          margin="50px auto"
          width="200px"
          title="touched by an angel-jah-meek"
        >
          {/* Picture-3*/}
          <Box margin="50px auto" title="image">
            <img
              src={Touched}
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

            <Box>
              <Typography fontWeight="bold">Jah Meek</Typography>
              <Typography>Touched By An Angel</Typography>

              <Typography>2005</Typography>
            </Box>
          </Box>

          {/* Ajani Picture Link */}
          <Box title="ajani">
            <Button
              sx={{
                "&:hover": { cursor: "pointer", color: shades.secondary[500] },
                display: isNonMobile ? "inline" : "inline",
                color: !isDarkMode ? shades.primary[500] : "white",
              }}
              onClick={() => navigate("/ajani")}
            >
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
            </Button>
          </Box>
        </Box>

        {/*Love Take control-Mantis*/}

        <Box margin="50px auto" width="200px" title="Love Take control-Mantis">
          {/* Picture-3*/}
          <Box margin="50px auto" title="image">
            <img
              src={LoveControl}
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

            <Box>
              <Typography fontWeight="bold">Mantis</Typography>
              <Typography>Love Take Control</Typography>

              <Typography>2006</Typography>
            </Box>
          </Box>

          {/* Ajani Picture Link */}
          <Box title="ajani">
            <Button
              sx={{
                "&:hover": { cursor: "pointer", color: shades.secondary[500] },
                display: isNonMobile ? "inline" : "inline",
                color: !isDarkMode ? shades.primary[500] : "white",
              }}
              onClick={() => navigate("/ajani")}
            >
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
            </Button>
          </Box>
        </Box>

        {/*Rightful Place Uwe banton*/}

        <Box margin="50px auto" width="200px" title="Rightful Place Uwe banton">
          {/* Picture-3*/}
          <Box margin="50px auto" title="image">
            <img
              src={Rightful}
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

            <Box>
              <Typography fontWeight="bold">Uwe Banton</Typography>
              <Typography>Rightful Place</Typography>

              <Typography>2009</Typography>
            </Box>
          </Box>

          {/* Ajani Picture Link */}
          <Box title="ajani">
            <Button
              sx={{
                "&:hover": { cursor: "pointer", color: shades.secondary[500] },
                display: isNonMobile ? "inline" : "inline",
                color: !isDarkMode ? shades.primary[500] : "white",
              }}
              onClick={() => navigate("/ajani")}
            >
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
            </Button>
          </Box>
        </Box>

        {/*cry-freedom-anthony-locks*/}

        <Box margin="50px auto" width="200px" title="cry-freedom-anthony-locks">
          {/* Picture-3*/}
          <Box margin="50px auto" title="image">
            <img
              src={CryFreedom}
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

            <Box>
              <Typography fontWeight="bold">Anthony Locks</Typography>
              <Typography>Cry Freedom</Typography>

              <Typography>2009</Typography>
            </Box>
          </Box>

          {/* Ajani Picture Link */}
          <Box title="ajani">
            <Button
              sx={{
                "&:hover": { cursor: "pointer", color: shades.secondary[500] },
                display: isNonMobile ? "inline" : "inline",
                color: !isDarkMode ? shades.primary[500] : "white",
              }}
              onClick={() => navigate("/ajani")}
            >
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
            </Button>
          </Box>
        </Box>

        {/*my-intention-roughhouse*/}

        <Box margin="50px auto" width="200px" title="my-intention-roughhouse">
          {/* Picture-3*/}
          <Box margin="50px auto" title="image">
            <img
              src={MyIntention}
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

            <Box>
              <Typography fontWeight="bold">Roughhouse</Typography>
              <Typography>My Intention</Typography>

              <Typography>2013</Typography>
            </Box>
          </Box>

          {/* Ajani Picture Link */}
          <Box title="ajani">
            <Button
              sx={{
                "&:hover": { cursor: "pointer", color: shades.secondary[500] },
                display: isNonMobile ? "inline" : "inline",
                color: !isDarkMode ? shades.primary[500] : "white",
              }}
              onClick={() => navigate("/ajani")}
            >
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
            </Button>
          </Box>
        </Box>

        {/*mittendrin nosiw*/}

        <Box margin="50px auto" width="200px" title="mittendrin-nosliw">
          {/* Picture-3*/}
          <Box margin="50px auto" title="image">
            <img
              src={Mittendrin}
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

            <Box>
              <Typography fontWeight="bold">Nosliw</Typography>
              <Typography>Mitten Drin</Typography>

              <Typography>2004</Typography>
            </Box>
          </Box>

          {/* Ajani Picture Link */}
          <Box title="ajani">
            <Button
              sx={{
                "&:hover": { cursor: "pointer", color: shades.secondary[500] },
                display: isNonMobile ? "inline" : "inline",
                color: !isDarkMode ? shades.primary[500] : "white",
              }}
              onClick={() => navigate("/ajani")}
            >
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
            </Button>
          </Box>
        </Box>

        {/*mehr-davon nosiw*/}

        <Box margin="50px auto" width="200px" title="mehr-davon-nosliw">
          {/* Picture-3*/}
          <Box margin="50px auto" title="image">
            <img
              src={MehrDavon}
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

            <Box>
              <Typography fontWeight="bold">Nosliw</Typography>
              <Typography>Mehr Davon</Typography>

              <Typography>2007</Typography>
            </Box>
          </Box>

          {/* Ajani Picture Link */}
          <Box title="ajani">
            <Button
              sx={{
                "&:hover": { cursor: "pointer", color: shades.secondary[500] },
                display: isNonMobile ? "inline" : "inline",
                color: !isDarkMode ? shades.primary[500] : "white",
              }}
              onClick={() => navigate("/ajani")}
            >
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
            </Button>
          </Box>
        </Box>

        {/*Ras Flabba Zing*/}

        <Box margin="50px auto" width="200px" title="Rass-Flabba-Zing">
          {/* Picture-3*/}
          <Box margin="50px auto" title="image">
            <img
              src={Zing}
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

            <Box>
              <Typography fontWeight="bold">Ras Flabba</Typography>
              <Typography>Zing</Typography>

              <Typography>1996</Typography>
            </Box>
          </Box>

          {/* Ajani Picture Link */}
          <Box title="ajani">
            <Button
              sx={{
                "&:hover": { cursor: "pointer", color: shades.secondary[500] },
                display: isNonMobile ? "inline" : "inline",
                color: !isDarkMode ? shades.primary[500] : "white",
              }}
              onClick={() => navigate("/ajani")}
            >
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
            </Button>
          </Box>
        </Box>

        {/*Ras Flabba Music-In-Me*/}

        <Box margin="50px auto" width="200px" title="Rass-Flabba-Music-In-Me">
          {/* Picture-3*/}
          <Box margin="50px auto" title="image">
            <img
              src={MusicInMe}
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

            <Box>
              <Typography fontWeight="bold">Ras Flabba</Typography>
              <Typography>Music In Me</Typography>

              <Typography>2008</Typography>
            </Box>
          </Box>

          {/* Ajani Picture Link */}
          <Box title="ajani">
            <Button
              sx={{
                "&:hover": { cursor: "pointer", color: shades.secondary[500] },
                display: isNonMobile ? "inline" : "inline",
                color: !isDarkMode ? shades.primary[500] : "white",
              }}
              onClick={() => navigate("/ajani")}
            >
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
            </Button>
          </Box>
        </Box>

        {/*Rhaatid Rock Reggae*/}

        <Box margin="50px auto" width="200px" title="rhaatid-rock-reggae">
          {/* Picture-3*/}
          <Box margin="50px auto" title="image">
            <img
              src={RockReggae}
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

            <Box>
              <Typography fontWeight="bold">Rhaatid</Typography>
              <Typography>Rock Reggae</Typography>

              <Typography>2008</Typography>
            </Box>
          </Box>

          {/* Ajani Picture Link */}
          <Box title="ajani">
            <Button
              sx={{
                "&:hover": { cursor: "pointer", color: shades.secondary[500] },
                display: isNonMobile ? "inline" : "inline",
                color: !isDarkMode ? shades.primary[500] : "white",
              }}
              onClick={() => navigate("/ajani")}
            >
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
            </Button>
          </Box>
        </Box>


         {/*irieddim-iriedaily*/}

         <Box margin="50px auto" width="200px" title="irieddim-iriedaily">
          {/* Picture-3*/}
          <Box margin="50px auto" title="image">
            <img
              src={Irieddim}
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

            <Box>
              <Typography fontWeight="bold">Irie Daily</Typography>
              <Typography>Irieddim</Typography>

              <Typography>2003</Typography>
            </Box>
          </Box>

          {/* Ajani Picture Link */}
          <Box title="ajani">
            <Button
              sx={{
                "&:hover": { cursor: "pointer", color: shades.secondary[500] },
                display: isNonMobile ? "inline" : "inline",
                color: !isDarkMode ? shades.primary[500] : "white",
              }}
              onClick={() => navigate("/ajani")}
            >
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
            </Button>
          </Box>
        </Box>


           {/*Dutchie Gold*/}

           <Box margin="50px auto" width="200px" title="Dutchie Gold">
          {/* Picture-3*/}
          <Box margin="50px auto" title="image">
            <img
              src={Dutchie}
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

            <Box>
              <Typography fontWeight="bold">Dutchie Gold</Typography>
              <Typography>Dutchie Gold</Typography>

              <Typography>1994</Typography>
            </Box>
          </Box>

          {/* Ajani Picture Link */}
          <Box title="ajani">
            <Button
              sx={{
                "&:hover": { cursor: "pointer", color: shades.secondary[500] },
                display: isNonMobile ? "inline" : "inline",
                color: !isDarkMode ? shades.primary[500] : "white",
              }}
              onClick={() => navigate("/ajani")}
            >
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
            </Button>
          </Box>
        </Box>



           {/*Safe&Sound*/}

           <Box margin="50px auto" width="200px" title="Safe&Sound">
          {/* Picture-3*/}
          <Box margin="50px auto" title="image">
            <img
              src={SafeSound}
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

            <Box>
              <Typography fontWeight="bold">Safe & Sound</Typography>
              <Typography>Sampler</Typography>

              <Typography>2010</Typography>
            </Box>
          </Box>

          {/* Ajani Picture Link */}
          <Box title="ajani">
            <Button
              sx={{
                "&:hover": { cursor: "pointer", color: shades.secondary[500] },
                display: isNonMobile ? "inline" : "inline",
                color: !isDarkMode ? shades.primary[500] : "white",
              }}
              onClick={() => navigate("/ajani")}
            >
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
            </Button>
          </Box>
        </Box>



           {/*Sunvibes*/}

           <Box margin="50px auto" width="200px" title="Sunvibes">
          {/* Picture-3*/}
          <Box margin="50px auto" title="image">
            <img
              src={Sunvibe}
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

            <Box>
              <Typography fontWeight="bold">Sunvibes</Typography>
              <Typography>Sunvibe Showcase</Typography>

              <Typography>1997</Typography>
            </Box>
          </Box>

          {/* Ajani Picture Link */}
          <Box title="ajani">
            <Button
              sx={{
                "&:hover": { cursor: "pointer", color: shades.secondary[500] },
                display: isNonMobile ? "inline" : "inline",
                color: !isDarkMode ? shades.primary[500] : "white",
              }}
              onClick={() => navigate("/ajani")}
            >
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
            </Button>
          </Box>
        </Box>



            {/*Owen-Casey-TheDawning*/}

            <Box margin="50px auto" width="200px" title="Owen-Casey-TheDawning">
          {/* Picture-3*/}
          <Box margin="50px auto" title="image">
            <img
              src={TheDawning}
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

            <Box>
              <Typography fontWeight="bold">Owen Casey</Typography>
              <Typography>The Dawning</Typography>

              <Typography>2014</Typography>
            </Box>
          </Box>

          {/* Ajani Picture Link */}
          <Box title="ajani">
            <Button
              sx={{
                "&:hover": { cursor: "pointer", color: shades.secondary[500] },
                display: isNonMobile ? "inline" : "inline",
                color: !isDarkMode ? shades.primary[500] : "white",
              }}
              onClick={() => navigate("/ajani")}
            >
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
            </Button>
          </Box>
        </Box>


           {/*Klartext-Kleinvieh*/}

           <Box margin="50px auto" width="200px" title="Klartext-Kleinvieh">
          {/* Picture-3*/}
          <Box margin="50px auto" title="image">
            <img
              src={Kleinvieh}
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

            <Box>
              <Typography fontWeight="bold">KlarText</Typography>
              <Typography>Keinvieh Mach Auch Mist</Typography>

              <Typography>2009</Typography>
            </Box>
          </Box>

          {/* Ajani Picture Link */}
          <Box title="ajani">
            <Button
              sx={{
                "&:hover": { cursor: "pointer", color: shades.secondary[500] },
                display: isNonMobile ? "inline" : "inline",
                color: !isDarkMode ? shades.primary[500] : "white",
              }}
              onClick={() => navigate("/ajani")}
            >
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
            </Button>
          </Box>
        </Box>



           {/*Big City Ashantiroy*/}

           <Box margin="50px auto" width="200px" title="Big City Ashantiroy">
          {/* Picture-3*/}
          <Box margin="50px auto" title="image">
            <img
              src={BigCity}
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

            <Box>
              <Typography fontWeight="bold">Congo Ashantiroy & The Jah Power Band</Typography>
              <Typography>Big City</Typography>

              <Typography>1994</Typography>
            </Box>
          </Box>

          {/* Ajani Picture Link */}
          <Box title="ajani">
            <Button
              sx={{
                "&:hover": { cursor: "pointer", color: shades.secondary[500] },
                display: isNonMobile ? "inline" : "inline",
                color: !isDarkMode ? shades.primary[500] : "white",
              }}
              onClick={() => navigate("/ajani")}
            >
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
            </Button>
          </Box>
        </Box>



           {/*Sillywalks-songsofmelody*/}

           <Box margin="50px auto" width="200px" title="Sillywalks-songsofmelody">
          {/* Picture-3*/}
          <Box margin="50px auto" title="image">
            <img
              src={SongMelody}
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

            <Box>
              <Typography fontWeight="bold">Silly Walks Movement</Typography>
              <Typography>Songs Of Melody</Typography>

              <Typography>2002</Typography>
            </Box>
          </Box>

          {/* Ajani Picture Link */}
          <Box title="ajani">
            <Button
              sx={{
                "&:hover": { cursor: "pointer", color: shades.secondary[500] },
                display: isNonMobile ? "inline" : "inline",
                color: !isDarkMode ? shades.primary[500] : "white",
              }}
              onClick={() => navigate("/ajani")}
            >
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
            </Button>
          </Box>
        </Box>




        {/*Kaya-t-Lead Me*/}

        <Box margin="50px auto" width="200px" title="Kaya-T-Lead Me">
          {/* Picture-3*/}
          <Box margin="50px auto" title="image">
            <img
              src={LeadMe}
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

            <Box>
              <Typography fontWeight="bold">Kaya-T</Typography>
              <Typography>Lead me</Typography>

              <Typography>2011</Typography>
            </Box>
          </Box>

          <Box
            display="flex"
            flexDirection="row" // Ensures horizontal alignment
            justifyContent="center" // Center items horizontally
            alignItems="center" // Center items vertically (if needed)
            flexWrap="wrap" // Optional: Makes items wrap to the next row if the screen is too small
          >
            {/* kaya Picture Link */}
            <Box title="kaya-t">
              <Button
                sx={{
                  "&:hover": {
                    cursor: "pointer",
                    color: shades.secondary[500],
                  },
                  display: isNonMobile ? "inline" : "inline",
                  color: !isDarkMode ? shades.primary[500] : "white",
                }}
                onClick={() => navigate("/kaya")}
              >
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
                    transform:
                      "perspective(400px) var(--_t, rotateY(var(--_a)))",
                    transition: "0.5s",
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
              </Button>
            </Box>
          </Box>
        </Box>



           {/*Kaya-t-Blue-sky*/}

           <Box margin="50px auto" width="200px" title="Kaya-T-Blue-sky">
          {/* Picture-3*/}
          <Box margin="50px auto" title="image">
            <img
              src={BlueSky}
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

            <Box>
              <Typography fontWeight="bold">Kaya-T</Typography>
              <Typography>Blue Sky</Typography>

              <Typography>2012</Typography>
            </Box>
          </Box>

          <Box
            display="flex"
            flexDirection="row" // Ensures horizontal alignment
            justifyContent="center" // Center items horizontally
            alignItems="center" // Center items vertically (if needed)
            flexWrap="wrap" // Optional: Makes items wrap to the next row if the screen is too small
          >
            {/* kaya Picture Link */}
            <Box title="kaya-t">
              <Button
                sx={{
                  "&:hover": {
                    cursor: "pointer",
                    color: shades.secondary[500],
                  },
                  display: isNonMobile ? "inline" : "inline",
                  color: !isDarkMode ? shades.primary[500] : "white",
                }}
                onClick={() => navigate("/kaya")}
              >
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
                    transform:
                      "perspective(400px) var(--_t, rotateY(var(--_a)))",
                    transition: "0.5s",
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
              </Button>
            </Box>
          </Box>
        </Box>


         {/*ajani-kaya-t*/}

         <Box
          margin="50px auto"
          width="200px"
          title="ajani-kaya-t"
        >
          {/* Picture-3*/}
          <Box margin="50px auto" title="image">
            <img
              src={AjaniKaya}
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

            <Box>
              <Typography fontWeight="bold">Ajani & Kaya-T</Typography>
              <Typography>Ajani-Kaya-T</Typography>

              <Typography>2012</Typography>
            </Box>
          </Box>

          <Box
            display="flex"
            flexDirection="row" // Ensures horizontal alignment
            justifyContent="center" // Center items horizontally
            alignItems="center" // Center items vertically (if needed)
            flexWrap="wrap" // Optional: Makes items wrap to the next row if the screen is too small
          >
            {/* Ajani Picture Link */}
            <Box title="ajani">
              <Button
                sx={{
                  "&:hover": {
                    cursor: "pointer",
                    color: shades.secondary[500],
                  },
                  display: isNonMobile ? "inline" : "inline",
                  color: !isDarkMode ? shades.primary[500] : "white",
                }}
                onClick={() => navigate("/ajani")}
              >
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
                    transform:
                      "perspective(400px) var(--_t, rotateY(var(--_a)))",
                    transition: "0.5s",
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
              </Button>
            </Box>

            {/* kaya Picture Link */}
            <Box title="kaya-t">
              <Button
                sx={{
                  "&:hover": {
                    cursor: "pointer",
                    color: shades.secondary[500],
                  },
                  display: isNonMobile ? "inline" : "inline",
                  color: !isDarkMode ? shades.primary[500] : "white",
                }}
                onClick={() => navigate("/kaya")}
              >
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
                    transform:
                      "perspective(400px) var(--_t, rotateY(var(--_a)))",
                    transition: "0.5s",
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
              </Button>
            </Box>
          </Box>
        </Box>

           {/*emersound supieras*/}

           <Box
          margin="50px auto"
          width="200px"
          title="ajani-kaya-t"
        >
          {/* Picture-3*/}
          <Box margin="50px auto" title="image">
            <img
              src={Supieras}
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

            <Box>
              <Typography fontWeight="bold">Emersound</Typography>
              <Typography>Si Tu Supieras</Typography>

              <Typography>2016</Typography>
            </Box>
          </Box>

          <Box
            display="flex"
            flexDirection="row" // Ensures horizontal alignment
            justifyContent="center" // Center items horizontally
            alignItems="center" // Center items vertically (if needed)
            flexWrap="wrap" // Optional: Makes items wrap to the next row if the screen is too small
          >
            {/* Ajani Picture Link */}
            <Box title="ajani">
              <Button
                sx={{
                  "&:hover": {
                    cursor: "pointer",
                    color: shades.secondary[500],
                  },
                  display: isNonMobile ? "inline" : "inline",
                  color: !isDarkMode ? shades.primary[500] : "white",
                }}
                onClick={() => navigate("/ajani")}
              >
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
                    transform:
                      "perspective(400px) var(--_t, rotateY(var(--_a)))",
                    transition: "0.5s",
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
              </Button>
            </Box>

            {/* kaya Picture Link */}
            <Box title="kaya-t">
              <Button
                sx={{
                  "&:hover": {
                    cursor: "pointer",
                    color: shades.secondary[500],
                  },
                  display: isNonMobile ? "inline" : "inline",
                  color: !isDarkMode ? shades.primary[500] : "white",
                }}
                onClick={() => navigate("/kaya")}
              >
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
                    transform:
                      "perspective(400px) var(--_t, rotateY(var(--_a)))",
                    transition: "0.5s",
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
              </Button>
            </Box>
          </Box>
        </Box>



           {/*Silent-voices-ajani*/}

           <Box margin="50px auto" width="200px" title="Ajani-Sient-voices">
          {/* Picture-3*/}
          <Box margin="50px auto" title="image">
            <img
              src={Silentvoices}
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

            <Box>
              <Typography fontWeight="bold">Ajani</Typography>
              <Typography>Silent Voices</Typography>

              <Typography>2020</Typography>
            </Box>
          </Box>

          {/* Ajani Picture Link */}
          <Box title="ajani">
            <Button
              sx={{
                "&:hover": { cursor: "pointer", color: shades.secondary[500] },
                display: isNonMobile ? "inline" : "inline",
                color: !isDarkMode ? shades.primary[500] : "white",
              }}
              onClick={() => navigate("/ajani")}
            >
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
            </Button>
          </Box>
        </Box>




           {/*fear-factor-ajani*/}

           <Box margin="50px auto" width="200px" title="Ajani-fear-factor">
          {/* Picture-3*/}
          <Box margin="50px auto" title="image">
            <img
              src={FearFactor}
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

            <Box>
              <Typography fontWeight="bold">Ajani</Typography>
              <Typography>Fear Factor</Typography>

              <Typography>2020</Typography>
            </Box>
          </Box>

          {/* Ajani Picture Link */}
          <Box title="ajani">
            <Button
              sx={{
                "&:hover": { cursor: "pointer", color: shades.secondary[500] },
                display: isNonMobile ? "inline" : "inline",
                color: !isDarkMode ? shades.primary[500] : "white",
              }}
              onClick={() => navigate("/ajani")}
            >
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
            </Button>
          </Box>
        </Box>


           {/*father´s cry-joseph"blue"grant*/}

           <Box margin="50px auto" width="200px" title="father´s cry-joseph-grant">
          {/* Picture-3*/}
          <Box margin="50px auto" title="image">
            <img
              src={FathersCry}
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

            <Box>
              <Typography fontWeight="bold">Joseph "Blue" Grant</Typography>
              <Typography>Father´s Cry</Typography>

              <Typography>2020</Typography>
            </Box>
          </Box>

          {/* Ajani Picture Link */}
          <Box title="ajani">
            <Button
              sx={{
                "&:hover": { cursor: "pointer", color: shades.secondary[500] },
                display: isNonMobile ? "inline" : "inline",
                color: !isDarkMode ? shades.primary[500] : "white",
              }}
              onClick={() => navigate("/ajani")}
            >
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
            </Button>
          </Box>
        </Box>




           {/*Direct-flight-joseph"blue"grant*/}

           <Box margin="50px auto" width="200px" title="Direct-flight-joseph-grant">
          {/* Picture-3*/}
          <Box margin="50px auto" title="image">
            <img
              src={DirectFlight}
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

            <Box>
              <Typography fontWeight="bold">Joseph "Blue" Grant</Typography>
              <Typography>Direct Flight</Typography>

              <Typography>2022</Typography>
            </Box>
          </Box>

          {/* Ajani Picture Link */}
          <Box title="ajani">
            <Button
              sx={{
                "&:hover": { cursor: "pointer", color: shades.secondary[500] },
                display: isNonMobile ? "inline" : "inline",
                color: !isDarkMode ? shades.primary[500] : "white",
              }}
              onClick={() => navigate("/ajani")}
            >
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
            </Button>
          </Box>
        </Box>





           {/*ooh-lala-zo-ataraxie*/}

           <Box margin="50px auto" width="200px" title="ooh-lala-zo-ataraxie">
          {/* Picture-3*/}
          <Box margin="50px auto" title="image">
            <img
              src={OohLala}
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

            <Box>
              <Typography fontWeight="bold">Zo Ataraxie</Typography>
              <Typography>Ooh Lala</Typography>

              <Typography>2022</Typography>
            </Box>
          </Box>

          {/* Ajani Picture Link */}
          <Box title="ajani">
            <Button
              sx={{
                "&:hover": { cursor: "pointer", color: shades.secondary[500] },
                display: isNonMobile ? "inline" : "inline",
                color: !isDarkMode ? shades.primary[500] : "white",
              }}
              onClick={() => navigate("/ajani")}
            >
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
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Discography;
