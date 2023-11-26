// @ts-nocheck
import { Box, CircularProgress, Container, IconButton, Stack, Typography, useTheme } from "@mui/material";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useState } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Rating from '@mui/material/Rating';
import { motion } from "framer-motion";
import Dialog from '@mui/material/Dialog';

import './Main.css';
import { Close } from "@mui/icons-material";
import ProductDetails from "../../Components/Product/ProductDetails";
import { useGetproductByNameQuery } from "../../Redux/product";
import { useTranslation } from "react-i18next";

export default function Main() {
 const theme=useTheme();
    const [alignment, setAlignment] = useState('left');
    const [clickedPro, setclickedPro] = useState({});
    const [open, setOpen] = useState(false);
    const{t}=useTranslation();


  const allProductsAPI = "products?populate=*";
  const menCategoryAPI = "products?populate=*&filters[productCategory][$eq]=men";
  const womenCategoryAPI = "products?populate=*&filters[productCategory][$eq]=women";
const [productCategory, setProductCategory]=useState(allProductsAPI);


  const { data, error, isLoading } = useGetproductByNameQuery(
    productCategory
    )

    

    const handleAlignment = (event,newAlignment) => {
      if (newAlignment !== null) {
        setAlignment(newAlignment); 
              setProductCategory(newAlignment)

      }
      
    };
 
 
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

  if(isLoading){
return(
  <Box sx={{ textAlign:"center",py:12 }}>
  <CircularProgress />
</Box>
)

  }

  if(error){
    return(
    <Typography variant="h6" color="initial">
{error.error}
    </Typography>
    ) 
     
      }
    








 if(data){
  return (
    <Container sx={{py:3}} >
      <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"} flexWrap={"wrap"} gap={2}>
        <Box>
<Typography variant="h6" >{t("Selected Products")}</Typography>
<Typography variant="body1" fontWeight={300}>{t("All our new arrivals in a exclusive brand selection")}</Typography>

        </Box>

        <Box>
        <ToggleButtonGroup
        color="error"
      value={productCategory}
      exclusive
      onChange={handleAlignment}
      aria-label="text alignment"
      sx={{".Mui-selected":{
        border:"1px slid rgba(233,69,96,0.5 ) !important",
        color:"#e94560",
        backgroundColor:"initial"

      }}}
    >
      <ToggleButton 
     sx={{color:theme.palette.text.primary}} className="myBtn" value={allProductsAPI} aria-label="left aligned">
        {t("All Products")}
      </ToggleButton>
      <ToggleButton  sx={{mx:"16px !important",color:theme.palette.text.primary}} className="myBtn" value={menCategoryAPI} aria-label="centered">
        {t("Men Category")}
      </ToggleButton>
      <ToggleButton sx={{color:theme.palette.text.primary}} className="myBtn" value={womenCategoryAPI} aria-label="right aligned">
        {t("Women Category")}
      </ToggleButton>

    </ToggleButtonGroup>
        </Box>
      </Stack>
     
      <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"}  flexWrap={"wrap"}>

      {data.data.map(item => {
  return (

    <Card component={motion.section}
    layout
    initial={{ transform: "scale(0)" }}
    animate={{ transform: "scale(1)" }} 
  
    transition={{duration: 0.8,type:"spring"}}
    key={item.id} sx={{ maxWidth: 333, mt: 6, ":hover .MuiCardMedia-root": {
      scale: "1.1",
      transition: ".20s",
      rotate: "1deg"
    } }}> 
      <CardMedia
        sx={{ height: 277 }}
        // @ts-ignore
        image={`${item.attributes.productimg.data[0].attributes.url}`}
      />
      <CardContent>
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Typography variant="h6" component="div">
            {t(item.attributes.productTitle)}
          </Typography>
          <Typography variant="subtitle1" component="p">
            $ {item.attributes.productPrice}
          </Typography>
        </Stack>
        <Typography variant="body2" color="text.secondary">
             {t(item.attributes.productDesc)}
             </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "space-between" }}>
        <Button className="cart" onClick={()=>{
        
          handleClickOpen()
          setclickedPro(item);

        }} sx={{ textTransform: "capitalize" }} size="large">
          <AddShoppingCartIcon/> {t("Add To Cart")}
        </Button>
        <Rating className="rate" precision={0.1} name="read-only" value={item.attributes.productRating} readOnly />
      </CardActions>
    </Card>
  );
})}
       
  </Stack>
         <Dialog sx={{".MuiPaper-root":{minWidth:{xs:"100%",md:800}}}} onClose={handleClose} open={open}>
               
               <IconButton 
               sx={{position:"absolute" ,
               top:0,right:10,
               "&:hover":{color:"red",rotate:"30deg" ,
               transition:".2s ease-in-out"}}}
                onClick={handleClose}>

        <Close/>
</IconButton>
<ProductDetails choosenProduct={clickedPro}/>
    </Dialog>
    </Container>
  )
 }
 
}
