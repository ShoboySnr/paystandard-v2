'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import AppLogo from '../../../public/logos/logo.svg';
import {
  AppBar,
  Box,
  Button,
  Container,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  MenuItem,
  Toolbar,
} from '@mui/material';
import { Close, KeyboardArrowDown, Menu as MenuIcon } from '@mui/icons-material';
import { HeaderMenu as pages } from '@/utils/jsons/LayoutData';
import { Grid } from '@mui/system';
import Link from 'next/link';
import { bindHover, bindMenu, PopupState, usePopupState } from 'material-ui-popup-state/hooks';
import HoverMenu from 'material-ui-popup-state/HoverMenu';

const AppHeader = () => {
  const [selectedMenuIndex, setSelectedMenuIndex] = useState<number | null>(null);
  const [drawerOpen, setDrawerOpen] = useState<boolean | undefined>(false);
  const [isFloating, setIsFloating] = useState<boolean>(false);

  const popupState: PopupState[] = [];
  pages.forEach((page, index) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    popupState[index] = usePopupState({ variant: 'popover', popupId: `menu-${index}` });
  });

  const handleMenuOpen = (index: number) => {
    setSelectedMenuIndex(index);
  };

  const handleMenuClose = () => {
    setSelectedMenuIndex(null);
  };

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const handleMenuItemClick = (link: String) => {
    if (link) {
      setDrawerOpen(false);
    }
  };

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsFloating(true);
    } else {
      setIsFloating(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header>
      <AppBar
        position={isFloating ? 'fixed' : 'static'}
        sx={{
          backgroundColor: isFloating ? '#FFF' : 'transparent',
          transform: isFloating ? 'translateX(-50%)' : 'none',
          transition: 'top 0.5s ease',
          width: isFloating ? '100%' : '100%',
          top: isFloating ? '0px' : '-100px',
          left: '50%',
          zIndex: 1300,
          px: { md: '20px', lg: '0px' },
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            px: {
              xs: '15px',
              md: '0 !important',
            },
          }}
        >
          <Box
            sx={{
              display: { xs: 'flex' },
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '15px',
            }}
          >
            <Toolbar
              sx={{
                width: '100%',
                my: { xs: '10px', md: isFloating ? '10px' : '20px' },
                minHeight: { xs: '30px', sm: '60px', md: '75px' },
                height: { xs: '30px', sm: '60px', md: '75px' },
                border: '1px solid transparent',
                borderColor: 'gray.main',
                borderRadius: '38px',
                pl: { xs: '20px', lg: '40px' },
                backgroundColor: '#FFF',
              }}
              disableGutters
            >
              <Link href={'/'}>
                <Image
                  className={'tw-h-[18px] tw-w-auto sm:tw-h-[30px] md:tw-h-[35px] lg:tw-h-[40px]'}
                  priority
                  src={AppLogo}
                  alt="Pay Standards"
                />
              </Link>

              <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <Drawer
                  anchor="top"
                  open={drawerOpen}
                  onClose={toggleDrawer(false)}
                  PaperProps={{
                    sx: {
                      borderRadius: '0 0 25px 25px',
                    },
                  }}
                >
                  <Box sx={{ width: '100%', padding: '16px 40px 40px 40px' }} role="presentation">
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}
                    >
                      <Image height={18} priority src={AppLogo} alt="Pay Standards" />
                      <Box>
                        <Link href={'/demo'}>
                          <Button
                            sx={{
                              height: {
                                xs: '30px',
                                md: '62px',
                              },
                              fontSize: {
                                xs: '12px',
                                md: '20px',
                              },
                              mr: 1.5,
                            }}
                            variant="contained"
                            className={'!tw-rounded-full'}
                          >
                            Book a Demo
                          </Button>
                        </Link>
                        <IconButton
                          sx={{
                            height: '30px',
                            width: '30px',
                          }}
                          className="!tw-bg-dark-gray !tw-text-[30px] !tw-text-white"
                          aria-label="open drawer"
                          onClick={toggleDrawer(false)}
                        >
                          <Close />
                        </IconButton>
                      </Box>
                    </Box>

                    <Divider sx={{ mt: 4, borderColor: 'primary.main' }} />
                    <Grid container spacing={2}>
                      <Grid size={5}>
                        <List>
                          {pages
                            .filter((page) => page.id === 'solutions')
                            .map((page, index) => (
                              <React.Fragment key={index}>
                                <ListItem
                                  sx={{
                                    color: 'blue',
                                    fontWeight: 'medium',
                                    textTransform: 'uppercase',
                                    paddingLeft: '0',
                                  }}
                                >
                                  {page.name}
                                </ListItem>
                                {page.menuItems.map((item, i) => (
                                  <Link
                                    key={i}
                                    href={item.link}
                                    onClick={() => handleMenuItemClick(item.link)}
                                  >
                                    <ListItemButton
                                      sx={{
                                        paddingLeft: '0',
                                      }}
                                    >
                                      <ListItemText
                                        primary={item.label}
                                        sx={{
                                          color: 'black.main',
                                        }}
                                        className="tw-text-black"
                                      />
                                    </ListItemButton>
                                  </Link>
                                ))}
                              </React.Fragment>
                            ))}
                        </List>
                      </Grid>
                      <Grid size={7}>
                        <List>
                          {pages
                            .filter((page) => page.id === 'company')
                            .map((page, index) => (
                              <React.Fragment key={index}>
                                <ListItem
                                  sx={{
                                    color: 'blue',
                                    fontWeight: 'medium',
                                    textTransform: 'uppercase',
                                    paddingLeft: '0',
                                  }}
                                >
                                  {page.name}
                                </ListItem>
                                {page.menuItems.map((item, i) => (
                                  <Link
                                    href={item.link}
                                    onClick={() => handleMenuItemClick(item.link)}
                                    key={i}
                                  >
                                    <ListItemButton
                                      sx={{
                                        paddingLeft: '0',
                                        color: 'black.main',
                                      }}
                                      component="a"
                                    >
                                      <ListItemText
                                        primary={item.label}
                                        sx={{
                                          color: 'black.main',
                                        }}
                                        className="tw-text-black"
                                      />
                                    </ListItemButton>
                                  </Link>
                                ))}
                              </React.Fragment>
                            ))}
                        </List>
                      </Grid>
                    </Grid>
                  </Box>
                </Drawer>
              </Box>
              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: 'none', md: 'flex' },
                  my: 1,
                  ml: { md: 2, lg: 4 },
                }}
              >
                {pages.map((page, index) => (
                  <React.Fragment key={index}>
                    <Button
                      {...bindHover(popupState[index])}
                      onMouseOver={(e: React.MouseEvent) => {
                        bindHover(popupState[index]).onMouseOver(e);
                        handleMenuOpen(index);
                      }}
                      onMouseLeave={(e: React.MouseEvent) => {
                        bindHover(popupState[index]).onMouseLeave(e);
                        handleMenuClose();
                      }}
                      disableRipple
                      style={{ minWidth: '150px' }}
                      className={`tw-flex !tw-text-[20px] hover:tw-bg-transparent focus:tw-outline-none ${selectedMenuIndex === index ? '!tw-text-blue !tw-font-[600]' : '!tw-text-black'}`}
                    >
                      {page.name}
                      <KeyboardArrowDown className="tw-ml-3" />
                    </Button>
                    <HoverMenu
                      {...bindMenu(popupState[index])}
                      sx={{ minWidth: '200px' }}
                      MenuListProps={{
                        'aria-labelledby': 'basic-button',
                        disablePadding: true,
                        sx: {
                          backgroundColor: 'white.main',
                          borderRadius: '0 0 14px 14px',
                        },
                      }}
                      slotProps={{
                        paper: {
                          sx: {
                            minWidth: '170px !important',
                            maxWidth: '250px',
                            position: 'relative',
                            padding: '1px', // Adjust based on your border width
                            borderRadius: '0 0 15px 15px', // Adjust as needed
                            background: 'linear-gradient(180deg, #FFFFFF, #3860FF)',
                            boxShadow: 'none',
                          },
                        },
                      }}
                    >
                      {page.menuItems.map((item, i) => (
                        <Link href={item.link} key={i} onClick={popupState[index]?.close}>
                          <MenuItem
                            sx={{
                              '&:hover': {
                                fontWeight: 'bold',
                                color: 'black.main',
                              },
                            }}
                          >
                            {item.label}
                          </MenuItem>
                        </Link>
                      ))}
                    </HoverMenu>
                  </React.Fragment>
                ))}
              </Box>
              <Box className="tw-h-full">
                <Link href={'https://login.paystandards.com/login'}>
                  <Button
                    sx={{
                      display: {
                        xs: 'none',
                        md: 'inline-block',
                      },
                      height: '75%',
                      border: 'none',
                      borderRadius: '50px',
                      px: { xs: '30px', md: '20px', lg: '40px' },
                      mr: { xs: '10px', lg: '20px' },
                      fontSize: { xs: '18px', md: '18px', lg: '20px' },
                    }}
                    className={'!tw-bg-[#88A0FF1A] !tw-text-dark-gray'}
                    variant="outlined"
                  >
                    Log In
                  </Button>
                </Link>
                <Link href={'/demo'}>
                  <Button
                    sx={{
                      height: '100%',
                      px: { xs: '30px', lg: '40px' },
                      fontSize: { xs: '12px', sm: '16px', md: '20px' },
                    }}
                    className={'!tw-rounded-full'}
                    variant="contained"
                  >
                    Book a Demo
                  </Button>
                </Link>
              </Box>
            </Toolbar>
            <Box sx={{ display: { xs: 'block', md: 'none' } }}>
              <IconButton
                sx={{
                  height: { xs: '30px', sm: '60px' },
                  width: { xs: '30px', sm: '60px' },
                  padding: '10px',
                }}
                className="!tw-bg-light-gray"
                aria-label="open drawer"
                onClick={toggleDrawer(true)}
              >
                <MenuIcon
                  sx={{
                    fontSize: { xs: '18px', sm: '20px' },
                  }}
                />
              </IconButton>
            </Box>
          </Box>
        </Container>
      </AppBar>
    </header>
  );
};
export default AppHeader;
