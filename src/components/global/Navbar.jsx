import Box from '@mui/material/Box';
import { ProjectIcon } from './ProjectIcon';
import {styles} from '../globalStyle';
import { useWidth } from '../customHooks/useWidth';
import MenuIcon from '@mui/icons-material/Menu';
import DrawerComponent from './DrawerComponent';
import { Link } from '@mui/material';
import 'animate.css'

export const Navbar = () => {
    const matches = useWidth();
    return (
        <header>
           
            <Box
                sx={
                    {
                        width:'100%',
                        height:'auto',
                        padding : '15px 20px 15px 20px',
                        display:'flex',
                        flexDirection:'row',
                        justifyContent:'space-between',
                        alignItems:'center',
                        boxShadow:' 0 1px 3px rgba(182, 182, 182, 0.75)',
                    }
                }
            >
                <Box>
                    <h3 className='title animate__shakeX'>SAFARI HAMULI</h3>
                </Box>
                <Box
                    display='flex'
                    flexDirection='row'
                    columnGap='10px'
                >
                    {matches === true ? ( <><li><Link underline='none' href='#experiance'>Skills</Link></li><li><Link underline='none' href='#projects'><ProjectIcon color={styles.redColor} /></Link></li><li><Link underline='none' href="#contact">Contact me</Link></li></>) : <DrawerComponent  colors={{color:styles.redColor}}/>}
                   
                </Box>
            </Box>
        </header>
    )
}