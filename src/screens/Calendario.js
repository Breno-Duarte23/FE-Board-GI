import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert, Platform, TouchableOpacity, TextInput, Modal } from 'react-native';
import { Calendar } from 'react-native-calendars';
import * as CalendarExpo from 'expo-calendar';
import DateTimePicker from '@react-native-community/datetimepicker';
import Header from '../components/Header';

const Calendario = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);
    const [tituloEvento, setTituloEvento] = useState('');
    const [horaEvento, setHoraEvento] = useState(new Date());
    const [showTimePicker, setShowTimePicker] = useState(false);

    async function criarEvento() {
        if (!selectedDate || !tituloEvento || !horaEvento) {
            Alert.alert('Preencha todos os campos!');
            return;
        }

        const { status } = await CalendarExpo.requestPermissionsAsync();
        if (status !== 'granted') {
            Alert.alert('Permissão negada para acessar o calendário.');
            return;
        }

        const calendars = await CalendarExpo.getCalendarsAsync();
        const defaultCalendar = calendars.find(cal => cal.allowsModifications);

        if (!defaultCalendar) {
            Alert.alert('Nenhum calendário disponível para adicionar eventos.');
            return;
        }

        // Monta a data/hora no formato ISO
        const [year, month, day] = selectedDate.split('-');
        const startDate = new Date(
            year,
            parseInt(month, 10) - 1,
            day,
            horaEvento.getHours(),
            horaEvento.getMinutes(),
            0
        );
        const endDate = new Date(startDate.getTime() + 60 * 60 * 1000); // 1 hora de duração

        await CalendarExpo.createEventAsync(defaultCalendar.id, {
            title: tituloEvento,
            startDate,
            endDate,
            notes: 'Evento adicionado pelo Educa Notas',
            timeZone: 'America/Sao_Paulo',
        });

        setModalVisible(false);
        setTituloEvento('');
        setHoraEvento(new Date());
        Alert.alert('Evento adicionado ao calendário!');
    }

    const formatarHora = (date) => {
        const horas = String(date.getHours()).padStart(2, '0');
        const minutos = String(date.getMinutes()).padStart(2, '0');
        return `${horas}:${minutos}`;
    };

    return (
        <View style={{ flex: 1, backgroundColor: '#F5F6FA' }}>
            <Header title="Calendário" />
            <View style={{ flex: 1 }}>
                <Calendar
                    onDayPress={day => setSelectedDate(day.dateString)}
                    markedDates={
                        selectedDate
                            ? { [selectedDate]: { selected: true, selectedColor: '#007bff' } }
                            : {}
                    }
                    theme={{
                        selectedDayBackgroundColor: '#007bff',
                        todayTextColor: '#007bff',
                    }}
                />
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.addButton}
                        onPress={() => {
                            if (!selectedDate) {
                                Alert.alert('Selecione uma data primeiro!');
                                return;
                            }
                            setModalVisible(true);
                        }}
                    >
                        <Text style={styles.addButtonText}>Adicionar evento ao calendário</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <Modal
                visible={modalVisible}
                transparent
                animationType="slide"
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Novo Evento</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Título do evento"
                            value={tituloEvento}
                            onChangeText={setTituloEvento}
                        />
                        <TouchableOpacity
                            style={styles.timePickerButton}
                            onPress={() => setShowTimePicker(true)}
                        >
                            <Text style={styles.timePickerText}>
                                {`Hora do evento: ${formatarHora(horaEvento)}`}
                            </Text>
                        </TouchableOpacity>
                        {showTimePicker && (
                            <DateTimePicker
                                value={horaEvento}
                                mode="time"
                                is24Hour={true}
                                display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                                onChange={(event, selectedTime) => {
                                    setShowTimePicker(Platform.OS === 'ios');
                                    if (selectedTime) setHoraEvento(selectedTime);
                                }}
                            />
                        )}
                        <View style={styles.modalButtons}>
                            <TouchableOpacity
                                style={[styles.modalButton, { backgroundColor: '#ccc' }]}
                                onPress={() => setModalVisible(false)}
                            >
                                <Text style={styles.modalButtonText}>Cancelar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[styles.modalButton, { backgroundColor: '#FCC911' }]}
                                onPress={criarEvento}
                            >
                                <Text style={[styles.modalButtonText, { color: '#49688d', fontWeight: 'bold' }]}>Adicionar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        marginTop: 24,
        alignItems: 'center',
    },
    addButton: {
        backgroundColor: '#FCC911',
        paddingVertical: 16,
        paddingHorizontal: 32,
        borderRadius: 12,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.08,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 4,
        width: '90%',
    },
    addButtonText: {
        color: '#49688d',
        fontSize: 18,
        fontWeight: 'bold',
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.3)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        backgroundColor: '#fff',
        borderRadius: 16,
        padding: 24,
        width: '85%',
        alignItems: 'center',
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#49688d',
        marginBottom: 16,
    },
    input: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 12,
        marginBottom: 16,
        fontSize: 16,
    },
    timePickerButton: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 12,
        marginBottom: 16,
        backgroundColor: '#F5F6FA',
    },
    timePickerText: {
        fontSize: 16,
        color: '#49688d',
    },
    modalButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    modalButton: {
        flex: 1,
        paddingVertical: 12,
        marginHorizontal: 8,
        borderRadius: 8,
        alignItems: 'center',
    },
    modalButtonText: {
        fontSize: 16,
        color: '#fff',
    },
});

export default Calendario;
