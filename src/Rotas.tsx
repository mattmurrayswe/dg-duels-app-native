import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './Login';
import Cadastro from './Cadastro';
import RecuperarSenha from './RecuperarSenha';
import Principal from './Principal';

const Tab = createNativeStackNavigator();

export default function Rotas() {
    return(
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Principal" component={Principal} options={{headerShown: false}}/>
                <Tab.Screen name="Login" component={Login} options={{headerShown: false}}/>
                <Tab.Screen name="Cadastro" component={Cadastro} options={{headerShown: false}}/>
                <Tab.Screen name="RecuperarSenha" component={RecuperarSenha} options={{headerShown: false}}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}
