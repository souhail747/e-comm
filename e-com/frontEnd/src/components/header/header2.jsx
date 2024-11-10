import { alpha, Badge, Container, IconButton, InputBase, Box, styled, Typography, Menu, MenuItem, List, ListItemButton, ListItemText } from '@mui/material'
import React, { useState } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import { ExpandMore, Margin } from '@mui/icons-material';
import { useTheme } from '@emotion/react';
const options = [
  'ALL',
  'Cars',
  'Clothes',
  'ELectrons',
];

export default function header2() {
 
  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    border:"2px solid #777",
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.09),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));

  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }));
 
  
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (
    event,
    index,
  ) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
const theme=useTheme()
  
  return (
    <Container sx={{display:"flex",justifyContent:"space-between",mt:"19px" }}>
      
      <Box sx={{display:"flex",flexDirection:"column",justifyContent:"center"}} alignItems="center">
      <ShoppingCartIcon/>
      <Typography variant="body1" color="inherit">E-commerce</Typography>
              </Box>
             
             
             <Box component="div" width="500px">

            
              <Search  sx={{display:'flex', borderRadius:"22px",width:"418px"}}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
      
     
           {
           /*  <List
        component="nav"
        aria-label="Device settings"
        sx={{bgcolor:theme.palette.Mycolor.main}}
      >
        <ListItemButton
          aria-haspopup="listbox"
          aria-controls="lock-menu"
          aria-label="when device is locked"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClickListItem}
          sx={{"&:hover":{cursor:"pointer"}}}
        ><Menu
        id="lock-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'lock-button',
          role: 'listbox',
        }}
      >
        {options.map((option, index) => (
          <MenuItem
          sx={{fontSize:"11px",p:"3px 10px",minHeight:"10px"}}
            key={option}
            
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
          <ListItemText className='border'
            sx={{".MuiTypography-root ":{fontSize:"10px",color:"#fff"} ,}}
            secondary={options[selectedIndex]}
          />
          <ExpandMore sx={{fontSize:"10px",color:"#fffspm"}}/>
        </ListItemButton>
      
      
      </List> */}
          </Search>
          </Box>
              
      <Box>

          <IconButton aria-label="cart" sx={{m:"4px"}}>
  <StyledBadge badgeContent={4} color="secondary">
    <ShoppingCartIcon />
  </StyledBadge>
</IconButton>
           <IconButton>
            <PersonIcon/>
           </IconButton>
           
      </Box>


      
      
    

    
    </Container>



  )
}
