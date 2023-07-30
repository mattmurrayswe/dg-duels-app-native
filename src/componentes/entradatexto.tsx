import { size } from "cypress/types/lodash";
import { FormControl, Input } from "native-base";
import React, { InputHTMLAttributes } from "react";


interface InputProps {
    label?: string;
    placeholder?: string;
    secureTextEntry?: boolean;
    leftIcon?: React.ReactNode;
    autoSize?: boolean;
}

export function EntradaTexto({label, autoSize, placeholder, secureTextEntry = false}: InputProps) : JSX.Element{
    return (
        <FormControl mt={4} paddingLeft={2} paddingRight={2} paddingY={2}>
            {label && <FormControl.Label>{label}</FormControl.Label>}
            <Input 
                h={autoSize ? 'auto' : 10}
                w={autoSize ? 'auto' : '100%'}
                placeholder={placeholder}  
                borderRadius="md" 
                bgColor="gray.50" 
                shadow={3} 
                secureTextEntry={secureTextEntry}/>
        </FormControl>
    );
};