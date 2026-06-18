import { Drawer, Box, Typography, Divider, List, ListItem, ListItemText, IconButton, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import type { CartItem } from '../interfaces/Product';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onRemoveFromCart: (productId: number) => void;
  valorTotal: number;
}

export const CartDrawer = ({ isOpen, onClose, cart, onRemoveFromCart, valorTotal }: CartDrawerProps) => {
  const formatarMoeda = (valor: number) => {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valor);
  };

  return (
    <Drawer anchor="right" open={isOpen} onClose={onClose}>
      <Box sx={{ width: { xs: 280, sm: 350 }, p: 3, display: 'flex', flexDirection: 'column', height: '100%' }}>
        <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
          Meu Carrinho
        </Typography>
        <Divider />

        <List sx={{ flexGrow: 1, overflowY: 'auto', my: 2 }}>
          {cart.length === 0 ? (
            <Typography color="text.secondary" sx={{ mt: 2, textAlign: 'center' }}>
              Seu carrinho está vazio.
            </Typography>
          ) : (
            cart.map((item) => (
              <ListItem 
                key={item.id}
                secondaryAction={
                  <IconButton edge="end" color="error" onClick={() => onRemoveFromCart(item.id)}>
                    <DeleteIcon />
                  </IconButton>
                }
              >
                <ListItemText 
                  primary={item.name} 
                  secondary={`${item.quantity}x de ${formatarMoeda(item.price)}`} 
                />
              </ListItem>
            ))
          )}
        </List>

        <Divider />

        <Box sx={{ mt: 2 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>Total:</Typography>
            <Typography variant="h6" color="primary" sx={{ fontWeight: 'bold' }}>
              {formatarMoeda(valorTotal)}
            </Typography>
          </Box>
          
          <Button 
            variant="contained" color="success" fullWidth size="large"
            disabled={cart.length === 0}
            onClick={() => alert('Compra finalizada com sucesso! (Simulação)')}
          >
            Finalizar Compra
          </Button>
        </Box>
      </Box>
    </Drawer>
  );
};