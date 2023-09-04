import { NativeBaseProvider, StatusBar } from 'native-base';

import { TEMAS } from './style/temas';
import React from 'react';
import Rotas from './services/Rotas';

export default function App() {
  return (
    <NativeBaseProvider theme={TEMAS}>
      <StatusBar backgroundColor={TEMAS.colors.black[500]} />

      <Rotas />
    </NativeBaseProvider>
  );
}