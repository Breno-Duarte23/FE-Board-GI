import React, { useState, useEffect } from 'react';
import TelaLogin from './src/screens/TelaLogin';
import Recados from './src/screens/Recados';
import Comunicados from './src/screens/Comunicados';
import Ocorrencias from './src/screens/Ocorrencias';
import Alunos from './src/screens/Alunos';
import Calendario from './src/screens/Calendario';
import DadosDoAluno from './src/screens/DadosDoAluno';
import EsqueciMinhaSenha from './src/screens/EsqueciMinhaSenha';
import BottomTabs from './src/components/BottomTabs';
import { AuthProvider } from './AuthContext';
import RecadoDetalhe from './src/screens/RecadoDetalhe';
import SplashScreen from './src/components/SplashScreen';

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const App = () => {
  const Stack = createStackNavigator();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <SplashScreen />;
  }

  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="TelaLogin">
          <Stack.Screen
            name="TelaLogin"
            component={TelaLogin}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Home"
            component={BottomTabs}
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
            name="Alunos"
            component={Alunos}
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
          <Stack.Screen
            name="EsqueciMinhaSenha"
            component={EsqueciMinhaSenha}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="RecadoDetalhe"
            component={RecadoDetalhe}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
};

export default App;