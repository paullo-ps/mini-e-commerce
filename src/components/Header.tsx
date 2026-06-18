import { AppBar, Toolbar, Typography, Badge, IconButton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

interface HeaderProps {
  totalItens: number;
  onOpenCart: () => void;
}

export const Header = ({ totalItens, onOpenCart }: HeaderProps) => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
          TechStore Dev
        </Typography>
        
        <IconButton color="inherit" onClick={onOpenCart}>
          <Badge badgeContent={totalItens} color="error">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};