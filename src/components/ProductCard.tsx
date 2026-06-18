// src/components/ProductCard.tsx
import { Card, CardMedia, CardContent, CardActions, Typography, Button } from '@mui/material';
import type { Product } from '../interfaces/Product';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  const formatarMoeda = (valor: number) => {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valor);
  };

  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', boxShadow: 3 }}>
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
        <Button size="large" variant="contained" fullWidth onClick={() => onAddToCart(product)}>
          Adicionar ao Carrinho
        </Button>
      </CardActions>
    </Card>
  );
};
