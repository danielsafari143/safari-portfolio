import Box from '@mui/material/Box';
import {styles} from '../globalStyle';
import { Link , Typography} from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TwitterIcon from '@mui/icons-material/Twitter';
import MailIcon from '@mui/icons-material/Mail';
import GitHubIcon from '@mui/icons-material/GitHub';
import {useWidth} from '../customHooks/useWidth';
import {getLinkWhastapp} from './iconLogic/whatsap'

export default function Footer () {
    const mediaQuery = useWidth();
    let date = new Date().getFullYear();

    function GitPart () {
        return (
            <Box 
            display='column'
            justifyContent='space-between'
            columnGap='10px'
        >
            <Box>
                <Typography sx={{color : styles.textColorG}} variant="subtitle1" gutterBottom>
                    More projects I've worked on
                </Typography>
            </Box>
            <Box
                display='flex'
                justifyContent='space-between'
                columnGap='20px'
            >
                <Link href='https://github.com/danielsafari143' color='inherit' sx={{display : 'flex' , columnGap: '10px' , alignItems:'center'}}>
                    <GitHubIcon sx={{color : styles.iconColor}}/> <Typography sx={{color : styles.iconColor , fontSize:'12px'}}>@danielsafari143 on github</Typography>
                </Link>
            </Box>
        </Box>   
        )
    }
   
    return (
        <footer>
            <Box  
                sx={
                    {
                        backgroundColor : styles.backGlobalCrd,
                        height : 'auto',
                        display : mediaQuery === true ? 'grid' : 'flex',
                        gridTemplateColumns : 'auto auto auto',
                        flexDirection : mediaQuery === true ? 'row' : 'column',
                        justifyContent : mediaQuery === true ? 'space-between' : 'center',
                        alignItems :  mediaQuery === true ?'center' : 'space-between',
                        gap : '40px',
                        padding : styles.paddingG,
                        padding:'40px'
                    }
                }
            >
                   <Box>
                        <Typography sx={{color : styles.textColorG}} variant="subtitle1" gutterBottom>
                          About me
                        </Typography>
                        <Typography sx={{color : styles.textColorG }} variant="body2" gutterBottom>
                          Hello I'm a junior web developer and a very big fan of all things tech, I'm based in the Democratic Republic of Congo and I'm ready to provide solutions to your tech related problems
                        </Typography>
                    </Box>
                <Box 
                    display='column'
                    justifyContent='space-between'
                    columnGap='10px'
                >
                    <Box>
                        <Typography sx={{color : styles.textColorG}} variant="subtitle1" gutterBottom>
                            My social media links
                        </Typography>
                    </Box>
                    <Box
                        display='flex'
                        justifyContent='space-between'
                        columnGap='40px'
                    >
                        <Link href='https://www.linkedin.com/in/daniel-safari-a01744251/' color='inherit'>
                            <LinkedInIcon sx={{color : styles.iconColor}}/>
                        </Link>
                        <Link href={getLinkWhastapp('+243 977974591' , 'Bonjour nous vous contactons pour le poste de junior front end developer')} color='inherit'>
                            <WhatsAppIcon sx={{color : styles.iconColor}}/>
                        </Link>
                        <Link href='https://twitter.com/DanielSafari143' color='inherit'>
                            <TwitterIcon sx={{color : styles.iconColor}}/>
                        </Link>
                        <Link href='https://danielsafari143@gmail.com' color='inherit' >
                            <MailIcon sx={{color : styles.iconColor}}/>
                        </Link>
                    </Box>
                </Box>
                <GitPart/>
            </Box>
            <Box 
                padding='5px'
                textAlign='center'
                backgroundColor={styles.backGlobalCrdText}
            >
                    <Typography variant='caption' color={styles.iconColor}>
                        Copyright ©{date-1}-{date}
                    </Typography>
            </Box>
        </footer>
    )
}