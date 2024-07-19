import React from 'react';
import { Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';

export default function CustomButton(props) {
  const theme = useTheme();

  let borderColor, bgColor, textColor;
  if (props.colortheme === 'magenta') {
    borderColor = theme.extraColors.magenta
    bgColor = theme.extraColors.magentaLight
    textColor = '#fff'
  } else if (props.colortheme === 'purple') {
    borderColor = theme.extraColors.purple
    bgColor = theme.extraColors.purpleLight
    textColor = '#000'
  } else {
    borderColor = theme.extraColors.magenta
    bgColor = theme.extraColors.magentaLight
    textColor = '#fff'
  }

  return (
    <>
    {
      props.sectionTheme ? (
        <Button
          {...props}
          target="_blank"
          rel="noreferrer"
          sx={{
            color: theme.extraColors.black,
            backgroundColor: 'transparent',
            borderRadius: '0',
            textTransform: 'none',
            fontSize: { xs: 14, md: 16, lg: 18 },
            fontVariationSettings: `"slnt" 0, "wdth" 100, "wght" 500`,
            position: 'relative',
            p: 0,
            '& div': {
              position: 'relative',
              zIndex: 1,
              display: 'block',
              whiteSpace: 'nowrap',
              px: 2,
              py: 1,
            },
            ':hover': {
              backgroundColor: 'transparent',
              color: theme.extraColors.black,
              '& span': {
                transform: 'scaleX(1)',
                transition: 'transform 0.3s ease-in-out',
                // orientation
                transformOrigin: 'left',
                // spring
                transitionTimingFunction: 'cubic-bezier(.54,.2,.18,1.5)',
              }
            },
            ...props.sx
          }}
        >
          <div>{props.children}</div>
          <Box component="span"
            sx={{
              display: 'block',
              position: 'absolute',
              top: 0,
              left: 0,
              bottom: 0,
              height: '100%',
              width: '100%',
              backgroundColor:
                props.sectionTheme === 'talent' ? theme.extraColors.seafoam
              : props.sectionTheme === 'founders' ? theme.extraColors.yellow
              : props.sectionTheme === 'regional_priorities' ? theme.extraColors.magenta
              : null,
              zIndex: 0,
              transform: 'scaleX(0)',
            }}></Box>
          <Box component="span"
            sx={{
              display: 'block',
              position: 'absolute',
              top: 0,
              left: 0,
              bottom: 0,
              height: '100%',
              width: '100%',
              zIndex: 9,
              border: `2px solid ${theme.extraColors.purple}`,
              borderRadius: '0',
              // box modle
              boxSizing: 'border-box',
            }}></Box>

        </Button>
      ) : (
        <Button
          {...props}
          target="_blank"
          rel="noreferrer"
          sx={{
            color: textColor,
            backgroundColor: 'transparent',
            border: `2px solid ${borderColor}`,
            borderRadius: '0',
            px: 2,
            textTransform: 'none',
            fontSize: '18px',
            fontVariationSettings: `"slnt" 0, "wdth" 100, "wght" 500`,
            ':hover': {
              backgroundColor: bgColor,
              color: textColor,
            },
            ...props.sx
          }}
        >
          More Photos +
        </Button>
      )
    }

    </>
  )
}