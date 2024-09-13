import { Grid } from '@mui/system';
import { Box, Typography } from '@mui/material';
import React from 'react';
import Image from 'next/image';
import LinkedInLogo from '~/logos/linkedIn-circle.svg';
import Client1 from '~/assets/about-us/client_1.png';
import Client2 from '~/assets/about-us/client_2.png';
import Client3 from '~/assets/about-us/client_3.png';
import Client4 from '~/assets/about-us/client_4.png';
import Client5 from '~/assets/about-us/client_5.png';
import Client6 from '~/assets/about-us/client_6.png';
import Link from 'next/link';

const profiles = [
  {
    icon: LinkedInLogo,
    title: 'Joe Davolio',
    subtitle: 'Co-Chief Executive Officer',
    profile_picture: Client1,
    tailwindClass: 'tw-mt-2 md:tw-mt-4',
    linkedin_url: 'https://www.linkedin.com/in/joedavolio/',
  },
  {
    icon: LinkedInLogo,
    title: 'Todd Gershkowitz',
    subtitle: 'Co-Chief Executive Officer',
    profile_picture: Client2,
    tailwindClass: 'tw-mt-2',
    linkedin_url: 'https://www.linkedin.com/in/todd-gershkowitz/',
  },
  {
    icon: LinkedInLogo,
    title: 'Beth Kovaly',
    subtitle: 'Chief Legal Officer',
    profile_picture: Client3,
    tailwindClass: 'tw-mt-1.5 md:tw-mt-3',
    linkedin_url: 'https://www.linkedin.com/in/beth-kovaly-b3601815/',
  },
  {
    icon: LinkedInLogo,
    title: 'Leigh Heyman',
    subtitle: 'Chief Technology Officer',
    profile_picture: Client4,
    tailwindClass: 'tw-mt-1.5',
    linkedin_url: 'https://www.linkedin.com/in/leighheyman/',
  },
  {
    icon: LinkedInLogo,
    title: 'Darren Lubotsky',
    subtitle: 'Chief Economist',
    profile_picture: Client5,
    tailwindClass: 'tw-mt-1',
    linkedin_url: 'https://www.linkedin.com/in/darren-lubotsky-425864a/',
  },
  {
    icon: LinkedInLogo,
    title: 'Kevin Hallock',
    subtitle: 'Senior Advisor',
    profile_picture: Client6,
    tailwindClass: 'mt-1',
    linkedin_url: 'https://www.linkedin.com/in/kevin-hallock-a276616/',
  },
];

const ProfileCard = () => {
  return (
    <>
      <Grid
        container
        rowSpacing={8}
        sx={{
          padding: {
            md: '50px 0 50px 0',
            xs: '40px 0 40px 0',
          },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}
      >
        {profiles.map((profile, index) => (
          <React.Fragment key={index}>
            <Grid
              size={{ md: 4, xs: 6 }}
              sx={{
                mt: {
                  md: '45px',
                },
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                textAlign: 'center',
              }}
            >
              <Box
                sx={{
                  width: {
                    md: '200px',
                    xs: '100px',
                  },
                  height: {
                    md: '200px',
                    xs: '100px',
                  },
                  borderRadius: '50%',
                  bgcolor: '#011344',
                  overflow: 'hidden',
                }}
              >
                <Image
                  src={profile.profile_picture}
                  alt="image.png"
                  className={`tw-mx-auto tw-h-[100px] tw-w-auto tw-content-center  md:tw-h-[200px] tw-object-cover ${profile.tailwindClass}`}
                />
              </Box>
              <Typography
                sx={{
                  fontSize: {
                    md: '28px',
                    xs: '20px',
                  },
                  fontWeight: '700',
                  margin: 'auto 0 2px 0',
                  lineHeight: '39.2px',
                  color: 'deep-blue-secondary.main',
                }}
              >
                {profile.title}
              </Typography>
              <Typography
                sx={{
                  fontSize: '16px',
                  fontWeight: '400',
                  margin: '0 0 4px 0',
                  marginBottom: '10px',
                  lineHeight: '20.3px',
                  color: 'deep-blue-secondary.main',
                  width: {
                    md: '200px',
                    xs: '170px',
                  },
                }}
              >
                {profile.subtitle}
              </Typography>
              <Link href={profile.linkedin_url} target="_blank">
                <Image src={profile.icon} height={20} alt={profile.title} />
              </Link>
            </Grid>
          </React.Fragment>
        ))}
      </Grid>
    </>
  );
};
export default ProfileCard;
