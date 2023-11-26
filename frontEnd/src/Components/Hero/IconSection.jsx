import { Box,useMediaQuery, Container, Divider, Stack, Typography, useTheme } from "@mui/material";
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import { useTranslation } from "react-i18next";


export default function IconSection() {
    const theme=useTheme();
    const{t}=useTranslation();
    return(
<Container  sx={{   mt:3,    bgcolor:theme.palette.mode==="dark"?"#000":"#fff"}}>
<Stack direction={"row"} alignItems={"center"} sx={{flexWrap:"wrap"}} 
divider={ useMediaQuery("(min-width:600px)")?   <Divider orientation="vertical" flexItem/> : null} >
 

   <MyBox icon={<ElectricBoltIcon/>} title={t("Fast Delivery")} subTitle={t("Start From $10")}/>
   <MyBox icon={<WorkspacePremiumIcon/>} title={t("Money Guarantee")} subTitle={t("7 Days Back")}/>
   <MyBox icon={< AccessAlarmIcon/>} title={t("365 Days")} subTitle={t("For Free Return")}/>
   <MyBox icon={<CreditScoreIcon/>} title={t("Payment")} subTitle={t("Secure System")}/>

 
</Stack>

</Container>
  )
}




function MyBox({icon,title,subTitle}) {
    const theme=useTheme();
  return (
  <Box sx={{width:"250px",display:"flex",flexGrow:1,
  alignItems:"center",
  gap:3,
  justifyContent:"center",
  py:1.6
  }} >
{icon}
<Box>
<Typography variant="body1">{title}</Typography>
<Typography sx={{fontWeight:300,color:theme.palette.text.secondary}} variant="body1">{subTitle}</Typography>
</Box>
  </Box>
  )
}
