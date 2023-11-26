import { Box, Button, Container, Drawer, IconButton, List,
   ListItem, ListItemButton, ListItemText,
    Menu, MenuItem, Stack, Typography,
     useMediaQuery, useTheme } from "@mui/material";
import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import WindowIcon from '@mui/icons-material/Window';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import ElectricBikeIcon from '@mui/icons-material/ElectricBike';
import LaptopIcon from '@mui/icons-material/Laptop';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CloseIcon from '@mui/icons-material/Close';
import Links from "./Links";
import { useTranslation } from "react-i18next";

export default function Header3() {

  const { t, i18n } = useTranslation();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    


  };
  const theme=useTheme();

  const [state, setState] = useState({
    top: false,
  });
  const toggleDrawer =
  (anchor, open) =>
  (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      ((event ).key === 'Tab' ||
        (event).key === 'Shift')
    ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };


  
  return (
  <Container sx={{
    mt:5, display:"flex",alignItems:"center",justifyContent:"space-between"}}>

<Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        // @ts-ignore
        sx={{width:222,bgcolor:theme.palette.myColor.main  ,color:theme.palette.text.secondary}}
      >
        <WindowIcon/>
        <Typography variant="body2"sx={{padding:"0",textTransform:"capitalize",mx:1}}>

        {t("Categories")}
        </Typography>
        <Box flexGrow={1}/>
        <KeyboardArrowRightIcon/>
      </Button>
 {useMediaQuery("(min-width:1200px)") && (
 <Stack direction={"row"} alignItems={"center"} gap={4}>
  <Links title={t("Home")}/>
<Links title={t("Mega Menu")}/>
<Links title={t("Full Screen Menu")}/>
<Links title={t("Pages")}/>
<Links title={t("User Account")}/>
<Links title={t("Vendor Account")}/></Stack>
 )}




      {useMediaQuery("(max-width:1200px)") && (<IconButton onClick={toggleDrawer("top", true)}>   
           <MenuIcon/>
</IconButton>)}
      

<Drawer
            anchor={"top"}
            open={state["top"]}
            onClose={toggleDrawer("top", false)}
            sx={{".MuiPaper-root.MuiPaper-elevation.MuiPaper-elevation16.MuiDrawer-paper.MuiDrawer-paperAnchorTop.css-1sozasi-MuiPaper-root-MuiDrawer-paper":{height:"100%"}}}
          >     

          <Box sx={{width:444 ,mx:"auto",mt:6 ,position:"relative",pt:12}}>
               <IconButton sx={{position:"absolute" ,top:0,right:10,"&:hover":{color:"red",rotate:"30deg" ,
               transition:".2s ease-in-out"}}} onClick={toggleDrawer("top", false)}> 

        <CloseIcon/>
</IconButton>


{[{mainLink:"Home",SubLink:["Dashboard","products","orders","Profile","Add Product","Edit Product"]},
{mainLink:"Mega Menu",SubLink:["Dashboard","products","orders","Profile","Add Product","Edit Product"]},
{mainLink:"Full Screen Menu",SubLink:["Dashboard","products","orders","Profile","Add Product","Edit Product"]},
{mainLink:"Pages",SubLink:["Dashboard","products","orders","Profile","Add Product","Edit Product"]},
{mainLink:"User Account",SubLink:["Dashboard","products","orders","Profile","Add Product","Edit Product"]},
{mainLink:"Vendor Account",SubLink:["Dashboard","products","orders","Profile","Add Product","Edit Product"]}].map((item) => {
  return(
    <Accordion key={item.mainLink} elevation={0} sx={{bgcolor:"initial"}} >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{t(item.mainLink)}</Typography>
        </AccordionSummary>
        <List sx={{py:0,my:0}}>
         
      {item.SubLink.map((subItem) => {
        return(
          <ListItem key={subItem} sx={{py:0,my:0}} >
          <ListItemButton>
            <ListItemText primary={t(subItem)}/>
          </ListItemButton>
        </ListItem >
        )
      }
      )}
          </List>
      </Accordion>

  );
}
)}

      
  </Box>
       

          </Drawer>






      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button', 
            }}

          // @ts-ignore
          sx={{".MuiPaper-root":{width:221,bgcolor:theme.palette.myColor.main}}}
      >
        <MenuItem onClick={handleClose}> <ElectricBikeIcon sx={{mr:1}} />  {t("Bikes")}</MenuItem>
        <MenuItem onClick={handleClose}> <LaptopIcon sx={{mr:1}}/> {t("Electronics")}</MenuItem>
        <MenuItem onClick={handleClose}><MenuBookIcon sx={{mr:1}}/> {t("Books")}</MenuItem>
        <MenuItem onClick={handleClose}> <SportsEsportsIcon sx={{mr:1}}/>{t("Games")}</MenuItem>

      </Menu>



  </Container>
  )
}
