import { VStack, ScrollView, Avatar, Divider, View, Image, Row, HStack } from "native-base";
import React from "react";

import {Titulo} from "./componentes/Titulo";
import { Botao } from "./componentes/botao";

import carro2 from "./img/navegarTodos/carro2.jpg";
import interior from "./img/perfilUsuario/interior.jpg";


interface CardProps {
    nome: string;
    foto: string;
    marcaVeiculo: string;
    modeloVeiculo: string;
    cidade: string;
    uf: string
}

export default function Perfil({
    nome,
    foto,
    marcaVeiculo,
    modeloVeiculo,
    cidade,
    uf
}: CardProps) {
    return(
        <ScrollView>
            <HStack>
                <Avatar size={"xl"} marginTop={52} alignItems={"left"} ml={8}  source={carro2}/>
            </HStack>
            <HStack space={2}>
                <Titulo marginLeft={5} mt={2} fontSize={20} fontWeight={"light"} fontFamily={"Comfortaa"}>Digital Garage</Titulo>
                <Titulo marginLeft={185} mt={6} fontSize={"sm"} fontWeight={"bold"} fontFamily={"Comfortaa"}>1455{"/"}3400</Titulo>
            </HStack>
            <HStack space={2}>
                <Titulo flexDirection={'Row'} width={104} height={36} ml={5} mt={5} fontSize={"md"} fontFamily= {"Roboto"}>Volkswagem{"\n"}Polo TSI</Titulo>
                <Titulo flexDirection={'Row'} ml={185} mt={8} fontSize={"md"} fontFamily= {"Roboto"}>Curitiba{","} PR</Titulo>
            </HStack>
            <Divider mt={2}/>

            <Botao textAlign= {'center'} color= {'#fff'} mt={3} backgroundColor= {"#410096"} fontSize= {34}>CHALLENGER</Botao>
            <Botao textAlign={'center'} color="fff" mt={3} bgColor={"#000"} fontSize={34}>FOLLOW</Botao>
            <Botao _text={{color: "black"}} textAlign={'center'} color="000" mt={3} borderColor={"000"} borderWidth={2} bgColor={"#fff"} fontSize={34}>PATROCINADORES</Botao>
            
            <HStack space={2}>
                <Image source={carro2} flexDirection={"Row"} width={175} height={220} ml={3} mt={8} padding={3}/>
                <Image source={interior} flexDirection={"Row"} width={200} height={310} mr={3} mt={8} padding={3}/>
            </HStack>

            <Botao _text={{color: "black"}} textAlign={'center'} color="000" mt={30} borderColor={"000"} borderWidth={2} bgColor={"#fff"} fontSize={34}>SEE MORE</Botao>

        </ScrollView>
    )
}