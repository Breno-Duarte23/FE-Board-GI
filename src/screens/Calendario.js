import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from '../components/Header';

const Calendario = ({ navigation }) => {
    return (
        <View style={styles.mainContainer}>
            <Header
                title="Calendário"
                onBackPress={() => navigation.navigate('TelaInicial')}
                navigation={navigation}
            />
            <Text style={styles.text}>Calendário</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        alignContent: 'center',
    },
    text: {
        alignSelf: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 20,
        color: '#49688d',
    },
});

export default Calendario;
