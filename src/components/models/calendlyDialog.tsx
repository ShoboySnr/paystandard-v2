'use client';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { useEffect } from 'react';

const CalendlyDialog = ({
  isOpen = false,
  handleClose,
}: {
  isOpen: boolean;
  handleClose: () => void;
}) => {
  return (
    <>
      <Dialog
        keepMounted={true}
        aria-modal="true"
        open={isOpen}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          sx: {
            width: '80%',
            height: '100%',
            maxWidth: 'none',
          },
          onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries((formData as any).entries());
            const email = formJson.email;
            console.log(email);
            handleClose();
          },
        }}
      >
        <IconButton
          aria-modal="true"
          onClick={() => {
            handleClose();
          }}
          sx={(theme) => ({
            position: 'absolute',
            right: 2,
            top: 2,
            color: theme.palette.grey[500],
          })}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent
          sx={{
            height: '100%',
            padding: 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          dividers
        >
          {/* Embed Calendly iframe */}
          <iframe
            src="https://calendly.com/paystandards/demo?hide_gdpr_banner=1"
            width="100%"
            height="100%"
            frameBorder="0"
            scrolling="no"
            style={{ border: 'none' }}
            title="PayStandards Demo"
          ></iframe>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CalendlyDialog;
