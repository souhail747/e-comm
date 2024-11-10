import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import './slider.css';
import { useTheme } from '@mui/material/styles';
import Icons from './Icons';

export default function Hero() {
  const theme = useTheme();
  return (
    <Container>
      <Box sx={{ display: 'flex', mt: '10px', gap: '12px' }}>
        <Swiper
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="mySwiper"
          loop={true}
        >
          <SwiperSlide className="slidee">
            <img src="images/banner-15.jpg" alt="banner-15" />
            <Box
              sx={{
                [theme.breakpoints.up('sm')]: {
                  position: 'absolute',
                  left: '6%',
                  textAlign: 'left',
                },
              }}
            >
              <Typography variant="h5" sx={{ color: '#222' }}>
                LIFESTYLE COLLECTION
              </Typography>
              <Typography variant="h1" sx={{ color: '#222', fontWeight: 400 }}>
                MEN
              </Typography>
              <Stack flexDirection="row" alignItems="center">
                <Typography sx={{ color: 'red' }} variant="h4">
                  Sale UP TO 30% OFF
                </Typography>
              </Stack>
              <Typography
                variant="body1"
                sx={{ color: '#cdb4db', fontWeight: 300 }}
              >
                Get Free Shipping on Orders over $99.00
              </Typography>
              <Button
                sx={{
                  px: 5,
                  py: 1,
                  mt: 2,
                  backgroundColor: '#222',
                  color: '#fff',
                  borderRadius: '7px',
                  '&:hover': {
                    bgcolor: '#606c38',
                    boxShadow: '0px 4px 16px rgba(43,52,69,0.1)',
                  },
                }}
              >
                shop now
              </Button>
            </Box>
          </SwiperSlide>

          <SwiperSlide className="slidee">
            <img src="images/banner-25.jpg" alt="banner-25" />
            <Box
              sx={{
                [theme.breakpoints.up('sm')]: {
                  position: 'absolute',
                  left: '6%',
                  textAlign: 'left',
                },
              }}
            >
              <Typography variant="h5" sx={{ color: '#222' }}>
                LIFESTYLE COLLECTION
              </Typography>
              <Typography variant="h1" sx={{ color: '#222', fontWeight: 400 }}>
                WOMEN
              </Typography>
              <Stack flexDirection="row" alignItems="center">
                <Typography sx={{ color: 'red' }} variant="h4">
                  Sale UP TO 30% OFF
                </Typography>
              </Stack>
              <Typography
                variant="body1"
                sx={{ color: '#cdb4db', fontWeight: 300 }}
              >
                Get Free Shipping on Orders over $99.00
              </Typography>
              <Button
                sx={{
                  px: 5,
                  py: 1,
                  mt: 2,
                  backgroundColor: '#222',
                  color: '#fff',
                  borderRadius: '7px',
                  '&:hover': {
                    bgcolor: '#606c38',
                    boxShadow: '0px 4px 16px rgba(43,52,69,0.1)',
                  },
                }}
              >
                shop now
              </Button>
            </Box>
          </SwiperSlide>
        </Swiper>

        <Box
          sx={{ display: { xs: 'none', md: 'block', width: '25%' } }}
        >
          <Box sx={{ position: 'relative', mb: '7px' }}>
            <img src="images/4.webp" alt="4" width="280px" height="169px" />
            <Stack
              sx={{
                position: 'absolute',
                top: '20%',
                left: 23,
                transform: 'translateY(-50%)',
              }}
            >
              <Typography
                variant="caption"
                sx={{
                  color: '#023047',
                  fontSize: '21px',
                }}
              >
                NEW ARRIVALS !!!
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: '#50C9CE',
                  lineHeight: '18px',
                  mt: '1px',
                }}
              >
                SUMMER !
              </Typography>
            </Stack>
          </Box>
          <Box>
            <img src="images/7.webp" alt="7" width="280px" height="169px" />
          </Box>
        </Box>
      </Box>
      <Icons />
    </Container>
  );
}
