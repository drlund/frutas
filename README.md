# Como obter o valor selecionado de uma entrada de seleção mapeada no React utilizando a tag *select*

## Introdução
Construir elementos de entrada selecionada é simples ao trabalhar em projetos da web. Mas com o surgimento de frameworks e bibliotecas JavaScript, construir elementos de entrada pode ser um pouco complicado, pois você precisa pensar do ponto de vista de dados e planejar com antecedência todos os elementos de entrada que estarão no aplicativo. No React, todos os elementos de entrada precisam ser controlados pelo estado, incluindo o elemento **select**. Neste guia, você aprenderá como obter o valor selecionado de uma entrada selecionada no React.

## Entrada de seleção mapeada
Comece criando um array de objetos para usar na criação das opções para a entrada de seleção. Para este exemplo, crie uma entrada **select** para selecionar um valor de uma lista de frutas. Eu criei um arquivo separado na pasta **components**.

Você pode estar se perguntando por que precisa haver objetos dentro do array quando você pode usar uma string para criar as opções. É porque o valor da opção não precisa necessariamente ser o mesmo do rótulo. Em seguida, usando o array **Opcoes**. Atribua a propriedade **value** do objeto à propriedade **value** do elemento **Opcoes**, para que as opções sejam mapeadas corretamente e o valor do elemento **select** possa ser recuperado.


## Definindo o valor padrão usando o State
Para selecionar uma opção padrão no React, o atributo **selected** é usado no elemento **option**. No React, no entanto, em vez de usar o atributo **selected**, o **prop value** é usado no elemento **select** raiz. Assim, você pode definir um valor padrão passando o valor da opção na **prop value** do elemento **select** de entrada. Isso é muito conveniente em um componente controlado, pois você só precisa atualizar o valor em um lugar.

## Obtendo o valor selecionado
Para buscar o valor selecionado do elemento **select**, você pode usar a propriedade do manipulador de eventos **onChange**. Assim como os elementos **input** ou **textarea**, você pode usar o manipulador de eventos **onChange** para obter o valor do objeto **event**. Agora, torne este elemento de entrada controlado **select** usando o **State** para passar o valor. Defina o valor inicial no **State** do componente e, no método **handleChange**, defina o valor selecionado como o novo valor no **state**.


## Conclusão
Neste guia, você aprendeu alguns casos de uso diários para o elemento select input, como começar, como buscar o valor selecionado e como tornar o elemento select controlado. Existem bibliotecas de terceiros como react-select que você pode usar para não precisar escrever tanto código.

### Tradução livre do artigo do site https://www.pluralsight.com/guides/how-to-get-selected-value-from-a-mapped-select-input-in-react criado por Gaurav Singhal.
#
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
