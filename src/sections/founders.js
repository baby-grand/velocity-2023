import React from "react";

// Material
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { useTheme } from "@mui/material/styles";
import { useEffect } from "react";

// Custom components
import Tx from "../components/tx";
import Hr from "../components/hr";
import ThumbnailLink from "../components/thumbnailLink";
import From from "../components/from";
import { ChartingStack, columns } from "../components/chartingStack";
import Theme from "../components/theme";
import NumberStat from "../components/numberStat";
import NewHero from "../components/newHero";
import Button from "../components/customButton";
import {
  FeatureBlock,
  FullBleedFeatureBlock,
} from "../components/featureBlock";
import { contentPadding, wrapStringsWithTags } from "../utils/helpers";
import Img from "../components/img";
import NewsStories from "../components/newsStories";
import Winner from '../components/winner';

import XFounders from "../images/xFounders.svg";
import HeroImageFounders from "../images/hero_founders_cropped.jpg";

// Images
import PhoTwinBuildings from "../images/pho_twin_buildings.jpg";
import PhoTwinBuildingsForeground from "../images/twinBuildings_fg.png";
import PhoTwinBuildingsBackground from "../images/twinBuildings_bg.jpg";
import FoundersStories1 from "../images/2022_founders_stories_1.jpg";
import FoundersStories2 from "../images/2022_founders_stories_2.jpg";
import FoundersStories3 from "../images/2022_founders_stories_3.jpg";
import IcoFoundersGoals1 from "../images/ico_foundersgoals_01.svg";
import IcoFoundersGoals2 from "../images/ico_foundersgoals_02.svg";

import PhoCorinneVargas from "../images/pho_CorinneVargas.jpg";
import PhoSpeedRound from "../images/pho_speed_round.jpg";
import PhoJeffOsuji from "../images/pho_JeffOsuji.jpg";
import LogoTechRise from "../images/LogoTechRise.svg";
import LogoTC from "../images/logo_TC.png";
import LogoWBEZ from "../images/logo_WBEZ.png";
import LogoForbes from "../images/logo_forbes.png";
import LogoFortune from "../images/logo_Fortune.png";
import PhoCrowd from "../images/pho_crowd.jpg";

const figma = require("../data/figma.json");
const copy = {
  intro: figma.screen["sub-headerdividerbody-copy"]["i158:1751158:1733"],
  leadin: figma.screen["sub-headerdividerbody-copy"]["i158:1751158:1735"],
  charting_title: figma.screen["talent"]["140:697"],

  charting_c1_r1: figma.screen["2021"]["i158:1639158:1464"],
  charting_c1_r2: figma.screen["21-goal"]["i410:2448410:2340398:6940"],
  charting_c1_r3: figma.screen["21-goal"]["i410:2448410:2359398:6979"],

  charting_c2_r1: figma.screen["2022"]["i158:1639158:1467"],
  charting_c2_r2: figma.screen["progress-text"]["i410:2448410:2340398:6946"],
  charting_c2_r3: figma.screen["progress-text"]["i410:2448410:2359398:6985"],

  talent_highlights_heading:
    figma.screen["page-titleicon"]["h1_talent__-I158:1389;158:1371"],
  talent_highlights_subheading:
    figma.screen["sub-headerdividerbody-copy"]["i158:1389158:1373"],
  talent_highlights_content:
    figma.screen["sub-headerdividerbody-copy"]["i158:1389158:1375"],

  strong_start_heading: figma.screen["frame-38"]["i724:6221212:4016"],
  strong_start_content: figma.screen["frame-36"]["i724:6221212:4020"],
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
          <Img title="Talent" image={XFounders} sx={{
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
        hrcolor='yellow'
        h1TextScreenreader={`Founders`}
        copyIntro={`Cultivate and attract the world-class founders of tomorrow.`}
        copyLeadIn={`P33 is actively engaged in inclusive efforts to accelerate the flow of capital in our region so that Chicago’s startup and venture economy makes a significant impact on the perception, economic growth, and wellbeing of our city and our tech economy.`}
        heroImage={HeroImageFounders}
        h1Columns={[664, 37, 96]}
        outerColumns={[790, 30, 408]}
        h1Icon={<svg width="97" height="98" viewBox="0 0 97 98" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_1063_3939)"><path d="M53.7698 0.726074H42.5938V26.1702H53.7698V0.726074Z" fill="#FBC02D"/><path d="M53.7698 71.6318H42.5938V97.076H53.7698V71.6318Z" fill="#FBC02D"/><path d="M96.3504 43.3193H70.9062V54.4954H96.3504V43.3193Z" fill="#FBC02D"/><path d="M25.4441 43.3193H0V54.4954H25.4441V43.3193Z" fill="#FBC02D"/><path d="M78.2964 10.8891L60.3047 28.8809L68.2074 36.7835L86.1991 18.7918L78.2964 10.8891Z" fill="#FBC02D"/><path d="M28.1441 61.0185L10.1523 79.0103L18.055 86.9129L36.0467 68.9212L28.1441 61.0185Z" fill="#FBC02D"/><path d="M68.1995 61.0236L60.2969 68.9263L78.2886 86.918L86.1913 79.0153L68.1995 61.0236Z" fill="#FBC02D"/><path d="M18.0589 10.884L10.1562 18.7866L28.148 36.7784L36.0506 28.8757L18.0589 10.884Z" fill="#FBC02D"/></g><defs><clipPath id="clip0_1063_3939"><rect width="96.35" height="96.35" fill="white" transform="translate(0 0.726074)"/></clipPath></defs></svg>}
        iconY={-5}
        imageAnimation='animate-hero-image animate-image-zoom'
        imageAltText='A fast-moving Chicago train'
        h1Text={
          <svg width="644" height="151" viewBox="0 0 644 151" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.585 133.726V40.7111H79.11V60.9611H36.315V79.0511H76.41V99.3011H36.315V133.726H9.585ZM126.407 61.2311C130.997 61.2311 135.227 61.8161 139.097 62.9861C143.057 64.1561 146.522 65.8661 149.492 68.1161C152.552 70.2761 155.117 72.8861 157.187 75.9461C159.347 79.0061 160.967 82.4261 162.047 86.2061C163.127 89.9861 163.667 93.9911 163.667 98.2211C163.667 102.721 163.082 106.861 161.912 110.641C160.832 114.421 159.257 117.841 157.187 120.901C155.117 123.961 152.507 126.571 149.357 128.731C146.297 130.891 142.787 132.556 138.827 133.726C134.867 134.896 130.457 135.481 125.597 135.481C119.297 135.481 113.762 134.536 108.992 132.646C104.312 130.756 100.442 128.101 97.3825 124.681C94.3225 121.261 91.9825 117.346 90.3625 112.936C88.8325 108.436 88.0675 103.621 88.0675 98.4911C88.0675 94.2611 88.5625 90.2561 89.5525 86.4761C90.6325 82.6961 92.1625 79.2761 94.1425 76.2161C96.2125 73.1561 98.7775 70.5011 101.837 68.2511C104.987 66.0011 108.587 64.2911 112.637 63.1211C116.777 61.8611 121.367 61.2311 126.407 61.2311ZM125.867 79.0511C124.517 79.0511 123.257 79.2761 122.087 79.7261C121.007 80.0861 120.017 80.7161 119.117 81.6161C118.307 82.5161 117.587 83.7311 116.957 85.2611C116.327 86.7011 115.832 88.5461 115.472 90.7961C115.112 92.9561 114.932 95.4761 114.932 98.3561C114.932 101.686 115.157 104.611 115.607 107.131C116.147 109.561 116.867 111.586 117.767 113.206C118.757 114.736 119.927 115.906 121.277 116.716C122.627 117.436 124.202 117.796 126.002 117.796C127.352 117.796 128.567 117.571 129.647 117.121C130.817 116.581 131.807 115.816 132.617 114.826C133.517 113.836 134.237 112.576 134.777 111.046C135.407 109.516 135.857 107.716 136.127 105.646C136.487 103.576 136.667 101.236 136.667 98.6261C136.667 95.0261 136.397 91.9661 135.857 89.4461C135.407 86.9261 134.732 84.9011 133.832 83.3711C133.022 81.8411 131.942 80.7611 130.592 80.1311C129.242 79.4111 127.667 79.0511 125.867 79.0511ZM245.085 62.9861V111.046C245.085 113.206 245.085 115.636 245.085 118.336C245.085 120.946 245.085 123.601 245.085 126.301C245.175 129.001 245.22 131.476 245.22 133.726H219.435C219.345 133.186 219.255 132.466 219.165 131.566C219.165 130.576 219.12 129.586 219.03 128.596C219.03 127.606 218.985 126.841 218.895 126.301C217.365 128.461 215.655 130.216 213.765 131.566C211.875 132.916 209.76 133.906 207.42 134.536C205.08 135.166 202.38 135.481 199.32 135.481C195.54 135.481 192.21 134.896 189.33 133.726C186.45 132.646 184.02 131.026 182.04 128.866C180.06 126.616 178.575 123.871 177.585 120.631C176.595 117.391 176.1 113.656 176.1 109.426V62.9861H202.425V105.106C202.425 106.726 202.515 108.211 202.695 109.561C202.965 110.911 203.37 112.081 203.91 113.071C204.54 114.061 205.35 114.826 206.34 115.366C207.42 115.816 208.68 116.041 210.12 116.041C212.19 116.041 213.855 115.591 215.115 114.691C216.465 113.791 217.41 112.351 217.95 110.371C218.49 108.301 218.76 105.556 218.76 102.136V62.9861H245.085ZM261.571 133.726V81.3461C261.571 79.2761 261.571 77.2061 261.571 75.1361C261.571 72.9761 261.571 70.9061 261.571 68.9261C261.571 66.8561 261.526 64.8761 261.436 62.9861H287.086C287.266 63.5261 287.401 64.2911 287.491 65.2811C287.581 66.1811 287.671 67.1261 287.761 68.1161C287.851 69.1061 287.896 70.0061 287.896 70.8161C288.526 69.8261 289.381 68.7911 290.461 67.7111C291.631 66.5411 293.026 65.4611 294.646 64.4711C296.266 63.4811 298.156 62.7161 300.316 62.1761C302.566 61.5461 305.131 61.2311 308.011 61.2311C311.611 61.2311 314.806 61.8161 317.596 62.9861C320.386 64.1561 322.771 65.9111 324.751 68.2511C326.821 70.5011 328.396 73.2911 329.476 76.6211C330.556 79.9511 331.096 83.7761 331.096 88.0961V133.726H304.906V91.2011C304.906 88.9511 304.636 87.0161 304.096 85.3961C303.556 83.7761 302.701 82.5611 301.531 81.7511C300.451 80.9411 298.876 80.5361 296.806 80.5361C295.006 80.5361 293.431 80.9411 292.081 81.7511C290.731 82.4711 289.696 83.7761 288.976 85.6661C288.256 87.4661 287.896 90.0311 287.896 93.3611V133.726H261.571ZM391.846 35.9861H418.171V112.261C418.171 114.601 418.171 117.076 418.171 119.686C418.171 122.206 418.171 124.681 418.171 127.111C418.261 129.451 418.306 131.656 418.306 133.726H392.791C392.701 133.006 392.566 132.241 392.386 131.431C392.296 130.621 392.206 129.811 392.116 129.001C392.116 128.191 392.071 127.516 391.981 126.976C390.811 128.686 389.371 130.171 387.661 131.431C385.951 132.691 383.881 133.681 381.451 134.401C379.021 135.121 376.096 135.481 372.676 135.481C368.086 135.481 363.991 134.536 360.391 132.646C356.881 130.756 353.866 128.191 351.346 124.951C348.916 121.621 347.071 117.751 345.811 113.341C344.641 108.841 344.056 103.981 344.056 98.7611C344.056 94.4411 344.506 90.3911 345.406 86.6111C346.396 82.8311 347.746 79.4111 349.456 76.3511C351.166 73.2011 353.281 70.5011 355.801 68.2511C358.411 66.0011 361.336 64.2911 364.576 63.1211C367.906 61.8611 371.551 61.2311 375.511 61.2311C377.671 61.2311 379.606 61.4111 381.316 61.7711C383.116 62.0411 384.691 62.4461 386.041 62.9861C387.481 63.4361 388.696 64.0661 389.686 64.8761C390.676 65.5961 391.396 66.3611 391.846 67.1711V35.9861ZM382.396 79.5911C380.866 79.5911 379.471 79.8161 378.211 80.2661C377.041 80.7161 376.006 81.4361 375.106 82.4261C374.296 83.4161 373.576 84.6761 372.946 86.2061C372.316 87.6461 371.821 89.3561 371.461 91.3361C371.191 93.3161 371.056 95.5661 371.056 98.0861C371.056 101.236 371.281 103.981 371.731 106.321C372.181 108.661 372.856 110.641 373.756 112.261C374.746 113.791 375.916 114.961 377.266 115.771C378.616 116.581 380.236 116.986 382.126 116.986C384.106 116.986 385.726 116.671 386.986 116.041C388.246 115.321 389.281 114.376 390.091 113.206C390.991 111.946 391.621 110.551 391.981 109.021C392.341 107.401 392.566 105.691 392.656 103.891C392.836 102.091 392.926 100.201 392.926 98.2211C392.926 95.2511 392.791 92.6411 392.521 90.3911C392.341 88.0511 391.891 86.0711 391.171 84.4511C390.451 82.8311 389.371 81.6161 387.931 80.8061C386.581 79.9961 384.736 79.5911 382.396 79.5911ZM468.089 117.796C469.619 117.796 470.879 117.661 471.869 117.391C472.949 117.031 473.804 116.581 474.434 116.041C475.154 115.501 475.739 114.826 476.189 114.016C476.639 113.206 477.044 112.351 477.404 111.451H503.189C502.739 113.341 501.974 115.366 500.894 117.526C499.904 119.686 498.509 121.846 496.709 124.006C494.999 126.076 492.839 128.011 490.229 129.811C487.619 131.521 484.424 132.871 480.644 133.861C476.954 134.941 472.589 135.481 467.549 135.481C460.889 135.481 455.219 134.491 450.539 132.511C445.949 130.441 442.214 127.651 439.334 124.141C436.454 120.631 434.339 116.716 432.989 112.396C431.729 107.986 431.099 103.486 431.099 98.8961C431.099 94.6661 431.549 90.6611 432.449 86.8811C433.349 83.1011 434.744 79.6361 436.634 76.4861C438.524 73.3361 440.954 70.6361 443.924 68.3861C446.894 66.0461 450.359 64.2911 454.319 63.1211C458.369 61.8611 462.959 61.2311 468.089 61.2311C474.929 61.2311 480.644 62.3111 485.234 64.4711C489.914 66.5411 493.604 69.3311 496.304 72.8411C499.004 76.2611 500.939 80.1311 502.109 84.4511C503.279 88.6811 503.864 93.0011 503.864 97.4111C503.864 98.2211 503.864 98.9861 503.864 99.7061C503.864 100.336 503.819 100.966 503.729 101.596C503.729 102.226 503.684 102.856 503.594 103.486H457.559C457.559 105.916 457.874 108.211 458.504 110.371C459.224 112.531 460.349 114.331 461.879 115.771C463.409 117.121 465.479 117.796 468.089 117.796ZM467.954 77.5661C466.604 77.5661 465.344 77.7911 464.174 78.2411C463.094 78.6011 462.194 79.1411 461.474 79.8611C460.754 80.5811 460.124 81.4811 459.584 82.5611C459.134 83.5511 458.729 84.6761 458.369 85.9361C458.099 87.1061 457.919 88.4111 457.829 89.8511H477.539C477.539 88.1411 477.359 86.5661 476.999 85.1261C476.729 83.6861 476.234 82.4261 475.514 81.3461C474.794 80.1761 473.804 79.2761 472.544 78.6461C471.374 77.9261 469.844 77.5661 467.954 77.5661ZM517.029 133.726V83.2361C517.029 80.9861 517.029 78.6911 517.029 76.3511C517.029 74.0111 517.029 71.7161 517.029 69.4661C517.029 67.2161 516.984 65.0561 516.894 62.9861H542.679C542.769 63.7061 542.859 64.7861 542.949 66.2261C543.039 67.5761 543.084 69.0161 543.084 70.5461C543.174 72.0761 543.219 73.3811 543.219 74.4611C543.939 72.7511 544.884 71.1311 546.054 69.6011C547.314 67.9811 548.799 66.5411 550.509 65.2811C552.309 64.0211 554.424 63.0311 556.854 62.3111C559.284 61.5911 561.984 61.2311 564.954 61.2311V85.2611C560.004 85.0811 555.909 85.4861 552.669 86.4761C549.519 87.3761 547.179 89.2661 545.649 92.1461C544.119 94.9361 543.354 99.1211 543.354 104.701V133.726H517.029ZM607.7 118.876C609.41 118.876 610.805 118.741 611.885 118.471C612.965 118.111 613.775 117.571 614.315 116.851C614.855 116.041 615.125 115.096 615.125 114.016C615.125 113.206 614.9 112.486 614.45 111.856C614.09 111.136 613.415 110.551 612.425 110.101C611.435 109.651 610.13 109.201 608.51 108.751C606.98 108.211 605.045 107.716 602.705 107.266C596.675 105.826 591.77 104.296 587.99 102.676C584.3 100.966 581.51 99.1211 579.62 97.1411C577.73 95.1611 576.425 93.0461 575.705 90.7961C575.075 88.5461 574.76 86.1611 574.76 83.6411C574.76 81.0311 575.255 78.4211 576.245 75.8111C577.325 73.2011 579.035 70.8161 581.375 68.6561C583.805 66.4061 587.045 64.6061 591.095 63.2561C595.145 61.9061 600.185 61.2311 606.215 61.2311C611.975 61.2311 616.835 61.9061 620.795 63.2561C624.845 64.5161 628.13 66.2261 630.65 68.3861C633.17 70.5461 635.015 72.9311 636.185 75.5411C637.445 78.0611 638.12 80.5811 638.21 83.1011H614.72C614.63 82.4711 614.405 81.7961 614.045 81.0761C613.685 80.3561 613.19 79.6811 612.56 79.0511C611.93 78.4211 611.03 77.9261 609.86 77.5661C608.69 77.2061 607.25 77.0261 605.54 77.0261C603.92 77.0261 602.615 77.2061 601.625 77.5661C600.725 77.9261 600.05 78.4661 599.6 79.1861C599.24 79.8161 599.06 80.5361 599.06 81.3461C599.06 82.2461 599.375 83.0561 600.005 83.7761C600.725 84.4061 602.075 85.0361 604.055 85.6661C606.125 86.2061 609.05 86.9261 612.83 87.8261C618.5 89.0861 623.09 90.5261 626.6 92.1461C630.2 93.7661 632.99 95.5661 634.97 97.5461C637.04 99.5261 638.435 101.731 639.155 104.161C639.965 106.501 640.37 109.066 640.37 111.856C640.37 115.006 639.74 118.021 638.48 120.901C637.31 123.691 635.375 126.211 632.675 128.461C630.065 130.621 626.6 132.331 622.28 133.591C618.05 134.851 612.92 135.481 606.89 135.481C601.13 135.481 596.135 134.851 591.905 133.591C587.765 132.331 584.345 130.621 581.645 128.461C578.945 126.211 576.83 123.646 575.3 120.766C573.86 117.886 572.96 114.916 572.6 111.856H597.035C597.395 112.936 597.845 113.926 598.385 114.826C598.925 115.726 599.645 116.491 600.545 117.121C601.535 117.661 602.615 118.111 603.785 118.471C604.955 118.741 606.26 118.876 607.7 118.876Z" fill="black"/></svg>
        }
      />



      <ChartingStack
        title={copy.charting_title}
        theme='seafoam'
      >
        {columns('founders', `2021 Founders Goals`, `Progress Through 2022`, theme, "heading", "", "yellow")}
        {columns('founders',
          wrapStringsWithTags(copy.charting_c1_r2, "strong", ["$5 million"], "html"),
          wrapStringsWithTags(copy.charting_c2_r2, "strong", ["$2 million","$48.9 million"], "html"),
          theme,
          'body',
          IcoFoundersGoals1
        )}
        {columns('founders',
          wrapStringsWithTags( copy.charting_c1_r3, "strong", ["10X"], "html" ),
          wrapStringsWithTags(copy.charting_c2_r3, "strong", ["$77 million","17X ROI, surpassing our five-year goal of 10X"], "html"),
          theme,
          'body',
          IcoFoundersGoals2,
          'yellow',
          true
        )}
      </ChartingStack>

      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{
          ...contentPadding,
        }}
      >
        <From right="20">
          <Tx tag="h2" variant="h2">
            {`2022 Founder Highlights`}
          </Tx>
        </From>
        <From left="20">
          <Img src={LogoTechRise} sx={{
            maxWidth: 197,
            objectFit: 'contain',
            }} width='197' height='67' />
        </From>
      </Stack>

      <FeatureBlock
        hrcolor="yellow"
        head={
          <>
            <Tx tag="h3" variant="h3" linebreaks="true">
              TechRise Season 2
            </Tx>
          </>
        }
        body={
          <>
            <Tx markdown="true">{`
              #### Chicago’s premier pitch competition continues

              TechRise Season 2 showcased more than 125 local founders in weekly pitch competitions, awarding a total of $925,000 in prize funds in 2022. The Season 2 Finale invited six of this season’s top founders to take the stage in front of 400+ investors, startups, and ecosystem partners.
            `}</Tx>
          </>
        }
        embed='Ue3m15CsGFQ'
      />


      <Box sx={contentPadding}>
        <From left="50">
          <Hr color="black" weight="thin" noMargin="true"
            sx={{
              mt: { xs: 3, sm: 5, md: 4, lg: 2, xl: 0  },
              mb: { xs: 2, sm: 4, md: 5, lg: 6, xl: 6  },
            }}
          />
        </From>
      </Box>


      <Box sx={{ position: 'relative', mb: 12 }} className='hoverable'>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          justifyContent="space-between"
          spacing={{ xl: 8, lg: 8, md: 2, sm: 2, xs: 2 }}
          sx={{
            ...contentPadding,
            position: 'relative',
            zIndex: 10,
            display: 'flex',
            alignItems: 'flex-end',
          }}>
            <From right="20" sx={{ width: '100%' }}>
              <Winner
                href="https://p33chicago.com/npsreport2022/"
                header="Season 2 $100,000 Grand Prize Winner:"
                text={`Corinne Vargas, Founder of [SMARTCharts](https://www.mysmartcharts.com/)`}
                img={PhoCorinneVargas}
              />
            </From>
            <From left="20" sx={{ width: '100%' }}>
              <Winner
                href="https://p33chicago.com/npsreport2022/"
                header="Season 2 $25,000 People’s Choice Winner:"
                text={`Jeff Osuji, Founder of [Eventnoire](https://www.mysmartcharts.com/)`}
                img={PhoJeffOsuji}
              />
            </From>
        </Stack>
        <Box sx={{
          ...contentPadding,
          py: { md: 5, sm: 4, xs: 2 },
          position: 'relative',
          zIndex: 10,
          backgroundColor: { xs: theme.extraColors.yellow, sm: 'transparent' },
          mt: { xs: 4, sm: 0 }
        }}>
          <Tx markdown="true">{`
            Since deploying **$1.97 million** in grants through TechRise since 2021, P33 has seen founders raise **$48.9 million** in follow-on funding, more than **doubling our initial goal of 10X**. Stay tuned for Season 3 of TechRise, kicking off in April of 2023.
          `}</Tx>
        </Box>


          <Box
            sx={{
              transformOrigin: "bottom left",
              width: "100%",
              height: {xs: '50%', lg: '70%'},
              display: "flex",
              backgroundColor: theme.extraColors.yellow,
              position: 'absolute',
              zIndex: 1,
              left: 0,
              bottom: 0,
              right: 0,
            }}
          />
     </Box>


     <FeatureBlock
        imageAnimation="slide-left"
        sx={{
          my: { xs: 4, sm: 5, md: 6, lg: 7, xl: 16 },
        }}
        hrcolor="yellow"
        head={
          <Tx tag="h3" variant="h3">{`VC Desk`}</Tx>
        }
        body={
          <>
            <Tx markdown="true">{`
              #### Attracting coastal investment

              P33 hosted three VC Desk events in 2022, bringing **11 outside VC firms** to Chicago for a day of curated meetings with founders. The goal was simple: Increase coastal investment in Chicago startups. We matched startups with specific VCs based on Stage, Sector, and Traction for the highest likelihood of mutual interest. In total, we curated over **55 meetings** resulting in a **45% conversion rate** of meetings progressing into the next phase of diligence. When compared to the firm average 5-10% conversion rate of first meetings, we were able to create a uniquely efficient deal flow process.

              #### VC Desk 2022 Stats
            `}</Tx>
            <Stack direction="column" spacing={0}>
              <NumberStat number="3" text={`Events`} />
              <NumberStat number="11" text={`Outside VC<br/> Firms`} />
              <NumberStat number="55" text={`Curated<br/> Meetings`} />
              <NumberStat number="45%" text={`Conversion<br/> Rate`} />
            </Stack>
          </>
        }
        img={PhoCrowd}
        alt={'People networking at a P33 event'}
      />
      <Box sx={{ mt: 16 }} />
      <FullBleedFeatureBlock
        fullBleedImg='true'
        noImagePadding='true'
        hrcolor="yellow"
        head={<Tx tag="h3" variant="h3">{`Speed Round`}</Tx>}
        body={
          <Tx markdown="true">{`
            #### Fast feedback for founders

            In partnership with Rhetoric and GET Cities, P33 launched a new program, Speed Round, designed to provide founders with high-quality, asynchronous feedback on their pitches.

            #### Here’s how it works:

            1. **Founders upload their pitch deck and recording of their pitch**
            2. **P33 provides initial feedback and insight**
            3. **Founders revise and upload an updated pitch**
            4. **Seasoned investors and founders provide final pitch feedback**
            5. **Founders get access to our VC database to start requesting introductions**

            SpeedRound helps boost the likelihood of early-stage fundraising for local startups. Since March 2022, the P33 team has enrolled **37 pre-seed and seed companies**, and has helped 13 of these companies close over **$34.6M in funding**.
          `}</Tx>
        }
        img={PhoSpeedRound}
        alt={'A man giving a presentation at a P33 event'}
      />

      <Box sx={{ mt: 16 }} />
      <FullBleedFeatureBlock
        foregroundImageMask={[PhoTwinBuildingsForeground, PhoTwinBuildingsBackground]}
        noBgColor="true"
        hrcolor="yellow"
        extraImagePadding="true"
        flip="true"
        head={<Tx tag="h3" variant="h3">{`On Deck`}</Tx>}
        themecolors={[theme.extraColors.seafoamLight, theme.extraColors.red]}
        body={
          <Tx markdown="true">{`
            #### Tapping in to a network of knowledge

            OnDeck enables employees at P33’s corporate partners to reinvest their time and talent back into our community of early-stage founders. Through **volunteer project-based support**, the program has engaged **65 employees** across our initial corporate partners. These volunteers contributed over **300 hours** to complete **33 projects** ranging from data analytics to digital marketing campaigns.

            > “I am so glad I was partnered with Mari. She understands the need for the solutions we are building at CrossKudi and that makes working with her stress free and enjoyable."

            _**-Bobola Odebiyi, Founder, CrossKudi**_

            > "It's been a thrill to stretch my financial modeling skills into marketplace businesses, research how public company peers structure their businesses, and then to share that with an engaged business partner to help them set goals and understand where they're headed makes it that much more fulfilling."

            _**-Dylan, PwC Employee**_

          `}</Tx>
        }
        img={PhoTwinBuildings}
      />

      <Box className='hoverable'>
        <NewsStories
          hrcolor="yellow"
          title="2022 Founders Stories"
          articles={[
            <ThumbnailLink
              href="https://p33chicago.com/wp-content/uploads/2023/04/TechCrunch-Founders.pdf"
              text="How Chicago is changing who raises early-stage venture capital"
              img={FoundersStories1}
              logo={LogoTC}
              size="large"
            />,
            <ThumbnailLink
              href="https://www.forbes.com/sites/jaredcouncil/2023/04/06/how-chicago-emerged-as-a-hotbed-of-diverse-owned-startups---hint-theres-a-billionaire-involved/?sh=410b876e4985"
              text="How Chicago Emerged As A Hotbed Of Diverse-Owned Startups"
              img={FoundersStories2}
              logo={LogoForbes}
              size="large"
            />,
            <ThumbnailLink
              href="https://p33chicago.com/wp-content/uploads/2023/04/Fortune-Founders.pdf"
              text="The future of funding: Why more firms are writing checks to Black women"
              img={FoundersStories3}
              logo={LogoFortune}
              size="large"
            />,
          ]}
        />
      </Box>

      <Box sx={{ ...contentPadding, my: 12 }}>
        <Stack sx={{width: '100%' }} justifyContent='space-between' direction='row' spacing={1}>
          <Button sectionTheme="talent" onClick={props.handleClickOpen('talent')} >
            &lt; Talent - Previous
          </Button>
          <Button sectionTheme="regional_priorities" onClick={props.handleClickOpen('regional_priorities')} >
            Next - Regional Priorities &gt;
          </Button>
        </Stack>
      </Box>
    </>
  );
}
