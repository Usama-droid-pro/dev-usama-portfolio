import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { GitHubButton } from '../../components/Navbar/NavbarStyledComponent';
import { useTheme } from 'styled-components';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const smallScreenStyle = {
  width: '90%', // Adjust the width for smaller screens
};

export default function BasicModal({ handleClose, open }) {
  const theme = useTheme();

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ ...style, ...(window.innerWidth < 600 && smallScreenStyle) }}>
          <WhatsAppIcon size="20px" style={{ color: 'green' }} /> <span>WhatsApp</span>
          <Typography style={{ display: 'flex' }} id="modal-modal-title" variant="h6" component="h2">
            +92 309 3485497
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Lets Connect, Drop me a message anytime – I'm just a text away!
          </Typography>
          <GitHubButton
            onClick={handleClose}
            style={{
              marginTop: '4%',
              padding: '8px 36px',
              background: `${theme.primary}`,
              color: 'white',
              width: 'max-content',
            }}
            target="_blank"
          >
            Ok
          </GitHubButton>
        </Box>
      </Modal>
    </div>
  );
}
