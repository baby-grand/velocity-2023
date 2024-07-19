import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import BarDown from './barDown';
import From from './from';
import Tx from './tx';
import Button from './customButton';
import { useTheme } from '@mui/material/styles';
function TwoColSidebars(props) {
  const theme = useTheme();

  return (
    <>
      <Box sx={{
        position: "relative",
        ...props.sx
      }}>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 0, sm: 4, md: 4 }}
          sx={{
            maxWidth: "1400", mx: "auto", px: { xs: 1, sm: 2, md: 4, lg: 8}, alignItems: "stretch"
          }}
        >
          <Box sx={{ display: { xs: 'none', sm: 'block'} }}>
            <BarDown color={props.sidebarColor} />
          </Box>
          <Box>
            <Stack
              direction={{
                xs: "column",
                md: "row"
              }}
              spacing={4}
            >
              <Box sx={{
                width: {
                  xs: 'auto', md: "calc(50% - 9px)" },
              }}>
                <From right="20">
                  <Box sx={{
                    color: props.textcolor,
                    px: { xs: 2, md: 4 }
                  }}>
                    <Tx markdown="true">
                      {props.main}
                    </Tx>
                  </Box>
                </From>
              </Box>
              <Box sx={{
                width: { xs: 'auto', md: "calc(50% - 9px)" },
                display: 'flex',
                alignItems: 'center'
              }}>
                <From left="20" sx={{ width: '100%', px: { xs: 2, md: 0 }, textAlign: 'right' }}>
                  {props.aside}
                </From>
              </Box>
            </Stack>
            {props.main2 ?
              <>
                <Box sx={{ color: props.textcolor, px: { xs: 2, md: 4 }, mt: { xs: 4, md: 2 }}}>
                  {props.main2}
                </Box>
              </> : null}
          </Box>

          <Box sx={{ display: { xs: 'none', sm: 'block'} }}>
            <BarDown color={props.sidebarColor} />
          </Box>
        </Stack>
      </Box>
    </>
  )
}
export { TwoColSidebars }