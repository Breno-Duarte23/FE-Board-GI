import RecadoCard, { limitarDescricao } from '../components/RecadoCard';

describe('limitarDescricao', () => {
    it('deve retornar a descrição completa se tiver até 100 caracteres', () => {
        const texto = 'A'.repeat(100);
        expect(limitarDescricao(texto)).toBe(texto);
    });

    it('deve cortar e adicionar "..." se a descrição tiver mais de 100 caracteres', () => {
        const texto = 'A'.repeat(120);
        expect(limitarDescricao(texto)).toBe('A'.repeat(100) + '...');
    });
});