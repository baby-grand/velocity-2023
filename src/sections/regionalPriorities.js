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
import NewHero from "../components/newHero";
import Button from "../components/customButton";

import {
  FeatureBlock,
  FullBleedFeatureBlock,
} from "../components/featureBlock";
import { contentPadding, wrapStringsWithTags } from "../utils/helpers";
import Img from "../components/img";
import NewsStories from "../components/newsStories";

import HeroRegionalPriorities from "../images/hero_regional_priorities_cropped.jpg";
import RegionalPrioritiesStories1 from "../images/pho_quantum_lab.jpg";
import RegionalPrioritiesStories2 from "../images/pho_zuckerberg_chan.jpg";
import RegionalPrioritiesStories3 from "../images/pho_ev_charging.jpg";
import PhoGovPritzker from "../images/pho_GovPritzker.png";
import PhoEngineering from "../images/pho_engineering.jpg";
import PhotoGroup04 from "../images/photogroup_04.png";
import PhoBiotech from "../images/pho_biotech.jpg";
import IcoRegionalPrioritiesGoals1 from "../images/ico_regionalprioritiesgoals_01.svg";
import IcoRegionalPrioritiesGoals2 from "../images/ico_regionalprioritiesgoals_02.svg";
import IcoRegionalPrioritiesGoals3 from "../images/ico_regionalprioritiesgoals_03.svg";
import LogoCCB from "../images/logo_ccb.png";
import LogoBloomberg from "../images/logo_bloomberg.png";

import XRegionalPriorities from "../images/xRegionalPriorities.svg";

import LogoDuality from "../images/logo_Duality.png";
import PhoQuantumComputing from "../images/photo_quantum_computing.jpg";

const figma = require("../data/figma.json");
const copy = {
  intro: figma.screen["sub-headerdividerbody-copy"]["i158:1751158:1733"],
  leadin: figma.screen["sub-headerdividerbody-copy"]["i158:1751158:1735"],
  charting_title: figma.screen["talent"]["140:697"],

  charting_c1_r1: figma.screen["2021"]["i158:1639158:1464"],
  charting_c1_r2: figma.screen["21-goal"]["i410:2942410:2618398:7764"],
  charting_c1_r3: figma.screen["21-goal"]["i410:2942410:2718398:7813"],
  charting_c1_r4: figma.screen["21-goal"]["i410:2942410:2781410:2558"],

  charting_c2_r1: figma.screen["2022"]["i158:1639158:1467"],
  charting_c2_r2: figma.screen["progress-text"]["i410:2942410:2618398:7770"],
  charting_c2_r3: figma.screen["progress-text"]["i410:2942410:2718398:7819"],
  charting_c2_r4: figma.screen["progress-text"]["i410:2942410:2781410:2564"],

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
          <Img title="Talent" image={XRegionalPriorities} sx={{
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
        noIconAnimation
        h1TextScreenreader="Regional Priorities"
        hrcolor='magenta'
        copyIntro={`Position Chicagoland as a leader in emerging industries with substantial societal and human capital implications.`}
        copyLeadIn={`P33’s Regional Priorities works to inclusively build and activate regional Deep Tech ecosystems, identifying and pushing forward promising emerging markets while continuing to advance existing scientific fields. P33 leans on local strengths and federal initiatives to unlock opportunities for diverse local scientists, researchers, and entrepreneurs, while advancing our nation’s technological prowess and vision.`}
        heroImage={HeroRegionalPriorities}
        h1Columns={[637, 40, 78]}
        outerColumns={[765, 30, 433]}
        h1Icon={<svg width="78" height="94" viewBox="0 0 78 94" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_1087_4075)"><path d="M77.3927 32.7074C74.0245 10.9686 52.9514 -3.72525 31.4154 0.828825C16.5938 3.96333 6.44077 12.9392 1.96164 27.4126C-2.45136 41.6788 0.617024 54.7327 10.8626 65.6836C18.1368 73.4604 25.865 80.8095 33.3861 88.3526C35.2289 90.1998 37.0584 92.0558 38.9806 93.9956C39.2716 93.7311 39.4655 93.568 39.6419 93.3916C48.653 84.376 57.7568 75.4531 66.6533 66.3229C75.7835 56.9546 79.3942 45.6333 77.3927 32.7029V32.7074ZM38.963 53.3572C30.8247 53.3572 24.2294 46.7619 24.2294 38.6237C24.2294 30.4854 30.8247 23.8902 38.963 23.8902C47.1012 23.8902 53.6965 30.4854 53.6965 38.6237C53.6965 46.7619 47.1012 53.3572 38.963 53.3572Z" fill="#FF24A1"/></g><defs><clipPath id="clip0_1087_4075"><rect width="77.9307" height="94" fill="white"/></clipPath></defs></svg>}
        iconY={-12}
        imageAnimation='animate-hero-image animate-image-slide-up'
        imageAltText='Chicago skyline'
        h1Text={
          <svg width="637" height="300" viewBox="0 0 637 300" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M45.63 97.9H36.045V133H9.585V39.985H55.62C61.11 39.985 65.88 40.66 69.93 42.01C74.07 43.36 77.49 45.25 80.19 47.68C82.89 50.02 84.87 52.765 86.13 55.915C87.48 58.975 88.155 62.26 88.155 65.77C88.155 70 87.435 73.6 85.995 76.57C84.555 79.54 82.755 81.925 80.595 83.725C78.525 85.525 76.41 86.875 74.25 87.775C75.69 88.315 77.13 89.125 78.57 90.205C80.01 91.285 81.315 92.77 82.485 94.66C83.655 96.55 84.6 98.89 85.32 101.68C86.04 104.47 86.4 107.845 86.4 111.805V115.72C86.4 117.16 86.4 118.69 86.4 120.31C86.49 121.84 86.535 123.415 86.535 125.035C86.625 126.565 86.76 128.05 86.94 129.49C87.12 130.84 87.345 132.01 87.615 133H61.56C61.2 132.01 60.885 130.84 60.615 129.49C60.345 128.14 60.12 126.61 59.94 124.9C59.85 123.19 59.76 121.345 59.67 119.365C59.67 117.295 59.67 115.09 59.67 112.75V110.32C59.67 107.62 59.31 105.37 58.59 103.57C57.96 101.68 56.655 100.285 54.675 99.385C52.695 98.395 49.68 97.9 45.63 97.9ZM36.045 59.02V78.865H48.735C50.985 78.865 52.875 78.64 54.405 78.19C56.025 77.74 57.33 77.11 58.32 76.3C59.31 75.4 59.985 74.32 60.345 73.06C60.795 71.8 61.02 70.405 61.02 68.875C61.02 66.805 60.57 65.05 59.67 63.61C58.77 62.08 57.42 60.955 55.62 60.235C53.82 59.425 51.525 59.02 48.735 59.02H36.045ZM135.077 117.07C136.607 117.07 137.867 116.935 138.857 116.665C139.937 116.305 140.792 115.855 141.422 115.315C142.142 114.775 142.727 114.1 143.177 113.29C143.627 112.48 144.032 111.625 144.392 110.725H170.177C169.727 112.615 168.962 114.64 167.882 116.8C166.892 118.96 165.497 121.12 163.697 123.28C161.987 125.35 159.827 127.285 157.217 129.085C154.607 130.795 151.412 132.145 147.632 133.135C143.942 134.215 139.577 134.755 134.537 134.755C127.877 134.755 122.207 133.765 117.527 131.785C112.937 129.715 109.202 126.925 106.322 123.415C103.442 119.905 101.327 115.99 99.977 111.67C98.717 107.26 98.087 102.76 98.087 98.17C98.087 93.94 98.537 89.935 99.437 86.155C100.337 82.375 101.732 78.91 103.622 75.76C105.512 72.61 107.942 69.91 110.912 67.66C113.882 65.32 117.347 63.565 121.307 62.395C125.357 61.135 129.947 60.505 135.077 60.505C141.917 60.505 147.632 61.585 152.222 63.745C156.902 65.815 160.592 68.605 163.292 72.115C165.992 75.535 167.927 79.405 169.097 83.725C170.267 87.955 170.852 92.275 170.852 96.685C170.852 97.495 170.852 98.26 170.852 98.98C170.852 99.61 170.807 100.24 170.717 100.87C170.717 101.5 170.672 102.13 170.582 102.76H124.547C124.547 105.19 124.862 107.485 125.492 109.645C126.212 111.805 127.337 113.605 128.867 115.045C130.397 116.395 132.467 117.07 135.077 117.07ZM134.942 76.84C133.592 76.84 132.332 77.065 131.162 77.515C130.082 77.875 129.182 78.415 128.462 79.135C127.742 79.855 127.112 80.755 126.572 81.835C126.122 82.825 125.717 83.95 125.357 85.21C125.087 86.38 124.907 87.685 124.817 89.125H144.527C144.527 87.415 144.347 85.84 143.987 84.4C143.717 82.96 143.222 81.7 142.502 80.62C141.782 79.45 140.792 78.55 139.532 77.92C138.362 77.2 136.832 76.84 134.942 76.84ZM255.017 82.51V122.47C255.017 128.23 254.432 133.45 253.262 138.13C252.092 142.81 250.067 146.77 247.187 150.01C244.397 153.34 240.527 155.86 235.577 157.57C230.627 159.37 224.462 160.27 217.082 160.27C211.412 160.27 206.597 159.73 202.637 158.65C198.677 157.57 195.437 156.13 192.917 154.33C190.397 152.62 188.417 150.73 186.977 148.66C185.627 146.59 184.637 144.52 184.007 142.45C183.377 140.47 183.017 138.67 182.927 137.05H208.847C209.207 138.31 209.702 139.39 210.332 140.29C211.052 141.28 212.042 142.045 213.302 142.585C214.562 143.125 216.137 143.395 218.027 143.395C220.367 143.395 222.257 143.035 223.697 142.315C225.137 141.685 226.217 140.65 226.937 139.21C227.747 137.86 228.287 136.105 228.557 133.945C228.917 131.785 229.097 129.265 229.097 126.385V122.605C227.927 124.405 226.487 125.98 224.777 127.33C223.067 128.68 220.997 129.715 218.567 130.435C216.227 131.155 213.392 131.515 210.062 131.515C205.382 131.515 201.242 130.66 197.642 128.95C194.132 127.15 191.162 124.72 188.732 121.66C186.302 118.51 184.457 114.91 183.197 110.86C181.937 106.72 181.307 102.31 181.307 97.63C181.307 92.14 182.027 87.145 183.467 82.645C184.997 78.055 187.112 74.14 189.812 70.9C192.602 67.57 195.842 65.005 199.532 63.205C203.222 61.405 207.272 60.505 211.682 60.505C215.552 60.505 218.657 60.955 220.997 61.855C223.427 62.755 225.272 63.88 226.532 65.23C227.882 66.49 228.737 67.66 229.097 68.74C229.187 68.2 229.232 67.48 229.232 66.58C229.322 65.68 229.412 64.825 229.502 64.015C229.682 63.205 229.772 62.62 229.772 62.26H255.287C255.287 63.61 255.242 65.05 255.152 66.58C255.152 68.02 255.107 69.595 255.017 71.305C255.017 73.015 255.017 74.815 255.017 76.705C255.017 78.505 255.017 80.44 255.017 82.51ZM219.512 78.595C217.892 78.595 216.407 78.955 215.057 79.675C213.707 80.305 212.537 81.34 211.547 82.78C210.557 84.13 209.747 85.93 209.117 88.18C208.577 90.43 208.307 93.175 208.307 96.415C208.307 99.925 208.712 102.94 209.522 105.46C210.422 107.98 211.682 109.915 213.302 111.265C214.922 112.615 216.857 113.29 219.107 113.29C220.817 113.29 222.302 113.02 223.562 112.48C224.822 111.94 225.857 111.175 226.667 110.185C227.477 109.195 228.107 108.025 228.557 106.675C229.007 105.235 229.322 103.66 229.502 101.95C229.772 100.15 229.907 98.215 229.907 96.145C229.907 93.355 229.772 90.88 229.502 88.72C229.232 86.56 228.737 84.715 228.017 83.185C227.387 81.655 226.352 80.53 224.912 79.81C223.562 79 221.762 78.595 219.512 78.595ZM271.06 133V62.26H297.385V133H271.06ZM271.06 53.485V35.26H297.385V53.485H271.06ZM348.91 60.505C353.5 60.505 357.73 61.09 361.6 62.26C365.56 63.43 369.025 65.14 371.995 67.39C375.055 69.55 377.62 72.16 379.69 75.22C381.85 78.28 383.47 81.7 384.55 85.48C385.63 89.26 386.17 93.265 386.17 97.495C386.17 101.995 385.585 106.135 384.415 109.915C383.335 113.695 381.76 117.115 379.69 120.175C377.62 123.235 375.01 125.845 371.86 128.005C368.8 130.165 365.29 131.83 361.33 133C357.37 134.17 352.96 134.755 348.1 134.755C341.8 134.755 336.265 133.81 331.495 131.92C326.815 130.03 322.945 127.375 319.885 123.955C316.825 120.535 314.485 116.62 312.865 112.21C311.335 107.71 310.57 102.895 310.57 97.765C310.57 93.535 311.065 89.53 312.055 85.75C313.135 81.97 314.665 78.55 316.645 75.49C318.715 72.43 321.28 69.775 324.34 67.525C327.49 65.275 331.09 63.565 335.14 62.395C339.28 61.135 343.87 60.505 348.91 60.505ZM348.37 78.325C347.02 78.325 345.76 78.55 344.59 79C343.51 79.36 342.52 79.99 341.62 80.89C340.81 81.79 340.09 83.005 339.46 84.535C338.83 85.975 338.335 87.82 337.975 90.07C337.615 92.23 337.435 94.75 337.435 97.63C337.435 100.96 337.66 103.885 338.11 106.405C338.65 108.835 339.37 110.86 340.27 112.48C341.26 114.01 342.43 115.18 343.78 115.99C345.13 116.71 346.705 117.07 348.505 117.07C349.855 117.07 351.07 116.845 352.15 116.395C353.32 115.855 354.31 115.09 355.12 114.1C356.02 113.11 356.74 111.85 357.28 110.32C357.91 108.79 358.36 106.99 358.63 104.92C358.99 102.85 359.17 100.51 359.17 97.9C359.17 94.3 358.9 91.24 358.36 88.72C357.91 86.2 357.235 84.175 356.335 82.645C355.525 81.115 354.445 80.035 353.095 79.405C351.745 78.685 350.17 78.325 348.37 78.325ZM399.271 133V80.62C399.271 78.55 399.271 76.48 399.271 74.41C399.271 72.25 399.271 70.18 399.271 68.2C399.271 66.13 399.226 64.15 399.136 62.26H424.786C424.966 62.8 425.101 63.565 425.191 64.555C425.281 65.455 425.371 66.4 425.461 67.39C425.551 68.38 425.596 69.28 425.596 70.09C426.226 69.1 427.081 68.065 428.161 66.985C429.331 65.815 430.726 64.735 432.346 63.745C433.966 62.755 435.856 61.99 438.016 61.45C440.266 60.82 442.831 60.505 445.711 60.505C449.311 60.505 452.506 61.09 455.296 62.26C458.086 63.43 460.471 65.185 462.451 67.525C464.521 69.775 466.096 72.565 467.176 75.895C468.256 79.225 468.796 83.05 468.796 87.37V133H442.606V90.475C442.606 88.225 442.336 86.29 441.796 84.67C441.256 83.05 440.401 81.835 439.231 81.025C438.151 80.215 436.576 79.81 434.506 79.81C432.706 79.81 431.131 80.215 429.781 81.025C428.431 81.745 427.396 83.05 426.676 84.94C425.956 86.74 425.596 89.305 425.596 92.635V133H399.271ZM549.809 86.56V111.94C549.809 114.01 549.809 116.17 549.809 118.42C549.899 120.58 549.989 122.65 550.079 124.63C550.169 126.61 550.259 128.365 550.349 129.895C550.439 131.335 550.529 132.37 550.619 133H526.319C526.139 132.55 525.959 131.92 525.779 131.11C525.689 130.3 525.599 129.49 525.509 128.68C525.419 127.78 525.329 127.06 525.239 126.52C524.159 127.96 522.764 129.31 521.054 130.57C519.434 131.83 517.319 132.82 514.709 133.54C512.189 134.35 509.039 134.755 505.259 134.755C500.039 134.755 495.584 133.765 491.894 131.785C488.294 129.715 485.549 126.97 483.659 123.55C481.769 120.13 480.824 116.35 480.824 112.21C480.824 108.79 481.319 105.82 482.309 103.3C483.389 100.69 484.919 98.44 486.899 96.55C488.879 94.66 491.264 93.13 494.054 91.96C496.934 90.7 500.174 89.8 503.774 89.26C507.464 88.63 511.469 88.315 515.789 88.315C516.599 88.315 517.499 88.315 518.489 88.315C519.569 88.315 520.649 88.315 521.729 88.315C522.809 88.315 523.709 88.315 524.429 88.315V84.4C524.429 83.23 524.294 82.195 524.024 81.295C523.844 80.305 523.439 79.45 522.809 78.73C522.269 78.01 521.504 77.47 520.514 77.11C519.524 76.75 518.174 76.57 516.464 76.57C515.024 76.57 513.809 76.75 512.819 77.11C511.829 77.38 511.019 77.83 510.389 78.46C509.849 79.09 509.399 79.855 509.039 80.755C508.769 81.655 508.544 82.69 508.364 83.86H484.064C484.334 80.89 485.009 78.01 486.089 75.22C487.259 72.43 489.059 69.955 491.489 67.795C494.009 65.545 497.339 63.79 501.479 62.53C505.709 61.18 510.929 60.505 517.139 60.505C522.989 60.505 527.939 61.09 531.989 62.26C536.129 63.34 539.504 65.005 542.114 67.255C544.814 69.415 546.749 72.115 547.919 75.355C549.179 78.595 549.809 82.33 549.809 86.56ZM524.429 103.84V101.545C523.799 101.545 522.944 101.545 521.864 101.545C520.784 101.545 519.704 101.545 518.624 101.545C516.374 101.545 514.484 101.77 512.954 102.22C511.424 102.58 510.164 103.12 509.174 103.84C508.274 104.56 507.599 105.46 507.149 106.54C506.789 107.53 506.609 108.7 506.609 110.05C506.609 111.4 506.879 112.66 507.419 113.83C507.959 114.91 508.814 115.81 509.984 116.53C511.154 117.16 512.594 117.475 514.304 117.475C516.554 117.475 518.354 117.115 519.704 116.395C521.054 115.675 522.044 114.685 522.674 113.425C523.394 112.165 523.844 110.725 524.024 109.105C524.294 107.485 524.429 105.73 524.429 103.84ZM592.56 133H566.235V35.26H592.56V133ZM9.585 283V189.985H52.65C59.76 189.985 65.925 191.245 71.145 193.765C76.365 196.195 80.415 199.66 83.295 204.16C86.265 208.57 87.75 213.79 87.75 219.82C87.75 226.75 86.13 232.465 82.89 236.965C79.65 241.465 75.33 244.84 69.93 247.09C64.62 249.25 58.68 250.33 52.11 250.33H36.45V283H9.585ZM36.45 209.155V231.16H47.655C49.545 231.16 51.3 230.98 52.92 230.62C54.54 230.17 55.935 229.495 57.105 228.595C58.275 227.695 59.175 226.57 59.805 225.22C60.435 223.78 60.75 222.115 60.75 220.225C60.75 217.525 60.165 215.365 58.995 213.745C57.915 212.125 56.385 210.955 54.405 210.235C52.515 209.515 50.265 209.155 47.655 209.155H36.45ZM100.137 283V232.51C100.137 230.26 100.137 227.965 100.137 225.625C100.137 223.285 100.137 220.99 100.137 218.74C100.137 216.49 100.092 214.33 100.002 212.26H125.787C125.877 212.98 125.967 214.06 126.057 215.5C126.147 216.85 126.192 218.29 126.192 219.82C126.282 221.35 126.327 222.655 126.327 223.735C127.047 222.025 127.992 220.405 129.162 218.875C130.422 217.255 131.907 215.815 133.617 214.555C135.417 213.295 137.532 212.305 139.962 211.585C142.392 210.865 145.092 210.505 148.062 210.505V234.535C143.112 234.355 139.017 234.76 135.777 235.75C132.627 236.65 130.287 238.54 128.757 241.42C127.227 244.21 126.462 248.395 126.462 253.975V283H100.137ZM159.495 283V212.26H185.82V283H159.495ZM159.495 203.485V185.26H185.82V203.485H159.495ZM237.345 210.505C241.935 210.505 246.165 211.09 250.035 212.26C253.995 213.43 257.46 215.14 260.43 217.39C263.49 219.55 266.055 222.16 268.125 225.22C270.285 228.28 271.905 231.7 272.985 235.48C274.065 239.26 274.605 243.265 274.605 247.495C274.605 251.995 274.02 256.135 272.85 259.915C271.77 263.695 270.195 267.115 268.125 270.175C266.055 273.235 263.445 275.845 260.295 278.005C257.235 280.165 253.725 281.83 249.765 283C245.805 284.17 241.395 284.755 236.535 284.755C230.235 284.755 224.7 283.81 219.93 281.92C215.25 280.03 211.38 277.375 208.32 273.955C205.26 270.535 202.92 266.62 201.3 262.21C199.77 257.71 199.005 252.895 199.005 247.765C199.005 243.535 199.5 239.53 200.49 235.75C201.57 231.97 203.1 228.55 205.08 225.49C207.15 222.43 209.715 219.775 212.775 217.525C215.925 215.275 219.525 213.565 223.575 212.395C227.715 211.135 232.305 210.505 237.345 210.505ZM236.805 228.325C235.455 228.325 234.195 228.55 233.025 229C231.945 229.36 230.955 229.99 230.055 230.89C229.245 231.79 228.525 233.005 227.895 234.535C227.265 235.975 226.77 237.82 226.41 240.07C226.05 242.23 225.87 244.75 225.87 247.63C225.87 250.96 226.095 253.885 226.545 256.405C227.085 258.835 227.805 260.86 228.705 262.48C229.695 264.01 230.865 265.18 232.215 265.99C233.565 266.71 235.14 267.07 236.94 267.07C238.29 267.07 239.505 266.845 240.585 266.395C241.755 265.855 242.745 265.09 243.555 264.1C244.455 263.11 245.175 261.85 245.715 260.32C246.345 258.79 246.795 256.99 247.065 254.92C247.425 252.85 247.605 250.51 247.605 247.9C247.605 244.3 247.335 241.24 246.795 238.72C246.345 236.2 245.67 234.175 244.77 232.645C243.96 231.115 242.88 230.035 241.53 229.405C240.18 228.685 238.605 228.325 236.805 228.325ZM287.571 283V232.51C287.571 230.26 287.571 227.965 287.571 225.625C287.571 223.285 287.571 220.99 287.571 218.74C287.571 216.49 287.526 214.33 287.436 212.26H313.221C313.311 212.98 313.401 214.06 313.491 215.5C313.581 216.85 313.626 218.29 313.626 219.82C313.716 221.35 313.761 222.655 313.761 223.735C314.481 222.025 315.426 220.405 316.596 218.875C317.856 217.255 319.341 215.815 321.051 214.555C322.851 213.295 324.966 212.305 327.396 211.585C329.826 210.865 332.526 210.505 335.496 210.505V234.535C330.546 234.355 326.451 234.76 323.211 235.75C320.061 236.65 317.721 238.54 316.191 241.42C314.661 244.21 313.896 248.395 313.896 253.975V283H287.571ZM346.929 283V212.26H373.254V283H346.929ZM346.929 203.485V185.26H373.254V203.485H346.929ZM384.401 229.945V212.26H394.526V193.9H420.581V212.26H433.001V229.945H420.581V260.32C420.581 261.76 420.761 262.93 421.121 263.83C421.571 264.73 422.291 265.405 423.281 265.855C424.271 266.215 425.711 266.395 427.601 266.395C428.051 266.395 428.591 266.395 429.221 266.395C429.851 266.395 430.526 266.35 431.246 266.26V282.46C429.896 282.91 428.276 283.225 426.386 283.405C424.586 283.675 422.741 283.855 420.851 283.945C418.961 284.035 417.296 284.08 415.856 284.08C411.626 284.08 408.116 283.585 405.326 282.595C402.626 281.605 400.466 280.21 398.846 278.41C397.226 276.52 396.056 274.27 395.336 271.66C394.706 268.96 394.391 265.945 394.391 262.615V229.945H384.401ZM444.023 283V212.26H470.348V283H444.023ZM444.023 203.485V185.26H470.348V203.485H444.023ZM520.523 267.07C522.053 267.07 523.313 266.935 524.303 266.665C525.383 266.305 526.238 265.855 526.868 265.315C527.588 264.775 528.173 264.1 528.623 263.29C529.073 262.48 529.478 261.625 529.838 260.725H555.623C555.173 262.615 554.408 264.64 553.328 266.8C552.338 268.96 550.943 271.12 549.143 273.28C547.433 275.35 545.273 277.285 542.663 279.085C540.053 280.795 536.858 282.145 533.078 283.135C529.388 284.215 525.023 284.755 519.983 284.755C513.323 284.755 507.653 283.765 502.973 281.785C498.383 279.715 494.648 276.925 491.768 273.415C488.888 269.905 486.773 265.99 485.423 261.67C484.163 257.26 483.533 252.76 483.533 248.17C483.533 243.94 483.983 239.935 484.883 236.155C485.783 232.375 487.178 228.91 489.068 225.76C490.958 222.61 493.388 219.91 496.358 217.66C499.328 215.32 502.793 213.565 506.753 212.395C510.803 211.135 515.393 210.505 520.523 210.505C527.363 210.505 533.078 211.585 537.668 213.745C542.348 215.815 546.038 218.605 548.738 222.115C551.438 225.535 553.373 229.405 554.543 233.725C555.713 237.955 556.298 242.275 556.298 246.685C556.298 247.495 556.298 248.26 556.298 248.98C556.298 249.61 556.253 250.24 556.163 250.87C556.163 251.5 556.118 252.13 556.028 252.76H509.993C509.993 255.19 510.308 257.485 510.938 259.645C511.658 261.805 512.783 263.605 514.313 265.045C515.843 266.395 517.913 267.07 520.523 267.07ZM520.388 226.84C519.038 226.84 517.778 227.065 516.608 227.515C515.528 227.875 514.628 228.415 513.908 229.135C513.188 229.855 512.558 230.755 512.018 231.835C511.568 232.825 511.163 233.95 510.803 235.21C510.533 236.38 510.353 237.685 510.263 239.125H529.973C529.973 237.415 529.793 235.84 529.433 234.4C529.163 232.96 528.668 231.7 527.948 230.62C527.228 229.45 526.238 228.55 524.978 227.92C523.808 227.2 522.278 226.84 520.388 226.84ZM600.117 268.15C601.827 268.15 603.222 268.015 604.302 267.745C605.382 267.385 606.192 266.845 606.732 266.125C607.272 265.315 607.542 264.37 607.542 263.29C607.542 262.48 607.317 261.76 606.867 261.13C606.507 260.41 605.832 259.825 604.842 259.375C603.852 258.925 602.547 258.475 600.927 258.025C599.397 257.485 597.462 256.99 595.122 256.54C589.092 255.1 584.187 253.57 580.407 251.95C576.717 250.24 573.927 248.395 572.037 246.415C570.147 244.435 568.842 242.32 568.122 240.07C567.492 237.82 567.177 235.435 567.177 232.915C567.177 230.305 567.672 227.695 568.662 225.085C569.742 222.475 571.452 220.09 573.792 217.93C576.222 215.68 579.462 213.88 583.512 212.53C587.562 211.18 592.602 210.505 598.632 210.505C604.392 210.505 609.252 211.18 613.212 212.53C617.262 213.79 620.547 215.5 623.067 217.66C625.587 219.82 627.432 222.205 628.602 224.815C629.862 227.335 630.537 229.855 630.627 232.375H607.137C607.047 231.745 606.822 231.07 606.462 230.35C606.102 229.63 605.607 228.955 604.977 228.325C604.347 227.695 603.447 227.2 602.277 226.84C601.107 226.48 599.667 226.3 597.957 226.3C596.337 226.3 595.032 226.48 594.042 226.84C593.142 227.2 592.467 227.74 592.017 228.46C591.657 229.09 591.477 229.81 591.477 230.62C591.477 231.52 591.792 232.33 592.422 233.05C593.142 233.68 594.492 234.31 596.472 234.94C598.542 235.48 601.467 236.2 605.247 237.1C610.917 238.36 615.507 239.8 619.017 241.42C622.617 243.04 625.407 244.84 627.387 246.82C629.457 248.8 630.852 251.005 631.572 253.435C632.382 255.775 632.787 258.34 632.787 261.13C632.787 264.28 632.157 267.295 630.897 270.175C629.727 272.965 627.792 275.485 625.092 277.735C622.482 279.895 619.017 281.605 614.697 282.865C610.467 284.125 605.337 284.755 599.307 284.755C593.547 284.755 588.552 284.125 584.322 282.865C580.182 281.605 576.762 279.895 574.062 277.735C571.362 275.485 569.247 272.92 567.717 270.04C566.277 267.16 565.377 264.19 565.017 261.13H589.452C589.812 262.21 590.262 263.2 590.802 264.1C591.342 265 592.062 265.765 592.962 266.395C593.952 266.935 595.032 267.385 596.202 267.745C597.372 268.015 598.677 268.15 600.117 268.15Z" fill="black"/></svg>
        }
      />


      <ChartingStack title={copy.charting_title} theme="magenta" >
        {columns('regional_priorities',
          `2021 Regional Priorities Goals`,
          `Progress Through 2022`,
          theme,
          "heading",
          "",
          "magenta"
        )}
        {columns('regional_priorities',
          wrapStringsWithTags(copy.charting_c1_r2, "strong", ["#1"], "html"),
          wrapStringsWithTags(
            copy.charting_c2_r2,
            "strong",
            ["closer to the #1 position"],
            "html"
          ),
          theme,
          'body',
          IcoRegionalPrioritiesGoals1
        )}
        {columns('regional_priorities',
          wrapStringsWithTags(
            copy.charting_c1_r3,
            "strong",
            ["10,000"],
            "html"
          ),
          wrapStringsWithTags(
            copy.charting_c2_r3,
            "strong",
            ["6,000 workers", "1,000 new jobs"],
            "html"
          ),
          theme,
          'body',
          IcoRegionalPrioritiesGoals2
        )}
        {columns('regional_priorities',
          wrapStringsWithTags(copy.charting_c1_r4, "strong", ["top-5"], "html"),
          wrapStringsWithTags(
            copy.charting_c2_r4,
            "strong",
            [
              "$250 million",
              "nationally recognized ecosystem that reflects our diverse community",
            ],
            "html"
          ),
          theme,
          'body',
          IcoRegionalPrioritiesGoals3,
          'magenta',
          true
        )}
      </ChartingStack>
      <Box className='hoverable'>
        <Stack
          direction="column"
          spacing={{ xs: 2, sm: 3, md: 4 }}
          sx={{
            maxWidth: "950px",
            mx: "auto",
            ...contentPadding,
          }}
        >
          <From right="20">
            <Tx tag="h2" variant="h2">
              {`2022 Regional Priorities Highlights`}
            </Tx>
          </From>
          <From right="20">
            <Tx tag="h3" variant="h3">
              {`Electric Vehicles`}
            </Tx>
          </From>
            <Hr color="magenta" />
          <From right="20">
            <Tx markdown="true">
              {`
              #### Accelerating toward the future

              The EV industry is gaining momentum in Chicagoland and across Illinois as P33 works alongside regional partners to attract the $100B in capital and 150,000 jobs that will be generated by this industry by 2030. P33 is actively supporting the state’s endeavors to attract and support electric vehicle manufacturers such as [Rivian](https://rivian.com/), adding **6,000+ EV jobs** in the region as they aim to produce 50,000 EVs a year in Illinois, and [Lion Electric](https://thelionelectric.com/en), bringing **1,000+ EV jobs** as they build 20,000 new electric trucks and buses a year. In addition to these efforts, P33 has established key partnerships with nationally recognized academic and research institutions such as [Argonne National Laboratory](https://www.anl.gov/), a leader in multidisciplinary science and engineering, as they continue to secure federal funding for their innovative energy and clean-tech research right here in Illinois.



              `}
            </Tx>
          </From>
        </Stack>
      </Box>
      <Box
        sx={{
          backgroundColor: theme.extraColors.purple,
          mt: { xs: 16, sm: 20, md: 24 },
          py: { xs: 8, sm: 12 },
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
          <Img src={PhotoGroup04} sx={{ maxWidth: '85%', mx: 'auto' }} alt='Group of photos: 1: Man pluggin in an electric Rivian truck. 2: An electric Rivian truck driving over sand. 3: An electric school bus powered by Lion. 4: Internal components of an electric car. 5: A close-up of a charging port for an electric car.' />
        </Box>
      </Box>

      <Box
        sx={{
          ...contentPadding,
          my: { xs: 8, sm: 12 },
        }}
      >
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 2, sm: 3, md: 4 }}
          alignItems={{ xs: "flex-start", sm: "center" }}
          sx={{
            maxWidth: "950px",
            mx: "auto",
          }}
        >
          <Box
            sx={{
              flexShrink: 0,
              flexGrow: 0,
            }}
          >
            <From right="20" scale="0.8">
              <Img
                src={PhoGovPritzker}
                alt="Photo of Governor JB Pritzker"
                sx={{ maxWidth: { xs: 100, md: 174 } }}
              />
            </From>
          </Box>
          <Box sx={{ flexGrow: 1 }}>
            <From left="20">
            <Tx markdown="true">
              {`
                P33 was proud to host an **EV CEO Roundtable**, along with Governor JB Pritzker, his team at [Illinois Department of Commerce and Economic Opportunity](https://dceo.illinois.gov/) (DCEO), and [Intersect Illinois](https://intersectillinois.org/). Attendees are deeply invested in the progress of EV transportation, and included CBRE, Rivian, ComEd, Schneider Electric, Boston Consulting Group, Hertz, Amazon, Lion Electric, Navistar Inc, IKEA, and S2G Ventures.

              `}
            </Tx>
            </From>
          </Box>
        </Stack>
      </Box>

      <FullBleedFeatureBlock
        hrcolor="magenta"
        flip="true"
        head={<Tx tag="h3" variant="h3">{`Life Sciences & Healthcare`}</Tx>}
        themecolors={[theme.extraColors.magentaLight, theme.extraColors.red]}
        body={
          <Tx markdown="true">{`
                #### Investing in the intersection of engineering and medicine

                The Chan Zuckerberg Initiative (CZI) has chosen Chicago to launch a new biomedical research hub with the goal of increasing our understanding  of human health and disease. Armed with a $250 million gift from the Chan Zuckerberg Initiative, and support from the state of Illinois, three universities including University of Chicago, Northwestern University, and the University of Illinois Urbana-Champaign, will partner and lead the effort to advance science and develop technologies that help us understand how cells and tissues function, with an ultimate goal of understanding and treating the inflammatory states that underlie many diseases.
              `}</Tx>
        }
        img={PhoEngineering}
        alt={'A closeup of a strand of DNA'}
      />

      <FullBleedFeatureBlock
        flip="false"
        hrcolor="magenta"
        head={<Tx tag="h3" variant="h3">{`Life Sciences & Healthcare`}</Tx>}
        themecolors={[theme.extraColors.purpleLight, theme.extraColors.purple]}
        body={
          <Tx markdown="true">{`
                #### Engaging women & BIPOC in biotech

                In her role at the [Chicago Biomedical Consortium](https://chicagobiomedicalconsortium.org/) (CBC), Michelle Hoffmann, formerly VP of Life Sciences at P33, is implementing the plan for the [CBC Entrepreneurial Fellowship](https://chicagobiomedicalconsortium.org/awards/entrepreneurial-fellows/), a program that P33 has supported since its development and launch last year. The Fellowship helps junior life sciences researchers to move projects from university labs to commercialization.

                This program intentionally **recruits women and BIPOC fellows** to help with a larger mission of increasing diversity in biotech spaces. The first cohort worked through nearly **20 different projects** since August, 2022. Of these projects, one went on to the Venture Board to be fully funded at $250K, and four more fellows have been recruited for the 2023 cohort.
              `}</Tx>
        }
        img={PhoBiotech}
        alt={'Various light patterns'}
      />

      <FeatureBlock
        flip="true"
        hrcolor="magenta"
        head={<Tx tag="h3" variant="h3">{`Quantum Computing`}</Tx>}
        body={
          <>
            <Tx markdown="true">{`
              2022 brought us closer to ensuring Illinois has the **most robust quantum workforce development system** in the country. P33, in partnership with the Illinois Department of Commerce & Economic Opportunity and Chicago Quantum Exchange, was awarded a **U.S. Economic Development Administration planning grant** to support the creation of a comprehensive, regional plan for a diverse, inclusive, and best-in-class Quantum Information Sciences and Technology (QIST) workforce. 

              Additionally, [Duality](https://www.dualityaccelerator.com) — the first accelerator program in the U.S. exclusively focused on supporting innovative quantum startups — has successfully graduated its first cohort, and is currently supporting its second cohort of exciting quantum startups. The 11 companies across Duality’s first two cohorts have shown exciting successes since the program’s launch in 2021: **qBraid placed 1st** in the Quantum World Congress startup pitch competition, **Super.tech was acquired** by a prominent global quantum technology company, and **MemQ recently raised a $2.5M seed round**. All six startups in Duality’s first cohort have opted to remain in the Chicago area, and have collectively secured more than $8.5 million in venture funding to date.
            `}</Tx>
            <Img
              src={LogoDuality}
              alt="Duality logo"
              sx={{ maxWidth: { xs: 345 }, mt: 2 }}
            />
          </>
        }
        img={PhoQuantumComputing}
        alt={'The internals of a quantum computer'}
      />
      <Box className="hoverable">
      <NewsStories
        hrcolor="magenta"
        title="2022 Regional Priorities Stories"
        articles={[
          <ThumbnailLink
            href="https://p33chicago.com/wp-content/uploads/2023/04/Bloomberg-Regional.pdf"
            text="Chicago bets on quantum as ‘Next Big Thing’ for its future"
            img={RegionalPrioritiesStories1}
            logo={LogoBloomberg}
            size="large"
          />,
          <ThumbnailLink
            href="https://p33chicago.com/wp-content/uploads/2023/04/Crain_s-Regional.pdf"
            text="Chicago lands $250 million from Zuckerberg and Chan for biotech research hub"
            img={RegionalPrioritiesStories2}
            logo={LogoCCB}
            size="large"
          />,
          <ThumbnailLink
            href="https://p33chicago.com/wp-content/uploads/2023/04/Crain_s-2-Regional.pdf"
            text="Bill boosting EV incentives is headed for Pritzker’s desk"
            img={RegionalPrioritiesStories3}
            logo={LogoCCB}
            size="large"
          />,
        ]}
      />
      </Box>


      <Box sx={{ ...contentPadding, my: 12 }}>
        <Stack sx={{width: '100%' }} justifyContent='space-between' direction='row'>
          <Button sectionTheme="founders" onClick={props.handleClickOpen('founders')} >
            &lt; Founders - Previous
          </Button>
          <Button sectionTheme="regional_priorities" onClick={() => { props.handleClose() }} >
            Next - Home &gt;
          </Button>
        </Stack>
      </Box>

    </>
  );
}
