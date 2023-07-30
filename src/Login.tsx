import { VStack, Image, Text, Box, FormControl, Input, Button, Link, Center } from 'native-base';
import React from 'react';
import {TEMAS} from './style/temas';
import Principal from './Principal';
import { EntradaTexto } from './componentes/entradatexto';
import { Botao } from './componentes/botao';

export default function Login({navigation}) {

  function esqueceuSenha() {
    navigation.navigate('RecuperarSenha');
  }

    return (
      <VStack>

        <Text
          textAlign={'left'}
          fontSize="34"
          fontWeight="Semibold"
          color={'black.0000'}
          fontStyle={'Comfortaa'}
          mt={50}
          ml={4}
        >
          Login
        </Text>
        <Box>
          <EntradaTexto placeholder='digitalgarage@example.com'></EntradaTexto>
          <EntradaTexto placeholder='Insira sua senha'></EntradaTexto>    
        </Box>
        <Botao>Entrar</Botao>
        <Link onPress={() => navigation.navigate('RecuperarSenha')}><Text fontSize={13} fontStyle={'Comfortaa'} marginLeft={113} mt={2} >Esqueceu a senha? Clique aqui!</Text></Link>
      </VStack>
    );
}
