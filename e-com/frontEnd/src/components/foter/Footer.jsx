
import { Box, Button, Link, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: "#2B3445",
        py: 1.3,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
      }}
    >
      <Typography
        justifyContent={"center"}
        display={"flex"}
        alignItems={"center"}
        color={"HighlightText"}
        variant="h6"
        sx={{ fontSize: 18 }}
      >
        Designed and developed by
        <Link href="https://www.facebook.com" target="_blank"
          sx={{
            textDecoration:"none",
            mx: 0.5,
            fontSize: "18px",
            textTransform: "capitalize",
            color: "#ff7790",
          }}
         
          color="primary"
        >
        SOUHAIL
                </Link>
        ©2024
      </Typography>
    </Box>
  );
};

export default Footer;
