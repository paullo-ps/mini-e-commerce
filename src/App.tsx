import { useState, useEffect } from 'react';
import { 
  AppBar, Toolbar, Typography, Container, Box, Card, 
  CardMedia, CardContent, CardActions, Button, Badge, IconButton,
  Drawer, List, ListItem, ListItemText, Divider, Snackbar, Alert
} from '@mui/material';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DeleteIcon from '@mui/icons-material/Delete';

import type { Product } from './mock/products';
import { products } from './mock/products';

interface CartItem extends Product {
  quantity: number;
}

export const App = () => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    const carrinhoSalvo = localStorage.getItem('@TechStore:cart');
    if (carrinhoSalvo) {
      return JSON.parse(carrinhoSalvo);
    }
    return [];
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  // Novo estado para controlar o aviso verde na tela
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('@TechStore:cart', JSON.stringify(cart));
  }, [cart]);

  const handleAddToCart = (product: Product) => {
    setCart((prevCart) => {
      const itemExiste = prevCart.find((item) => item.id === product.id);

      if (itemExiste) {
        return prevCart.map((item) =>
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      }

      return [...prevCart, { ...product, quantity: 1 }];
    });
    
    // Abre o aviso de sucesso!
    setSnackbarOpen(true);
  };

  const handleRemoveFromCart = (productId: number) => {
    setCart((prevCart) => {
      return prevCart
        .map((item) => {
          if (item.id === productId) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        })
        .filter((item) => item.quantity > 0);
    });
  };

  // Função para fechar o aviso verde (seja por tempo ou pelo X)
  const handleCloseSnackbar = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbarOpen(false);
  };

  const totalItensNoCarrinho = cart.reduce((acumulador, item) => acumulador + item.quantity, 0);
  
  const valorTotalCarrinho = cart.reduce((acumulador, item) => acumulador + (item.price * item.quantity), 0);

  const formatarMoeda = (valor: number) => {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valor);
  };

  return (
    <>
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
            TechStore Dev
          </Typography>
          
          <IconButton color="inherit" onClick={() => setIsCartOpen(true)}>
            <Badge badgeContent={totalItensNoCarrinho} color="error">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>

      <Container sx={{ py: 5 }}>
        <Box 
          sx={{ 
            display: 'grid', 
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }, 
            gap: 4 
          }}
        >
          {products.map((product) => (
            <Card key={product.id} sx={{ height: '100%', display: 'flex', flexDirection: 'column', boxShadow: 3 }}>
              <CardMedia component="img" height="200" image={product.image} alt={product.name} />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2" sx={{ fontWeight: 'bold' }}>
                  {product.name}
                </Typography>
                <Typography variant="h6" color="primary" gutterBottom>
                  {formatarMoeda(product.price)}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.description}
                </Typography>
              </CardContent>
              <CardActions sx={{ p: 2 }}>
                <Button size="large" variant="contained" fullWidth onClick={() => handleAddToCart(product)}>
                  Adicionar ao Carrinho
                </Button>
              </CardActions>
            </Card>
          ))}
        </Box>
      </Container>

      <Drawer
        anchor="right"
        open={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      >
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
                    <IconButton edge="end" color="error" onClick={() => handleRemoveFromCart(item.id)}>
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
                {formatarMoeda(valorTotalCarrinho)}
              </Typography>
            </Box>
            
            <Button 
              variant="contained" 
              color="success" 
              fullWidth 
              size="large"
              disabled={cart.length === 0}
              onClick={() => alert('Compra finalizada com sucesso! (Simulação)')}
            >
              Finalizar Compra
            </Button>
          </Box>
        </Box>
      </Drawer>

      {/* COMPONENTE DE AVISO (SNACKBAR) */}
      <Snackbar 
        open={snackbarOpen} 
        autoHideDuration={3000} 
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
          Produto adicionado com sucesso!
        </Alert>
      </Snackbar>
    </>
  );
}
