import { VStack, Text, ScrollView, Avatar, Divider, Row } from "native-base";
import {Titulo} from "../componentes/Titulo";
import React from "react";
import { Botao } from "../componentes/botao";


export default function Perfil() {
    return(
        <ScrollView flex={1}>
            <VStack flex={2}>
                <Avatar size={"xl"} marginTop={4} alignItems={"left"} ml={8}  source={{uri: "https://github.com/BrendonAlc/dg-duels-app-native/blob/brendon/src/img/dg-reduzida-white.png"}}/>
                <Titulo marginLeft={5} >Digital Garage</Titulo> 
                <Titulo width={104} height={36} marginLeft={5} fontSize={"md"}>Marca Veículo{"\n"}Modelo</Titulo>
                <Titulo flex={3} ml={"300px"} fontSize={"md"}>Cidade, UF</Titulo>
            </VStack>
            <Divider mt={2}/>

            <Botao backgroundColor={"#410096"} fontSize={34} fontWeight={"Semibold"} fontFamily={"Roboto"}>CHALLENGER</Botao>
            <Botao padding={5} fontSize="34" fontWeight="Semibold" color={'black.0000'} fontFamily={"Roboto"} >FOLLOW</Botao>
        </ScrollView>
    )
}