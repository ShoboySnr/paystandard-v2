'use client';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { useEffect } from 'react';

const HubspotForm = ({
  portalId,
  formId,
  isOpen = false,
  handleClose,
  uniqueId,
}: {
  portalId: string;
  formId: string;
  isOpen: boolean;
  uniqueId: string;
  handleClose: () => void;
}) => {
  useEffect(() => {
    setTimeout(() => {
      // @ts-ignore
      if (window.hbspt) {
        // @ts-ignore
        window.hbspt.forms.create({
          region: 'na1',
          portalId: portalId,
          formId: formId,
          target: `#${uniqueId}`,
        });
      }
    }, 500);
  }, []);

  return (
    <>
      <Dialog
        keepMounted={true}
        aria-modal="true"
        open={isOpen}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
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
        {/*<DialogTitle>Subscribe</DialogTitle>*/}
        <DialogContent>
          <div id={uniqueId}></div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default HubspotForm;
