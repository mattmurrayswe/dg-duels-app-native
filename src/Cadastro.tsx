import { VStack, Text, Box } from 'native-base';
import React from 'react';
import { EntradaTexto } from './componentes/entradatexto';
import { Botao } from './componentes/botao';
import { secoes } from './utils/CadastroEntradaTexto';


export default function Cadastro() {

    const [numSecao, setNumSecao] = React.useState(0);
    
    function avancarSecao() {
      if(numSecao < secoes.length - 1) {
        setNumSecao(numSecao + 1);
      }
    }

    function cadastrar() {
       if(numSecao < secoes.length - 1) {
        setNumSecao(numSecao + 1);
      } 
    }

    return (
      <VStack>

        <Text fontSize="34" fontWeight="Semibold" color={'black.0000'} mt={50} ml={2}>
          {secoes[numSecao].titulo}
        </Text>
        <Box>
          {
            secoes[numSecao].EntradaTexto.map((entrada) => {
              return <EntradaTexto key={entrada.id} label={entrada.label} placeholder={entrada.placeholder}></EntradaTexto>
            })
          }
        </Box>
        <Botao onPress={avancarSecao}>Avançar</Botao>

          {
            numSecao === 1 && <Botao onPress={cadastrar}>Inscrever-se</Botao>
          }

      </VStack>
    );
}