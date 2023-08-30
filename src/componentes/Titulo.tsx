import {Text, ITextProps} from "native-base";
import React from "react";
import {ReactNode} from "react";

interface TituloProps extends ITextProps{
    children: ReactNode
}

export function Titulo({ children, ...rest }: TituloProps){
    return(
        <Text
            fontSize={"2x1"}
            fontWeight={"bold"}
            color= {"000000"}
            textAlign={"left"}
            mt={5}
            {...rest}
        >
            {children}
        </Text>
    )
}