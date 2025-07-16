// src/root.component.test.tsx
import React from 'react';
// 1. Importamos 'cleanup' para limpar o ambiente após cada teste
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';

import Root from './root.component';

describe('Componente Root do Footer', () => {
  // 2. Este bloco vai rodar ANTES de cada 'it()'
  // Centralizamos a renderização do componente aqui
  beforeEach(() => {
    render(<Root />);
  });

  // 3. Este bloco vai rodar DEPOIS de cada 'it()'
  // É uma boa prática para garantir que um teste не interfere no outro
  afterEach(cleanup);

  it('deve renderizar o texto de copyright', () => {
    // A linha 'render(<Root />)' foi removida daqui
    const copyrightText = screen.getByText(/bytebank. todos os direitos reservados./i);
    expect(copyrightText).toBeInTheDocument();
  });

  it('deve renderizar o ano atual no copyright', () => {
    // A linha 'render(<Root />)' também foi removida daqui
    const currentYear = new Date().getFullYear();
    const copyrightText = screen.getByText(`© ${currentYear} ByteBank. Todos os direitos reservados.`);
    expect(copyrightText).toBeInTheDocument();
  });

  it('deve conter o link de Política de Privacidade', () => {
    // E daqui também
    const privacyLink = screen.getByRole('link', { name: /política de privacidade/i });
    expect(privacyLink).toBeInTheDocument();
    expect(privacyLink).toHaveAttribute('href', '#');
  });
});