export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
}

export const products: Product[] = [
    {
    id: 1,
    name: "Notebook Pro 15\"",
    price: 7500,
    description: "Processador ultra rápido para desenvolvedores e designers.",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 2,
    name: "Monitor UltraWide 34\"",
    price: 2800,
    description: "Mais espaço na tela para ver seu código e o preview lado a lado.",
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 3,
    name: "Teclado Mecânico RGB",
    price: 450,
    description: "Switches lineares e silenciosos para programar de madrugada.",
    image: "https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 4,
    name: "Mouse Ergonômico",
    price: 320,
    description: "Evite dores no pulso depois de horas resolvendo bugs.",
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=400&q=80"
  }
];