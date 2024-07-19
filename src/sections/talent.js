import React from "react";

// Material
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { useTheme } from "@mui/material/styles";
import { useEffect } from "react";

// Custom components
import Tx from "../components/tx";
import ReportChicagosTechReskillingImperative from "../images/report_chicagos_tech_reskilling_imperative.jpg";
import ReportTheBestTechCities from "../images/report_the_best_tech_cities.jpg";
import Hr from "../components/hr";
import ThumbnailLink from "../components/thumbnailLink";
import Button from "../components/customButton";
import From from "../components/from";
import { ChartingStack, columns } from "../components/chartingStack";
import Theme from "../components/theme";
import NumberStat from "../components/numberStat";
import NewHero from "../components/newHero";
import {
  FeatureBlock,
  FullBleedFeatureBlock,
} from "../components/featureBlock";
import { contentPadding, wrapStringsWithTags } from "../utils/helpers";
import Img from "../components/img";
import { TwoColSidebars } from "../components/layout";
import NewsStories from "../components/newsStories";
import XTalent from "../images/xTalent.svg";
import PhoChartPresentation from "../images/pho_chart_presentation.jpg";
import PhoTechworker from "../images/pho_techworker.jpg";
import PhoWalkway from "../images/good_jobs_challenge.jpg";
import PhoLightbeams from "../images/lazers_slide.jpg";
import LogosBg from "../images/strongStartLogos.png";
import LogosHorizontal from "../images/logos-horizontal.png";
import PhotoGroup01 from "../images/photogroup_01.png";
import PhotoGroup02 from "../images/photogroup_02.png";
import PhotoGroup03 from "../images/photogroup_03.png";
import TalentStories1 from "../images/2022_talent_stories_1.jpg";
import TalentStories2 from "../images/2022_talent_stories_2.jpg";
import TalentStories3 from "../images/2022_talent_stories_3.jpg";
import IcoTalentGoals1 from "../images/ico_talentgoals_01.svg"
import IcoTalentGoals2 from "../images/ico_talentgoals_02.svg"
import IcoTalentGoals3 from "../images/ico_talentgoals_03.svg"
import IcoTalentGoals4 from "../images/ico_talentgoals_04.svg"
import LogoCCB from "../images/logo_ccb.png";
import LogoNPR from "../images/logo_npr.png";
import LogoBloomberg from "../images/logo_bloomberg.png";
import HeroImageTalent from "../images/hero_talent_cropped.jpg";


const figma = require("../data/figma.json");


const copy = {
  intro: figma.screen["sub-headerdividerbody-copy"]["i158:1751158:1733"] ?? 'not found: intro',
  leadin: figma.screen["sub-headerdividerbody-copy"]["i158:1751158:1735"] ?? 'not found: leadin',
  charting_title: figma.screen["talent"]["140:697"] ?? 'not found: charting_title',

  charting_c1_r1: figma.screen["2021"]["i158:1639158:1464"] ?? 'not found: charting_c1_r1',
  charting_c1_r2: figma.screen["21-goal"]["i158:1639158:1470158:1021"] ?? 'not found: charting_c1_r2',
  charting_c1_r3: figma.screen["21-goal"]["i158:1639158:1471158:1109"] ?? 'not found: charting_c1_r3',
  charting_c1_r4: figma.screen["21-goal"]["i158:1639158:1472158:1154"] ?? 'not found: charting_c1_r4',
  charting_c1_r5: figma.screen["21-goal"]["i158:1639158:1473158:1205"] ?? 'not found: charting_c1_r5',

  charting_c2_r1: figma.screen["2022"]["i158:1639158:1467"] ?? 'not found: charting_c2_r1',
  charting_c2_r2: figma.screen["progress-text"]["i158:1639158:1470158:1027"] ?? 'not found: charting_c2_r2',
  charting_c2_r3: figma.screen["progress-text"]["i158:1639158:1471158:1115"] ?? 'not found: charting_c2_r3',
  charting_c2_r4: figma.screen["progress-text"]["i158:1639158:1472158:1160"] ?? 'not found: charting_c2_r4',
  charting_c2_r5: figma.screen["progress-text"]["i158:1639158:1473158:1211"] ?? 'not found: charting_c2_r5',

  talent_highlights_heading: figma.screen["page-titleicon"]["h1_talent__-I158:1389;158:1371"] ?? 'not found: talent_highlights_heading',
  talent_highlights_subheading: figma.screen["sub-headerdividerbody-copy"]["i158:1389158:1373"] ?? 'not found: talent_highlights_subheading',
  talent_highlights_content: figma.screen["sub-headerdividerbody-copy"]["i158:1389158:1375"] ?? 'not found: talent_highlights_content',

  strong_start_heading: figma.screen["frame-38"]["i724:6221212:4016"] ?? 'not found: strong_start_heading',
  strong_start_content: figma.screen["frame-36"]["i724:6221212:4020"] ?? 'not found: strong_start_content',
};

export default function Talent(props) {
  const theme = useTheme(Theme);

  useEffect(() => {
    // once DOM loads, set all <a> tags to open in new tab
    const links = document.querySelectorAll(".markdown-area a");
    links.forEach((link) => {
      link.setAttribute("target", "_blank");
    });
  }, []);


  return (
    <>
      <Box
        sx={{
          position: "absolute",
          top: { xs: 12, sm: 24, md: 24, lg: 30, xl: 36 },
          right: { xs: 32, sm: 43, md: 50, lg: 64, xl: 80 },
          zIndex: 900,
          "&:hover": {
            cursor: "pointer",
          },
        }}
      >
        <Box sx={{ position: 'fixed' }}>
          <Img title="Talent" image={XTalent} sx={{
            maxWidth: {xs: '28px', sm: '30px', md: '38px', lg: 'none'},
            '&:hover': {
              cursor: 'pointer',
              opacity: 0.7,
            }
          }} onClick={() => {
            props.handleClose();
          }} />
        </Box>
      </Box>


      <NewHero
        h1TextScreenreader='Talent'
        hrcolor='seafoam'
        copyIntro={`Make Chicagoland home to top-tier tech talent, reflective of our community.`}
        copyLeadIn={`P33 is dedicated to cultivating, retaining, and attracting talent that reflects the diverse makeup of our region. We’re focused on creating a robust tech talent pipeline inclusive of all Chicagoland residents, enabling them to contribute to the digital economy while also retaining our existing tech talent. By building a more diverse tech talent pipeline, we not only foster continued innovation but also position ourselves as a global leader in promoting equity in tech.`}
        heroImage={HeroImageTalent}
        h1Columns={[421, 37, 94]}
        outerColumns={[563, 100, 564]}
        h1Icon={<svg width="94" height="94" viewBox="0 0 94 94" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M46.993 94L39.7806 64.4262L13.7654 80.2305L29.6074 54.2075L0 47.0072L29.5653 39.7925L13.7654 13.7695L39.7806 29.5745L46.993 0L54.2194 29.5745L80.2346 13.7695L64.4347 39.7925L94 47.0072L64.4347 54.2356L80.2346 80.2586L54.2194 64.4543L46.993 94Z" fill="#03FFDA"/></svg>}
        iconY={-20}
        imageAnimation='animate-hero-image animate-image-zoom'
        imageAltText='A person sitting at the water’s edge looking at the Chicago skyline'
        h1Text={
          <svg width="421" height="150" viewBox="0 0 421 150" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28.215 133V60.235H1.62V39.985H81.81V60.235H55.485V133H28.215ZM147.814 86.56V111.94C147.814 114.01 147.814 116.17 147.814 118.42C147.904 120.58 147.994 122.65 148.084 124.63C148.174 126.61 148.264 128.365 148.354 129.895C148.444 131.335 148.534 132.37 148.624 133H124.324C124.144 132.55 123.964 131.92 123.784 131.11C123.694 130.3 123.604 129.49 123.514 128.68C123.424 127.78 123.334 127.06 123.244 126.52C122.164 127.96 120.769 129.31 119.059 130.57C117.439 131.83 115.324 132.82 112.714 133.54C110.194 134.35 107.044 134.755 103.264 134.755C98.0445 134.755 93.5895 133.765 89.8995 131.785C86.2995 129.715 83.5545 126.97 81.6645 123.55C79.7745 120.13 78.8295 116.35 78.8295 112.21C78.8295 108.79 79.3245 105.82 80.3145 103.3C81.3945 100.69 82.9245 98.44 84.9045 96.55C86.8845 94.66 89.2695 93.13 92.0595 91.96C94.9395 90.7 98.1795 89.8 101.779 89.26C105.469 88.63 109.474 88.315 113.794 88.315C114.604 88.315 115.504 88.315 116.494 88.315C117.574 88.315 118.654 88.315 119.734 88.315C120.814 88.315 121.714 88.315 122.434 88.315V84.4C122.434 83.23 122.299 82.195 122.029 81.295C121.849 80.305 121.444 79.45 120.814 78.73C120.274 78.01 119.509 77.47 118.519 77.11C117.529 76.75 116.179 76.57 114.469 76.57C113.029 76.57 111.814 76.75 110.824 77.11C109.834 77.38 109.024 77.83 108.394 78.46C107.854 79.09 107.404 79.855 107.044 80.755C106.774 81.655 106.549 82.69 106.369 83.86H82.0695C82.3395 80.89 83.0145 78.01 84.0945 75.22C85.2645 72.43 87.0645 69.955 89.4945 67.795C92.0145 65.545 95.3445 63.79 99.4845 62.53C103.714 61.18 108.934 60.505 115.144 60.505C120.994 60.505 125.944 61.09 129.994 62.26C134.134 63.34 137.509 65.005 140.119 67.255C142.819 69.415 144.754 72.115 145.924 75.355C147.184 78.595 147.814 82.33 147.814 86.56ZM122.434 103.84V101.545C121.804 101.545 120.949 101.545 119.869 101.545C118.789 101.545 117.709 101.545 116.629 101.545C114.379 101.545 112.489 101.77 110.959 102.22C109.429 102.58 108.169 103.12 107.179 103.84C106.279 104.56 105.604 105.46 105.154 106.54C104.794 107.53 104.614 108.7 104.614 110.05C104.614 111.4 104.884 112.66 105.424 113.83C105.964 114.91 106.819 115.81 107.989 116.53C109.159 117.16 110.599 117.475 112.309 117.475C114.559 117.475 116.359 117.115 117.709 116.395C119.059 115.675 120.049 114.685 120.679 113.425C121.399 112.165 121.849 110.725 122.029 109.105C122.299 107.485 122.434 105.73 122.434 103.84ZM190.566 133H164.241V35.26H190.566V133ZM240.741 117.07C242.271 117.07 243.531 116.935 244.521 116.665C245.601 116.305 246.456 115.855 247.086 115.315C247.806 114.775 248.391 114.1 248.841 113.29C249.291 112.48 249.696 111.625 250.056 110.725H275.841C275.391 112.615 274.626 114.64 273.546 116.8C272.556 118.96 271.161 121.12 269.361 123.28C267.651 125.35 265.491 127.285 262.881 129.085C260.271 130.795 257.076 132.145 253.296 133.135C249.606 134.215 245.241 134.755 240.201 134.755C233.541 134.755 227.871 133.765 223.191 131.785C218.601 129.715 214.866 126.925 211.986 123.415C209.106 119.905 206.991 115.99 205.641 111.67C204.381 107.26 203.751 102.76 203.751 98.17C203.751 93.94 204.201 89.935 205.101 86.155C206.001 82.375 207.396 78.91 209.286 75.76C211.176 72.61 213.606 69.91 216.576 67.66C219.546 65.32 223.011 63.565 226.971 62.395C231.021 61.135 235.611 60.505 240.741 60.505C247.581 60.505 253.296 61.585 257.886 63.745C262.566 65.815 266.256 68.605 268.956 72.115C271.656 75.535 273.591 79.405 274.761 83.725C275.931 87.955 276.516 92.275 276.516 96.685C276.516 97.495 276.516 98.26 276.516 98.98C276.516 99.61 276.471 100.24 276.381 100.87C276.381 101.5 276.336 102.13 276.246 102.76H230.211C230.211 105.19 230.526 107.485 231.156 109.645C231.876 111.805 233.001 113.605 234.531 115.045C236.061 116.395 238.131 117.07 240.741 117.07ZM240.606 76.84C239.256 76.84 237.996 77.065 236.826 77.515C235.746 77.875 234.846 78.415 234.126 79.135C233.406 79.855 232.776 80.755 232.236 81.835C231.786 82.825 231.381 83.95 231.021 85.21C230.751 86.38 230.571 87.685 230.481 89.125H250.191C250.191 87.415 250.011 85.84 249.651 84.4C249.381 82.96 248.886 81.7 248.166 80.62C247.446 79.45 246.456 78.55 245.196 77.92C244.026 77.2 242.496 76.84 240.606 76.84ZM289.815 133V80.62C289.815 78.55 289.815 76.48 289.815 74.41C289.815 72.25 289.815 70.18 289.815 68.2C289.815 66.13 289.77 64.15 289.68 62.26H315.33C315.51 62.8 315.645 63.565 315.735 64.555C315.825 65.455 315.915 66.4 316.005 67.39C316.095 68.38 316.14 69.28 316.14 70.09C316.77 69.1 317.625 68.065 318.705 66.985C319.875 65.815 321.27 64.735 322.89 63.745C324.51 62.755 326.4 61.99 328.56 61.45C330.81 60.82 333.375 60.505 336.255 60.505C339.855 60.505 343.05 61.09 345.84 62.26C348.63 63.43 351.015 65.185 352.995 67.525C355.065 69.775 356.64 72.565 357.72 75.895C358.8 79.225 359.34 83.05 359.34 87.37V133H333.15V90.475C333.15 88.225 332.88 86.29 332.34 84.67C331.8 83.05 330.945 81.835 329.775 81.025C328.695 80.215 327.12 79.81 325.05 79.81C323.25 79.81 321.675 80.215 320.325 81.025C318.975 81.745 317.94 83.05 317.22 84.94C316.5 86.74 316.14 89.305 316.14 92.635V133H289.815ZM368.813 79.945V62.26H378.938V43.9H404.993V62.26H417.413V79.945H404.993V110.32C404.993 111.76 405.173 112.93 405.533 113.83C405.983 114.73 406.703 115.405 407.693 115.855C408.683 116.215 410.123 116.395 412.013 116.395C412.463 116.395 413.003 116.395 413.633 116.395C414.263 116.395 414.938 116.35 415.658 116.26V132.46C414.308 132.91 412.688 133.225 410.798 133.405C408.998 133.675 407.153 133.855 405.263 133.945C403.373 134.035 401.708 134.08 400.268 134.08C396.038 134.08 392.528 133.585 389.738 132.595C387.038 131.605 384.878 130.21 383.258 128.41C381.638 126.52 380.468 124.27 379.748 121.66C379.118 118.96 378.803 115.945 378.803 112.615V79.945H368.813Z" fill="black"/></svg>
        }
      />



      <ChartingStack
        title={copy.charting_title}
        theme='purple'
      >
        {columns('talent', copy.charting_c1_r1, copy.charting_c2_r1, theme, "heading", "", "seafoam")}
        {columns('talent',
          wrapStringsWithTags(copy.charting_c1_r2, "strong", ["1,000"], "html"),
          wrapStringsWithTags(copy.charting_c2_r2, "strong", ["500+"], "html"),
          theme,
          'body',
          IcoTalentGoals1,
          'seafoam'
        )}
        {columns('talent',
          wrapStringsWithTags(
            copy.charting_c1_r3,
            "strong",
            ["Double"],
            "html"
          ),
          wrapStringsWithTags(copy.charting_c2_r3, "strong", ["1,000 students"], "html"),
          theme,
          'body',
          IcoTalentGoals2
        )}
        {columns('talent',
          wrapStringsWithTags(
            copy.charting_c1_r4,
            "strong",
            ["positive"],
            "html"
          ),
          wrapStringsWithTags(
            copy.charting_c2_r4,
            "strong",
            [
              "300+",
              "33 states",
              "10 countries",
              "over 44,000 unique visitors",
              "600+"
            ],
            "html"
          ),
          theme,
          'body',
          IcoTalentGoals3
        )}
        {columns('talent',
          wrapStringsWithTags(
            copy.charting_c1_r5,
            "strong",
            ["Increase"],
            "html"
          ),
          wrapStringsWithTags(
            copy.charting_c2_r5,
            "strong",
            ["40 point increase"],
            "html"
          ),
          theme,
          'body',
          IcoTalentGoals4,
          'seafoam',
          true
        )}
      </ChartingStack>

      <FeatureBlock
        noImageAnimation
        head={
          <>
            <Tx tag="h2" variant="h2" linebreaks="true" sx={{ mb: 4, mt: 0 }}>
              {`2022\nTalent\nEfforts`}
            </Tx>
            <Tx tag="h3" variant="h3">
              {`Tech Talent Alliance (TTA)`}
            </Tx>
          </>
        }
        body={
          <Tx markdown="true">{`
            #### City-wide collaboration in tech

            Founded in 2020, the P33 Tech Talent Alliance has grown to include 52 Chicago-based companies, employing more than 100,000 local employees. The TTA is a center of gravity for tech businesses in Chicago and acts as the engine behind P33’s demand-driven initiatives — a true differentiator for P33’s talent work in Chicago. 
          `}</Tx>
        }
        img={PhoChartPresentation}
        alt={'An entrepreneur giving a pitch presentation'}
      />

      <FeatureBlock
        noImageAnimation
        freeForm="true"
        sx={{ mb: 8 }}
        body={
          <>
            <Box
              sx={{
                backgroundColor: "white",
                height: "100%",
              }}
            >
              <Stack
                direction="column"
                spacing={4}
                sx={{
                  padding: { xl: 6, lg: 6, md: 6, sm: 4, xs: 2 },
                }}
              >
                <Tx tag="h3" variant="h3">
                  {`Strong Start`}
                </Tx>

                <Img
                  src={LogosHorizontal}
                  alt="Logos"
                  sx={{
                    width: "100%",
                    height: "auto",
                    display: { xs: "block", sm: "block", md: "none" },
                  }}
                />
                <Hr color="seafoam" />

                <Tx markdown="true">
                  {`
                  #### Engaging students early to diversify talent pipelines

                  P33 Strong Start brings innovative Chicago-based companies into college computer science classrooms to work through real-world tech projects and build professional relationships. Since its Fall 2021 launch, Strong Start has grown to include four universities, nine companies, and it has engaged 500+ students. In 2022 we doubled the number of students reached in our pilot year, with more to come this academic year.

                  Strong Start is now integrated into computer science curricula at both Illinois Institute of Technology and Chicago State University. This growth and adoption rate shows that employers working with students earlier in the tech talent pathway makes a difference— our ambition is to scale the program so that every Chicago tech student benefits from Strong Start.
                  `}
                </Tx>
              </Stack>
            </Box>
          </>
        }
        img={LogosBg}
      />
      <Box sx={{ mt: 10 }} />
      <FeatureBlock
        className="hoverable"
        imageAnimation="zoom-in-brighten"
        scale="true"
        head={<Tx tag="h3" variant="h3">{`Chicago H-1B Connect`}</Tx>}
        body={
          <Tx markdown="true" sx={{ mb: 16 }}>{`
            #### Fast action in light of tech layoffs

            As industry-wide layoffs began affecting tens of thousands of tech workers at the end of 2022, there was a clear need to support **H-1B visa holders** whose employer-based residency was jeopardized. P33, World Business Chicago, 1871, and a host of other partners quickly launched [Chicago H-1B Connect](https://gotechchicago.com/h1b/). The business-led initiative helps impacted visa holders find new job opportunities with Chicago companies before their 60-day grace period expires. Chicago is the **first and only city in the U.S.** to collectively band together around this issue to support and attract H-1B professionals.

            At launch, **35+ employers added over 1,200 H-1B eligible jobs** to our site, with more companies and jobs being added every day. **More than 44,000 unique visitors** from tech hubs across the country have visited the site in the first two months after its initial launch.

            - **8 ecosystem partners**
            - **40+ employers**
            - **1,200+ H-1B eligible jobs**
            - **29 media placements**
              `}</Tx>
        }
        img={PhoTechworker}
        alt={'A man taking notes'}
      />

      <FullBleedFeatureBlock
        flip="true"
        head={<Tx tag="h3" variant="h3">{`Good Jobs Challenge Grant`}</Tx>}
        body={
          <Tx markdown="true">{`
                #### Co-creating apprenticeship models for Chicagoland’s future

                Out of more than 500 applicants, Chicago received one of 32 American Rescue Plan Good Jobs Challenge Grants in August of 2022. This **$18.5M grant** from the U.S. Economic Development Administration will support reskilling efforts in **four sectors**: Healthcare; Manufacturing; IT; and Transportation, Distribution and Logistics.

                As the co-lead organization for the IT sector, this grant is a **milestone win** for P33 and workforce development in Chicagoland as whole. In this effort, P33 and Discovery Partners Institute are collaborating with prominent Chicagoland employers to build the country’s most powerful engine of **tech talent development through nontraditional pathways**.

                [Learn more about this grant’s scope of work.](https://www.eda.gov/funding/programs/american-rescue-plan/good-jobs-challenge/awardees/Chicago-Cook-Workforce-Partnership)
              `}</Tx>
        }
        img={PhoWalkway}
        alt={'Black and white photo of the underside of the L'}
      />
      <Box sx={{ mb: 16 }}/>
      <FeatureBlock
        imageAnimation="slide-left"
        flip="true"
        head={
          <Tx tag="h3" variant="h3">{`P33 NPS Report & Reskilling Report`}</Tx>
        }
        body={
          <>
            <Tx markdown="true">{`
                  #### Data-driven impact

                  In order to know where, when, and how to best deploy resources to grow Chicago’s tech talent, P33 relies on **deep research and real data**. In 2022, we published two reports that outline the massive opportunities at hand — and how Chicago is poised to capitalize on the moment — bringing tech employers, nonprofits, philanthropy, and others a deeper sense of what is happening in our hyperlocal market.

                  Our **Net Promoter Score Report** distills a national survey of tech professionals to understand Chicago’s trajectory in the talent market, while the **P33 Reskilling Report** identifies ways to accelerate growth in Chicago for diverse populations.
                `}</Tx>
            <Stack
              direction="row"
              spacing={{ xs: 2, md: 4, xl: 8 }}
              sx={{ mt: 4 }}
            >
              <ThumbnailLink
                href="https://p33chicago.com/npsreport2022/"
                text="See our 2022 NPS Report"
                img={ReportTheBestTechCities}
                alt='The cover of P33’s Best Tech Cities report'
              />
              <ThumbnailLink
                href="https://p33chicago.com/reskillingreport2022/"
                text="See our 2022 Reskilling Report"
                img={ReportChicagosTechReskillingImperative}
                alt='The cover of P33’s Reskilling report'
              />
            </Stack>
          </>
        }
        img={PhoLightbeams}
        alt={'Dynamic curves of colored light'}
      />

      <Box sx={{  width: '100%',}} className='hoverable'>
        <Stack
          direction="column"
          spacing={{ xs: 2, sm: 3, md: 4 }}
          sx={{
            maxWidth: "950px",
            ...contentPadding,
          }}>
          <Tx tag="h3" variant="h3">
            {`TechChicago 2022 Events`}
          </Tx>
          <Hr color="seafoam" />
          <Tx tag="p" variant="p"
            sx={{
              mt: 4,
              fontSize: '24px !important',
              fontVariationSettings: `"slnt" 0, "wdth" 100, "wght" 600`,
            }}>
            {`First-of-their-kind events unite the ecosystem`}
          </Tx>
        </Stack>

        <Box
          sx={{
            backgroundColor: theme.extraColors.purple,
            mt: { xs: 16, sm: 20, md: 30 },
            py: { xs: 16, sm: 22, md: 24, lg: 28, xl: 32 },
            position: "relative",
          }}
        >
          <Box
            sx={{
              transform: "translateY(-50%)",
              position: "absolute",
              top: 0,
              width: "100%",
            }}
          >
            <Img src={PhotoGroup01} sx={{ maxWidth: '85%', mx: 'auto' }} alt='Group of photos: 1: Two men in conversation at a P33 event. 2: Entrepreneur networking at a P33 event. 3: Man with a microphone addressing a crowd seated at a P33 event. 4: Woman with a nametag networking at a P33 event. 5: Large group of students and interns networking at a P33 Tech Chicago event.' />
          </Box>
          <TwoColSidebars
            textcolor="white"
            sidebarColor={theme.extraColors.seafoam}
            main={`
              #### TechChicago Week 2022

              For 3 days in July of 2022, P33 celebrated Chicago’s tech community along with 2,000 entrepreneurs, students, and tech professionals. The first-ever TechChicago Week delivered a collective sense of civic pride along with the belief that Chicago is the place leading the future of tech and innovation. Thousands of attendees gathered for events, panels, afterparties, and world-class speakers including:

                - **J.B. Pritzker, Governor of Illinois**
                - **David Simas, President of the Obama Foundation**
                - **Kristi Ross, Co-Founder of tastytrade**
                - **Shermann Dilla Thomas, Recipient of Choose Chicago’s 2022 Tourism Ambassador Award**
            `}
            aside={
              <>
                <div class="embed-container">
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/q7T0zo2Gse4"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                </div>
                <Button
                  colortheme="magenta"
                  sx={{ mt: 3 }}
                  href="https://therainstudio.pixieset.com/techweek/"
                >
                  More Photos +
                </Button>
              </>
            }
          />

          <Box
            sx={{
              transform: "translateY(50%)",
              position: "absolute",
              bottom: 0,
              width: "100%",
            }}
          >
            <Img src={PhotoGroup02} sx={{ maxWidth: '85%', mx: 'auto' }} alt='Group of photos: 1: Woman attending a P33 event. 2: Group of interns at a P33 Tech Chicago Week event. 3: Woman with a nametag networking at a P33 event. 4: Man with a microphone addressing a crowd outdoors at a P33 event. 5: Group of entrepreneurs networking at a P33 event.' />
          </Box>
        </Box>

      </Box>{/* end hoverable */}



      <Box className='hoverable'>
      <TwoColSidebars
        sx={{
          py: { xs: 14, sm: 20, md: 24, lg: 28 },
          mt: 8,
          mb: 16
        }}
        sidebarColor={theme.extraColors.purple}
        main={`
              #### TechChicago Career Launch

              In August of 2022, over **600 interns** from Tech Talent Alliance companies signed up to strengthen their networks and their connection to the city. The interns represented **90+** companies, **80+** universities across the U.S., and **50+** fields of study, with the majority in Computer Science. Events like this continue to bolster our tech talent sector and tell the story of why Chicago is a great place to start a tech career.
            `}
        aside={
          <>
            <div class="embed-container">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/lWavfh6PaTg"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
            <Button
              colortheme="purple"
              sx={{ mt: 3 }}
              href="https://therainstudio.pixieset.com/p33universityevent/"
            >
              More Photos +
            </Button>
          </>
        }
      />
      </Box>{/* end hoverable */}


      <Box className='hoverable'>
      <Box
        sx={{
          backgroundColor: theme.extraColors.purpleLight,
          mt: 4,
          pt: { xs: 16, sm: 22, md: 24, lg: 24, xl: 36 },
          pb: 8,
          position: "relative",
        }}
      >
        <Box
          sx={{
            transform: "translateY(-50%)",
            position: "absolute",
            top: 0,
            width: "100%",
          }}
        >
          <Img src={PhotoGroup03} sx={{ maxWidth: '85%', mx: 'auto' }} alt='Group of photos: 1: A man wearing an augmented reality headset. 2: Woman with a nametag networking at a P33 event. 3: People with nametags networking at a P33 event. 4: Woman with a nametag networking at a P33 event. 5: A man networking at a P33 event.' />
        </Box>
        <TwoColSidebars
          textcolor="#000"
          sidebarColor={theme.extraColors.magenta}
          main={`
                #### TechChicago Off Campus

                Just two months later, P33 hosted the first-ever **TechChicago Off Campus** event in partnership with the University of Chicago, Northwestern University, and University of Illinois-Urbana Champaign and World Business Chicago. Over **600 students** attended, **1,300 employment opportunities** were represented from 30+ companies, and more than **3,000 student-to-employer inquiries** were made during the event. TechChicago Off Campus was a first-of-its-kind event creating connections between students and employers in innovative ways rarely seen at the typical career fair, with meaningful cross-college collaboration and exciting opportunities to strengthen relationships across our tech talent ecosystem.
              `}
          main2={
            <>
              <From right="20">
                <Tx markdown="true">{`
                      #### TechChicago 2022 events by the numbers
                    `}</Tx>
              </From>
              <NumberStat number="5" text={`full days<br/> of events`} />
              <NumberStat
                number="3"
                superscript="K<sup></sup>"
                text="total<br/> attendees"
              />
              <NumberStat
                number="1.1"
                superscript="K<sup></sup>"
                text="students"
              />
              <NumberStat
                number="80"
                superscript="+<sup></sup>"
                text="universities<br/> represented"
              />
              <NumberStat
                number="50"
                superscript="+<sup></sup>"
                text="fields of<br/> study"
              />
              <NumberStat
                number="20"
                superscript="+<sup></sup>"
                text="world-class<br/> speakers"
              />
              <NumberStat
                number="120"
                superscript="+<sup></sup>"
                text="companies<br/> engaged"
              />
              <NumberStat
                number="1.3"
                superscript="K<sup>+</sup>"
                text="employment<br/> opportunities"
              />
              <NumberStat
                number="3"
                superscript="K<sup></sup>"
                text="student-to-employer<br/> inquiries"
              />
            </>
          }
          aside={
            <>
              <div class="embed-container">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/GmUGNh31_mA"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
              <Button
                colortheme="purple"
                sx={{ mt: 3 }}
                href="https://therainstudio.pixieset.com/techchicagooffcampus/highlights/"
              >
                More Photos +
              </Button>
            </>
          }
        />
      </Box>
      </Box>{/* end hoverable */}

      <Box sx={{ mb: 8 }}></Box>

      <Box className='hoverable'>
        <NewsStories
          title="2022 Talent Stories"
          articles={[
            <ThumbnailLink
              href="https://p33chicago.com/wp-content/uploads/2023/04/Bloomberg-Talent.pdf"
              text="Laid-Off Foreign Tech Workers Are Set to Find New Jobs in Chicago"
              img={TalentStories1}
              logo={LogoBloomberg}
              size="large"
            />,
            <ThumbnailLink
              href="https://www.marketplace.org/2022/10/28/could-getting-more-tech-employees-in-classrooms-help-college-students-stick-with-stem/"
              text="Could getting more tech employees in classrooms help college students stick
                  with STEM?"
              img={TalentStories2}
              logo={LogoNPR}
              size="large"
            />,
            <ThumbnailLink
              href="https://p33chicago.com/wp-content/uploads/2023/04/Crain_s-Talent.pdf"
              text="Big employers turn to apprenticeships for tech talent"
              img={TalentStories3}
              logo={LogoCCB}
              size="large"
            />,
          ]}
        />
      </Box>{/* end hoverable */}


      <Box sx={{ ...contentPadding, my: 12 }}>
        <Stack sx={{width: '100%' }} justifyContent='flex-end' direction='row'>
          <Button sectionTheme="founders" onClick={props.handleClickOpen('founders')} >
            Next - Founders &gt;
          </Button>
        </Stack>
      </Box>
    </>
  );
}
