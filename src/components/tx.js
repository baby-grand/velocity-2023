import * as React from "react"
import Typography from '@mui/material/Typography';
import ReactMarkdown from 'react-markdown'
import { pxToRem, convertHtmlListToArray, calculatePercentage, createClassName, kebobToCamelCase, randomNumber } from "../utils/helpers"
import { PropTypes } from 'react';

export default function Tx(props) {
  let variant = "body1"
  let children = props.children
  let augmentedProps = props.sx


  if (props.linebreaks === 'true') {
    children = children.trim()
    children = children.replace(/\n/g, "<br>")
    children = <span dangerouslySetInnerHTML={{__html: children}} />
  }
  if (props.markdown === 'true') {
    // remove tabs and leading spaces
    // 1. remove all tabs and extra spaces
    // 2. remove extra spaces at the beginning of each line
    // 3. remove extra spaces at the end of each line
    children = children.replace(/\t/g, "")
    children = children.replace(/ {2,}/g, " ")
    children = children.replace(/^ +/gm, "")
    children = children.replace(/ +$/gm, "")
  }
  if (props.tag === 'h1') {
    variant = "h1"
    augmentedProps = {
      ...augmentedProps,
      fontSize: { xl: pxToRem(118), lg: 'calc(4vw + 4vmin)', md: 'calc(4vw + 4vmin)', sm: 'calc(4vw + 4vmin)', xs: pxToRem(36) },
    }
  }
  if (props.tag === 'h2') {
    variant = "h2"
    augmentedProps = {
      ...augmentedProps,
      fontSize: { xl: pxToRem(60), lg: pxToRem(55), md: pxToRem(50), sm: pxToRem(40), xs: pxToRem(24) },

    }
  }
  if (props.tag === 'h3') {
    variant = "h3"
    augmentedProps = {
      ...augmentedProps,
      fontSize: { xl: pxToRem(30), lg: pxToRem(28), md: pxToRem(26), sm: pxToRem(24), xs: pxToRem(24) },
    }
  }
  if (props.tag === 'h4') {
    variant = "h4"
    augmentedProps = {
      ...augmentedProps,
      fontSize: { xl: pxToRem(24), lg: pxToRem(24), md: pxToRem(24), sm: pxToRem(20), xs: pxToRem(18) },
    }
  }
  if (props.tag === 'h5') {
    variant = "h5"
    augmentedProps = {
      ...augmentedProps,
      fontSize: { xl: pxToRem(24), lg: pxToRem(24), md: pxToRem(24), sm: pxToRem(20), xs: pxToRem(18) },
    }
  }
  if (props.tag === 'h6') variant = "h6"
  if (props.tag === 'subtitle1') variant = "subtitle1"
  if (props.tag === 'subtitle2') variant = "subtitle2"
  if (props.tag === 'body1') {
    variant = "body1"
    augmentedProps = {
      ...augmentedProps,
      fontSize: { xl: pxToRem(18), lg: pxToRem(18), md: pxToRem(18), sm: pxToRem(16), xs: pxToRem(14) },
    }
  }
  if (props.tag === 'body2') {
    variant = "body1"
    augmentedProps = {
      ...augmentedProps,
      fontSize: { xl: pxToRem(16), lg: pxToRem(16), md: pxToRem(16), sm: pxToRem(14), xs: pxToRem(12) },
    }
  }
  if (props.tag === 'button') variant = "button"
  if (props.tag === 'caption') variant = "caption"
  if (props.tag === 'overline') variant = "overline"
  if (props.markdown === "true") {
    return (
      <Typography
        className="markdown-area"
        variant={variant}
        component="div"
        {...props}
        sx={{
          ...augmentedProps,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          gap: '1rem',
          '& > h3': {
            mb: '1rem',
          },
          '& > h4': {
            mb: '1rem',
          },
          '& > *': {
            width: '100%',
          },
          '& > ul': {
            paddingLeft: '1rem',
          },
          '& > ol': {
            paddingLeft: '1rem',
          },
          '& > ul > li': {
            listStyleType: 'disc',
          },
          '& > ol > li': {
            listStyleType: 'decimal',
          },
          '& > ul > li > ul': {
            listStyleType: 'circle',
          },
       }}>
        <ReactMarkdown children={children} />
      </Typography>
    )
  } else {
    return (
      <Typography variant={variant} {...props}
        sx={{
          ...augmentedProps,
        }}
      >
        {children}
      </Typography>
    )
  }
}