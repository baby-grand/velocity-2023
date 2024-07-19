import React from "react";
import { Box, CardMedia } from "@mui/material";
import Stack from "@mui/material/Stack";
import Hr from "./hr";
import From from "./from";
import { ParallaxBanner } from "react-scroll-parallax";
import { useTheme } from "@mui/material/styles";
import { Parallax } from "react-scroll-parallax";
import { contentPadding } from "../utils/helpers";
import Img from './img'

function FeatureBlock(props) {
  const embeddedVideo = props.embed ? (
    <Box>
      <From left="20" bottom="20">
      <iframe
        width="100%"
        style={{ aspectRatio: 1.75 / 1 }}
        src={"https://www.youtube.com/embed/"+props.embed}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      </From>
    </Box>
  ) : null;

    let imageAnimation = "";
    if (props.noImageAnimation) {
      imageAnimation = "no-image-animation";
    } else {
      if (props.imageAnimation === 'zoom-in') {
        imageAnimation = "animate-hero-image animate-image-zoom";
      } else if (props.imageAnimation === 'zoom-in-brighten') {
        imageAnimation = "animate-hero-image animate-image-zoom animate-image-brighten";
      } else if (props.imageAnimation === 'slide-left') {
        imageAnimation = "animate-hero-image animate-image-slide-left";
      } else {
        imageAnimation = "animate-hero-image";
      }
    }
  const imageOrVideo = (
    <>
        {props.foregroundImg ?
          <>
            <CardMedia title="Presentation" image={props.img} component="image" sx={{ width: 'auto', height: '100%' }}>
              <img
                src={props.foregroundImg}
                alt={props.alt}
                style={{ zIndex: 20, position: "relative", width: "100%" }}
              />
            </CardMedia>
          </>
        :
          <>
            <Box
              className={imageAnimation}>
              <Img image={props.img} sx={{ height: 'auto' }} alt={props.alt} />
            </Box>
          </>
        }
      {embeddedVideo}
    </>
  )
  return (
    <>
      <Box data-content-padding sx={contentPadding} className='hoverable'>
        <Stack
          data-content-outer-stack
          direction={{
            xs: "column",
            md: props.flip === "true" ? "row-reverse" : "row",
          }}
          spacing={{ xs: 2, md: 4, lg: 8, xl: 16 }}
          sx={{
            py: { xs: 2, md: 4, lg: 8 },
            "& *": { m: 0, p: 0 },
          }}
        >
          <Stack
            data-content-inner-stack
            sx={{
              width: { xs: "100%", md: "50%" },
            }}
            direction="column"
            spacing={4}
          >
            {props.freeForm === "true" ? (
              <From
                right={props.flip === "true" ? "-40" : "40"}
                sx={{
                  display: 'flex',
                  height: '100%',
                }}
              >
                {props.body}
              </From>
            ) : (
              <>
                <Stack
                  direction="column"
                  spacing={4}>
                  <From right={props.flip === "true" ? "-40" : "40"}>
                    <Box>{props.head}</Box>
                  </From>
                  <Box
                    data-freeform-false-show-on-mobile
                    sx={{
                      display: { xs: "block", md: "none", maxWidth: '60%', mx: 'auto',  },
                    }}
                  >
                    {imageOrVideo}
                  </Box>
                  <From right={props.flip === "true" ? "-40" : "40"}>
                    <Hr color={
                      props.hrcolor==="yellow" ? "yellow" :
                      props.hrcolor==="seafoam" ? "seafoam" :
                      props.hrcolor==="magenta" ? "magenta" :
                      "seafoam"
                    } noMargin />
                  </From>
                  <From right={props.flip === "true" ? "-40" : "40"}>
                    {props.body}
                  </From>
                </Stack>
              </>
            )}
          </Stack>
          <Box
            sx={{
              width: { xs: "100%", md: "50%" },
              display: { xs: "none", md: "block" },
              padding: 0,
              backgroundColor: "transparent",
            }}
          >
            {imageOrVideo}
          </Box>
        </Stack>
      </Box>
    </>
  );
}


function FullBleedFeatureBlock(props) {
  const theme = useTheme();
  const colContent = (
    <Box
    data-column-1
    data-content-inner-stack
    sx={{
      width: { xs: "100%", md: "50%" },
    }}
  >
    <Box
      sx={{
        padding: { xs: 3, sm: 4, md: 8 },
        maxWidth: 450, mx: 'auto',
      }}>
      <From left="20">
        <Stack
          direction="column"
          spacing={4}
        >
            <Box>{props.head}</Box>
            <Hr
              color={
                props.hrcolor==="yellow" ? "yellow" :
                props.hrcolor==="seafoam" ? "seafoam" :
                props.hrcolor==="magenta" ? "magenta" :
                "seafoam"
              } />
            {props.body}
        </Stack>
      </From>
    </Box>
  </Box>
  )
  const colImage = (
      <Box sx={{ width: { xs: "300px", sm: "60%", md: "50%" }, mx: 'auto' }}>
        <Box
          data-column-2
          sx={{
            display: { xs: "flex", md: "flex" },
            position: "relative",
            backgroundColor: props.themecolors ? props.themecolors[0] : theme.extraColors.purpleLight,
            overflow: "hidden",
          }}
        >
          <Box
            data-magenta-box
            sx={{
              backgroundColor: props.themecolors ? props.themecolors[1] : theme.extraColors.red,
              width: "100%",
              height: "100%",
              zIndex: 10,
              position: "absolute",
              top: '45%',
              left: 0,
            }}
          >
          </Box>
        <Box
          sx={{
            height: "auto",
            display: "flex",
            width: "100%",
            zIndex: 20,
          }}
        >
          <Box sx={{
            padding: props.noImagePadding === 'true' ? 0 : { xs: 4, md: 4, lg: 6, xl: 8 },
            height: "auto",
            width: "100%",
          }}>
            <Box sx={{ position: 'relative' }}>
              {
                props.foregroundImageMask ? (
                  <>
                    <Box
                      sx={{
                        position: "absolute",
                        width: "100%", height: "auto",
                        left: 0,
                        top: 0,
                        zIndex: 0,
                      }}
                      className='animate-hero-image animate-image-slide-left'
                    >
                      <Img image={props.foregroundImageMask[1]} sx={{ width: '100%', height: 'auto' }} alt={props.alt} />
                    </Box>
                    <Img image={props.foregroundImageMask[0]} sx={{ width: '100%', height: 'auto', position: 'relative', zIndex: 1 }} alt={props.alt}/>
                  </>
                ) : <Img image={props.img} sx={{ width: '100%', height: 'auto' }} alt={props.alt} />
              }

            </Box>

          </Box>

        </Box>
      </Box>
    </Box>
  )

  return (
    <>
    <Box sx={{ pl: props.extraImagePadding === 'true' ? { lg: 6, xl: 12} : 0 }} className='hoverable'>
      <Box
        data-content-padding
        sx={{
          px: 0,
          backgroundColor: props.noBgColor === 'true' ? 'transparent' : theme.extraColors.bgSoft,
        }}
      >
        <Stack
          data-content-outer-stack
          direction={{
            xs: "column",
            md: "row",
          }}
          spacing={0}
          sx={{
            "& *": { m: 0, p: 0 },
          }}
        >

          {props.flip === 'true' ?
            <>
              {colImage}
              {colContent}
            </>
          :
            <>
              {colContent}
              {colImage}
            </>
          }

        </Stack>
      </Box>
      </Box>
    </>
  );
}
export { FeatureBlock, FullBleedFeatureBlock }