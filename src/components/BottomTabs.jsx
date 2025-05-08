import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import TelaInicial from '../screens/TelaInicial';
import PerfilScreen from '../screens/PerfilScreen';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarActiveTintColor: '#007bff',
                tabBarInactiveTintColor: 'gray',
                tabBarStyle: {
                    backgroundColor: '#fff',
                    height: 60,
                    borderTopWidth: 0.5,
                    borderTopColor: '#ccc',
                },
                tabBarIcon: ({ color, size }) => {
                    let iconName = '';

                    switch (route.name) {
                        case 'Início':
                            iconName = 'home';
                            break;
                        case 'Perfil':
                            iconName = 'person';
                            break;
                        default:
                            iconName = 'circle';
                    }

                    return <Icon name={iconName} size={size} color={color} />;
                },
            })}
        >
            <Tab.Screen name="Home" component={TelaInicial} />
            <Tab.Screen name="Perfil" component={PerfilScreen} />
        </Tab.Navigator>
    );
};

export default BottomTabs;
