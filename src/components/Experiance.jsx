import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/material";
import projects from '../assets/img/projects.png'
import{ styles} from './globalStyle'
import { useWidth } from "./customHooks/useWidth";
import reacts from '../assets/img/react.png'
import bootstrap from '../assets/img/bootstrap.png'
import js from '../assets/img/js.png'
import typescript from '../assets/img/typescript.png'
import webpack from '../assets/img/webpack.png'
import html from '../assets/img/html.png'
import rdx from '../assets/img/rdx.png'
import css1 from '../assets/img/css1.png'

export function Experiace () {
    const matches = useWidth();
    const skills=[[reacts , 'react'],[html , ['html']],[typescript,'typescript'],[js ,'javaScript'],[webpack,'webpack'],[bootstrap,'bootstrap'],[rdx,'redux'],[css1,'css']];

    return (
       <section id="experiance">
             <Box 
                display='flex'
                flexDirection='column'
                alignItems='center'
                justifyContent='center'
                gap='20px'
                padding = {styles.paddingG} 
                paddingTop='40px'
                paddingBottom='50px'
                backgroundColor={styles.iconColor}
                textAlign='center'
            >
                <Typography sx={{paddingBottom:'30px'}} color={styles.redColor} variant="h6">Skills</Typography>
                <Box
                    display='flex'
                    flexDirection={matches === true ? 'column-reverse' : 'column-reverse'}
                    justifyContent='space-between'
                    alignItems='center'
                    gap='30px'
                >
                    
                    <Box >
                    <Typography 
                            sx={
                                { paddingTop:'20px',
                                paddingBottom:'30px',
                                color:styles.grie,
                            }
                            }
                    >I have a vast experience in the following web technologies:</Typography>
                    <Box
                            display={matches === true ? 'flex' : 'grid'}
                            gridTemplateColumns='auto auto'
                            flexDirection='row'
                            alignItems='center'
                            justifyContent='center'
                            gap='20px'
                            columnGap={matches === true ? '20px' : '40px'}
                    >
                            {skills.map((item)=> {
                                return(
                                    <Typography 
                                        display='flex'
                                        flexWrap='wrap'
                                        flexDirection ='column'
                                        alignItems='center'
                                        gap='7px'
                                    >
                                        <img key={item[1]} width='40px'  src={item[0]}/>
                                        {item[1]}
                                    </Typography>
                                );
                            })}
                    </Box>
                    </Box>
                    <img className="mainStanding" src={projects}/>
                </Box>
            </Box>
       </section>
    )
}