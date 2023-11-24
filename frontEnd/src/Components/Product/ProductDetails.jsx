import { AddShoppingCart } from "@mui/icons-material";
import { Box, Button, Typography, Stack, Container, ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useState } from "react";

export default function ProductDetails({ choosenProduct }) {

  const [changedImg, setChangedImg] = useState(0);

  const [alignment, setAlignment] = useState();

  const handleAlignment = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  };
  return (
    <Box
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

      <Box sx={{py:2, textAlign: { xs: "center", sm: "left" } }}  >
        <Typography variant="h5">{choosenProduct.attributes.productTitle}</Typography>
        <Typography my={0.4} fontSize={"22px"} color={"crimson"} variant="h6">
          $ {choosenProduct.attributes.productPrice}
        </Typography>
        <Typography variant="body1">
          {choosenProduct.attributes.productDesc}
        </Typography>

        <Stack sx={{ justifyContent: { xs: "center", sm: "left" } }}
          direction={"row"} gap={1} my={2}>

          <ToggleButtonGroup
            value={alignment}
            exclusive
            onChange={handleAlignment}
            sx={{".Mui-selected":{
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
          Buy now
        </Button>
      </Box>
    </Box>
  )
}
