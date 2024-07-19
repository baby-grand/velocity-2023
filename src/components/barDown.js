import React from "react";
import { Parallax } from "react-scroll-parallax";
import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/material";
export default function BarDown(props) {
  const theme = useTheme();
  return (
    <>
      <Box
        sx={{
          width: { xs: 8, sm: 12, lg: 16 },
          display: "flex",
          alignItems: "start",
          height: "100%",
        }}
      >
        <Box
          className='vertical-bar'
          style={{
            transformOrigin: "top",
            width: "100%",
            backgroundColor: props.color,
            height: "100%",
            display: "flex",
          }}
        ></Box>
      </Box>
    </>
  );
}
