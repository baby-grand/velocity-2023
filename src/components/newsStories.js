import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import From from './from';
import { contentPadding } from '../utils/helpers';
import Hr from './hr';

export default function NewsStories(props) {
  return (
    <>
      <Box sx={{...contentPadding, pt: 8 }}>
        <From right="40">
          <Typography variant="h4" component="h4"
            sx={{
              mb: 2,
              fontSize: '30px',
              fontWeight: 'normal',
              // variable font
              fontVariationSettings: '"wght" 700, "wdth" 115',
            }}>
            {props.title}
          </Typography>
          <Hr color={
            props.hrcolor==="yellow" ? "yellow" :
            props.hrcolor==="seafoam" ? "seafoam" :
            props.hrcolor==="magenta" ? "magenta" :
            "seafoam"
          } noMargin />
        </From>
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={{ xs: 2, sm: 3, md: 4, lg: 8 }}
          sx={{ mt: 4 }}
          justifyContent="space-between"
        >
          <From right="40" sx={{ width: { xs: 'auto', md: '33%'} }}>
            {props.articles[0]}
          </From>
          <From left="0" sx={{ width: { xs: 'auto', md: '33%'} }}>
            {props.articles[1]}
          </From>
          <From left="40" sx={{ width: { xs: 'auto', md: '33%'} }}>
            {props.articles[2]}
          </From>
        </Stack>
      </Box>
    </>
  )
}