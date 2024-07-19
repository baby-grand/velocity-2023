import React from "react";
import Box from "@mui/material/Box";
import Tx from "../components/tx";
import Grid from "@mui/material/Grid";
export default function BigLink(props) {

  const
    innerContent = {
      position: "relative",
      display: "block",
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
  return (
    <>
      <Box
        component="li"
        id={"id-" + props.thisSection}
        className='big-link'
        sx={{
          position: "relative",
          zIndex: 0,
        }}
      >
        <Box component="div" sx={innerContent}>
          <Box
            sx={animatedIconWrapper}
            className="animated-icon"
            component="div"
          >
            <Box
              sx={{ px: { xs: 0, sm: 0, md: 0 } }}
            >
              <Grid
                container
                columnSpacing={{ xs: 0, sm: 0, lg: 0 }}
              >
                <Grid item xs={12} md={0}>
                  <Tx tag="h1" sx={{ mb: 0 }}>
                    <a
                      href={"#" + props.thisSection}
                      className="big-link-a"
                      style={{
                        display: "block",
                      }}
                    >
                      <Box component="span" className='dot'
                        sx={{
                          display: "inline-block",
                          position: "absolute",
                          top: "50%",
                          left: 0,
                          transform: "translate3d(0,-50%,0)",
                          width: { xs: 10, sm: 14, md: 18, lg: 22, xl: 25},
                          height: { xs: 10, sm: 14, md: 18, lg: 22, xl: 25},
                          backgroundColor: `var(--color-${props.thisSection})`,
                          zIndex: 1,

                        }}
                      ></Box>
                      <Box
                        component="div"
                        sx={{ display: "inline-block", pl: { xs: 2.5, sm: 4, md: 5, lg: 6, xl: 7 } }}
                        dangerouslySetInnerHTML={{
                          __html: props.title.replace(
                            "Regional Priorities",
                            'Regional<br class="br-tag" /> Priorities'
                          ),
                        }}
                      />
                      <Box
                        component="span"
                        className='icon'
                        dangerouslySetInnerHTML={{ __html: props.icon }}
                        sx={{
                          width: "80px", height: "80px",
                          '& svg': {
                            width: "80px",
                            height: "80px",
                            mb: -2
                          }
                        }}
                      />
                    </a>
                  </Tx>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
