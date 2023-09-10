import { NativeBaseProvider, StatusBar } from 'native-base';

import {TEMAS} from './src/style/temas';
import React from 'react';
import Rotas from './src/Perfil';
import Perfil from './src/Perfil';
//import Perfil from './src/Rotas';

export default function App() {
  return (
    <NativeBaseProvider theme={TEMAS}>
      <StatusBar backgroundColor={TEMAS.colors.black[500]} />

      <Perfil nome={''} foto={''} marcaVeiculo={''} modeloVeiculo={''} cidade={''} uf={''} />
    </NativeBaseProvider>
  );
}