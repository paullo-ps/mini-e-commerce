# 🛒 TechStore Dev - Mini E-commerce

[🇺🇸 English](./README.md) | [🇧🇷 Português](./README.pt-br.md)

Um mini e-commerce responsivo desenvolvido com **React**, **TypeScript** e **Material UI (MUI)**, criado com o objetivo de demonstrar conhecimentos em desenvolvimento Front-end moderno, gerenciamento de estado, persistência de dados e construção de interfaces responsivas.

## 📸 Demonstração

<p align="center">
  <img src="./src/assets/demo.png" alt="Demonstração do projeto" width="800">
</p>

---

## ✨ Funcionalidades

* 📦 Listagem dinâmica de produtos.
* 🛒 Carrinho de compras com controle de quantidade.
* ➕ Agrupamento automático de produtos repetidos.
* 💾 Persistência dos dados utilizando **LocalStorage**.
* 📱 Interface totalmente responsiva.
* 📊 Cálculo automático do valor total do carrinho.
* 🗑️ Remoção individual de itens.
* 🔔 Feedback visual através de **Snackbar** e **Alert** do Material UI.

---

## 🛠️ Tecnologias

* React 18/19
* TypeScript
* Material UI (MUI)
* Emotion
* Vite
* LocalStorage API

---

## 📂 Estrutura do Projeto

```text
src/
├── assets/
├── components/
│   ├── CartDrawer.tsx
│   ├── Header.tsx
│   ├── ProductCard.tsx
│   └── SnackbarAlert.tsx
├── mock/
│   └── products.ts
├── interfaces/
│   └── Product.ts
├── App.tsx
└── main.tsx
```

---

## 💡 Conceitos Aplicados

Durante o desenvolvimento foram utilizados conceitos importantes do ecossistema React:

### Gerenciamento de Estado

Utilização do `useState` para controlar o carrinho de compras de forma reativa e previsível.

### Atualizações Imutáveis

Todas as alterações no carrinho utilizam callbacks do React:

```tsx
setCart((prevCart) => {
    // atualização baseada no estado anterior
});
```

Essa abordagem evita problemas relacionados a estados assíncronos (*race conditions*).

### Manipulação de Arrays

Foram utilizados diversos métodos do JavaScript para resolver regras de negócio:

* `find()`
* `map()`
* `filter()`
* `reduce()`

Esses métodos são responsáveis por:

* localizar produtos;
* atualizar quantidades;
* remover itens;
* calcular o valor total;
* evitar duplicações.

### Persistência Local

O carrinho permanece salvo mesmo após atualizar a página utilizando a API nativa do navegador:

```javascript
localStorage
```

---

## 🎨 Interface Responsiva

O layout foi construído utilizando os componentes do Material UI e CSS Grid através do componente `Box`, proporcionando uma interface adaptável para diferentes tamanhos de tela.

---

## 🚀 Como executar

### Clone o projeto

```bash
git clone https://github.com/paullo-ps/mini-e-commerce.git
```

### Entre na pasta

```bash
cd mini-e-commerce
```

### Instale as dependências

**Com npm**

```bash
npm install
```

**Com Yarn**

```bash
yarn
```

### Execute o projeto

**Com npm**

```bash
npm run dev
```

**Com Yarn**

```bash
yarn dev
```

O projeto ficará disponível em:

```text
http://localhost:5173
```

---

## 📚 Aprendizados

Este projeto foi desenvolvido para consolidar conhecimentos em:

* React Hooks
* Componentização
* TypeScript
* Material UI
* Gerenciamento de estado
* Persistência de dados
* Manipulação de arrays
* Responsividade
* Boas práticas de desenvolvimento Front-end

---

## 🔮 Melhorias Futuras

* Integração com API REST.
* Página de detalhes do produto.
* Sistema de autenticação.
* Favoritos.
* Busca por produtos.
* Filtros por categoria.
* Ordenação por preço.
* Checkout.
* Context API ou Redux para gerenciamento global de estado.
* Testes unitários com Vitest e React Testing Library.

---

## 👨‍💻 Autor

**Paulo Sérgio Mendes dos Santos**

* GitHub: https://github.com/paullo-ps/mini-e-commerce.git
* LinkedIn: https://www.linkedin.com/in/paulo-s%C3%A9rgio-mendes-dos-santos-914a29200/
