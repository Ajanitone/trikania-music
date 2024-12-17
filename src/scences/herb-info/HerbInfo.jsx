import React, { useState, useContext, useEffect } from "react";
import Item4 from "../../components/Item4";
import ScrollTop from "../../components/ScrollTop";
import { shades } from "../../theme";
import axios from "axios";
import { HerbContext } from "../../context/Context";
import Ajani from "../../artistpictures/ajani.png";
import profilePicture from "../../assets/angele-kamp-kcvRHtAyuig-unsplash.jpg";
import { useNavigate } from "react-router-dom";
import { useMediaQuery, Typography, Box, Button } from "@mui/material";
import TeaImage from "../../disco-assets/janitea.jpg";

const HerbInfo = ({ isDarkMode }) => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [isHovered, setIsHovered] = useState(false);
  const [staticModal, setStaticModal] = useState(false); // Add modal state
  const { state, dispatchState } = useContext(HerbContext);

  console.log("products", state.products);
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const backgroundColor = isDarkMode ? "#000000" : "none";
  const toggleShow = () => {
    setStaticModal((prevState) => !prevState);
  };
  const navigate = useNavigate();
  const Company = "Trikania-Herbs";
  const Product = "JaniTea";
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
    <div
      style={{
        display: isNonMobile ? "block" : "block",
        justifyContent: isNonMobile ? "" : "center",
      }}
    >
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          maxWidth: "100%",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          // background:
          //   "linear-gradient(90deg, rgba(255,232,210,1) 0%, rgba(196,252,240,1) 100%)",
          color: "black",
          paddingBottom: 10,
        }}
      >
        <Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: isNonMobile ? "" : "block",
                justifyContent: isNonMobile ? "" : "center",
                width: isNonMobile ? "100%" : "200px",
              }}
            >
              <h1 className="contact-h1">
                Welcome To Trikania Herbs 🍀
                {/* <!-- Scroller Start --> */}
                <Box
                  className={`home ${
                    isDarkMode ? "contact-scroller1" : "contact-scroller"
                  }`}
                  sx={{ marginTop: "50px" }}
                >
                  <span>
                    The Tea
                    <br />
                    That Sets
                    <br />
                    You Free
                  </span>
                </Box>
                {/* <!-- Scroller End --> */}
              </h1>
            </Box>
          </Box>
        </Typography>
      </Box>

      <Box
        title="JaniTea"
        sx={{ display: "flex", justifyContent: "center", marginBottom: "50px" }}
      >
        <img
          src={`${state?.products[0]?.musicImage}` || TeaImage}
          alt="Disiswo"
          style={{
            width: "200px",
            aspectRatio: "calc(1 + var(--f))",
            objectFit: "cover",
            cursor: "pointer",
            borderRadius: "5%",
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

      <Box sx={{ display: "flex", justifyContent: "Center" }}>
        <Box>
          <Typography
            sx={{
              "&:hover": { cursor: "pointer", color: shades.secondary[500] },
              justifyContent: "center",
              display: "flex",
            }}
          >
            {`${state?.products[0]?.name}` || Product} is out now.
          </Typography>
          <Typography
            sx={{
              "&:hover": {
                cursor: "pointer",
                color: isDarkMode ? "red" : shades.secondary[500],
              },
              marginTop: "20px",
            }}
          >
            {`${state?.products[0]?.artistName} ` || Company}`s Detox Tea.
            {/* {`${state?.products[3]?.name}` || Product} is out now. */}
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Button
              sx={{
                "&:hover": { cursor: "pointer", color: "lime" },
                marginTop: "10px",
                color: isDarkMode ? "black" : "white",
                backgroundColor: shades.secondary[300],
              }}
              onClick={() => navigate(`item/${state?.products[0]?._id}`)}
            >
              Buy it
            </Button>
          </Box>
        </Box>
      </Box>

      <Box display="flex" justifyContent="center">
        <Typography
          fontWeight="bold"
          sx={{
            fontSize: "24px", // Specify your desired font size
            "&:hover": { cursor: "pointer", color: "lime" },
            marginTop: "10px",
            color: isDarkMode ? "white" : "red",
          }}
        >
          Herb Info
        </Typography>
      </Box>
      <Item4 />
      <ScrollTop isDarkMode={isDarkMode} />
    </div>
  );
};

export default HerbInfo;
