import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    View,
    ScrollView,
    Alert,
    SafeAreaView,
    BackHandler
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from '../components/Header';
import RecadoCard from '../components/RecadoCard';
import ComentariosBottomSheet from '../components/ComentariosBottomSheet';
import dayjs from 'dayjs';
import { useAuth } from '../../AuthContext';
import SHA256 from 'crypto-js/sha256';

const STORAGE_COMENTARIOS = 'comentarios_recados';
const STORAGE_LIDOS = 'recados_lidos';

const salvarComentarios = async (comentarios) => {
    await AsyncStorage.setItem(STORAGE_COMENTARIOS, JSON.stringify(comentarios));
};

const carregarComentarios = async () => {
    const data = await AsyncStorage.getItem(STORAGE_COMENTARIOS);
    return data ? JSON.parse(data) : {};
};

const salvarLidos = async (lidos) => {
    await AsyncStorage.setItem(STORAGE_LIDOS, JSON.stringify(lidos));
};

const carregarLidos = async () => {
    const data = await AsyncStorage.getItem(STORAGE_LIDOS);
    return data ? JSON.parse(data) : [];
};

const recadosFicticios = [
    {
        id: 1,
        titulo: 'Reunião de Pais',
        descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dapibus sed nunc ac finibus. In in nulla vitae metus maximus laoreet. Vivamus non vulputate elit, vel efficitur justo. Sed sed lorem dictum, porta lacus et, facilisis lacus. Phasellus condimentum sed mi vel tincidunt. Suspendisse lorem ligula, viverra vitae pellentesque sit amet, dapibus sed nibh. Ut volutpat dolor ut neque facilisis, ut pharetra leo imperdiet. Pellentesque consequat enim augue, volutpat pellentesque justo scelerisque eu. In a vestibulum erat. Morbi iaculis iaculis nibh, sed ullamcorper metus maximus viverra. Sed sit amet felis nisi. Fusce in accumsan metus, non pellentesque ligula.',
        dataHora: '16/06/2025 18:00',
    },
    {
        id: 2,
        titulo: 'Entrega de Boletins',
        descricao: 'Os boletins serão entregues na próxima semana.',
        dataHora: '15/06/2025 09:30',
    },
    {
        id: 3,
        titulo: 'Passeio Escolar',
        descricao: 'Passeio ao museu agendado para o dia 20/06.',
        dataHora: '14/06/2025 14:00',
    },
    {
        id: 4,
        titulo: 'Atividade Extracurricular',
        descricao: 'Inscrições abertas para a atividade extracurricular de artes.',
        dataHora: '13/06/2025 10:15',
    },
    {
        id: 5,
        titulo: 'Aviso Importante',
        descricao: 'Mudança no horário das aulas a partir da próxima semana.',
        dataHora: '12/06/2025 14:45',
    },
    {
        id: 6,
        titulo: 'Evento Cultural',
        descricao: 'Participe do evento cultural da escola no próximo sábado.',
        dataHora: '11/06/2025 16:00',
    },
    {
        id: 7,
        titulo: 'Palestra sobre Saúde Mental',
        descricao: 'Palestra aberta a todos os pais e alunos sobre saúde mental.',
        dataHora: '10/06/2025 19:00',
    },
    {
        id: 8,
        titulo: 'Feira de Ciências',
        descricao: 'A feira de ciências acontecerá na próxima quarta-feira.',
        dataHora: '09/06/2025 13:30',
    },

];

const TelaInicial = ({ navigation }) => {
    const [comentarios, setComentarios] = useState({});
    const [recadosLidos, setRecadosLidos] = useState([]);
    const [recadoSelecionado, setRecadoSelecionado] = useState(null);
    const [comentariosVisiveis, setComentariosVisiveis] = useState(false);
    const [recadoParaAbrir, setRecadoParaAbrir] = useState(null);

    const { userEmail } = useAuth();

    useEffect(() => {
        (async () => {
            setComentarios(await carregarComentarios());
            setRecadosLidos(await carregarLidos());
        })();
    }, []);

    useEffect(() => {
        salvarComentarios(comentarios);
    }, [comentarios]);

    useEffect(() => {
        salvarLidos(recadosLidos);
    }, [recadosLidos]);

    useEffect(() => {
        if (recadoParaAbrir && recadosLidos.includes(recadoParaAbrir.id)) {
            navigation.navigate('RecadoDetalhe', { recado: recadoParaAbrir });
            setRecadoParaAbrir(null);
        }
    }, [recadosLidos, recadoParaAbrir, navigation]);

    useEffect(() => {
        const onBackPress = () => {
            Alert.alert(
                'Sair do aplicativo',
                'Deseja realmente sair?',
                [
                    { text: 'Cancelar', style: 'cancel', onPress: () => {} },
                    { text: 'Sim', onPress: () => BackHandler.exitApp() },
                ]
            );
            return true; // impede o comportamento padrão
        };

        BackHandler.addEventListener('hardwareBackPress', onBackPress);

        return () => BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, []);

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

    const abrirRecado = (recado) => {
        if (!recadosLidos.includes(recado.id)) {
            setRecadosLidos((prev) => prev.includes(recado.id) ? prev : [...prev, recado.id]);
            setRecadoParaAbrir(recado);
        } else {
            navigation.navigate('RecadoDetalhe', { recado });
        }
    };

    const abrirComentarios = (recadoId) => {
        setRecadoSelecionado(recadoId);
        setComentariosVisiveis(true);
    };

    const adicionarComentario = (texto) => {
        const novoComentario = {
            nome: 'Breno',
            texto,
            dataHora: new Date().toLocaleString('pt-BR'),
            avatar: fotoPerfil, // Adicione esta linha
        };
        setComentarios((prev) => {
            const atualizados = {
                ...prev,
                [recadoSelecionado]: [...(prev[recadoSelecionado] || []), novoComentario],
            };
            return atualizados;
        });
    };

    const marcarComoLido = (recadoId) => {
        setRecadosLidos((prev) => prev.includes(recadoId) ? prev : [...prev, recadoId]);
    };

    const gerarFotoGravatar = (email) => {
        const emailHash = SHA256(email.trim().toLowerCase()).toString();
        return `https://www.gravatar.com/avatar/${emailHash}?d=identicon&s=400`;
    };

    const fotoPerfil = userEmail ? gerarFotoGravatar(userEmail) : null;

    return (
        <SafeAreaView style={styles.mainContainer}>
            <Header title="Sejam Bem Vindos!" />
            <ScrollView style={styles.scroll} contentContainerStyle={styles.body}>
                {recadosFicticios.map((recado) => (
                    <RecadoCard
                        key={recado.id}
                        titulo={recado.titulo}
                        descricao={recado.descricao}
                        dataHora={recado.dataHora}
                        lido={recadosLidos.includes(recado.id)}
                        onPress={() => abrirRecado(recado)}
                        onComentarioPress={() => abrirComentarios(recado.id)}
                    />
                ))}
            </ScrollView>
            <ComentariosBottomSheet
                visible={comentariosVisiveis}
                onClose={() => setComentariosVisiveis(false)}
                comentarios={comentarios[recadoSelecionado] || []}
                onAddComentario={adicionarComentario}
            />
        </SafeAreaView>
    );
};


const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    scroll: {
        flex: 1,
    },
    body: {
        paddingVertical: 16,
        paddingBottom: 32,
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