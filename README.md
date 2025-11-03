<<<<<<< HEAD
Simulado de Sistemas Operacionais
Este é um simulado interativo sobre Sistemas Operacionais, focando em chamadas de sistema, processos e threads.
=======
<<<<<<< HEAD
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
=======
# Simulado Redis Interativo
>>>>>>> a9554da2b3347d892ad85e36b1b00e59362b4b54

## Como usar
1. Abra o arquivo index.html em um navegador web
2. Digite seu nome e clique em "Iniciar Simulado"
3. Responda às 15 questões no tempo limite de 20 minutos
4. Veja seu resultado e compare com o ranking

## Funcionalidades
- 15 questões de múltipla escolha
- Timer de 20 minutos
- Feedback imediato após cada resposta
- Ranking persistente usando localStorage
- Design responsivo

## Estrutura do projeto
- index.html: Estrutura principal
- css/styles.css: Estilos CSS
- js/script.js: Lógica JavaScript
- README.md: Este arquivo
## Funcionalidades
- 15 questões de múltipla escolha sobre Sistemas Operacionais
- Timer de 20 minutos
- Feedback imediato após cada resposta
- Ranking compartilhado usando Supabase (todos os usuários veem o mesmo ranking)
- Design responsivo para desktop e mobile

## Tecnologias
- HTML5, CSS3, JavaScript (ES6+)
- Supabase para banco de dados compartilhado
- Git para controle de versão

<<<<<<< HEAD
## Deploy
O projeto está pronto para deploy no Vercel. Siga as instruções no arquivo DEPLOY.md.
=======
- HTML5
- CSS3
- JavaScript (ES6+)
- Supabase (banco de dados)
- jsPDF (export PDF)

## Como Usar

1. Clone o repositório
2. Abra `index.html` no navegador
3. Clique em "Iniciar Simulado"
4. Digite seu nome
5. Responda as 30 questões
6. Veja seu resultado e envie para o ranking

## Deploy no Vercel

1. Faça push para um repositório Git
2. Conecte ao Vercel
3. Deploy automático

## Configuração Supabase

O projeto usa Supabase para armazenar pontuações. A tabela `scores` tem a seguinte estrutura:

```sql
CREATE TABLE scores (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  score INTEGER NOT NULL,
  percentage INTEGER NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);
```

## Desenvolvimento

Para contribuir:

1. Fork o projeto
2. Crie uma branch para sua feature
3. Faça commit das mudanças
4. Abra um Pull Request

## Licença

Este projeto é open source e está sob a licença MIT.
>>>>>>> origin/main
>>>>>>> a9554da2b3347d892ad85e36b1b00e59362b4b54
