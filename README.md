# CONFIGURANDO FIRABASE

1* Acesse a sua conta https://console.firebase.google.com/ ou crie uma conta nova. </br>
2* Quando acessar a sua conta no firabase crie um novo projeto e click em continuar. </br>
3* Desative ou não o goole analytic vai dua sua necessidade com seu projeto criado prossigar. </br>
4* Automaticamente ele já irá abrir a o dashboard do seu projeto ok.</br>
5* Procure onde fale "COMECE ADICIONANDO FIREBASE AO SEU APLICATIVO" e clicka no 3° icone e onde iremos configurar tabém.</br>
6* Precisamos registrar nosso app para o "firebase" isso para controlar qual aplicativo estou utilizando por que podemos ter varios tipos de Apps ios, android ou ate web por isso vamos configurar o Web. </br>
7* Adicone nome do seu projeto exemplo "myApp" e click em registrar app . </br>
8* Ele já te entrega uma configuração pronta de como seria o uso dele na aplicação segue o exemple. </br>

// Import the functions you need from the SDKs you need</br>
import { initializeApp } from "firebase/app";</br>
// TODO: Add SDKs for Firebase products that you want to use</br>
// https://firebase.google.com/docs/web/setup#available-libraries </br>

// Your web app's Firebase configuration</br>
const firebaseConfig = {</br>
apiKey: "AIzaSyBNaJYt_C5JXBbG0gQ_Zj04jbCj9VWu1Eg",</br>
authDomain: "luansousa-89d33.firebaseapp.com",</br>
projectId: "luansousa-89d33",</br>
storageBucket: "luansousa-89d33.appspot.com",</br>
messagingSenderId: "874486268732",</br>
appId: "1:874486268732:web:760ab3a246f53c12c85439"</br>
};</br>

// Initialize Firebase</br>
const app = initializeApp(firebaseConfig);</br>

9\* vamos ate nosso projeto e vamos adicionar o firebase com o seguinte comando </br>
-- yarn add firebase</br>
-- npm install firebase</br>

10\* Criar a estrutura de acordo seu gosto ou sua necessidade.

11\* Vamos intender nosso projeto um pouco.</br>
-> Dentro da pasta pages um arquivo chamado \_app.js</br>
-> Podemos dizer que esse e o arquivo pai de toda nossa aplicação e quando queromos usar algo que vai ser usado em outras parte vou dar um exemplo simples um componente Header de sua aplicação em 99% das vezes você irá precisar
utilizar esse seu componente em outra tela então pra não precisarmos fazer um Header para cada tela agente passa ele
pro nosso arquivo \_app.js que ele se refletirá em toda sua aplicação.</br>

12\* Na raiz do nosso projeto vamos criar tres pastas.</br>
-> lib => Essa pasta iremos utilizar pra colocar funções. Quais funções? aquelas função de comunicação do firabase, funções genêricas que vão trabalhar de todos os pontos dentro da nossa aplicação. </br>
-> context => Essa onde </br>
-> hooks => essa pasta todos seus arquivos particulamente trabalham em conjuntos.</br>

13\* Quando o nosso úsuario se conectar com nossa aplicação pelo firebase será preciso passar os dados entre as telas então, nada melhor do que agente usar o nosso arquivo dentro da pasta "pages" o arquivo \_app.js iremos fazer nossa configuração nesse cara para compartilha essas informações.</br>

14* Dentro de "context" crie uma arquivo chamado "AuthContext" aqui onde vai ter nossa regra de authemtcação vai ter tanto as propiedade que precisamos repassar, quanto as funções que irão alterar essas propiedades ou jogar esse usuairio pra nulo ou prencher com algum nome ou com email isso com as infomarções que precisamos.
15* Dentro de "hooks" crie um arquivo chamado "useAuth" esse cara será responsável por fazer nosso conexção e pegas os dados que precisamos .</br>

# APLICANDO CHAKRA

1* Ir até a documentação https://chakra-ui.com/
2* Getting Started => Iniciar doc ..
-> npm i @chakra-ui/react @emotion/react@^11 @emotion/styled@^11 framer-motion@^4cls
-> yarn add @chakra-ui/react @emotion/react@^11 @emotion/styled@^11 framer-motion@^4

# CONFIGURANDO ESLINT

1* How would you like to use ESLint ?
-> to check syntax, find problems, and enforce code style
2* What type of modules does your project use ?
-> JavaScript modules (import/export)
3* Does your project use TypeScript? qual framework seu peojeto esta usando
-> React
3* esta utilizando typescript
-> não
4* Where does your code run? quanto no brawser quanto no
5*How would you like to define a style for your project? Qual guia de estilo vc que seguir
-> Use a popular style guide
6* Which style guide do you want to follow? gui de estilo
-> > Airbnb: https://github.com/airbnb/javascript
7* What format do you want your config file to be in? qual formato do meu arquivo de configuração
-> JSON
\*8 Instale o Prettier
-> yarn add prettier eslint-config-prettier@7.2.0 eslint-plugin-prettier -D
