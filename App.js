// @Navigation Container - Necessário adicionar ao projecto sempre que usamos navegação. Só pode existir um destes componentes por projecto
import { NavigationContainer } from '@react-navigation/native';

// @createStackNavigator - É um tipo de navegação entre páginas que funciona por meio de uma pilha ecrãs onde o ecrã novo é adicionado ao topo, e se voltarmos atrás conseguimos ter o histórico de todos os ecrãs anteriores
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

//Código para importar ecrãs de ficheiros à parte deste (Nota: Não esquecer de incluir o export default nas páginas .js)
import EntryMenu from './Pages/EntryMenu';
import Login from './Pages/Login';
import Register from './Pages/Register';
import PassRecover from './Pages/PassRecover';
import Home from "./Pages/private/Home"
 

export default function App() {
  return (
    //1 e apenas 1 NavigationContainer por projecto
    <NavigationContainer>
      {/* Stack.Navigator -> Permite então colocar vários ecrãs*/}
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/*Stack.Screen -> Permite adicionar um ecrã para o qual podemos navegar através do seu name*/}
        <Stack.Screen name="EntryMenu" component={EntryMenu} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="PassRecover" component={PassRecover} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
