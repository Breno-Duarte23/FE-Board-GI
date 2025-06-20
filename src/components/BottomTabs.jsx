import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

import TelaInicial from '../screens/TelaInicial';
import PerfilScreen from '../screens/PerfilScreen';
import Comunicados from '../screens/Comunicados';
import Calendario from '../screens/Calendario';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarActiveTintColor: '#007bff',
                tabBarInactiveTintColor: 'gray',
                tabBarLabelStyle: {
                    fontSize: 12, 
                },
                tabBarItemStyle: {
                    flex: 1, 
                },
                tabBarStyle: {
                    backgroundColor: '#fff',
                    height: 72,
                    borderTopWidth: 0.5,
                    borderTopColor: '#ccc',
                },
                tabBarIcon: ({ color, size }) => {
                    let iconName = '';

                    switch (route.name) {
                        case 'Início':
                            iconName = 'home';
                            break;
                        case 'Comunicados':
                            iconName = 'message';
                            break;
                        case 'Calendário':
                            iconName = 'event';
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
            <Tab.Screen name="Início" component={TelaInicial} />
            <Tab.Screen name="Comunicados" component={Comunicados} />
            <Tab.Screen name="Calendário" component={Calendario} />
            <Tab.Screen name="Perfil" component={PerfilScreen} />
        </Tab.Navigator>
    );
};


export default BottomTabs;