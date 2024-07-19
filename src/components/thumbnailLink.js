import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Img from "./img";

export default function ThumbnailLink(props) {
  const theme = useTheme();
  let maxWi
  if(props.size === 'large') {
    maxWi = 'auto'
  } else {
    maxWi = 185
  }
  return (
    <>
      <Card
        className={
          props.size === "large" ? "thumbnailLinkLarge" : "thumbnailLink"
        }
        sx={{
          maxWidth: maxWi,
          bgcolor: "transparent",
          boxShadow: "none",
          border: "none",
          borderRadius: 0,
          p: 0,
          m: 0,
          ...props.sx
        }}
      >
        <a
          href={props.href}
          style={{
            display: 'block',
            textDecoration: props.size === 'large' ? 'none' : 'underline',
          }}
          target="_blank"
          rel="noreferrer"
          >
          <Box className="animate-image animate-image-zoom">
            <CardMedia
              sx={{
                maxWidth: { xs: '250px', md: '100%' },
              }}
              image={props.img}
              component="img"
              alt={props.alt}
            />
          </Box>
          <CardContent
            sx={{
              p: 0,
              m: 0,
              my: 3,
            }}
          >
            {props.logo ?
            <>

                <Box sx={{ width: '100%', overflow: 'hidden', position: 'relative' }}>
                  <Box className="reveal-mask"></Box>
                  <Img src={props.logo}
                    sx={{
                      maxWidth: '360px',
                      mb: 1,
                    }} alt="logo" />
                </Box>
            </>
            : null}
            <Typography variant="body1" sx={{
              fontWeight: 'normal',
              fontSize: props.size === 'large' ? 24 : 16,
              // variable font
              fontVariationSettings: '"slnt" 0, "wdth" 100, "wght" 600',
              lineHeight: '146%',
            }}>
              {props.text}
            </Typography>
          </CardContent>
        </a>
      </Card>
    </>
  );
}
