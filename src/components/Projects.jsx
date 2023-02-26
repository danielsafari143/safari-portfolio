import { Card } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {styles} from './globalStyle'
import { Box } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useWidth } from "./customHooks/useWidth";
import { ProjectIcon } from "./global/ProjectIcon";

export function Projects () {
    const matches = useWidth();
    const counter = [['Secours','Full stack'] , ['Diaspora Groupe LTD' , 'Full stack'] , ['SAPI' ,'Front end']];
    return (
       <section id="projects">
             <Box
                padding={styles.paddingG}
                backgroundColor={styles.iconColor }
                display = 'flex' 
                flexDirection='column'
                alignItems='center'
                gap='20px'
                paddingTop='50px'
                paddingBottom='50px'
            >
            <Box 
                textAlign='center'
            >
                <Typography><ProjectIcon color= {styles.redColor}/></Typography>
                <Typography sx={{color:styles.grie , fontSize:'1.25 rem'}}>A select number of projects</Typography>
            </Box>
        <Box
                backgroundColor={styles.iconColor }
                display = 'flex' 
                flexDirection={matches === true ? 'column' : 'column'}
                justifyContent=''
                gap = '10px'
        >
            
            {
                counter.map((items) => {
                    return (
                        <li>{items[0]} <br /> {items[1]} developer /Goma DRC</li>
                    );
                })
            }
        </Box>
        </Box>
       </section>
    )
}