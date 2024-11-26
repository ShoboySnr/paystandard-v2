import Link from 'next/link';
import styles from '@/app/_scss/global.module.scss';
import { Button } from '@mui/material';
import React from 'react';

const Custom404 = () => {
  return (
    <div className={styles.removeHeaderMargin}>
      <div className="tw-flex tw-items-center tw-justify-center tw-h-screen tw-bg-gray-100">
        <div className="tw-text-center">
          <h1 className="tw-text-5xl tw-font-bold tw-text-gray-800">404</h1>
          <p className="tw-text-lg tw-text-gray-600">
            Oops! The page you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link href="/">
            <Button
              sx={{
                height: '75%',
                border: 'none',
                borderRadius: '50px',
                px: '40px',
                mt: '20px',
                fontSize: '20px',
              }}
              className={'!tw-bg-[#88A0FF1A] !tw-text-dark-gray'}
              variant="outlined"
            >
              Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Custom404;
