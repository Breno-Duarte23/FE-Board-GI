import React, { useState } from 'react';
import { View, Text, Modal, TextInput, TouchableOpacity, FlatList, StyleSheet, KeyboardAvoidingView, Platform, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ComentariosBottomSheet = ({ visible, onClose, comentarios, onAddComentario, fotoPerfil }) => {
    const [novoComentario, setNovoComentario] = useState('');

    const enviarComentario = () => {
        if (novoComentario.trim()) {
            onAddComentario(novoComentario.trim());
            setNovoComentario('');
        }
    };

    return (
        <Modal
            visible={visible}
            animationType="slide"
            transparent
            onRequestClose={onClose}
        >
            <View style={styles.overlay}>
                <View style={styles.sheet}>
                    <View style={styles.header}>
                        <Text style={styles.titulo}>Comentários</Text>
                        <TouchableOpacity onPress={onClose}>
                            <Icon name="close" size={28} color="#49688d" />
                        </TouchableOpacity>
                    </View>
                    <FlatList
                        data={comentarios}
                        keyExtractor={(_, idx) => idx.toString()}
                        renderItem={({ item }) => (
                            <View style={styles.comentarioItem}>
                                {item.avatar ? (
                                    <Image
                                        source={{ uri: item.avatar }}
                                        style={styles.comentarioAvatar}
                                    />
                                ) : (
                                    <Icon name="account-circle" size={28} color="#49688d" />
                                )}
                                <View style={{ flex: 1 }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 2 }}>
                                        <Text style={styles.comentarioNome}>{item.nome}</Text>
                                        <Text style={styles.comentarioData}>{item.dataHora}</Text>
                                    </View>
                                    <Text style={styles.comentarioTexto}>{item.texto}</Text>
                                </View>
                            </View>
                        )}
                        style={styles.lista}
                        ListEmptyComponent={<Text style={styles.semComentarios}>Nenhum comentário ainda.</Text>}
                    />
                    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
                        <View style={styles.inputContainer}>
                            <TextInput
                                style={styles.input}
                                placeholder="Adicione um comentário..."
                                value={novoComentario}
                                onChangeText={setNovoComentario}
                            />
                            <TouchableOpacity onPress={enviarComentario} style={styles.enviarBtn}>
                                <Icon name="send" size={24} color="#007bff" />
                            </TouchableOpacity>
                        </View>
                    </KeyboardAvoidingView>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0,0,0,0.3)',
    },
    sheet: {
        backgroundColor: '#fff',
        borderTopLeftRadius: 18,
        borderTopRightRadius: 18,
        padding: 16,
        minHeight: 350,
        maxHeight: '70%',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 12,
    },
    titulo: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#49688d',
    },
    lista: {
        flexGrow: 0,
        marginBottom: 8,
    },
    comentarioItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    comentarioAvatar: {
        width: 28,
        height: 28,
        borderRadius: 14,
        marginRight: 8,
    },
    comentarioNome: {
        fontWeight: 'bold',
        color: '#333',
        marginRight: 8,
    },
    comentarioData: {
        fontSize: 12,
        color: '#888',
    },
    comentarioTexto: {
        marginLeft: 8,
        fontSize: 15,
        color: '#333',
        backgroundColor: '#f5f6fa',
        borderRadius: 8,
        padding: 8,
        flex: 1,
    },
    semComentarios: {
        color: '#888',
        textAlign: 'center',
        marginVertical: 16,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderTopWidth: 1,
        borderColor: '#eee',
        paddingTop: 8,
    },
    input: {
        flex: 1,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#f5f6fa',
        paddingHorizontal: 16,
        fontSize: 15,
    },
    enviarBtn: {
        marginLeft: 8,
        padding: 6,
    },
});

export default ComentariosBottomSheet;
