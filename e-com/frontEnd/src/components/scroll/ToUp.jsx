import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';

import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Zoom from '@mui/material/Zoom';
export default function ToUp() {
  return (
<Zoom in={useScrollTrigger()}>
    <Box sx={{ position:"fixed", bottom:23,right:0, '& > :not(style)': { m: 1 } }}>
          <Fab onClick={() => {
            window.scrollTo(0,0)
          }
          } color="primary" aria-label="add">
            <ArrowUpwardIcon />
          </Fab>
    
        </Box> 
    
</Zoom >    
)
}
