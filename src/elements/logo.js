  import React from 'react';
  import { p33logo } from '../utils/svg';
  import { Box } from '@mui/material';

  export default function Logo(props) {
    return (
      <Box
        dangerouslySetInnerHTML={{ __html: p33logo }}
        className="top-logo"
        sx={{
          width: '50%',
          height: 'auto',
          bgcolor: 'transparent',
          maxWidth: '663.67px',
          maxHeight: '97.66px',
          minWidth: '200px',
          mb: { xl: 8, lg: 6, md: 4, sm: 2, xs: 1 },
          '& svg': {
            width: '100%',
            height: 'auto',
          },
        }}
      />
    );
  }