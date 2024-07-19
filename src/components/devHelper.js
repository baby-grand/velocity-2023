import * as React from 'react';
import { Box } from '@mui/material';
import Tx from './tx';

export default function DevHelper() {
  return (
    <Box sx={{
      position: 'fixed',
      zIndex: 99999,
      backgroundColor: {
        xs: 'red',
        sm: 'green',
        md: 'blue',
        lg: 'slateblue',
        xl: 'purple',
      },
      bottom: 2,
      left: 2,
      px: 2,
      py: 1,
      borderRadius: 1,
      color: 'white',
     }}>
        <Tx tag="body2" sx={{ display: { xs: 'block', sm: 'none', md: 'none', lg: 'none', xl: 'none' }, fontWeight: 800 }}>breakpoint: xs</Tx>
        <Tx tag="body2" sx={{ display: { xs: 'none', sm: 'block', md: 'none', lg: 'none', xl: 'none' }, fontWeight: 800 }}>breakpoint: sm</Tx>
        <Tx tag="body2" sx={{ display: { xs: 'none', sm: 'none', md: 'block', lg: 'none', xl: 'none' }, fontWeight: 800 }}>breakpoint: md</Tx>
        <Tx tag="body2" sx={{ display: { xs: 'none', sm: 'none', md: 'none', lg: 'block', xl: 'none' }, fontWeight: 800 }}>breakpoint: lg</Tx>
        <Tx tag="body2" sx={{ display: { xs: 'none', sm: 'none', md: 'none', lg: 'none', xl: 'block' }, fontWeight: 800 }}>breakpoint: xl</Tx>
    </Box>
  );
}