import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthProvider } from '../CarteiraTela/src/context/AuthContext';

import LoginScreen from '../CarteiraTela/src/screens/LoginScreen';
import AdminHome from '../CarteiraTela/src/screens/AdminHome';
import UserHome from '../CarteiraTela/src/screens/UserHome';
import CadastrarSenha from '../CarteiraTela/src/screens/CadastrarSenha';
import ListarSenhas from '../CarteiraTela/src/screens/ListarSenhas';
import CadastrarUsuario from '../CarteiraTela/src/screens/CadastrarUsuario';
import ListarUsuarios from '../CarteiraTela/src/screens/ListarUsuarios';

// -------------------------
//   TIPAGEM DAS ROTAS
// -------------------------
export type RootStackParamList = {
  Login: undefined;
  AdminHome: undefined;
  UserHome: undefined;

  CadastrarSenha: undefined;
  ListarSenhas: undefined;

  CadastrarUsuario: undefined;
  ListarUsuarios: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>

          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="AdminHome" component={AdminHome} />
          <Stack.Screen name="UserHome" component={UserHome} />

          {/* NOVAS ROTAS */}
          <Stack.Screen name="CadastrarSenha" component={CadastrarSenha} />
          <Stack.Screen name="ListarSenhas" component={ListarSenhas} />
          <Stack.Screen name="CadastrarUsuario" component={CadastrarUsuario} />
          <Stack.Screen name="ListarUsuarios" component={ListarUsuarios} />

        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
}
