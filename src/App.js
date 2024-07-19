import React from "react";
import "./App.css";
import Tx from "./components/tx";
import { ParallaxProvider } from "react-scroll-parallax";
import { ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Logo from "./elements/logo";
import theme from "./components/theme";
import Img from "./components/img";
import Container from "@mui/material/Container";
import DevHelper from "./components/devHelper";
import Grid from "@mui/material/Grid";
import { Hero, copy, Credits, spinningCircleLogo } from "./elements/pieces";
import BigLink from "./elements/bigLink";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { foundersIcon, talentIcon, regionalPrioritiesIcon } from "./utils/svg";
import Founders from "./sections/founders";
import Talent from "./sections/talent";
import RegionalPriorities from "./sections/regionalPriorities";
import Hr from "./components/hr";
import anime from "animejs/lib/anime.es.js";
import ExploreLimpArrow from './images/exploreLimpArrow.svg';
import PhotoPenny from './images/photo_Penny.jpg';
import PhotoBrad from './images/photo_Brad.jpg';

// NEW DIALOG -------------------------------------------------
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
// END NEW DIALOG ---------------------------------------------

function App() {




  // NEW DIALOG -------------------------------------------------

  const [trigger, setTrigger] = React.useState('founders');

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = (p33section) => () => {
    scrolltoTopofPage()
    UpdateBodyClass(p33section, document)
    setOpen(true);
    setTrigger(p33section);
    document.getElementById('scroll-dialog-description').scrollTop = 0;
  };

  const handleClose = () => {
    setOpen(false);
    // clear all classes from body tag
    document.body.className = '';
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {

      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  // ------------------------------------------------------------


  function scrolltoTopofPage() {
    window.scrollTo(0, 0);
  }
  const SideLinkItem = (props) => {
    return (
      <Stack direction="row" spacing={1} alignItems="center" className={`side-link-item side-link-item-${props.slug}`}
        {...props}
        sx={{
          position: 'relative',
          cursor: 'pointer',
          '& > span': {
            color: 'black',
          },
          '&:hover [data-hoverstate]': {
            transform: 'scaleX(1)',
            transitionDuration: '0.3s',
          },
         }}
      >
        <Box sx={{ width: 25, height: 25, backgroundColor: props.color }}></Box>
        <Tx tag="h5" component="span" sx={{ whiteSpace: 'nowrap', fontSize: { sm: 18, md: 20 }, position: 'relative', zIndex: 2 }}>{props.title}</Tx>
        <Box data-hoverstate sx={{
          backgroundColor: props.color, position: 'absolute', top: '4px', left: 0, height: 'calc(100% - 7px)', width: '100%', zIndex: 1,
          transformOrigin: 'left',
          transform: 'scaleX(0)',
        }}></Box>
      </Stack>
    )
  }
  function UpdateBodyClass(id, document) {
    [
      "current-page-is-talent",
      "current-page-is-founders",
      "current-page-is-regional_priorities"
    ].forEach((className) => {
      document.querySelector("body").classList.remove(className);
    });
    document.querySelector("body").classList.add("current-page-is-"+id);
  }
const SideLinks = (
  <Box id="side-links"
  sx={{
    position: "fixed",
    backgroundColor: "yellow",
    rotate: "90deg",
    transformOrigin: "left top",
    width: 0,
    zIndex: 9999,
  }}
>
    <Stack direction="row" spacing={4}
      sx={{
        position: "relative",
        p: { sm: 2, md: 3 },
        display: { xs: "none", sm: "flex" },
      }}>

        <SideLinkItem title="Talent" slug="talent" color={theme.extraColors.seafoam} onClick={handleClickOpen('talent')} />
        <SideLinkItem title="Founders" slug="founders" color={theme.extraColors.yellow} onClick={handleClickOpen('founders')} />
        <SideLinkItem title="Regional Priorities" slug="regional_priorities" color={theme.extraColors.magenta} onClick={handleClickOpen('regional_priorities')} />
    </Stack>
</Box>
)




  const dialogStyles = {
    // backdrop:
    '& .MuiBackdrop-root': {
      backgroundColor: 'transparent',
    },
    '& .MuiDialog-paper': {
      backgroundColor: theme.extraColors.bgSofter,
      boxShadow: {
        xs: trigger === 'talent' ? '-10px 0px 0px #03FFDA' : trigger === 'founders' ? '-10px 0px 0px #FBC02E' : trigger === 'regional_priorities' ? '-10px 0px 0px #FF24A1' : null,
        md: trigger === 'talent' ? '-12px 0px 0px #03FFDA' : trigger === 'founders' ? '-12px 0px 0px #FBC02E' : trigger === 'regional_priorities' ? '-12px 0px 0px #FF24A1' : null,
        lg: trigger === 'talent' ? '-30px 0px 0px #03FFDA' : trigger === 'founders' ? '-30px 0px 0px #FBC02E' : trigger === 'regional_priorities' ? '-30px 0px 0px #FF24A1' : null,
      },
      //backgroundImage: `url(${TalentBgImage})`,
      width: '100%',
      maxWidth: { xs: '100%', sm: '100%', md: '100%', lg: '1200px', xl: '1320px' },
      height: '100%',
      maxHeight: '100%',
      margin: 0,
      borderRadius: 0,
      border: 'none',
    },
    '& .MuiDialog-container': {
      width: '100%',
      maxWidth: {
        xs: 'calc(100% - 30px)',
        sm: 'calc(100% - 40px)',
        md: 'calc(100% - 148px)',
        lg: 'calc(100% - 220px)',
        xl: '1320px'
      },
      height: '100%',
      maxHeight: {
        xs: 'calc(100% - 50px)',
        sm: 'calc(100% - 78px)',
        md: 'calc(100% - 100px)',
        lg: 'calc(100% - 130px)',
        xl: 'calc(100% - 130px)'
      },
      margin: {
        xs: '50px auto 0 auto',
        sm: '78px auto 0 auto',
        md: '100px auto 0 auto',
        lg: '130px auto 0 auto',
        xl: '130px auto 0 auto',
      },
      borderRadius: 0,
    },
  }

  return (
    <ThemeProvider theme={theme}>
      <ParallaxProvider>
      <div id="talent"></div>
      <div id="founders"></div>
      <div id="regional_priorities"></div>


{/* NEW DIALOG ------------------------------------------------- */}


      <Dialog
        open={open}
        onClose={handleClose}
        scroll='paper'
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
        sx={dialogStyles}
      >
        <DialogContent sx={{ border: 'none', padding: 0 }} id="scroll-dialog-description" >
          <DialogContentText

            ref={descriptionElementRef}
            tabIndex={-1}
            sx={{
              color: theme.extraColors.black,
            }}
          >
            {
              trigger === 'talent' ? <Talent handleClose={handleClose} handleClickOpen={handleClickOpen} />
              : trigger === 'founders' ? <Founders handleClose={handleClose} handleClickOpen={handleClickOpen} />
              : trigger === 'regional_priorities' ? <RegionalPriorities handleClose={handleClose} handleClickOpen={handleClickOpen} />
              : null
            }
          </DialogContentText>
        </DialogContent>
      </Dialog>


{/* END NEW DIALOG ---------------------------------------------  */}



        <Box className="scroll-container">
          <Box className="App" sx={{ width: "100%", overflow: "hidden" }}>
            <Container
              maxWidth="xl"
              sx={{
                pt: { xs: 4, sm: 6, md: 8, lg: 9, xl: 10 },
                position: 'relative',
              }}
            >
              <Box sx={{
                  position: 'absolute',
                  top: {xs: 68 },
                  right: { xs: 0, lg: 8, xl: 4 },
                  display: { xs: 'none', md: 'block' },
              }}>
                {SideLinks}
              </Box>

              <Logo />

              <Box sx={{ mx: { sm: 4, md: 7, lg: 11, xl: 11 } }}>
                <Box className='hoverable'>
                  <Hero anime={anime} altText="Looking up at one of Chicago’s skyscrapers" />
                  <Hr color="red" />
                  <Box
                    className="intro-copy"
                    sx={{ position: "relative", overflow: "hidden" }}
                  >
                    <Grid>
                      <Grid
                        container
                        spacing={{ xs: "2rem", sm: "2rem", md: 6, lg: 8, xl: 12 }}
                      >
                        <Grid item md={6}>
                          <Tx tag="body1" markdown="true">
                            {`
                              Dear friends,\n
                              We are immensely grateful for the support you have provided to P33 since our inception. In just under four years, we have delivered tangible impact for the Chicagoland region, moving from an idea to a living organization to the launchpad for bold, novel interventions that have shined a positive national spotlight on our region as a thriving, inclusive tech hub. From TechRise to Strong Start to our recent first-of-its kind Chicago H-1B Connect visa campaign to address a national problem, we continue to position Chicago as a bold leader in supporting the underdog.\n
                              The initial period in our short history has been focused on experimentation to learn what works and why in Chicagoland in our three areas of focus: Talent, Founders, and Regional Priorities. We are now investing heavily to determine what the next five years and beyond could look like to ensure our region and residents are prepared to thrive in the rapidly transforming social, economic, environmental, and technological context in which we live. The goal is scale. We want all of our residents to have the opportunity to participate in our tech economy so that our city’s diverse communities contribute their unique perspectives, ideas, and cultures to form an even stronger region. 

                            `}
                          </Tx>
                        </Grid>
                        <Grid item md={6}>
                          <Tx
                            tag="body1"
                            markdown="true"
                            sx={{ pt: { md: 7.8 } }}
                          >
                            {`
                              Our collective progress over the past year would not have been possible without the support of our partners, investors, and the Chicagoland community. Thank you.\n
                              As we look ahead, we know there is still much work to be done. But we are confident that together, we can build a more inclusive and prosperous future for our city and region.`}
                          </Tx>
                          <Stack spacing={6} direction={{ xs: 'column', sm: 'row' }} sx={{ mt: 2 }} className='remove-paragraph-margins'>
                            <Stack direction={{ xs: 'row', sm: 'column' }} spacing={{ xs: 2, sm: 0.8 }}>
                              <Img src={PhotoPenny} alt="Penny Pritzker" sx={{ width: '100%', maxWidth: {xs: 100, sm: 120, md: 120, lg: 150, xl: 200 }, display: 'block' }} />
                              <Box>
                                <Tx tag='h4' sx={{ pt: 2 }}>{`Penny Pritzker`}</Tx>
                                <Tx tag='p1' component='div' sx={{ fontWeight: 600 }}>{`Board Chair, P33`}</Tx>
                                <Tx tag='p1' component='div' sx={{ fontWeight: 600 }}>{`Founder and Chairman, PSP Partners`}</Tx>
                              </Box>
                            </Stack>
                            <Stack direction={{ xs: 'row', sm: 'column' }} spacing={{ xs: 2, sm: 0.8 }}>
                              <Img src={PhotoBrad} alt="Brad Henderson" sx={{ width: '100%', maxWidth: {xs: 100, sm: 120, md: 120, lg: 150, xl: 200 }, display: 'block' }} />
                              <Box>
                                <Tx tag='h4' sx={{ pt: 2 }}>{`Brad Henderson`}</Tx>
                                <Tx tag='p1' component='div' sx={{ fontWeight: 600 }}>{`Chief Executive Officer, P33`}</Tx>
                              </Box>
                            </Stack>
                          </Stack>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Box>
                </Box> {/* end hoverable */}

                  <Hr
                    color="red"
                    weight="thin"
                    sx={{ my: { xs: 4, sm: 6, md: 8, lg: 9, xl: 10 } }}
                  />

                  {spinningCircleLogo}

                  <Img src={ExploreLimpArrow}
                    sx={{
                      maxWidth: {
                        xs: '50%',
                        md: 418
                      },
                      width: '100%',
                      height: 'auto',
                    }}
                  />
                  <h2 className="sr-only">Explore highlights across our three pillars:</h2>
                <Box
                  sx={{
                    mt:{ xs: -4, sm: -4, md: -10 },
                   }}
                ><Hr color="rainbow" sx={{ mb: 4 }} /></Box>

                <Box component="ul" className="mainLinks">

                  <Box onClick={handleClickOpen('talent')}>
                    <BigLink
                      UpdateBodyClass={UpdateBodyClass}
                      className="main-link-talent"
                      url="#link"
                      thisSection="talent"
                      icon={talentIcon}
                      title={copy.talent}
                    />
                  </Box>
                  <Box onClick={handleClickOpen('founders')}>
                    <BigLink
                      UpdateBodyClass={UpdateBodyClass}
                      className="main-link-founders"
                      url="#link"
                      thisSection="founders"
                      icon={foundersIcon}
                      title={copy.founders}
                    />
                  </Box>
                  <Box onClick={handleClickOpen('regional_priorities')}>
                    <BigLink
                      UpdateBodyClass={UpdateBodyClass}
                      className="main-link-regional-priorities"
                      url="#link"
                      thisSection="regional_priorities"
                      icon={regionalPrioritiesIcon}
                      title={copy.regional_priorities}
                    />
                  </Box>
                </Box>

                <Hr
                  color="purple"
                  weight="thin"
                  sx={{ my: { xs: 4, sm: 6, md: 8, lg: 9, xl: 10 } }}
                />

                <Box className='hoverable'>

                  <Tx
                    tag="h2"
                    sx={{ maxWidth: { sm: 445, md: 570, lg: 615 } }}
                  >
                    {copy.we_cant_do_this_without_you}
                  </Tx>

                  <Hr color="purple" sx={{ my: {xs: 3, md: 6 } }} />

                  <Grid>
                    <Grid container spacing={{ xs: 0, sm: 3 }}>
                      <Grid item xs={12}>
                        <Credits
                          twoCols='true'
                          header={`P33 Board of Directors`}
                          columns={[
                            `
                              - **Penny Pritzker**, P33 Board Chair, Founder and Chairman, PSP Partners
                              - **Chris Gladwin**, P33 Board Vice-Chair, Co-Founder & CEO, Ocient
                              - **Kelly Welsh**, P33 Board Vice-Chair, Former President, Civic Committee of the Commercial Club of Chicago
                              - **Phillip Alphonse**, Senior Partner, The Vistria Group
                              - **Feyi Ayodele**, Co-Founder & CEO, CancerIQ
                              - **Brian Barnes**, Founder & CEO, M1
                              - **Peter Barris**, Chairman, New Enterprise Associates
                              - **Rashid Bashir**, Dean, Grainger College of Engineering
                              - **Chris Cartwright**, President & CEO, TransUnion
                              - **Margarita Chavez**, Managing Director, AbbVie Venture
                              - **Garry Cooper Jr.**, PhD, CEO & Co-Founder, Rheaply
                              - **Derek Douglas**, President, Civic Committee of the Commercial Club of Chicago
                              - **Richard Edelman**, CEO, Edelman
                            `,
                            `
                              - **Mike Gamson**, CEO, Evozyne
                              - **Kate Gebo**, Executive VP, HR & Labor Relations, United Airlines
                              - **Amanda Lannert**, CEO, Jellyvision
                              - **Angel Mendez**, Executive Chairman, LevaData Inc.
                              - **Diane Primo**, CEO, Purpose Brand
                              - **Jennifer Scanlon**, President & CEO, UL Solutions
                              - **Julia Stasch**, Board Chair, Lever for Change
                              - **Helen Sun**, PhD, Engineering Executive, Meta
                              - **Kate Timmerman**, PhD, CEO, Chicago Quantum Exchange
                              - **Brenda Darden Wilkerson**, President & CEO, AnitaB.org
                              - **Tom Wilson**, Chair, President & CEO, The Allstate Corporation
                              - **Maria Wynne**, CEO Leadership Greater Chicago
                            `,
                          ]}
                        />
                        <Credits
                          header={copy.p33_staff_header}
                          columns={[
                            `
                              - Aleena Agrawal
                              - Leen Bnyat
                              - Lucy Brennan
                              - Weronika Cardoso
                              - Claude Cimeus
                              - Alexandra DeLuca
                              - Tara Guillaume
                            `,`
                              - Tifair Hamed
                              - Brad Henderson
                              - Rebecca Lockowitz
                              - Shawn Park
                              - Meera Raja
                              - Nuwan Samaraweera
                            `,`
                              - Louisa Shepherd
                              - Desiree Vargas Wrigley
                              - Mark Zhang
                              - Erin Amico, former P33 staff
                              - Matthew Muench, former P33 staff
                              - Evan Shy, former P33 staff
                            `,
                          ]}
                          alt
                        />

                      <Tx tag="h4" sx={{ mb: 4 }}>P33 Funders and Pro-Bono Partners</Tx>

                        <Credits
                          header={'Anchors: $1,000,000+ '}
                          columns={[
                            `
                              - Allstate
                              - Chicago Community Trust
                              - Chris Gladwin
                              - Civic Committee of the Commercial Club of Chicago
                              - Crown Family Philanthropies
                              - Elizabeth Morse Charitable Trust
                            `,
                            `
                              - Elizabeth Morse Genius Charitable Trust
                              - Illinois Tool Works
                              - JPMorgan Chase & Co
                              - P33 Board of Directors
                              - Pritzker Foundation
                              - Pritzker Traubert Foundation

                            `,
                            `
                              - Robert R. McCormick Foundation
                              - Steans Family Foundation
                              - TransUnion
                              - United Airlines
                              - Verizon
                            `,
                          ]}
                        />

                        <Credits
                          header={'Catalysts: $500,000+'}
                          columns={[
                            `
                              - Joyce Foundation
                              - MacArthur Foundation
                            `,`
                              - Northern Trust
                              - Peoples Gas
                            `,`
                              - The Duchossois Group
                            `,
                          ]}
                        />

                        <Credits
                          header={'Supporters: $100,000+'}
                          columns={[
                            `
                              - BMO Harris
                              - Boeing
                              - ConAgra
                              - Discover Financial Services
                              - GET Cities
                              - Kinship Foundation
                            `,`
                              - Kristi Ross
                              - Microsoft
                              - Morningstar
                              - Motorola
                              - PNC Bank
                              - Rise Interactive
                            `,`
                              - Searle Funds at The Chicago Community Trust
                              - UL Solutions
                              - Valor Equity Partners
                              - Valor Ventures
                              - World Business Chicago
                            `,
                          ]}
                        />

                        <Credits
                          header={'Friends: $1,000 - $100,000'}
                          columns={[
                            `
                              - 7Wire
                              - Abel Family Foundation
                              - Adam & Marylynne Schwartz
                              - AT&T
                              - Atomic Object
                              - Bank of America
                              - Blackbaud Giving Fund
                              - Bridge Bank
                              - Builders Initiative Foundation
                              - CBRE
                              - CDW
                              - Chicago Innovation Foundation
                              - Cleveland Avenue & CASTUS
                              - CME Group Foundation
                              - CME Ventures
                              - Comcast
                              - Congos HR
                              - Cooley
                              - Corazon Capital
                              - DRW Holdings
                              - Fifth Third Bank
                            `,
                            `
                              - FOODe
                              - G2
                              - Google
                              - Grainger
                              - Hughes Foundation
                              - Hyde Park Venture Partners
                              - Insperity
                              - Israeli Consulate
                              - Jason Heltzer
                              - JKP Family Foundation
                              - JLL
                              - Jump Capital
                              - Litwin Kach LLP
                              - Lofty Ventures
                              - Lucas James
                              - Marylynne and Adam Schwartz
                              - Matt Pulley & Amanda Friedman
                              - Mercato Partners
                              - Moderne Ventures
                              - Morrison Family Foundation
                              - Northern Illinois University
                            `,
                            `
                              - Oak Street Health
                              - Optiver
                              - Origin Ventures
                              - Pledgeling Foundation
                              - Protiviti
                              - Purpose Brand
                              - PwC
                              - Pykosz Family Donor Fund
                              - Rapchat
                              - Redmond
                              - SecondMuse Foundation
                              - Shekhawat Family Charitable Fund
                              - Silicon Valley Bank
                              - Starting Line
                              - Sterling Bay
                              - Suzanne Muchin
                              - Tegus
                              - Willkie Farr & Gallagher LLP
                              - Wilson Sporting Goods
                              - Yagan Family Fund
                            `,
                          ]}
                        />

                        <Credits
                          header={'Pro-Bono Partners'}
                          columns={[
                            `
                              - 50,000 Feet
                              - Accenture
                              - Boston Consulting Group
                              - Deloitte
                              - DLA Piper
                              - Edelman
                            `,`
                              - Energy BBDO
                              - Future Founders
                              - Henry Timmermann
                              - Kirkland & Ellis LLP
                              - KPMG
                              - McKinsey & Company
                            `,`
                              - MMM Program, Northwestern University
                              - Protiviti
                              - PWC
                              - Ropes & Gray LLP
                              - Slalom
                              - West Monroe
                            `,
                          ]}
                        />

                      </Grid>
                    </Grid>
                  </Grid>

                </Box> {/* end hoverable */}

                <Hr
                  color="black"
                  weight="thin"
                  sx={{
                    mt: { xs: 4, sm: 6, md: 8, lg: 9, xl: 9 },
                    mb: { xs: 10, sm: 11, md: 13, lg: 16, xl: 16 },
                  }}
                />

                <Logo />
              </Box>
            </Container>
          </Box>
        </Box>


        <Box component="footer"
          sx={{
            backgroundColor: 'black',
            color: 'white',
            mt: 2,
          }}
        >
          <Container
              maxWidth="xl"
              sx={{
                py: { xs: 4, sm: 6, md: 8, lg: 9, xl: 10 },
                position: 'relative',
                width: 'auto',
              }}
            >
            <Stack
              sx={{
                mx: { sm: 4, md: 7, lg: 11, xl: 11 },
                width: 'auto',
              }}
              direction={{ xs: 'column', md: 'row' }}
              spacing={4}
              justifyContent='space-between'
              width='auto'
            >
              <Box>
                <Typography sx={{ fontWeight: 'bold' }}>For marketing or press inquiries:</Typography>
                <Typography>Rebecca Lockowitz (Randall), P33 Director, Marketing</Typography>
                <Typography>Rebecca.Randall@P33Chicago.com</Typography>
              </Box>
              <Box>
                <Typography sx={{ fontWeight: 'bold' }}>For partnership inquiries:</Typography>
                <Typography>Leen Bnyat, P33 Sr. Development Officer</Typography>
                <Typography>Leen.Bnyat@P33Chicago.com</Typography>
              </Box>
              <Box>
                <Typography sx={{ fontWeight: 'bold' }}>Mailing address:</Typography>
                <Typography>P33 | 1234 W. Fulton Market | Chicago, IL 60607</Typography>
              </Box>
            </Stack>
          </Container>
        </Box>


        {/* <DevHelper /> */}
      </ParallaxProvider>
    </ThemeProvider>
  );
}

export default App;
