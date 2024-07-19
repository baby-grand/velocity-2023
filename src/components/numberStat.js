import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import From from './from';
import { randomNumber } from '../utils/helpers';
export default function NumberStat(props) {
  return (
    <>
      <Box sx={{ display: 'inline-block', mr: 4  }}>
      <From bottom={randomNumber(20,120)} right={20}>
        <Stack direction="row"
          alignItems="center"
          spacing={2}
        >
          <Stack
            direction="row"
            alignItems="flex-start"
          >
            {props.number ?
              <Typography
                variant="h3"
                sx={{ display: 'inline-block', fontWeight: 800, color: props.color, fontSize: { xs: 44, md: 72 } }}
                dangerouslySetInnerHTML={{ __html: props.number }}
              />
            : null}
            {props.superscript ?
              <Typography variant="h6" component="sup" sx={{ display: 'inline-block', fontWeight: 800, color: props.color, fontSize: { xs: 22, md: 36 } }}
                dangerouslySetInnerHTML={{ __html: props.superscript }}
              />
            : null}
          </Stack>
          {props.text ?
            <Typography variant="body1" sx={{ display: 'inline-block', fontWeight: 800, color: props.color, lineHeight: 1.2, fontSize: { xs: 16, md: 22 } }}
              dangerouslySetInnerHTML={{ __html: props.text }}
            />
          : null}
        </Stack>
      </From>
      </Box>
    </>
  )
}