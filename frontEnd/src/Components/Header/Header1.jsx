import * as React from 'react';
import { Box, IconButton, useTheme, Typography, Stack, Container } from "@mui/material";
import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";
import { ColorModeContext } from "../../Theme";
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';  
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useTranslation } from 'react-i18next';
import "./Header1.css";

export default function Header1() {
    const colorMode = React.useContext(ColorModeContext);
    const theme = useTheme();
    const { t, i18n } = useTranslation();



    const options = [
      'AR',
      'EN'
    ];

      const [anchorEl, setAnchorEl] = useState(null);
      const [selectedIndex, setSelectedIndex] = useState(1);
      const open = Boolean(anchorEl);
      const handleClickListItem = (event) => {
        setAnchorEl(event.currentTarget);
      };
      
      const handleClose = () => {
        setAnchorEl(null);
      };
    
      const handleMenuItemClick = (event, index) => {
        setSelectedIndex(index);
        setAnchorEl(null);
        if (index === 0) {
          i18n.changeLanguage('ar');
          i18n.dir("rtl")
        } else if (index === 1) {
          i18n.changeLanguage('en');
          i18n.dir("en")
        }

        document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';

        handleClose();

      };
    
      

      
    
    return (
      <Box sx={{bgcolor:"#283445",borderBottomRightRadius:4,
      borderBottomLeftRadius:4,width:"100%"}}>


<Container>
<Stack direction={"row"} alignItems="center">

<Typography variant="body2" sx={{mr:2,
p:"3px 10px",
bgcolor:"#D23F57",
borderRadius:"12px",
fontSize:"10px",
fontWeight:"bold",
color:"#fff"
}}>Hot</Typography>



<Typography className='freeShip' variant="body2" sx={{fontSize:"12px",fontWeight:300,color:"#fff"}}>
{t('free')}
</Typography>


<Box flexGrow={1}/>




      <div>
        {theme.palette.mode === "light" ? (
          <IconButton
            onClick={() => {
              localStorage.setItem(
                "mode",
                theme.palette.mode === "dark" ? "light" : "dark"
              );
              colorMode.toggleColorMode();
            }}
            color="inherit"
          >
            <LightModeOutlined sx={{fontSize:"16px" ,color:"#fff"}}/>
          </IconButton>
        ) : (
          <IconButton
            onClick={() => {
              localStorage.setItem(
                "mode",
                theme.palette.mode === "dark" ? "light" : "dark"
              );
              colorMode.toggleColorMode();
            }}
            color="inherit"
          >
            <DarkModeOutlined  sx={{fontSize:"16px"}}/>
          </IconButton>
        )}
      </div>

      <List
        component="nav"
        aria-label="Device settings"
        sx={{p:0,m:0}}
        
      >
        <ListItem
          id="lock-button"
          aria-haspopup="listbox"
          aria-controls="lock-menu"
          aria-label="when device is locked"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClickListItem}
          sx={{
      "&:hover" :{cursor:"pointer"},px:0
          }}
        >
          <ListItemText
          sx={{".MuiTypography-root":{fontSize:"11px",color:"#fff"}}}
            secondary={options[selectedIndex]}
          />
          <ExpandMoreIcon sx={{fontSize:"16px",color:"#fff"}}/>
        </ListItem>
      </List>
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'lock-button',
          role: 'listbox',
        }}
      >
        {options.map((option, index) => (
          <MenuItem
          sx={{fontSize:"10px"}}
            key={option}
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
      <TwitterIcon sx={{fontSize:"16px" ,color:"#fff"}}/>
      <FacebookIcon sx={{fontSize:"16px" ,mx:1,color:"#fff"}}/>
<InstagramIcon sx={{fontSize:"16px" ,color:"#fff"}}/>  


      
</Stack>

</Container>

      </Box>
      
   
  )
        }
      