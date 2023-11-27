import { Box, Button, IconButton } from "@mui/material";
import { useState, useEffect } from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { ExpandMore, ShoppingCartOutlined } from '@mui/icons-material'
import { Badge, Container, Typography, useTheme } from '@mui/material'
import { styled, alpha } from '@mui/material/styles';
import { useTranslation } from "react-i18next";

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

export default function Cart({ cartItems, setCartItems }) {
  const [openCart, setOpenCart] = useState(false);
  const [cartCounter, setCartCounter] = useState(cartItems.length);
  const theme = useTheme();
  const{t}=useTranslation();

  useEffect(() => {
    setCartCounter(cartItems.length);
  }, [cartItems]);

  const handleClickOpen = () => {
    setOpenCart(true);
  };

  const handleClose = () => {
    setOpenCart(false);
  };

  const handleRemoveItem = (index) => {
    setCartItems((prevItems) => {
      const updatedItems = [...prevItems];
      updatedItems.splice(index, 1);
      return updatedItems;
    });// we use here copy of original array instead because of ensure that is the most updated array BECAUSE cartItems is asnyc
  };

  return (
    <Box sx={{marginRight:"1rem"}}>
      <IconButton aria-label="cart" onClick={handleClickOpen}>
        <StyledBadge badgeContent={cartCounter} color="primary">
          <ShoppingCartIcon />
        </StyledBadge>
      </IconButton>

      <Dialog open={openCart} keepMounted onClose={handleClose} aria-describedby="alert-dialog-slide-description">
        <DialogTitle>{t("Cart")}</DialogTitle>
        <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
        {cartItems.length === 0 ? (
      <Typography>{t("Your cart is empty.")}</Typography>
    ) : (
      cartItems.map((item, index) => (
        <Box key={index}>
          <Typography>{t(item.attributes.productTitle)}</Typography>
          <Typography>{t(item.attributes.productPrice)} $</Typography>
          <img style={{ height: "277px", width: "330px" }} src={item.attributes.productimg.data[0].attributes.url} alt="" />

         
          <Button onClick={() => handleRemoveItem(index)} color="secondary">
            {t("Remove")}
          </Button>
        </Box>
     ))
     )}
  </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            {t("Close")}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
