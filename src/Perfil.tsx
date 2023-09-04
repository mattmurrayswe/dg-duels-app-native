import { VStack, Text, ScrollView, Avatar, Divider, Row } from "native-base";
import {Titulo} from "./componentes/Titulo";
import React from "react";
import { Botao } from "./componentes/botao";

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
        <ScrollView flex={1}>
            <VStack flex={2}>
                <Avatar size={"xl"} marginTop={4} alignItems={"left"} ml={8}  source={{uri: foto}}/>
                <Titulo marginLeft={5} >{nome}</Titulo> 
                <Titulo width={104} height={36} marginLeft={5} fontSize={"md"}>{marcaVeiculo}{"\n"}{modeloVeiculo}</Titulo>
                <Titulo flex={3} ml={"300px"} fontSize={"md"}>{cidade}{","} {uf}</Titulo>
            </VStack>
            <Divider mt={2}/>

            <Botao mt={"5"} backgroundColor={"#410096"} fontSize={34} fontWeight={"Semibold"} fontFamily={"Roboto"}>CHALLENGER</Botao>
            <Botao mt={"5"} fontSize="34" fontWeight="Semibold" backgroundColor={'#000000'} fontFamily={"Roboto"} >FOLLOW</Botao>
            <Botao mt={"5"} fontSize="34" fontWeight="Semibold" textDecorationColor='#000000' color={'#000000'} borderColor={"#000000"} fontFamily={"Roboto"} >PATROCINADORES</Botao>

        </ScrollView>
    )
}