import { Box, Card, Container, IconButton, Rating, Stack, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import { Key } from '@mui/icons-material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import CloseIcon from '@mui/icons-material/Close';
import { useTheme } from '@emotion/react';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { useGetPokemonByNameQuery } from '../../redux/pokemon';
export default function Main() {
  const allproduct = 'products?populate=*';
  const womenproduct = 'products?populate=*&&filters[productCategory][$eq]=women';
  const menproduct = 'products?populate=*&filters[productCategory][$eq]=men';
  const [cat, setCat] = useState(allproduct);

  // Handler function to update the state
  const handleCat = (catitem) => {
    setCat(catitem); // Update state with the passed URL string
  };

  // Assume `useGetPokemonByNameQuery` is a custom hook for fetching data
  const [mydate, setmydate] = useState(allproduct)
  const { data, error, isLoading } = useGetPokemonByNameQuery(mydate);
  const [isHovered, setIsHovered] = useState("");
 
  const handleClickOpen2 = (item) => {
    setIsHovered(item);
  };

  const images = ['images\\2.webp', 'images\\4.webp', 'images\\3.webp']




  // Component

  // Initialize state with `allproduct` as a string


  const [open, setOpen] = React.useState(false);
  const theme = useTheme()
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  
  const [alignment, setAlignment] = React.useState('web');

  const handleChange = (
    event,
    newValue,
  ) => {
    setAlignment(newValue);
    setmydate(newValue)
  };
  const [value, setValue] = React.useState(2);

  if (data) {
    return (
      <Container sx={{ mt: "8px" }}>

        <Stack flexDirection={"row"}
          justifyContent={"space-between"}
          gap={3}
          flexWrap={"wrap"}

        >
          <Box>
            <Typography variant="body1" color="inherit">Selected Products </Typography>
            <Typography variant="body1" color="inherit">All out new arrivals
              in exlucive brand selection </Typography>
          </Box>
          <Box>
            <ToggleButtonGroup
              color="primary"
              value={mydate}
              exclusive
              onChange={handleChange}
              aria-label="Platform"
              sx={{
                ".Mui-selected": {
                  bgcolor: "initial",
                  border: "1px solid rgba(233 ,69,96,0.5)  !important",
                  color: "#e94560"
                }
              }}
            >
              <ToggleButton
                onClick={() => handleCat(allproduct)}
                className="a"
                value={allproduct}
              >
                All products
              </ToggleButton>
              <ToggleButton
                onClick={() => handleCat(menproduct)}
                className="a"
                value={menproduct}
              >
                Men category
              </ToggleButton>
              <ToggleButton
                onClick={() => handleCat(womenproduct)}
                className="a"
                value={womenproduct}
              >
                Women category
              </ToggleButton>
            </ToggleButtonGroup>


          </Box>

        </Stack>

        {/* caaaaaaaaaaardd */}
        <Stack flexDirection={"row"} flexWrap={"wrap"} sx={{ width: "100%", mt: "18px" }}>

          {data.data.map((item) => {
            return (
              <>



                <Card



                  sx={{
                    position: "relative",
                    maxWidth: 333,
                    m: 2,
                    ":hover .MuiCardMedia-root": { scale: "1.1", transition: "0.4s", rotate: "1deg" },
                    ":hover .z": { display: "block" }
                  }}
                >

                  {/* modal */}

                  <Dialog sx={{
                    ".MuiPaper-root": {
                      bgcolor: theme.palette.modal.main,
                      minWidth: { xs: "100%", md: 800 },
                      minHeight: { xs: "100%", md: 400 }
                    }



                  }}
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                  >
                    {/* My modal */}
                    <Box display={"flex"} sx={{ flexDirection: { xs: "column", md: "row" } }}  >
                      <IconButton sx={{
                        color: "black", ":hover":
                        {
                          rotate: "360deg", transition: "0.3s"
                          , color: "red"
                        }, position: "absolute"
                        , top: 10, right: 10
                      }} onClick={handleClose}>

                        <CloseIcon />
                      </IconButton>

                      <Box sx={{ display: "flex", justifyContent: { xs: "center" } }}>

                        <Box
                          component="img"
                          src={isHovered}
                          alt="Example Image"
                          sx={{
                            width: {
                              xs: 300, // width for extra-small screens
                              md: 420, // width for medium and larger screens
                            },
                          }}
                        />

                      </Box>
                      <Box sx={{/* display:"flex" ,  justifyContent:{xs:"center",md:"left"},  */textAlign: { xs: "center", md: "left" },
                        /* alignItems:{xs:"center",sm:"left"}, */
                        flexDirection: 'column',
                        my: { xs: "30px", md: "65px" },
                        ml: { xs: 0, md: "35px" },
                        mr: { xs: 0, md: "20px" },


                      }}    >
                        <Typography variant="h4" color="initial"
                          sx={{
                            fontWeight: "bold"
                            , letterSpacing: "2px"

                          }}>

                          Women's Fashion</Typography>
                        <Typography variant="h6" color="initial"
                          sx={{
                            fontWeight: "bold"
                            , color: "red"

                          }}>

                          $12.99</Typography>
                        <Typography variant="h6" color="initial"
                          sx={{
                            fontSize: 14


                          }}>

                          Lorem ipsum dolor sit audantium a iusto, esse consectetur? Nulla, pariatur odit?</Typography>


                        <Box display={"flex"} gap={2} sx={{ justifyContent: "center" }}>

                          {images.map((item) => {
                            return (


                              <IconButton onClick={() => handleClickOpen2(item)}>



                                <Box


                                  component="img"
                                  src={item}
                                  alt="Example Image"
                                  sx={{
                                    my: "35px",
                                    width: {
                                      xs: 150, // width for extra-small screens
                                      md: 80, // width for medium and larger screens
                                    },
                                  }}
                                />
                              </IconButton>



                            )
                          }
                          )}
                        </Box>


                        <Button onClick={handleClickOpen} sx={{
                          fontSize: "14px",
                          fontWeight: "bold", bgcolor: "white", color: "black",
                          border: "1px solid black"
                          , ":hover": { bgcolor: "#219ebc", color: "white" },

                        }}>
                          <AddShoppingCartIcon sx={{ mr: "5px" }} />
                          Add to card
                        </Button>




                      </Box>
                    </Box>


                    {/*end modal */}
                  </Dialog>
                  {/* modal */}

                  <CardMedia
                    sx={{ height: 277 }}
                    image={`http://localhost:1337${item.attributes.productImage.data[0].attributes.url}`}
                    title="green iguana"
                  />

                  <CardContent>
                    <Stack flexDirection={"row"} justifyContent={"space-between"} >
                      <Typography variant="h6" color="inherit"> {item.attributes.productTitle} </Typography>
                      <Typography variant="h6" color="inherit"> {item.attributes.productPrice}$ </Typography>

                    </Stack>
                    <Typography variant="body1" color="inherit" sx={{

                      fontWeight: 10,
                      fontSize: 11
                    }}>{item.attributes.productDescr}</Typography>
                  </CardContent>
                  <CardActions>
                    <Button sx={{ fontSize: "12px" }}>
                      <AddShoppingCartIcon sx={{ mr: "5px" }} />
                      Add to card
                    </Button>
                    <Box
                      sx={{
                        '& > legend': { mt: 2 },
                      }}
                    >

                      <Typography component="legend"></Typography>
                      <Rating precision={0.5} name="read-only" value={item.attributes.productRating} readOnly />

                    </Box>

                  </CardActions>

                  <Box
                    className="z"
                    sx={{
                      position: "absolute",
                      top: 30,
                      right: 10,
                      display: "none"
                    }}
                  >
                    <IconButton size="small"


                      onClick={() => {
                        handleClickOpen2(`http://localhost:1337${item.attributes.productImage.data[0].attributes.url}`); // Update the first state
                        handleClickOpen(); // Function to open the dialog
                      }}


                      sx={{
                        bgcolor: theme.palette.Mycolor.main,
                        color: "white",
                        border: "1px solid black !important",
                        borderRadius: "44px",
                        ":hover": { bgcolor: "black" }

                      }} >
                      <RemoveRedEyeIcon sx={{ fontSize: 20 }} />
                    </IconButton>
                  </Box>
                </Card>
              </>
            )
          }
          )}

        </Stack>





      </Container>



    )
  }
}
