import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Alert,
    SafeAreaView
} from 'react-native';
import Header from '../components/Header';

const TelaInicial = ({ navigation }) => {
    const confirmarVoltar = () => {
        Alert.alert(
            "Sair da página",
            "Deseja realmente voltar para a tela de login?",
            [
                { text: "Cancelar", style: "cancel" },
                { text: "Sim", onPress: () => navigation.navigate('TelaLogin') }
            ]
        );
    };

    return (
        <SafeAreaView style={styles.mainContainer}>
            <Header title="Sejam Bem Vindos!" onBackPress={confirmarVoltar} />
            <View style={styles.body}>
                <View style={styles.btnsContainer}>
                    <MenuButton
                        label="Recados"
                        imageSource={require('../../assets/book.png')}
                        onPress={() => navigation.navigate('Recados')}
                    />
                    <MenuButton
                        label="Comunicados"
                        imageSource={require('../../assets/comunicados.png')}
                        onPress={() => navigation.navigate('Comunicados')}
                    />
                    <MenuButton
                        label="Alunos"
                        imageSource={require('../../assets/aluno.png')}
                        onPress={() => navigation.navigate('Alunos')}
                    />
                    <MenuButton
                        label="Calendário"
                        imageSource={require('../../assets/calendario.png')}
                        onPress={() => navigation.navigate('Calendario')}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
};

const MenuButton = ({ label, imageSource, onPress }) => (
    <View style={styles.menuItem}>
        <TouchableOpacity style={styles.mainBtnTouchable} onPress={onPress}>
            <Image style={styles.imgMainButton} source={imageSource} />
        </TouchableOpacity>
        <Text style={styles.labelBtn} numberOfLines={1}>{label}</Text>
    </View>
);

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    body: {
        flex: 1,
        padding: 15,
    },
    btnsContainer: {
        padding: 30,
        height: 400,
        flexWrap: 'wrap',
        flexDirection: 'row',
        alignContent: 'flex-start',
        justifyContent: 'space-between',
    },
    menuItem: {
        alignItems: 'center',
    },
    mainBtnTouchable: {
        width: 115,
        height: 115,
        marginTop: 35,
        borderRadius: 75,
        backgroundColor: '#3b3e90',
        alignItems: 'center',
        justifyContent: 'center',
    },
    imgMainButton: {
        width: 60,
        height: 60,
        resizeMode: 'contain',
    },
    labelBtn: {
        marginTop: 4,
        fontSize: 18,
        color: '#49688d',
        textAlign: 'center',
        fontWeight: '600',
    },
});

export default TelaInicial;
