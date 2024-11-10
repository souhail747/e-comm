import Header1 from "./components/header/header1"
import Header2 from "./components/header/header2"
import Header3 from "./components/header/header3"
import Main from "./components/main/mymain"
import Hero from "./components/hero/hero";
import Footer from "./components/foter/Footer";
// @ts-ignore
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { ColorModeContext, useMode } from "./theme";
import ToUp from "./components/scroll/ToUp";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider 
// @ts-ignore
    value={colorMode}>
      <ThemeProvider 
// @ts-ignore
      theme={theme}>
      <CssBaseline />
    <Header1/> 
    <Header2/>
    <Header3/>
    <Box bgcolor={theme.
// @ts-ignore
    palette.bg.main}>
        <Hero/> 
      <Main/>
    </Box >
      <Footer/>
      <ToUp/>


    </ThemeProvider>
    </ColorModeContext.Provider>

  )
}

export default App
