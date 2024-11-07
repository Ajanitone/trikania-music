import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Box, Typography, useTheme, Button, InputBase } from "@mui/material";

import { shades } from "../theme";

import { useNavigate } from "react-router-dom";

const Item1 = ({ item, width, handleDelete }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isHovered, setIsHovered] = useState(false);

  const {
    palette: { neutral },
  } = useTheme();
  const formattedCreatedAt = new Date(item.createdAt).toLocaleString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });
  return (
    <Box width={400}>
      <Box
        position="relative"
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
      >
        {item.products.map((product) => (
          <Box>
            <img
              alt={product._id?.name}
              src={product._id?.profileImage}
              width="300px"
              height="400px"
              onClick={() => navigate(`/item/${product._id?._id}`)}
              style={{
                cursor: "pointer",
                borderRadius: "10px",
                boxShadow: "0 2px 4px rgba(1, 1, 1, 0.1)",
              }}
            />
            <Typography>{product._id?.name}</Typography>
            <Typography>{product._id?.price}€</Typography>
          </Box>
        ))}
        <Box
          display={isHovered ? "block" : "none"}
          width="100%"
          padding="0 25%"
          position="absolute"
          bottom="10%"
          left="0"
        >
          <Box display="flex" justifyContent="space-between">
            {/* BUTTON */}
            <Button
              onClick={() => handleDelete(`${item._id}`)}
              sx={{
                backgroundColor: shades.primary[300],
                color: "white",
                "&:hover": { backgroundColor: "red" },
              }}
            >
              Delete
            </Button>
            {/* <Button
              onClick={() => navigate(`/edit-product/${item._id}`)}
              sx={{
                backgroundColor: shades.primary[300],
                color: "white",
                "&:hover": { color: "red" },
              }}
            >
              Edit
            </Button> */}
          </Box>
        </Box>
      </Box>
      <Box mt="3px">
        <Typography>{item?.userName}</Typography>
        <Typography>{item?.userId?.street}</Typography>
        <Typography>{item?.userId?.city}</Typography>
        <Typography>{item?.userId?.zipCode}</Typography>

        <Typography fontWeight="bold">{formattedCreatedAt} </Typography>
      </Box>
    </Box>
  );
};

export default Item1;
