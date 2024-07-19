import React from 'react';
import CardMedia from '@mui/material/CardMedia';
import Stack from '@mui/material/Stack';
import From from './from';
import { Parallax } from "react-scroll-parallax";
import { randomNumber } from '../utils/helpers';
export default function PhotoBounce(props) {

  return (
    <>
      <Stack
        direction="row"
        spacing={{ xs: 1, md: 2, lg: 4 }}
        sx={{
          mx: 'auto',
          width: { xs: '95%', md: '80%', lg: '70%' },
        }}
      >
        {props.images.map((image, index) => {
          let xStart;
          if (index === 0 || index === 1) {
            xStart = 40;
          } else if (index === 3 || index === 4) {
            xStart = -40;
          } else {
            xStart = 0;
          }
          let randomNumberNegative = randomNumber(-5, -15);
          let randomNumberPositive = randomNumber(5, 15);
          return (

            <Parallax
              data-component-from
              shouldAlwaysCompleteAnimation
              easing="easeOutCubic"
              rotate={
                // if index is 0 or 1, rotate negative
                index === 0 || index === 1 ? [0, randomNumberNegative] :
                // if index is 3 or 4, rotate positive
                index === 3 || index === 4 ? [0, randomNumberPositive] :
                // else, rotate 0
                [0, 5]
              }
              translateX={[xStart, 0]}
              translateY={[randomNumberNegative, randomNumberPositive]}

            >
              <CardMedia
                key={index}
                src={image}
                title="green iguana"
                component="img"
              />
            </Parallax>
          );
        })}
      </Stack>
    </>
  );
}