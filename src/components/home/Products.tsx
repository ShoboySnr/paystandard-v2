'use client';
import { Box, Typography } from '@mui/material';
import Image, { StaticImageData } from 'next/image';
import IndexImage from '~/assets/home/index.svg';
import IndexImageHovered from '~/assets/home/indexHovered.svg';
import AuditImage from '~/assets/home/audit.svg';
import AuditImageHovered from '~/assets/home/auditHovered.svg';
import PilotImage from '~/assets/home/pilot.svg';
import PilotImageHovered from '~/assets/home/pilotHovered.svg';

import Link from 'next/link';
import { useState } from 'react';

const imageSectionStyling = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '5px',
};

interface HoverableIconProps {
  lightImage: StaticImageData;
  hoveredImage: StaticImageData;
  altText: string;
  isHovered: Boolean;
  title: string;
}

const HoveredIcon: React.FC<HoverableIconProps> = ({
  lightImage,
  hoveredImage,
  altText,
  isHovered,
  title,
}) => {
  return (
    <>
      <Image
        className={
          'tw-h-[50px] tw-w-[50px] md:tw-h-[70px] md:tw-w-[70px] tw-mx-auto'
        }
        src={isHovered ? hoveredImage : lightImage}
        alt={altText}
        loading="eager"
      />
      <Typography
        sx={{
          fontSize: '18px',
          fontWeight: '500',
          mt: '10px',
          color: isHovered ? '#3860FF' : 'white',
        }}
      >
        {title}
      </Typography>
    </>
  );
};

const Products = () => {
  const [isHovered, setIsHovered] = useState<number | null>(null);

  return (
    <Box
      sx={{
        display: 'flex',
        gap: '45px',
        flexDirection: {
          xs: 'column',
          md: 'row',
        },
        padding: {
          md: '35px 45px',
          xs: '25px 20px 35px 20px',
        },
        borderRadius: '25px',
        background: 'linear-gradient(180deg, #2641B0 0%, #152461 99.27%)',
      }}
    >
      <Box
        sx={{
          flex: '6',
        }}
      >
        <img src="/assets/home/portal-ss-updated.png" alt="portal-ss.png" />
      </Box>
      <Box
        sx={{
          flex: '4',
          p: {
            md: '10px 0px',
            xs: '40px 0 0 0',
          },
        }}
      >
        <Box
          sx={{
            color: '#FFF',
          }}
        >
          <Typography
            sx={{
              fontSize: {
                md: '40px',
                xs: '32px',
              },
              lineHeight: '125%',
              fontWeight: '400',
            }}
          >
            <Box
              component="span"
              sx={{
                display: {
                  xs: 'block',
                  md: 'inline',
                },
              }}
            >
              Raise the Standard
            </Box>{' '}
            <Box
              component="span"
              sx={{
                display: {
                  xs: 'block',
                  md: 'inline',
                },
              }}
            >
              of Your Pay
            </Box>
          </Typography>

          <Typography
            sx={{
              fontSize: '18px',
              mt: '22px',
              fontWeight: '400',
              lineHeight: '145%',
            }}
          >
            Powered by the market-leading pay algorithm, real-time analytics,
            and an easy-to-use software platform, PayStandards makes pay
            recommendations that consider only the right things. PayStandards
            delivers true pay equity and pay transparency – without the
            headache.
          </Typography>
        </Box>
        <Box
          sx={{
            mt: '66px',
            display: 'flex',
            justifyContent: 'space-evenly',
            color: '#fff',
            width: '100%',
            paddingX: { xs: '0px', md: '30px' },
          }}
        >
          <Box sx={imageSectionStyling}>
            <Link
              href={'/pay-index'}
              onMouseEnter={() => setIsHovered(1)}
              onMouseLeave={() => setIsHovered(null)}
            >
              <HoveredIcon
                lightImage={IndexImage}
                hoveredImage={IndexImageHovered}
                altText="image"
                isHovered={isHovered === 1}
                title="Pay Index"
              />
            </Link>
          </Box>
          <Box sx={imageSectionStyling}>
            <Link
              href={'/pay-audit'}
              onMouseEnter={() => setIsHovered(2)}
              onMouseLeave={() => setIsHovered(null)}
            >
              <HoveredIcon
                lightImage={AuditImage}
                hoveredImage={AuditImageHovered}
                altText="image"
                isHovered={isHovered === 2}
                title="Pay Audit"
              />
            </Link>
          </Box>
          <Box sx={imageSectionStyling}>
            <Link
              href={'/pay-pilot'}
              onMouseEnter={() => setIsHovered(3)}
              onMouseLeave={() => setIsHovered(null)}
            >
              <HoveredIcon
                lightImage={PilotImage}
                hoveredImage={PilotImageHovered}
                altText="image"
                isHovered={isHovered === 3}
                title="Pay Pilot"
              />
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Products;
