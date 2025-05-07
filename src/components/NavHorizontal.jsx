import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

// Exemplos de telas
import HomeScreen from './screens/HomeScreen';
import MessagesScreen from './screens/MessagesScreen';
import ProfileScreen from './screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
    return (
        <NavigationContainer>
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
                            case 'Mensagens':
                                iconName = 'chat';
                                break;
                            case 'Perfil':
                                iconName = 'person';
                                break;
                        }

                        return <Icon name={iconName} size={size} color={color} />;
                    },
                })}
            >
                <Tab.Screen name="Início" component={HomeScreen} />
                <Tab.Screen name="Mensagens" component={MessagesScreen} />
                <Tab.Screen name="Perfil" component={ProfileScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default BottomTabs;
