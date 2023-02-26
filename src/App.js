import { Navbar } from "./components/global/Navbar";
import Container from "@mui/material/Container";
import Footer from "./components/global/Footer";
import { Contact } from "./components/Contact";
import {Projects} from './components/Projects'
import { Experiace } from "./components/Experiance";
import { MainSection } from "./components/MainSection";
import { Box } from "@mui/material";
import { useWidth } from "./components/customHooks/useWidth";


function App() {
  const matches = useWidth
  return (
    <div className="app">
        <Navbar/>
        <MainSection/>
         <Box 
          display='flex'
          flexDirection={matches === true ? 'row' : 'column-reverse'}
         >
          <Experiace/>
          <Projects/>
         </Box >
        <Contact/>
        <Footer/>
    </div>
  );
}

export default App;
