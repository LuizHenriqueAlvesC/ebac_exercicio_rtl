import { fireEvent, render, screen } from '@testing-library/react';
import Post from '.';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    test('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    test("Deve adicionar dois comentarios", () => {
        render(<PostComment/>)

        fireEvent.change(screen.getByTestId('teste-comentario'), {
            target: {
                value: 'Primeiro comentario do teste'
            }
        })
        
        fireEvent.click(screen.getByTestId('botao-adicionar'))

        fireEvent.change(screen.getByTestId('teste-comentario'), {
            target: {
                value: 'Segundo comentario do teste'
            }
        })

        fireEvent.click(screen.getByTestId('botao-adicionar'))

        expect(screen.getAllByTestId('teste-elemento')).toHaveLength(2)
    })
});