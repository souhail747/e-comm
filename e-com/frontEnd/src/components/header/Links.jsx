import { ExpandMore, KeyboardArrowDownOutlined } from '@mui/icons-material'
import { Box, List, ListItem, ListItemButton, ListItemText, Paper, Stack, Typography } from '@mui/material'
import React from 'react'

export default function Links({ title }) {
    return (
        <Stack sx={{ ":hover .show": { display: "block" }, position: "relative" }} flexDirection="row">
            <Typography sx={{ ml: "18px" }} variant="body1" color="inherit">

                {title}

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
                    zIndex:20
                }}    >
                <Paper sx={{ mt: "10px" }} >
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
                                <Box className="showT" sx={{ position: "absolute", top: "0", left: "100%", display: "none" , zIndex:2    }}>
                                    <Paper sx={{ ml: 1, minWidth: "154px" , zIndex:2 }} >
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
    )
}
