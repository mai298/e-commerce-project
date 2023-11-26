import {
    Box,
    Button,
    Container,
    Link,
    Stack,
    Typography,
    useTheme,
  } from "@mui/material";
  import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
  
  import { Swiper, SwiperSlide } from "swiper/react";
  import { Pagination } from 'swiper/modules';
  
  // Import Swiper styles
  import "swiper/css";
  import "swiper/css/pagination";
  import "./slider.css";
import IconSection from "./IconSection";
import { useTranslation } from "react-i18next";
  
  const mySlider = [
    { text: "MEN", link: "./assets/banner-15.jpg" },
    { text: "WOMEN", link: "./assets/banner-25.jpg" },
  ];
  
  const Hero = () => {
    const { t, i18n } = useTranslation();

    const theme = useTheme();
    return (
      <Container  >
        <Box sx={{pt: 2, mt: 2.5, display: "flex", alignItems: "center", gap: 2 }}>
          <Swiper
            loop={true}
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {mySlider.map((item) => {
              return (
                <SwiperSlide key={item.link} className="parent-slider">
                  <img src={item.link} alt="" />
                  <Box
                    sx={{
                      [theme.breakpoints.up("sm")]: {
                        position: "absolute",
                        left: "10%",
                        textAlign: "left",
                      },
  
                      [theme.breakpoints.down("sm")]: {
                        pt: 4,
                        pb: 6,
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#222",
                      }}
                      variant="h5"
                    >
                      {t('LIFESTYLE COLLECTION')}
                    </Typography>
  
                    <Typography
                      sx={{
                        color: "#222",
                        fontWeight: 500,
                        my: 1,
                      }}
                      variant="h3"
                    >
                      {t(item.text)}
                    </Typography>
  
                    <Stack
                      sx={{
                        justifyContent: { xs: "center", sm: "left" },
                      }}
                      direction={"row"}
                      alignItems={"center"}
                    >
                      <Typography color={"#333"} mr={1} variant="h4">
                        {t("SALE UP TO ")}
                      </Typography>
                      <Typography color={"#D23F57"} variant="h4">
                       {t( " 30% OFF")}
                      </Typography>
                    </Stack>
                    <Typography
                      sx={{
                        color: "#000",
                        fontWeight: 300,
                        my: 1,
                      }}
                      variant="body1"
                    >
{t("Get Free Shipping on orders over $99.00"
)}                    </Typography>
  
                    <Button
                      sx={{
                        px: 5,
                        py: 1,
                        mt: 2,
                        backgroundColor: "#222",
                        boxShadow: "0px 4px 16px rgba(43, 52, 69, 0.1)",
                        color: "#fff",
                        borderRadius: "1px",
                        "&:hover": {
                          bgcolor: "#151515",
                          boxShadow: "0px 4px 16px rgba(43, 52, 69, 0.1)",
                        },
                      }}
                      variant="contained"
                    >
                      {t("shop now")}
                    </Button>
                  </Box>
                </SwiperSlide>
              );
            })}
          </Swiper>
  
          <Box sx={{ display: { xs: "none", md: "block", minWidth: "26.6%" } }}>
            <Box sx={{ position: "relative" }}>
              <img width={"100%"} src="./assets/banner-17.jpg" alt="" />
  
              <Stack
                sx={{
                  position: "absolute",
                  top: "50%",
                  transform: "translateY(-50%)",
                  left: 31,
                }}
              >
                <Typography
                  variant="caption"
                  sx={{
                    color: "#2B3445",
                    fontSize: "18px",
                  }}
                >
                  {t("NEW ARRIVALS")}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    color: "#2B3445",
                    lineHeight: "16px",
                    mt: 1,
                  }}
                >
                  {t("SUMMER")}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    color: "#2B3445",
                  }}
                >
                  {t("SALE 20% OFF")}
                </Typography>
  
                <Link
                  sx={{
                    color: "#2B3445",
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    transition: "0.2s",
  
                    "&:hover": {
                      color: "#D23F57",
                    },
                  }}
                  href="#"
                  underline="none"
                >
                  {t("shop now")}
                  <ArrowForwardIcon sx={{ fontSize: "13px" }} />
                </Link>
              </Stack>
            </Box>
  
            <Box sx={{ position: "relative" }}>
              <img width={"100%"} src="./assets/banner-16.jpg" alt="" />
              <Stack
                sx={{
                  position: "absolute",
                  top: "50%",
                  transform: "translateY(-50%)",
                  left: 31,
                }}
              >
                <Typography
                  variant="caption"
                  sx={{
                    color: "#2B3445",
                    fontSize: "18px",
                    fontWeight: 300,
                  }}
                >
                  {t("GAMING 4K")}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    color: "#2B3445",
                    lineHeight: "16px",
                    mt: 1,
                  }}
                >
                  {t("DESKTOPS &")}
                </Typography>
  
                <Typography
                  variant="h6"
                  sx={{
                    color: "#2B3445",
                  }}
                >
                 {t("LAPTOPS")}
                </Typography>
  
                <Link
                  sx={{
                    color: "#2B3445",
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    transition: "0.2s",
  
                    "&:hover": {
                      color: "#D23F57",
                    },
                  }}
                  href="#"
                  underline="none"
                >
                  {t("shop now")}
                  <ArrowForwardIcon sx={{ fontSize: "13px" }} />
                </Link>
              </Stack>
            </Box>
          </Box>
        </Box>
        <IconSection/>

      </Container>
    );
  };
  
  export default Hero;