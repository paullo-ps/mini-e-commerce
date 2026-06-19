# 🛒 TechStore Dev - Mini E-commerce

[🇺🇸 English](./README.md) | [🇧🇷 Português](./README.pt-br.md)

Um mini e-commerce responsivo desenvolvido com **React**, **TypeScript** e **Material UI (MUI)**. Este projeto foi criado para meu portfólio com o objetivo de demonstrar boas práticas de desenvolvimento Front-end, gerenciamento de estado, persistência de dados e construção de interfaces responsivas.

## 📸 Demonstração

<p align="center">
  <img src="./src/assets/demo.png" alt="Demonstração do projeto" width="800">
</p>

---

## ✨ Funcionalidades

* 📦 Listagem dinâmica de produtos.
* 🛒 Carrinho de compras com controle de quantidade.
* ➕ Agrupamento automático de produtos duplicados.
* 💾 Persistência de dados utilizando **LocalStorage**.
* 📱 Interface totalmente responsiva.
* 📊 Cálculo automático do valor total do carrinho.
* 🗑️ Remoção individual de itens.
* 🔔 Feedback visual utilizando os componentes **Snackbar** e **Alert** do Material UI.

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
├── interfaces/
│   └── Product.ts
├── mock/
│   └── products.ts
├── App.tsx
└── main.tsx
```

---

## 💡 Conceitos Aplicados

Este projeto foi desenvolvido para aplicar conceitos fundamentais do ecossistema React.

### Gerenciamento de Estado

O carrinho de compras é controlado utilizando o hook `useState`, garantindo atualizações reativas e previsíveis do estado da aplicação.

### Atualizações Imutáveis

Todas as alterações realizadas no carrinho utilizam callbacks do React:

```tsx
setCart((prevCart) => {
    // Atualização baseada no estado anterior
});
```

Essa abordagem evita problemas relacionados a atualizações assíncronas de estado (*race conditions*).

### Manipulação de Arrays

Diversos métodos do JavaScript foram utilizados para implementar a lógica de negócio da aplicação:

* `find()`
* `map()`
* `filter()`
* `reduce()`

Esses métodos são responsáveis por:

* localizar produtos;
* atualizar quantidades;
* remover itens;
* calcular o valor total do carrinho;
* evitar produtos duplicados.

### Persistência de Dados

O carrinho permanece salvo mesmo após atualizar a página utilizando a **LocalStorage API**, recurso nativo do navegador.

```javascript
localStorage
```

---

## 🎨 Interface Responsiva

A interface foi construída utilizando componentes do Material UI e CSS Grid por meio do componente `Box`, proporcionando um layout limpo, moderno e adaptável a diferentes tamanhos de tela.

---

## 🚀 Como executar

### Clone o repositório

```bash
git clone https://github.com/paullo-ps/mini-e-commerce.git
```

### Entre na pasta do projeto

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

### Execute o servidor de desenvolvimento

**Com npm**

```bash
npm run dev
```

**Com Yarn**

```bash
yarn dev
```

A aplicação estará disponível em:

```text
http://localhost:5173
```

---

## 📚 Aprendizados

Este projeto contribuiu para consolidar conhecimentos em:

* Arquitetura baseada em componentes
* TypeScript
* Material UI
* Gerenciamento de estado
* Persistência de dados
* Manipulação de arrays em JavaScript
* Design responsivo
* Boas práticas de desenvolvimento Front-end

---

## 🔮 Melhorias Futuras

* Integração com APIs REST.
* Página de detalhes dos produtos.
* Sistema de autenticação.
* Lista de favoritos.
* Busca por produtos.
* Filtros por categoria.
* Ordenação por preço.
* Fluxo de checkout.
* Gerenciamento global de estado utilizando Context API ou Redux.
* Testes unitários com Vitest e React Testing Library.

---

## 👨‍💻 Autor

**Paulo Sérgio Mendes dos Santos**

* GitHub: https://github.com/paullo-ps
* LinkedIn: https://www.linkedin.com/in/paulo-s%C3%A9rgio-mendes-dos-santos-914a29200/
