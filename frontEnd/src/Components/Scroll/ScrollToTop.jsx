import { KeyboardArrowUpSharp } from '@mui/icons-material'
import { Container, Fab, Zoom, useScrollTrigger } from '@mui/material'
import React from 'react'

export default function ScrollToTop() {
  return (
   <Zoom in={useScrollTrigger({threshold:100})}>
     <Fab onClick={()=>{
        window.scrollTo(0,0)
     }}
      size='small' sx={{position:"fixed",bottom:33,right:33}} color="primary" aria-label="add">
        <KeyboardArrowUpSharp/>
      </Fab>
   </Zoom>
  )
}
