import * as React from 'react';
import {
  Box, Container, List, ListItem, ListItemButton, ListItemIcon,
  ListItemText, Divider, Typography, IconButton, Drawer, useTheme, Button,
  Menu, MenuItem, Accordion, AccordionActions, AccordionSummary,
  AccordionDetails,
  useMediaQuery,
  Stack,
  Paper
} from '@mui/material';
import {
  ArrowForward as ArrowForwardIcon, Window as WindowIcon,
  Menu as MenuIcon, BikeScooter as BikeScooterIcon,
  LaptopChromebook as LaptopChromebookIcon, SportsEsports as SportsEsportsIcon,
  LibraryBooks as LibraryBooksIcon, MoveToInbox as InboxIcon,
  Mail as MailIcon, Close as CloseIcon, ExpandMore as ExpandMoreIcon,
  KeyboardArrowDownOutlined,
  ExpandMore
} from '@mui/icons-material';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import Links from './Links';

export default function header3() {
  const theme = useTheme()
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor, open) =>
      (event) => {
        if (
          event.type === 'keydown' &&
          ((event.key) === 'Tab' ||
            (event.key) === 'Shift')
        ) {
          return;
        }

        setState({ ...state, [anchor]: open });
      };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <Container sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mt: "20px" }}>


      <PopupState variant="popover" popupId="demo-popup-menu">
        {(popupState) => (
          <React.Fragment>

            <Box sx={{ display: "flex" }} >


              <Button className="border" sx={{
                bgcolor: theme.palette.
                  // @ts-ignore
                  Mycolor.main, width: "202px"
              }} variant="contained" {...bindTrigger(popupState)}>

                <WindowIcon />
                <Typography variant="body1" color="inherit" >Categories</Typography>
                <Box flexGrow="1" />
                <ArrowForwardIcon />
              </Button>




              <Menu {...bindMenu(popupState)} sx={{ ".MuiPaper-root": { width: "202px" } }}>
                <MenuItem onClick={popupState.close}>
                  <ListItemIcon>
                    <BikeScooterIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Bikes</ListItemText>

                </MenuItem>
                <MenuItem onClick={popupState.close}>
                  <ListItemIcon>
                    <LaptopChromebookIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Electronics</ListItemText>

                </MenuItem>
                <MenuItem onClick={popupState.close}>
                  <ListItemIcon>
                    <LibraryBooksIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Books</ListItemText>

                </MenuItem>
                <MenuItem onClick={popupState.close}>
                  <ListItemIcon>
                    <SportsEsportsIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Games</ListItemText>

                </MenuItem>
              </Menu>

            </Box>

            {useMediaQuery('(min-width:1000px)') && (<Stack flexGrow="1" flexDirection="row" justifyContent="space-between">
              <Links title={"Home"} />
              <Links title={"Mega Menu"} />
              <Links title={"Full screen Menu"} />
              <Links title={"Pages"} />
              <Links title={"User Account"} />

              <Stack sx={{ ":hover .show": { display: "block" }, position: "relative" }} flexDirection="row">
                <Typography sx={{ ml: "18px" }} variant="body1" color="inherit">

                  Vendor account

                </Typography>

                <ExpandMore />

                <Box className=' show'
                  sx={{
                    position: "absolute",
                    top: "100%",
                    left: "50%",
                    minWidth: "200px",
                    transform: "translateX(-50%)",
                    display: "none",
                    zIndex: 20
                  }}    >
                  <Paper sx={{ mt: "4px" }} >
                    <nav aria-label="secondary mailbox folders">
                      <List>

                        <ListItem disablePadding>
                          <ListItemButton sx={{
                            display: "flex",
                            p: 0,
                            px: 1.5,

                          }}>
                            <ListItemText sx={{
                              ".MuiTypography-root":
                              {
                                fontSize: "15px",
                                fontWeight: 300,

                              }
                            }} primary="Dashboard" />
                            <Box flexGrow="1" />
                          </ListItemButton>

                        </ListItem>

                        <ListItem sx={{ ":hover .showT ": { display: "block" }, position: "relative" }} disablePadding>
                          <ListItemButton sx={{
                            display: "flex",
                            p: 0,
                            px: 1.5,

                          }}>
                            <ListItemText sx={{
                              ".MuiTypography-root":
                              {
                                fontSize: "15px",
                                fontWeight: 300,

                              }
                            }} primary="Products" />
                            <Box flexGrow="1" />
                            <KeyboardArrowDownOutlined />
                          </ListItemButton>
                          <Box className="showT" sx={{
                            position: "absolute",
                            top: "0", left: "-80%", display: "none"
                          }}>
                            <Paper sx={{ ml: 1, minWidth: "154px" }} >
                              <nav aria-label="secondary mailbox folders">
                                <List>
                                  <ListItem disablePadding>
                                    <ListItemButton>
                                      <ListItemText primary="Trash" />
                                    </ListItemButton>
                                  </ListItem>
                                  <ListItem disablePadding>
                                    <ListItemButton component="a" href="#simple-list">
                                      <ListItemText primary="Spam" />
                                    </ListItemButton>
                                  </ListItem>
                                </List>
                              </nav>
                            </Paper>
                          </Box>
                        </ListItem>


                        <ListItem disablePadding>
                          <ListItemButton sx={{
                            display: "flex",
                            p: 0,
                            px: 1.5,

                          }}>
                            <ListItemText sx={{
                              ".MuiTypography-root":
                              {
                                fontSize: "15px",
                                fontWeight: 300,

                              }
                            }} primary="Orders" />
                            <Box flexGrow="1" />
                          </ListItemButton>

                        </ListItem>

                        <ListItem disablePadding>
                          <ListItemButton sx={{
                            display: "flex",
                            p: 0,
                            px: 1.5,

                          }}>
                            <ListItemText sx={{
                              ".MuiTypography-root":
                              {
                                fontSize: "15px",
                                fontWeight: 300,

                              }
                            }} primary="Profile" />
                            <Box flexGrow="1" />
                          </ListItemButton>

                        </ListItem>



                      </List>
                    </nav>

                  </Paper>
                </Box>
              </Stack>


            </Stack>
            )}

            {useMediaQuery('(max-width:1000px)') && (<IconButton onClick={toggleDrawer("top", true)} >

              <MenuIcon />
            </IconButton>)}


            <Drawer
              anchor={"top"}
              open={state["top"]}
              onClose={toggleDrawer("top", false)}
              sx={{ ".MuiPaper-root.css-1sozasi-MuiPaper-root-MuiDrawer-paper": { height: "100%" } }}
            >
              <Box sx={{ width: "344px", m: "auto", position: "relative", pt: 10 }}>


                <IconButton sx={{ ":hover": { rotate: "360deg", transition: "0.3s", color: "red" }, position: "absolute", top: 0, right: 0 }} onClick={toggleDrawer("top", false)}>

                  <CloseIcon />
                </IconButton>
                {[{ mainLink: "Home", subLink: ["home Link1", "home link2", "Link3"] },
                { mainLink: "Mega menu", subLink: ["Link1", "link2", "Link3"] },
                { mainLink: "full Screen menu", subLink: ["Link1", "link2", "Link3"] },
                { mainLink: "Pages", subLink: ["Link1", "link2", "Link3"] },
                { mainLink: "User Account", subLink: ["Link1", "link2", "Link3"] },
                { mainLink: "Vendor Account", subLink: ["Link1", "link2", "Link3"] },

                ].map((item) => {
                  return (
                    <Accordion key={item.mainLink} elevation={0} sx={{ size: "1000px", m: "0", bgcolor: "initial" }}>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                      >
                        {item.mainLink}
                      </AccordionSummary>


                      <List sx={{ my: 0, py: 0 }}>
                        {item.subLink.map((myitem) => {
                          return (
                            <ListItem sx={{ my: 0, py: 0 }} >
                              <ListItemButton>
                                <ListItemText primary={myitem} />
                              </ListItemButton>
                            </ListItem>

                          )
                        }
                        )}
                      </List>
                    </Accordion>

                  )
                }
                )}

              </Box>


            </Drawer>


          </React.Fragment>
        )}
      </PopupState>

    </Container>
  )
}


