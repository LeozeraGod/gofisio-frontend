# 🧠 GoFisio Frontend

Frontend do projeto **GoFisio**, construído com **React + Vite** e estilizado com **Chakra UI**.

Este repositório contém a interface da aplicação GoFisio, responsável pela experiência do usuário no acesso às funcionalidades da plataforma.

---

## 🚀 Tecnologias

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Chakra UI](https://chakra-ui.com/)
- [TypeScript](https://www.typescriptlang.org/) (caso esteja sendo usado)
- [Axios](https://axios-http.com/)
- [React Router DOM](https://reactrouter.com/)
- [Phosphor Icons](https://phosphoricons.com/)

---

## ✅ Pré-requisitos

- Node.js v18 ou superior
- npm ou yarn
- Git

---

## 🛠️ Instalação

Clone o repositório:

```bash
git clone https://github.com/LeozeraGod/gofisio-frontend.git
cd gofisio-frontend
```

Instale as dependências:

```bash
npm install
# ou
yarn
```

---

## ▶️ Rodando em modo de desenvolvimento

```bash
npm run dev
# ou
yarn dev
```

Acesse no navegador:

```
http://localhost:5173
```

---

## 🧪 Build para produção

```bash
npm run build
# ou
yarn build
```

Para pré-visualizar o build:

```bash
npm run preview
# ou
yarn preview
```

---

## 🎨 Chakra UI com Vite

Caso esteja configurando o Chakra UI do zero:

### Instalação dos pacotes

```bash
npm install @chakra-ui/react @emotion/react @emotion/styled framer-motion
```

### Envolvendo o App com ChakraProvider

No arquivo `main.tsx` ou `main.jsx`, adicione:

```tsx
import { ChakraProvider } from '@chakra-ui/react'

<ChakraProvider>
  <App />
</ChakraProvider>
```

---

## 📁 Estrutura base do projeto

```
src/
├── assets/
├── components/
├── hooks/
├── pages/
├── services/
├── styles/
├── App.tsx
├── main.tsx
```

---

## 👨‍💻 Desenvolvedor

- [@LeozeraGod](https://github.com/LeozeraGod)

---

## 📃 Licença

Este projeto está licenciado sob a [MIT License](LICENSE).







This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```



# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
