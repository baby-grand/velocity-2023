import * as React from "react"
import { Parallax } from "react-scroll-parallax";
import { ReactNode } from "react";
import { Box } from "@mui/material";

const From = (props) => {
  var right = props.right + 'px'
  var scale = props.scale
  var top = -props.top + 'px'
  var bottom = props.bottom + 'px'

  return (
    <>
      {props.disableAnimations ?
        <Box className="overflow-visible">
          {props.children}
        </Box>
        :
        <Box className="overflow-visible" sx={props.sx}>
          {/* <Parallax data-component-from shouldAlwaysCompleteAnimation easing="easeOutCubic"
            {...props}
            translateY={
              props.bottom ? [bottom, '0px'] :
              props.top ? [top, '0px'] :
              null}
            translateX={
              props.left ? [-props.left + 'px', '0px'] :
              props.right ? [props.right + 'px', '0px'] :
              null}
            opacity={[props.opacity ?? 0, 1]}
            speed={
              props.speed ? props.speed :
              null}
            scale={
              props.scale ? [scale, 1] :
              null}
          > */}
            {props.children}
          {/* </Parallax> */}
        </Box>
      }
    </>
  )
}
export default From