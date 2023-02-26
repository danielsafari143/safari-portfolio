import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/material";
import manStanding from '../assets/img/manstanding.png'
import{ styles} from './globalStyle'
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import { useWidth } from "./customHooks/useWidth";
import { useState } from "react";

export function Contact () {
    const matches = useWidth();
    const [email , setEmail ] = useState('');
    const [text , setText ] = useState('');

    const updatForm = (event) => {
        const inputTarget = event.target;
        const isEmail = inputTarget.name === 'email';
        const value = inputTarget.value;

        if(isEmail){
            setEmail(() => {
                return value.trim();
            })
        }
        else{
            setText(() => {
                return value;
            })
        }
    }


    return (
        <section id="contact">
            <Box 
                display='flex'
                flexDirection='column'
                alignItems='center'
                justifyContent='center'
                gap='20px'
                padding = {styles.paddingG} 
                color={styles.redColor}
                paddingTop='50px'
                paddingBottom='50px'
                backgroundColor={styles.iconColor}
            >
                <Typography variant="h5">Contact me</Typography>
                <Box
                    display='flex'
                    flexDirection={matches === true ? 'row' : 'column'}
                    justifyContent='center'
                    alignItems='center'
                    gap='30px'
                >
                    <img className="mainStanding" src={manStanding}/>
                    <form method="POST" action="https://mailthis.to/danielsafari143@gmail.com">
                    <Box 
                        display='flex'
                        flexDirection='column'
                        alignItems='center'
                        justifyContent='center'
                        gap='20px'
                    >  
                            <TextField value={email} type="email" name="email" onChange={updatForm} sx={{width:matches === true ? '40vw' : '100%'}} id="Email" label="Email" placeholder="Enter your email" variant="outlined"/>
                            <TextField value={text} name="text" onChange={updatForm}sx={{width:matches === true ? '40vw' : '100%'}} id="Email" label="Message" placeholder="Enter your message" variant="outlined" multiline   rows={5}/>
                            <Button type="submit" sx={{ backgroundColor:styles.red , width:'200px'}} variant="contained" endIcon={<SendIcon sx={styles.textColorG}/>}>Send Message </Button>
                        
                    </Box>
                </form>
                </Box>
            </Box>
        </section>
    )
}