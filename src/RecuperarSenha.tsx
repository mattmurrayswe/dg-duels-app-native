import { VStack, Text, Box } from 'native-base';
import React from 'react';
import { TEMAS } from "./style/TEMAS.1";
import { EntradaTexto } from './componentes/entradatexto';
import { Botao } from './componentes/botao';
import { secoesRecuperaSenha } from './utils/RecuperaSenhaEntradaTexto';

export default function RecuperarSenha() {

  const [numSecao, setNumSecao] = React.useState(0);

  function avancarSecao() {
    if(numSecao < secoesRecuperaSenha.length - 1) {
      setNumSecao(numSecao + 1);
    }
  }

    return (
      <VStack>

        <Text
          fontSize="34"
          fontWeight="Semibold"
          color={'black.1000'}
          mt={50}
          ml={4}
        >
          {secoesRecuperaSenha[numSecao].titulo}
        </Text>
        <Text fontSize={14} fontStyle={"Comfortaa"} ml={4} >
          {secoesRecuperaSenha[numSecao].Texto}
        </Text>
        <Box>
          {secoesRecuperaSenha[numSecao].EntradaTexto.map((entrada) => {
            return <EntradaTexto key={entrada.id} label={entrada.label} placeholder={entrada.placeholder}></EntradaTexto>
          })}
        </Box>
        <Botao onPress={avancarSecao}>Próximo</Botao>
      </VStack>
    );
}