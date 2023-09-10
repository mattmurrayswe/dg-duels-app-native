import { extendTheme } from "native-base";

/*Alterar temas que serão utilizadas no projeto*/
export const TEMAS = extendTheme({
    colors: {
        gray: {
            50: "#F2F2F2",
            300: "#E5E5E5",
            500: "#BDBDBD",
        },
        blue: {
            500: "#1B2D4E",
            800: "#151F2E"
        },
        white: '#fff',
        black: {
            100: "#F2F2F2",
            500: "#000",
            800: "#151F2E",
            1000: "#1B2D4E",
        }
    },
    fontSizes: {
        xs: 10, 
        sm: 12,
        md: 14,
        lg: 16,
        xl: 18,
    },
    touchableOpacityStyle: {
        position: 'absolute',
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        right: 30,
        bottom: 30,
    },
    floatingButtonStyle: {
        resimode: 'contain',
        width: 60,
        height: 60,
    },
    colorFont: {
        white: '#fff',
        black: '#000',
    }
    
})





