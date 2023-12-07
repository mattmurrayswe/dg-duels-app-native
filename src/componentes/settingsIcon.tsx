import { Icon } from "native-base";
import React from "react";
import { TouchableOpacity } from "react-native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const SettingsIcon = ({navigation}) => {
    return (
        <TouchableOpacity onPress={() => navigation.navigate('Configuracoes')}>
            <Icon name="conf" size={30} color={'silver'} style={{marginRight: 16}}/>
        </TouchableOpacity>
    )
}

export default function Configuracoes () {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Configuracoes"
                component={SettingsIcon}
                options={{
                    title: 'Configuracoes',
                    headerRight: () => <SettingsIcon navigation={'Configuracoes'}/>,
                }}
            />
        </Stack.Navigator>
    );
};
