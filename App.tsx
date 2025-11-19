import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthProvider } from '../CarteiraTela/src/context/AuthContext';
import LoginScreen from '../CarteiraTela/src/screens/LoginScreen';
import AdminHome from '../CarteiraTela/src/screens/AdminHome';
import UserHome from '../CarteiraTela/src/screens/UserHome';


export type RootStackParamList = {
Login: undefined;
AdminHome: undefined;
UserHome: undefined;
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
</Stack.Navigator>
</NavigationContainer>
</AuthProvider>
);
}