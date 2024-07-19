/*
object-fit: contain;
object-fit: cover;
object-fit: fill;
object-fit: none;
object-fit: scale-down;

Global values:
object-fit: inherit;
object-fit: initial;
object-fit: revert;
object-fit: revert-layer;
object-fit: unset;
*/

import React from 'react';
import CardMedia from '@mui/material/CardMedia';

export default function Img(props) {

  return (
    <CardMedia
      component="img"
      image={props.src}
      alt={props.alt}
      sx={{
        width: '100%',
        height: 'auto',
        maxWidth: '100%',
        maxHeight: '100%',
        ...props.sx
      }}
      {...props}
    />
  );
}