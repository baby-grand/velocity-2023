import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Tx from "./tx";
import { useTheme } from "@mui/material/styles";
export default function Winner(props) {
  const theme = useTheme();
  return (
    <>
      <Card
        className={
          props.size === "large" ? "thumbnailLinkLarge" : "thumbnailLink"
        }
        sx={{
          maxWidth: 'auto',
          bgcolor: "transparent",
          boxShadow: "none",
          border: "none",
          borderRadius: 0,
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          p: 0,
          m: 0,
          ...props.sx
        }}
      >
          <CardContent sx={{ p: 0, m: 0, my: 3, }} >
            <Typography variant="body1" sx={{
              fontWeight: 'bold',
              fontSize: 24,
              lineHeight: 1.2,
              mb: 1,
            }}>
              {props.header}
            </Typography>
            <Tx
              markdown="true"
              sx={{
                '& a': {
                  color: theme.extraColors.black,
                  fontVariationSettings: '"slnt" 0, "wdth" 100, "wght" 400',
                },
                '& a:hover': {
                  color: theme.extraColors.purple,
                },
              }}
            >{`
              ${props.text}
            `}</Tx>
          </CardContent>
          <Box className='animate-hero-image animate-image-zoom'>
            <CardMedia
              sx={{  maxWidth: { xs: '250px', md: '100%' }, }}
              image={props.img}
              component="img"
            />
          </Box>

      </Card>
    </>
  );
}
