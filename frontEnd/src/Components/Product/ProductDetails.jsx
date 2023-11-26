import { AddShoppingCart } from "@mui/icons-material";
import { Box, Button, Typography, Stack, Container, ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import './ProductDetails.css';

export default function P({ choosenProduct }) {

  const [changedImg, setChangedImg] = useState(0);

  const [alignment, setAlignment] = useState();

  const{t}=useTranslation();

  const handleAlignment = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  };
  return (
    <Box
    className="card"
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2.5,
        flexDirection: { xs: "column", sm: "row" },
      }}
    >
      <Box sx={{ display: "flex" }}>
        <img width={322} src={choosenProduct.attributes.productimg.data[changedImg].attributes.url} />
      </Box>

      <Box className="pro" sx={{py:2,width:"100%", textAlign: { xs: "center", sm: "left" } }}  >
        <Typography variant="h5">{t(choosenProduct.attributes.productTitle)}</Typography>
        <Typography my={0.4} fontSize={"22px"} color={"crimson"} variant="h6">
          $ {choosenProduct.attributes.productPrice}
        </Typography>
        <Typography variant="body1" className="cardDesc">
          {t(choosenProduct.attributes.productDesc)}
        </Typography>

        <Stack sx={{  justifyContent: { xs: "center", sm: "left" } }}
          direction={"row"} gap={1} my={2} >

          <ToggleButtonGroup
            value={alignment}
            exclusive
            onChange={handleAlignment}
            sx={{ width:"28rem",".Mui-selected":{
              border:"1px solid royalblue !important",
              borderRadius:"5px solid !important",
              opacity:"1",
              backgroundColor:"initial"
      
            }}}>{choosenProduct.attributes.productimg.data.map((item, index) => {
            return (


              <ToggleButton key={item.id} value={index}
               sx={{width:"110px",height:"110px",mx:1,p:"0",opacity:"0.5"}}
               >
                <img
                  onClick={() => {
                    setChangedImg(index);
                  }}
                  style={{ borderRadius: 3, cursor: "pointer" }}
                  height={"100%"}
                  width={"100%"}
                  src={item.attributes.url}
                  alt=""
                />
              </ToggleButton>

            );
          })}
          </ToggleButtonGroup>


        </Stack>

        <Button sx={{ mb: { xs: 1, sm: 0 }, textTransform: "capitalize" }}
          variant="contained">
          <AddShoppingCart sx={{ mr: 1 }} fontSize="small" />
          {t("Buy now")}
        </Button>
      </Box>
    </Box>
  )
}
