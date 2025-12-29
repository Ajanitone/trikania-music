import React from "react";
import { useNavigate } from "react-router-dom";
import { shades } from "../../theme";
import { Box, Typography, useMediaQuery } from "@mui/material";
import Logo from "../../logo/TRI_Logo_Music_RedBlack.png";

const LogoStyle = ({ isDarkMode }) => {
  const navigate = useNavigate();
  const isNonMobile = useMediaQuery("(min-width:600px)");

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      marginTop="100px"
      marginBottom="100px"
      width="100%"
      height="60px"
      onClick={() => navigate("/")}
      sx={{
        "&:hover": { cursor: "pointer", color: shades.primary[300] },
      }}
      color={!isDarkMode ? shades.secondary[500] : shades.primary[100]}
      title="TrikaniaMusic"
    >
      <img
        src={Logo}
        alt="logo"
        style={{
          width: "60px",
          height: "60px",
          borderRadius: "50%",
        }}
      />
      <Typography sx={{ display: isNonMobile ? "block" : "none" }}>
        TrikaniaMusic
      </Typography>
    </Box>
  );
};

export default LogoStyle;
