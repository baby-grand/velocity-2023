import React from 'react';
import Box from '@mui/material/Box';

export default function Hr(props) {
  const color = props.color ?? ''
  return (
    <Box
      component="hr"
      className={props.weight === 'thin' ? 'hr-thin' : 'hr-full'}
      {...props}
      sx={{
        maxWidth:
            props.width === 'full' && props.weight === 'thin' ? '100%'
          : props.weight === 'thin' ? { xl: 530 , lg: 450, md: 370, sm: 290, xs: '50%' }
          : { xl: 150, lg: 130, md: 110, sm: 90, xs: 70 },
        width: props.width === 'full' ? '100%' : 'auto',
        height: props.weight === "thin" ? 3 : {xl: 18, lg: 16, md: 14, sm: 12, xs: 10},
        ml: 0,
        my: props.noMargin ? 0 : { xs: 3, sm: 4, md: 5, lg: 6, xl: 7 },
        border: 'none',
        transformOrigin: 'left',
        background:
            color === 'yellow' ? 'var(--color-yellow)'
          : color === 'seafoam' ? 'var(--color-seafoam)'
          : color === 'magenta' ? 'var(--color-magenta)'
          : color === 'purple' ? 'var(--color-purple)'
          : color === 'red' ? 'var(--color-red)'
          : color === 'black' ? 'var(--color-black)'
          : color === 'rainbow' ? 'linear-gradient(90deg, #03FFDA 0%, #FBC02D 52.74%, #FF24A1 103.33%)'
          : 'var(--color-bg-soft)',
        ...props.sx,
    }} />
  )
}