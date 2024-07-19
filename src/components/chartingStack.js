import * as React from 'react';
import { Box } from '@mui/material';
import Stack from '@mui/material/Stack';
import Hr from './hr';
import Tx from './tx';
import From from './from';
import Img from './img';
import Grid from '@mui/material/Grid';
import { contentPadding } from '../utils/helpers';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

function TinyLabel(props){
  return (
    <Typography className="tinylabel" sx={{
      fontSize: {xs: '8px', sm: '12px' },
      fontVariationSettings: '"slnt" 0, "wdth" 100, "wght" 700',
      borderBottom: '1px solid #fff',
      pb: 0.2,
      mb: 1.5,
      color: props.accent ? `var(--color-purple)` : `#000`,
      display: { xs: 'inline-block', md: 'none' }
     }}>{props.children}</Typography>
  )
}
function columns (section, col1, col2, theme, level = 'body', icon, hrBg, lastItem = false) {
  const fontSettings = {
    fontSize: {
      xs: level === 'heading' ? '24px' : '14px',
      md: level === 'heading' ? '28px' : '16px',
      lg: level === 'heading' ? '28px' : '22px',
      xl: level === 'heading' ? '30px' : '24px',
    },
    fontVariationSettings: level === 'heading' ? '"slnt" 0, "wdth" 115, "wght" 700' : '"slnt" 0, "wdth" 100, "wght" 600',
    lineHeight: '138%',
  }
  const hrColor =
    hrBg === 'seafoam' ? 'seafoam' :
    hrBg === 'yellow' ? 'yellow' :
    hrBg === 'magenta' ? 'magenta' :
    null
  return (
      <Stack
        className='hover-row'
        sx={{
          flexDirection: { xs: 'column', md: 'row' },
          gap: { xs: 1, md: 4 },
          mb: level === 'heading' ? 0 : 0,
          py: { xs: 0, md: level === 'heading' ? 0 : 2 },
          alignItems: level === 'heading' ? 'flex-end' : 'center',
          display: {
            xs: level === 'heading' ? 'none' : 'flex',
            md: 'flex',
          },
        }}
      >
        <Box sx={{ width: { xs: '100%', md: '60%' } }}>
          <TinyLabel>
            {
              section === 'talent' ? '2021 Talent Goal' :
              section === 'founders' ? '2021 Founders Goal' :
              section === 'regional_priorities' ? '2021 Regional Priorities Goal' :
              null
            }
          </TinyLabel>
          <Tx
            tag={level === 'heading' ? 'h3' : 'p'}
            component={level === 'heading' ? 'h3' : 'p'}
            dangerouslySetInnerHTML={{ __html: col1 }}
            sx={{
              ...fontSettings
            }}
          />
          {level === 'heading' ? <Hr noMargin sx={{ mt: 3, mb: 2 }} color={hrColor} /> : null}

        </Box>
        <Box sx={{
          opacity: level === 'heading' ? 0 : 1,
          display: { xs: 'none', md: 'block' }
        }}>

            <svg width="57" height="14" viewBox="0 0 57 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M45.5229 0.5L55.8998 7L45.5229 13.5" stroke="black" strokeWidth="0.975"/><path d="M-0.00012207 7H55.0645" stroke="black" strokeWidth="0.975"/></svg>

        </Box>
        <Box sx={{
            width: { xs: '100%' },
            borderBottom: {
              xs: lastItem ? `none` : `2px solid var(--color-purple)`,
              md: `none`},
            paddingBottom: { xs: 1.5, md: 0 },
          }}>
          <TinyLabel accent>Progress Through 2022</TinyLabel>
            <Stack direction='row' spacing={2} sx={{ alignItems: 'center' }}>
            <Tx
              tag={level === 'heading' ? 'h3' : 'p'}
              component={level === 'heading' ? 'h3' : 'p'}
              dangerouslySetInnerHTML={{ __html: col2 }}
              sx={{
                ...fontSettings,
                color: 'var(--theme-fg)',
              }}
            />
            {level === 'body' ? <Img src={icon} className="hover-icon" sx={{ width: '85px', height: '88px', display: { xs: 'none', md: 'block' } }} /> : null }
            </Stack>
            {level === 'heading' ? <Hr noMargin sx={{ mt: 3, mb: 2 }} color={hrColor} /> : null}
        </Box>
      </Stack>
  )
}
function ChartingStack(props) {
  const theme = useTheme();
  return (
    <>
    <Box sx={{ ...contentPadding, mb: {xs: 8, md: 16}  }} className='hoverable'>
      <Grid>
        <Grid item xs={12} md={12}>
          <Tx tag="h2" variant="h2" linebreaks="true" sx={{ mb: 4, mt: 8, ml: { xs: 1.5, sm: 3, md: 0 } }}>
            {props.title}
          </Tx>
          <Box
            className="theme-purple"
            sx={{
              backgroundColor:
                  props.theme === 'purple' ? theme.extraColors.purpleLight
                : props.theme === 'seafoam' ? theme.extraColors.seafoamLight
                : props.theme === 'magenta' ? theme.extraColors.magentaLight
                : 'white',
              mb: { xs: 4, md: 8 },
              width: {
                xs: `calc(100% - 0)` },
            }}>
            <Box sx={{
              px: { xl: 8, lg: 6, md: 4, sm: 4, xs: 2 },
            }}>
            <Stack
              direction="column"
              spacing={1}
              divider={<Hr weight="thin" width="full" color="purple" sx={{ display: { xs: 'none', md: 'block'} }} />}
              sx={{
                py: { xs: 2, sm: 4, md: 12, lg: 12, xl: 12 },
                mt: { xs: -5, sm: -6, md: -7 },
              }}
              className="charting-stack"
            >
              {props.children}
            </Stack>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
    </>
  );
}
export { ChartingStack, columns }