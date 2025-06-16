import React, { useState } from 'react';
import { View, Button, StyleSheet, Alert, Platform } from 'react-native';
import { Calendar } from 'react-native-calendars';
import * as CalendarExpo from 'expo-calendar';
import Header from '../components/Header';

const Calendario = () => {
    const [selectedDate, setSelectedDate] = useState(null);

    async function criarEvento() {
        if (!selectedDate) {
            Alert.alert('Selecione uma data primeiro!');
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

        await CalendarExpo.createEventAsync(defaultCalendar.id, {
            title: 'Novo Evento',
            startDate: new Date(selectedDate + 'T10:00:00'),
            endDate: new Date(selectedDate + 'T11:00:00'),
            notes: 'Evento adicionado pelo Educa Notas',
            timeZone: 'America/Sao_Paulo',
        });

        Alert.alert('Evento adicionado ao calendário!');
    }

    return (
        <View style={{ flex: 1, backgroundColor: '#F5F6FA' }}>
            <Header title="Calendário" />
            <View style={styles.container}>
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
                    <Button
                        title="Adicionar evento ao calendário"
                        color={Platform.OS === 'ios' ? '#007bff' : undefined}
                        onPress={criarEvento}
                    />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    buttonContainer: {
        marginTop: 24,
    },
});

export default Calendario;
