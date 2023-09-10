import { VStack, Image, HStack, View } from 'native-base';
import Logo from './img/login.jpeg';
import React from 'react';
import { Botao } from './componentes/botao';


export default function Principal({navigation}) {
    return (
      <VStack>
        <Image source={Logo} alt="Logo Digital Garage" height="90vh"/>
        <HStack space={4} alignItems="center" justifyContent="center"> 
            <Botao onPress={() => navigation.navigate('Login')} bg="black.500" mb={4} mt={1} borderRadius="lg" width={120} height={50} >Login</Botao>             
            <Botao onPress={() => navigation.navigate('Cadastro')} bg="black.500" mb={4} mt={1} borderRadius="lg" width={120} height={50}>Cadastro</Botao>       
        </HStack>
      </VStack>
    );
  }
