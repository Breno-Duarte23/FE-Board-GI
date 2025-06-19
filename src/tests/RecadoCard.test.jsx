import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import RecadoCard, { limitarDescricao } from './RecadoCard';

describe('RecadoCard', () => {
    it('renderiza título, data e descrição limitada', () => {
        const props = {
            titulo: 'Título do Recado',
            descricao: 'A'.repeat(120),
            dataHora: '2025-06-18 10:00',
            onPress: jest.fn(),
            onComentarioPress: jest.fn(),
            lido: false,
        };

        const { getByText } = render(<RecadoCard {...props} />);
        expect(getByText('Título do Recado')).toBeTruthy();
        expect(getByText('2025-06-18 10:00')).toBeTruthy();
        expect(getByText('A'.repeat(100) + '...')).toBeTruthy();
    });

    it('chama onPress ao tocar no card', () => {
        const props = {
            titulo: 'Teste',
            descricao: 'Descrição',
            dataHora: '2025-06-18',
            onPress: jest.fn(),
            onComentarioPress: jest.fn(),
            lido: true,
        };

        const { getByText } = render(<RecadoCard {...props} />);
        fireEvent.press(getByText('Ver mais'));
        expect(props.onPress).toHaveBeenCalled();
    });
});