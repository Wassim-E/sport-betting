import React from 'react';
import { Snackbar, Alert, Box } from '@mui/material';
import { useAppContext } from '../../lib/Context';
import ClientOnly from './ClientOnly';

export default function NotificationSystem() {
  const { notifications, removeNotification } = useAppContext();

  const handleClose = (id) => {
    removeNotification(id);
  };

  return (
    <ClientOnly>
      <Box>
        {notifications.map((notification) => (
          <Snackbar
            key={notification.id}
            open={true}
            autoHideDuration={notification.duration}
            onClose={() => handleClose(notification.id)}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            <Alert
              onClose={() => handleClose(notification.id)}
              severity={notification.type}
              variant="filled"
              sx={{ width: '100%' }}
            >
              {notification.message}
            </Alert>
          </Snackbar>
        ))}
      </Box>
    </ClientOnly>
  );
}
