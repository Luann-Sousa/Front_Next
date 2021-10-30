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

# APLICANDO CHAKRA</br>

1* Ir até a documentação https://chakra-ui.com/</br>
2* Getting Started => Iniciar doc ..</br>
-> npm i @chakra-ui/react @emotion/react@^11 @emotion/styled@^11 framer-motion@^4cls</br>
-> yarn add @chakra-ui/react @emotion/react@^11 @emotion/styled@^11 framer-motion@^4</br>

# CONFIGURANDO ESLINT</br>

1* How would you like to use ESLint ?</br>
-> to check syntax, find problems, and enforce code style</br>
2* What type of modules does your project use ?</br>
-> JavaScript modules (import/export)</br>
3* Does your project use TypeScript? qual framework seu peojeto esta usando</br>
-> React</br>
3* esta utilizando typescript</br>
-> não</br>
4* Where does your code run? quanto no brawser quanto no node.</br>
5*How would you like to define a style for your project? Qual guia de estilo vc que seguir.</br>
-> Use a popular style guide</br>
6* Which style guide do you want to follow? gui de estilo.</br>
-> > Airbnb: https://github.com/airbnb/javascript</br>
7* What format do you want your config file to be in? qual formato do meu arquivo de configuração.</br>
-> JSON</br>
\*8 Instale o Prettier</br>
-> yarn add prettier eslint-config-prettier@7.2.0 eslint-plugin-prettier -D</br>

# VAMOS TRABALHA COM ABSOLUTE PATH</br>

-> Oque é isso, vamos dizer que nós tem uma pasta dentro de nosso projeto, e dentro dessa pasta tem um arquivo
que você precisa esta utilizando certo ? podemos observar em nosso projeto que temos nossa estrutura pra qual tipo
de projeto for adequado ai pra você está utilizando. Este arquivo normalmente fazemos importação dele dessa forma aqui para estamos utilizando correto
../../components/Box.js, agora com nosso absolute path podemos dizer que agente economiza muito isso exemplo quando temos esse exemplo ../../components/Box.js. e ja com absolute path agente cria uma pasta chamada "src" e colocamos todas estrutura de projeto dentro dela.</br>

-> E preciso ir na raiz do seu projeto e criar um arquivo chamado "jsconfig.json" junto com essas configurações.</br>
{</br>
"compilerOptions": {</br>
"baseUrl": ".",</br>
"paths": {</br>
"src/components/_": ["components/_"],</br>
"src/contexts/_": ["contexts/_"],</br>
"src/hooks/_": ["hooks/_"],</br>
"src/lib/_": ["lib/_"],</br>
"src/styles/_": ["styles/_"],</br>
"src/utils/_": ["utils/_"]</br>
}</br>
}</br>
}</br>

-> Acima nessa configuração estamos dizendo o seguinte que tudo que estiver dentro de "src" eu irei poder acessar assim src/components;</br>

# CONFIGURANDO DATOCMS

-> Acesse https://dashboard.datocms.com/projects.
-> Crie um novo projeto.
-> Aparecera 2 opção criar um projeto em branco ou em demo.
-> Ecolha a opção projeto em branco .
-> De um nome ao seu proejto.
-> Click em cretae projeto.
-> Agora iremos abrir nosso prjeto que acabamos de criar que agente ira precisa do token pra poder integrar o Dato algum momento
-> Procure um botão de + pra criamos nosso modelo ok.
-> De um nome ao seu modelo exemplo my_modelo
-> Click em Guardar modelo
-> Ele criou seu modelo ok, agora precisamos dentro desse modelo criar nossas colunas blz ?
-> Vamos ter varios tipo que podemos esta usando no momento escolha o que de acordo atenda sua necessidade.
