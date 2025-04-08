import React from 'react';
import TelaLogin from './src/screens/TelaLogin';
import TelaInicial from './src/screens/TelaInicial';
import Recados from './src/screens/Recados';
import Comunicados from './src/screens/Comunicados';
import Ocorrencias from './src/screens/Ocorrencias';
import Aluno from './src/screens/Aluno';
import Calendario from './src/screens/Calendario';
import DadosDoAluno from './src/screens/DadosDoAluno';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";




const App = () => {

  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TelaLogin">
        <Stack.Screen
          name="TelaLogin"
          component={TelaLogin}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TelaInicial"
          component={TelaInicial}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Recados"
          component={Recados}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Comunicados"
          component={Comunicados}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Ocorrencias"
          component={Ocorrencias}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Aluno"
          component={Aluno}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DadosDoAluno"
          component={DadosDoAluno}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Calendario"
          component={Calendario}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;