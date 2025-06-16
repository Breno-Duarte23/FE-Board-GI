import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const RecadoCard = ({
    titulo,
    descricao,
    dataHora,
    onPress,
    onComentarioPress,
    lido,
}) => {
    return (
        <TouchableOpacity style={styles.card} activeOpacity={0.9} onPress={onPress}>
            <View style={[styles.barra, { backgroundColor: lido ? '#2ecc40' : '#FCC911' }]} />
            <View style={styles.cardContent}>
                <Text style={styles.titulo}>{titulo}</Text>
                <Text style={styles.descricao}>{descricao}</Text>
                <View style={styles.footer}>
                    <Text style={styles.data}>{dataHora}</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <TouchableOpacity style={styles.comentarioBtn} onPress={onComentarioPress}>
                            <Icon name="chat-bubble-outline" size={20} color="#007bff" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.verMaisContainer} onPress={onPress}>
                            <Text style={styles.verMais}>Ver mais</Text>
                            <Icon name="arrow-forward-ios" size={16} color="#007bff" style={styles.icone} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 10,
        marginVertical: 8,
        marginHorizontal: 16,
        elevation: 2,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 4,
        shadowOffset: { width: 0, height: 2 },
        minHeight: 90,
    },
    barra: {
        width: 8,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
    },
    cardContent: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
    },
    titulo: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#49688d',
        marginBottom: 4,
    },
    descricao: {
        fontSize: 14,
        color: '#333',
        marginBottom: 8,
    },
    footer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    data: {
        fontSize: 12,
        color: '#888',
    },
    verMaisContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    verMais: {
        color: '#007bff',
        textDecorationLine: 'underline',
        fontWeight: 'bold',
        marginRight: 4,
    },
    icone: {
        marginTop: 1,
    },
    comentarioBtn: {
        marginRight: 8,
    },
});

export default RecadoCard;