import React from 'react';
import { Box } from '@mui/material';
import Tx from '../components/tx';
import HeroImage from '../images/hero_redbuilding.png';
import Htm from '../components/htm';
import From from '../components/from';
import Img from '../components/img';
import Grid from '@mui/material/Grid';
import { logoCircleInner, logoCircleOuter } from "../utils/svg"
import { ParallaxBanner } from "react-scroll-parallax"

const figma = require("../data/figma.json")

const copy = {
  title: <Htm content="title" tag="p" />,
  h1: figma.screen["home-page"]["i952:3156409:2271"] ?? 'NOT FOUND: h1',
  intro: figma.screen["home-page"]["i952:3156409:2270"] ?? 'NOT FOUND: intro',
  intro2: figma.screen["home-page"]["i952:3156409:2293"] ?? 'NOT FOUND: intro2',
  signed_penny: figma.screen["talent"]["153:415"] ?? 'NOT FOUND: signed_penny',
  signed_brad: figma.screen["home-page"]["i952:3156409:2268"] ?? 'NOT FOUND: signed_brad',
  explore_highlights: figma.screen["home-page"]["212:1746"] ?? 'NOT FOUND: explore_highlights',

  regional_priorities: figma.screen["home-page"]["i130:1838130:389"] ?? 'NOT FOUND: regional_priorities',
  founders: figma.screen["home-page"]["i130:1837130:329"] ?? 'NOT FOUND: founders',
  talent: figma.screen["home-page"]["i130:1839130:315"] ?? 'NOT FOUND: talent',

  main_links_large: <Htm content="main-links" />,
  main_links: <Htm content="main-links" tag="p" />,
  we_cant_do_this_without_you: figma.screen["home-page"]["i729:2719729:2630"] ?? 'NOT FOUND: we_cant_do_this_without_you',

  p33_board_of_directors_header: figma.screen["home-page"]["i729:2719729:2626"] ?? 'NOT FOUND: p33_board_of_directors_header',
  p33_board_of_directors_col1: figma.screen["home-page"]["i729:2719729:2631"] ?? 'NOT FOUND: p33_board_of_directors_col1',
  p33_board_of_directors_col2: figma.screen["home-page"]["i729:2719729:2636"] ?? 'NOT FOUND: p33_board_of_directors_col2',
  p33_board_of_directors_col3: figma.screen["home-page"]["i729:2719729:2640"] ?? 'NOT FOUND: p33_board_of_directors_col3',

  p33_staff_header: figma.screen["home-page"]["i729:2719729:2627"] ?? 'NOT FOUND: p33_staff_header',
  p33_staff_col1: figma.screen["home-page"]["i729:2719729:2633"] ?? 'NOT FOUND: p33_staff_col1',
  p33_staff_col2: figma.screen["home-page"]["i729:2719729:2637"] ?? 'NOT FOUND: p33_staff_col2',
  p33_staff_col3: figma.screen["home-page"]["i729:2719729:2641"] ?? 'NOT FOUND: p33_staff_col3',

  pro_bono_partners_header: figma.screen["home-page"]["i729:2719729:2628"] ?? 'NOT FOUND: pro_bono_partners_header',
  pro_bono_partners_col1: figma.screen["home-page"]["i729:2719952:3226"] ?? 'NOT FOUND: pro_bono_partners_col1',
  pro_bono_partners_col2: figma.screen["home-page"]["i729:2719952:3227"] ?? 'NOT FOUND: pro_bono_partners_col2',
  pro_bono_partners_col3: figma.screen["home-page"]["i729:2719952:3228"] ?? 'NOT FOUND: pro_bono_partners_col3',

  p33_funders_header: figma.screen["home-page"]["i729:2719729:2629"] ?? 'NOT FOUND: p33_funders_header',
  p33_funders_col1: figma.screen["home-page"]["i729:2719729:2634"] ?? 'NOT FOUND: p33_funders_col1',
  p33_funders_col2: figma.screen["home-page"]["i729:2719729:2639"] ?? 'NOT FOUND: p33_funders_col2',
  p33_funders_col3: figma.screen["home-page"]["i729:2719729:2642"] ?? 'NOT FOUND: p33_funders_col3',

}

const Hero = (props) => {
  const anime = props.anime

  // React.useEffect(() => {
  //   anime({
  //     targets: '.hero-h1',
  //     opacity: [0, 1],
  //     translateX: [-20, 0],
  //     translateY: [20, 0],
  //     duration: 300,
  //     delay: 300,
  //     easing: 'easeInOutQuad',
  //   });
  //   anime({
  //     targets: '.hero-image',
  //     opacity: [0, 1],
  //     delay: 400,
  //     translateX: [-20, 0],
  //     translateY: [20, 0],
  //     duration: 400,
  //     easing: 'easeInOutQuad',
  //   });
  // }, [
  //   anime
  // ]);
  const ParallaxHeroImage = (props) => {
    return (
      <Img src={HeroImage} alt={props.altText} />
    );
  };
  return (
    <Box sx={{
      position: 'relative',
      py: 4
    }}>
      <Tx tag="h1" linebreaks="true" sx={{ position: 'relative', zIndex: 1 }} className="hero-h1">{copy.h1}</Tx>

      <Box className="hero-image" sx={{
        position: { xs: 'relative', sm: 'absolute' },
        top: 0,
        right: 0,
        mt: { xs: 1, sm: 0 },
        height: '100%',
        width: { xs: '100%', sm: '50%', xl: '47%' },
        maxHeight: { xs: 200, sm: '100%' },
        zIndex: 0,
      }}>
        <ParallaxHeroImage altText={props.altText} />
      </Box>
    </Box>
  )
}

const Credits = (props) => {
  let direction = "-10"
  if (props.alt === true) {
    direction = "10"
  }
  return (
    <>

        <Tx tag="h4" sx={{ mb: 2 }}>{props.header}</Tx>


        <Grid sx={{ mb: 6 }}>
          <Grid container spacing={{ xs: 0, sm: props.twoCols === 'true' ? 0 : 2, md: 6, lg: 8, xl: 12 }}>
            {props.columns.map((item, index) => {
              return (
                <Grid item key={index}
                  className="credits-column"
                  xs={12}
                  sm={
                    props.twoCols === 'true' ? 12 : 4
                  }
                  md={
                    props.twoCols === 'true' ? 6 : 4
                  }
                  sx={{
                    '& ul, & ul li': {
                      listStyle: 'none',
                      m: 0,
                      p: 0,
                    },
                   }}
                  >
                  <Tx markdown="true">{item}</Tx>
                </Grid>
              )
            })}
          </Grid>
        </Grid>

    </>
  )
}
const spinningCircleLogo = (
  <Box sx={{ position: 'absolute', right: 0, left: 0, width: '100%', }}>
    <Box sx={{ position: 'absolute', right: '15%', zIndex: 1, }} data-spinner>
      <Box
        sx={{
          position: 'relative',
          '& .outer': {
            position: 'relative',
            zIndex: 0,
            animation: 'rotate-infinitely 40s linear infinite',
            width: 'calc(100vw / 4)',
            height: 'calc(100vw / 4)',
            maxWidth: 400,
            maxHeight: 400,
          },
          '& .inner': {
            position: 'absolute',
            animation: 'none',
            top: 0,
            left: 0,
            zIndex: 1,
          },
          '& svg': {
            width: '100%',
            height: '100%',
          },
        }}>
        <Box
          component="div" className="inner"
          dangerouslySetInnerHTML={{ __html: logoCircleInner }} />
        <Box
          component="div" className="outer"
          dangerouslySetInnerHTML={{ __html: logoCircleOuter }} />
      </Box>
    </Box>
  </Box>
)
export { Hero, copy, Credits, spinningCircleLogo }