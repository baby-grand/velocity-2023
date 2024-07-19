import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Hr from './hr';
import { contentPadding } from '../utils/helpers';
import Img from './img';

export default function NewHero(props) {
  const leadInCopy = (
    <Typography sx={{
      fontStyle: 'normal',
      fontSize: '18px',
      fontVariationSettings: "'slnt' 0, 'wdth' 100, 'wght' 400",
      lineHeight: 1.65,
    }} variant="h2" component="h2">
      {props.copyLeadIn}
    </Typography>
  )

  const h1col1 = props.h1Columns[0]
  const h1col2 = props.h1Columns[1]
  const h1col3 = props.h1Columns[2]
  // get percentage of h1col1
  const h1col1Percent1 = (h1col1 / (h1col1 + h1col2 + h1col3)) * 100
  const h1col1Percent2 = (h1col3 / (h1col1 + h1col2 + h1col3)) * 100

  const outerCol1 = props.outerColumns[0]
  const outerCol2 = props.outerColumns[1]
  const outerCol3 = props.outerColumns[2]
  // get percentage of outerCol1
  const outerCol1Percent1 = (outerCol1 / (outerCol1 + outerCol2 + outerCol3)) * 100 + '%'
  const outerCol1Percent2 = (outerCol3 / (outerCol1 + outerCol2 + outerCol3)) * 100 + '%'

  const yOffset = `translateY(${props.iconY}%)`

  return (
    <>
      <Box data-new-hero>
      <Box
        className={ props.notHoverable ? 'not-hoverable' : 'hoverable' }
        imageAnimation='zoom-in'
        sx={{
          ...contentPadding,
          position: 'relative',
          py: {
            xs: 4,
            sm: 8,
            md: 8,
            lg: 10,
            xl: 12
          },
        }}>

        <Stack direction="row" justifyContent='space-between'>
          <Stack direction="column" spacing={3.8} sx={{ width: outerCol1Percent1 }}>

            <Stack direction="row" justifyContent='space-between' alignItems='flex-end' sx={{
              width: '100%', maxWidth: '100%',
              '& svg': {
                width: '100%', height: 'auto'
              },
              }}>
                <Box sx={{ width: `${h1col1Percent1 + '%'}` }}>
                  {props.h1Text}
                </Box>
                <Box sx={{ width: `${h1col1Percent2 + '%'}`, transform: yOffset }} className={ props.noIconAnimation ? '' : 'animate-h1-icon'}>
                  {props.h1Icon}
                </Box>
            </Stack>
            <h1 className='sr-only'>{props.h1TextScreenreader}</h1>
            <Typography sx={{
              fontStyle: 'normal',
              fontSize: {
                xs: '18px',
                sm: '18px',
                md: '24px',
                lg: '28px',
                xl: '30px'
              },
              fontVariationSettings: "'slnt' 0, 'wdth' 115, 'wght' 700",
              lineHeight: 1.35,
            }} variant="h2" component="h2">
              {props.copyIntro}
            </Typography>
            <Hr color={props.hrcolor} />
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>{leadInCopy}</Box>

          </Stack>
          <Box sx={{ width: outerCol1Percent2, flexShrink: 0, flexGrow: 0 }}>
            <Box className={props.imageAnimation} sx={{ overflow: 'hidden' }}>
              <Img image={props.heroImage} sx={{ height: 'auto' }} alt={props.imageAltText} />
            </Box>
          </Box>
        </Stack>

        <Box sx={{ display: { xs: 'block', sm: 'none' }, pt: 4 }}>{leadInCopy}</Box>
      </Box>
      </Box>
    </>
  )
}