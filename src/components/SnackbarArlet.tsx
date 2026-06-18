import { Snackbar, Alert } from '@mui/material';

interface SnackbarAlertProps {
  isOpen: boolean;
  onClose: (event?: React.SyntheticEvent | Event, reason?: string) => void;
}

export const SnackbarAlert = ({ isOpen, onClose }: SnackbarAlertProps) => {
  return (
    <Snackbar 
      open={isOpen} 
      autoHideDuration={3000} 
      onClose={onClose}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
    >
      <Alert onClose={onClose} severity="success" sx={{ width: '100%' }}>
        Produto adicionado com sucesso!
      </Alert>
    </Snackbar>
  );
};