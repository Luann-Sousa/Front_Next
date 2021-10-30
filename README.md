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

11\* Vamos intender nosso projeto um pouco.
-> Dentro do arquivo pages um arquivo chamado \_app.js
-> Podemos dizer que esse e o arquivo pai de toda nossa aplicação e quando queromos usar algo que vai ser usado em outras parte vou dar um exemplo simples um componente Header de sua aplicação em 99% das vezes você irá precisar
utilizar esse seu componente em outra tela então pra não precisarmos fazer um Header para cada tela agente passa ele
pro nosso arquivo \_app.js que ele se refletirá em toda sua aplicação.
->
