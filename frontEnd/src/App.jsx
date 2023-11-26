import Header2 from "./Components/Header/Header2";
import Header1 from "./Components/Header/Header1";
import Header3 from "./Components/Header/Header3";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "../src/Theme";
import Hero from "./Components/Hero/Hero";
import IconSection from "./Components/Hero/IconSection";
import Main from "./Components/MainContent/Main";
import Footer from "./Components/Footer/Footer";
import ScrollToTop from "./Components/Scroll/ScrollToTop";
import { motion } from "framer-motion";
import { I18nextProvider } from 'react-i18next';
import { useEffect } from "react";
import i18n from 'i18next';



 
function App() {
  const [theme, colorMode] = useMode();

  return (
    <>
   <ColorModeContext.Provider 
// @ts-ignore
   value={colorMode}>
        <ThemeProvider 
// @ts-ignore
        theme={theme}>
          <CssBaseline />


          <motion.div>

          </motion.div>
      <Header1/>
<Header2/>
<Header3/>
<Box sx={{bgcolor:theme.
// @ts-ignore
palette.bg.main}}>
  <Hero/>
  <Main/>
  <ScrollToTop/>
  </Box>
  <Footer/>


</ThemeProvider>
      </ColorModeContext.Provider>
    </>
  )
}

export default App
