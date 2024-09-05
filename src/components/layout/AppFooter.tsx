import { Grid } from '@mui/system';
import AppLogo from '~/logos/logo-dark.svg';
import LinkedInLogo from '~/logos/linkedin.svg';
import BrandingLogo from '~/assets/header/branding.png';
import Image from 'next/image';
import React from 'react';
import { Box, List, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material';
import { FooterMenu } from '@/utils/jsons/LayoutData';
import Link from 'next/link';

const listItemButtonStyle = {
  fontSize: '16px',
  fontWeight: '400',
  color: 'white.main',
};

const itemSpacing = {
  py: 0.75,
  px: 0.25,
};

const listItemHeadingStyle = {
  fontWeight: '400',
  textTransform: 'uppercase',
  color: 'light-blue.main',
  ...itemSpacing,
};

const descriptionStyle = {
  fontSize: '14px',
  fontWeight: '400',
  color: 'rgba(255, 255, 255, 0.60)',
};

const AppFooter = () => {
  return (
    <footer className="!tw-bg-footer-gradient">
      <Grid
        container
        offset={{
          xs: 0,
          md: 1,
        }}
        spacing={2}
        sx={{
          py: {
            xs: '58px',
            md: '75px',
          },
          px: {
            xs: '55px',
            md: '0',
          },
        }}
      >
        <Grid size={{ xs: 12, md: 4 }}>
          <Box
            className="tw-my-5"
            sx={{
              ...descriptionStyle,
              display: 'flex',
              flexDirection: 'column',
              gap: '24px',
              alignItems: {
                xs: 'center',
                md: 'flex-start',
              },
            }}
          >
            <Image
              className={'tw-h-[40px] tw-w-auto md:tw-h-[50px]'}
              priority
              src={AppLogo}
              alt="Pay Standards"
            />

            <p>Built in New York, New York</p>
            <p>©PayStandards, Inc. 2024</p>
          </Box>
        </Grid>
        <Grid
          container
          spacing={{
            xs: 1,
            md: 4,
          }}
          size={{ xs: 12, md: 6 }}
          sx={{
            pt: {
              md: '28px',
            },
          }}
        >
          <Grid size={{ xs: 7, md: 'auto' }}>
            <List
              sx={{
                py: '0',
              }}
            >
              {FooterMenu.filter((page) => page.id === 'company').map((page, index) => (
                <React.Fragment key={index}>
                  <ListItem sx={listItemHeadingStyle}>{page.name}</ListItem>
                  {page.menuItems.map((item, i) => (
                    <Link key={i} href={item.link} passHref>
                      <ListItemButton sx={itemSpacing}>
                        <ListItemText
                          sx={listItemButtonStyle}
                          primary={item.label}
                          className="tw-text-dark-gray"
                        />
                      </ListItemButton>
                    </Link>
                  ))}
                </React.Fragment>
              ))}
            </List>
          </Grid>
          <Grid size={{ xs: 5, md: 'auto' }}>
            <List
              sx={{
                py: '0',
              }}
            >
              {FooterMenu.filter((page) => page.id === 'solutions').map((page, index) => (
                <React.Fragment key={index}>
                  <ListItem sx={listItemHeadingStyle}>{page.name}</ListItem>
                  {page.menuItems.map((item, i) => (
                    <Link key={i} href={item.link} passHref>
                      <ListItemButton sx={itemSpacing}>
                        <ListItemText
                          sx={listItemButtonStyle}
                          primary={item.label}
                          className="tw-text-dark-gray"
                        />
                      </ListItemButton>
                    </Link>
                  ))}
                </React.Fragment>
              ))}
            </List>
          </Grid>
          <Grid size={{ xs: 12, md: 'auto' }}>
            <List
              sx={{
                py: '0',
              }}
            >
              {FooterMenu.filter((page) => page.id === 'legal').map((page, index) => (
                <React.Fragment key={index}>
                  <ListItem sx={listItemHeadingStyle}>{page.name}</ListItem>
                  {page.menuItems.map((item, i) => (
                    <Link key={i} href={item.link} passHref>
                      <ListItemButton sx={itemSpacing}>
                        <ListItemText
                          sx={listItemButtonStyle}
                          primary={item.label}
                          className="tw-text-dark-gray"
                        />
                      </ListItemButton>
                    </Link>
                  ))}
                </React.Fragment>
              ))}
            </List>
          </Grid>
          <Grid
            size={{ xs: 12, md: 'auto' }}
            sx={{
              mt: {
                xs: '44px',
                md: '0',
              },
            }}
          >
            <Box sx={{ display: 'flex' }}>
              <Typography
                sx={{ color: 'white.main', fontSize: '18px', fontWeight: '700px', mr: '5px' }}
              >
                Follow Us:
              </Typography>
              <Link href="https://www.linkedin.com/company/paystandards/" target="_blank">
                <Image height={20} priority src={LinkedInLogo} alt="Pay Standards" />
              </Link>
            </Box>
          </Grid>
        </Grid>
        <Grid
          container
          size={12}
          sx={{
            pt: {
              xs: '80x',
              md: '54px',
            },
          }}
        >
          <Box
            sx={{
              ...descriptionStyle,
              display: 'flex',
              alignItems: 'center',
              gap: '21px',
              mt: {
                xs: '80px',
                md: '0',
              },
              flexDirection: {
                xs: 'column',
                md: 'row',
              },
            }}
          >
            <Image priority height={80} src={BrandingLogo} alt="Pay Standards" />
            <p className={'tw-text-center md:tw-text-left'}>
              PayStandards&#39; successful SOC 2 Type II report was issued by Prescient Assurance
              <br /> and is actively monitored by Vanta. PayStandards is also GDPR Compliant.
            </p>
          </Box>
        </Grid>
      </Grid>
    </footer>
  );
};

export default AppFooter;
