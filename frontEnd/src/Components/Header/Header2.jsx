import { ExpandMore, ShoppingCartOutlined } from '@mui/icons-material'
import { Badge, Box, Container, IconButton, Stack, Typography, useTheme } from '@mui/material'
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { useState } from 'react';
import './Header2.css';
import { useTranslation } from 'react-i18next';


const Search = styled('div')(({ theme }) => ({
  flexGrow:0.4,
  position: 'relative',
border: "1px solid #777",
  '&:hover': {
    border: "1px solid #333",
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  minWidth: '266px',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: '330px',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color:"#777"
}));


const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));



export default function Header2() {
const theme=useTheme();
const { t, i18n } = useTranslation();


  const options = [
    'All Categories',
    'Car',
    'Clothes',
    'Electronics',
  ];
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Container sx={{my:3,display:"flex",justifyContent:"space-between"}}>
      <Stack alignItems={"center"}>
<ShoppingCartOutlined/>
<Typography variant='body2'>E-commerce</Typography>
      </Stack>


      <Search sx={{borderRadius:"22px" ,display:"flex",justifyContent:"space-between"}}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <InputBase className='search' style={{paddingLeft:"50px"}}
              placeholder={t("Search…")}
              inputProps={{ 'aria-label': 'search' }}
            />

<List
        component="nav"
        aria-label="Device settings"
        sx={{ bgcolor:"myColor",p:"0" ,borderTopRightRadius:"22px",borderBottomRightRadius:"22px"}}
      >
        <ListItem
          
          id="lock-button"
          aria-haspopup="listbox"
          aria-controls="lock-menu"
          aria-label="when device is locked"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClickListItem}
        >
          <ListItemText 
          sx={{width:"120px",textAlign:"center","&:hover":{cursor:"pointer"}}}
            secondary={t(options[selectedIndex])}
          />
                    <ExpandMore sx={{fontSize:"16px",color:"grey"}}/>

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
            key={option}
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            {t(option)}
          </MenuItem>
        ))}
      </Menu>
          </Search>


<Stack direction={"row"} alignItems={"center"}> <IconButton aria-label="cart">
        <StyledBadge badgeContent={4} color="primary">
          <ShoppingCartIcon />
        </StyledBadge>
      </IconButton>

      <IconButton>
        <PersonIcon />
      </IconButton></Stack>
     
    </Container>
  )
}
