import React from "react";
import { Box, Typography } from "@mui/material";
import Tx from "../components/tx";
import anime from "animejs/lib/anime.es.js";
import CloseIcon from "@mui/icons-material/Close";
import { useTheme } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Hr from "../components/hr";
import { ParallaxBanner } from "react-scroll-parallax";
import HeroImageTalent from "../images/hero_talent_cropped.jpg";
import HeroImageFounders from "../images/hero_founders_cropped.jpg";
import HeroImageRegionalPriorities from "../images/hero_regional_priorities_cropped.jpg";
import CardMedia from "@mui/material/CardMedia";
export default function BigLink(props) {
  let isActive = false;
  if (props.thisSection === props.activeBigLink) isActive = true;

  function closeModal() {
    // clear out body tag
    var body = document.querySelector("body");
    body.className = "";

    var backdropElement = document.querySelector(
      ".big-link-backdrop." + props.className
    );
    props.setActiveBigLink(null);
    setTimeout(() => {
      var mainLinks = document.querySelector(".mainLinks");
      window.scrollTo({
        top: mainLinks.getBoundingClientRect().top + window.pageYOffset - 100,
        behavior: "instant",
      });
      anime({
        targets: backdropElement,
        opacity: [1, 0],
        scale: [1, 0.95],
        duration: 100,
        transformOrigin: "0 50%",
        easing: "easeInOutQuad",
      });
      anime({
        targets: ".close-big-link",
        opacity: [1, 0],
        translateX: [0, -20],
        easing: "easeInOutQuad",
        duration: 0,
        delay: 0,
      });
      var bigLinkBackdrop = document.querySelectorAll(".big-link-backdrop");
      bigLinkBackdrop.forEach((el) => {
        el.style.display = "none";
      });
    }, 100);
  }

  const theme = useTheme(),
    innerContent = isActive
      ? {
          // px: {
          //   xs: 3,
          //   sm: 4,
          //   md: 8,
          // },
          boxShadow: "none",
          position: "relative",
          display: "block",
        }
      : {
          position: "relative",
          display: "block",
        },
    modalBackdrop = {
      opacity: 0.5,
      backgroundColor: theme.extraColors.bgSofter,
      width: "100%",
      height: "100%",
      position: "fixed",
      top: 0,
      left: 0,
      zIndex: 10,
    },
    modalPanel = {
      opacity: 0,
      display: "none",
      backgroundColor: theme.extraColors.bgSofter,
      position: "absolute",
      width: {
        xs: "100%",
        // lg: 'calc(100% + 60px)'
      },
      height: {
        xs: "100%",
        lg: "calc(100% + 60px)",
      },
      top: {
        xs: "-60px",
        lg: "-60px",
      },
      left: {
        xs: "0",
        //lg: '-22px'
      },
      zIndex: -1,
      "&:after": {
        content: '""',
        position: "absolute",
        top: 0,
        left: { xs: -8, sm: -12, lg: -16 },
        height: "100%",
        transitionDuration: "0.3s",
        width: { xs: 8, sm: 12, lg: 16 },
        opacity: 5,
        backgroundColor: "var(--theme-bg)",
      },
    },
    closeButton = {
      display: isActive ? "block" : "none",
      opacity: 0,
      position: "absolute",
      top: -60,
      right: { xs: 0 },
      zIndex: 900,
      padding: 3,
      "&:hover": {
        cursor: "pointer",
      },
    },
    animatedIconWrapper = {
      ...props.sx,
      "& span.icon": {
        display: "inline-block",
        marginLeft: "3rem",
        opacity: 0,
        transform: "translate3d(-80px,20px,0) rotate(20deg) scale(0.2)",
        transition:
          "all 0.6s .2s cubic-bezier(0.175, 0.885, 0.32, 1.275), color .2s .6s",
        position: "absolute",
        top: -16,
      },
      "& a:hover": {
        cursor: "pointer",
      },
      "& a:hover span.icon, & span.icon.big-link": {
        opacity: 1,
        transform: {
          xs: "translate3d(-40px,0,0) rotate(0) scale(0.4)",
          sm: "translate3d(-40px,0,0) rotate(0) scale(0.6)",
          lg: "translate3d(0,0,0) rotate(0) scale(1)",
        },
        transition:
          "all 0.4s .2s cubic-bezier(0.175, 0.885, 0.32, 1.275), color 0s 0s",
      },
    };
  function expandModal() {
    const UpdateBodyClass = props.UpdateBodyClass;
    UpdateBodyClass(props.thisSection, document);

    // wait for this to finish, then animate the content
    var backdropElements = document.querySelectorAll(".big-link-backdrop");
    var backdropElement = document.querySelector(
      ".big-link-backdrop." + props.className
    );
    // scroll to top of section
    var selectedSection = "[data-scroll-to-section=" + props.thisSection + "]";
    var section = document.querySelector(selectedSection);

    // window.scrollTo({
    //   top: section.getBoundingClientRect().top + window.pageYOffset - 100,
    //   behavior: "instant",
    // });
    props.setActiveBigLink(props.thisSection);

    // remove .active class from all sections
    document.querySelectorAll(".big-link").forEach((el) => {
      el.classList.remove("active-section");
    });
    setTimeout(() => {
      // add .active class to selectedSection
      section.classList.add("active-section");
    }, 10);

    setTimeout(() => {
      setTimeout(() => {
        backdropElements.forEach((el) => {
          el.style.display = "none";
          el.style.opacity = 0;
        });
        backdropElement.style.display = "block";
      }, 200);
      setTimeout(() => {
        anime({
          display: "block",
          targets: backdropElement,
          opacity: [0, 1],
          translateX: [30, 0],
          translateY: [20, 0],
          scale: [0.95, 1],
          duration: 200,
          easing: "easeInOutQuad",
        });
      }, 200);
      setTimeout(() => {
        anime({
          targets: ".arrive",
          opacity: [0, 1],
          translateY: [20, 0],
          delay: 800,
          duration: 300,
          easing: "easeInOutQuad",
        });
        anime({
          targets: "[data-animate-stagger]",
          opacity: [0, 1],
          translateY: [20, 0],
          delay: anime.stagger(200),
          duration: 300,
          easing: "easeInOutQuad",
        });
        anime({
          targets: "[data-animate-hero]",
          opacity: [0, 1],
          translateX: [-20, 0],
          delay: 600,
          duration: 300,
          easing: "easeInOutQuad",
        });

        window.scrollTo({
          top: section.getBoundingClientRect().top + window.pageYOffset - 100,
          behavior: "smooth",
        });
        anime({
          targets: ".close-big-link",
          opacity: [0, 1],
          translateX: [-20, 0],
          easing: "easeInOutQuad",
          duration: 200,
          delay: 200,
        });
        anime({
          targets: ".close-big-link h4",
          opacity: [0, 1],
          translateX: [-20, 0],
          rotate: [90,90],
          easing: "easeInOutQuad",
          duration: 300,
          delay: 800,
        });
      }, 500);
    }, 100);
  }
  return (
    <>
      <Box
        component="li"
        id={"id-" + props.thisSection}
        data-scroll-to-section={props.thisSection}
        className={"big-link " + isActive ? " big-link active" : ""}
        sx={{
          position: "relative",
          zIndex: isActive ? 20 : 0,
        }}
      >
        <Box component="div" sx={innerContent}>
          <Box
            sx={modalPanel}
            className={props.className + " big-link-backdrop"}
          />
          <Box
            sx={closeButton}
            className="close-big-link"
            onClick={() => {
              closeModal();
            }}
          >
            <CloseIcon sx={{ color: "text.primary", fontSize: 24 }} />
            <Typography variant="h4"
              sx={{
                display: {xs: 'none', md: 'block'},
                color: "text.primary",
                position: "absolute",
                transform: "rotate(90deg)",
                margin: 0,
                padding: 0,
                left: 64,
                bottom: -38,
                fontWeight: 800,
                transformOrigin: "top left",
                width: 'auto',
                whiteSpace: 'nowrap',
              }}>{props.title}</Typography>
          </Box>

          <Box
            sx={animatedIconWrapper}
            className="animated-icon"
            component="div"
          >
            <Box
              sx={
                isActive
                  ? { px: { xs: 3, sm: 4, md: 8 } }
                  : { px: { xs: 0, sm: 0, md: 0 } }
              }
            >
              <Grid
                container
                columnSpacing={
                  isActive
                    ? { xs: 2, md: 4, lg: 6, xl: 8 }
                    : { xs: 0, sm: 0, lg: 0 }
                }
              >
                <Grid item xs={12} md={isActive ? 6 : 0}>
                  {/* Big Link Title */}
                  <Tx tag="h1" sx={{ mb: isActive ? 4 : 0 }}>
                    <a
                      href={"#id-" + props.className}
                      className="big-link-a"
                      style={{
                        display: "block",
                      }}
                      onClick={() => {
                        closeModal();
                        expandModal();
                      }}
                    >
                      <Box
                        component="div"
                        sx={{ display: "inline-block" }}
                        dangerouslySetInnerHTML={{
                          __html: props.title.replace(
                            "Regional Priorities",
                            'Regional<br class="br-tag" /> Priorities'
                          ),
                        }}
                      />
                      <Box
                        component="span"
                        dangerouslySetInnerHTML={{ __html: props.icon }}
                        style={{ width: "20px", height: "20px" }}
                        className={ isActive ? "icon big-link" : "icon" }
                      />
                    </a>
                  </Tx>
                  {/* (end) Big Link Title */}

                  {isActive ? (
                    <>
                      <Tx
                        data-animate-stagger
                        tag="h3"
                        variant="h3"
                        sx={{ mb: 0 }}
                      >
                        {
                          props.thisSection === 'talent' ? `Make Chicagoland home to top-tier tech talent, reflective of our community.`
                          : props.thisSection === 'founders' ? `Cultivate and attract the world-class founders of tomorrow.`
                          : props.thisSection === 'regional_priorities' ? `Position Chicagoland as a leader in emerging industries with substantial societal and human capital implications.`
                          : null
                        }
                      </Tx>
                      <Hr data-animate-stagger color="seafoam" />
                      <Tx data-animate-stagger sx={{ mt: { xs: 0 }, mb: { xs: 4, md: 0 } }}>
                        {
                          props.thisSection === 'talent' ? `One of P33’s core focuses is developing, retaining, and attracting talent that represents who we are as a region. While our city’s population is 60% Black or Latinx, our tech workforce is only 14%. Building a more diverse tech talent pipeline is not only critical for continued innovation, it’s an opportunity to be a global leader in equity in tech.`
                          : props.thisSection === 'founders' ? `P33 Founder’s team works to inclusively accelerate the flow of capital in our region so that Chicago’s startup and venture economy meaningfully contributes to the perception, economic growth, and wellbeing of the city and our tech economy.`
                          : props.thisSection === 'regional_priorities' ? `P33’s Regional Priorities works to inclusively build and activate regional Deep Tech ecosystems, identifying and pushing forward promising emerging markets while continuing to advance existing scientific fields. P33 leans on local strengths and federal initiatives to unlock opportunities for diverse local scientists, researchers, and entrepreneurs, while advancing our nation’s technological prowess and vision.`
                          : null
                        }
                      </Tx>
                    </>
                  ) : null}
                </Grid>
                {isActive ? (
                  <Grid item xs={12} md={6}>
                    <Box sx={{ overflow: 'hidden' }}>
                      <CardMedia
                        image={props.thisSection === 'talent' ? HeroImageTalent : props.thisSection === 'founders' ? HeroImageFounders : props.thisSection === 'regional_priorities' ? HeroImageRegionalPriorities : null}
                        component="img"
                      />
                    </Box>
                    {/* <ParallaxBanner
                      data-animate-hero
                      layers={[{
                        image: props.thisSection === 'talent' ? HeroImageTalent : props.thisSection === 'founders' ? HeroImageFounders : props.thisSection === 'regional_priorities' ? HeroImageRegionalPriorities : null,
                        speed: -40 }]}
                      style={{
                        width: "100%",
                        height: "100%",
                        marginTop: 0,
                        minHeight: 180,
                      }}
                    /> */}
                  </Grid>
                ) : null}
              </Grid>
            </Box>

            {/* Show Active Content */}
            {isActive ? (
              <>
                <Box sx={{ position: "relative", zIndex: 1, pb: 24 }}>
                  {props.content}
                </Box>
              </>
            ) : null}
          </Box>
        </Box>
      </Box>
      {/* {isActive ? (
        <Box
          sx={modalBackdrop}
          onClick={() => {
            closeModal();
          }}
        />
      ) : null} */}
    </>
  );
}
