import { Button, IButtonProps } from "native-base";
import React from "react";
import { ReactNode } from "react";


interface ButtonProps extends IButtonProps {
    children: React.ReactNode;
    autoSize?: boolean;
    color?: string;
}

export function Botao({ children, autoSize, color, ...rest }: ButtonProps){
    return (
        <Button      
            w={autoSize ? 'auto' : '96%'}
            bg={color || 'black.500' || 'white'}
            mt={10}
            ml={2}
            mr={2}
            borderRadius="lg"
            fontFamily={"Roboto"}
            fontWeight={"bold"}
            _text={{ color: 'white'}}
            {...rest}
            >
            {children}
        </Button>
    );
}