import { Box, Button, Typography } from "@mui/material";
import { styles } from "./globalStyle";
import daniel from '../assets/img/daniel.png';
import { useWidth } from "./customHooks/useWidth";
import 'animate.css'


export function MainSection() {
    const matches = useWidth();
    return(
        <section id="mainClass" className="mainSection">
            <Box 
                padding = {styles.paddingG}
                height='auto'
                display='flex'
                flexDirection={matches === true ? 'row-reverse' : 'column'}
                alignItems='center'
                justifyContent='space-between'
                paddingTop='20px'
                paddingBottom='40px'
                gap='30px'
               
            >
                 <Box>
                    <img width='300px' src={daniel}/>
                 </Box>
                <Box 
                    display='flex'
                    flexDirection='column'
                    gap='10px'
                >
                    <Typography variant="h1" sx={{fontSize:'20px' , paddingBottom:'5px',color:styles.backGlobalCrd}}>Hi👋, I’m a</Typography>
                    <Typography variant="h1" sx={{fontSize:'30px' , paddingBottom:'10px' ,color:styles.backGlobalCrd}}>software developer</Typography>
                    <Typography className="animate__slideInUp">I’m Safari Hamuli, a junior developer dedicated to making the world a <br/>better place one line of code at a time.</Typography>
                    
                </Box>
               
            </Box>
        </section>
    );
}