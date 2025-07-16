
// src/root.component.tsx
import React from 'react';
import styles from './root.component.module.scss'; // Importando nossos novos estilos

export default function Root(props) {
  // Removemos a lógica de 'pathname' e 'bgColor'.
  // O fundo é controlado pelo CSS agora.

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Coluna 1 - Serviços */}
        <div className={styles.column}>
          <p className={styles.columnTitle}>Serviços</p>
          <ul className={styles.columnList}>
            <li className={styles.columnListItem}>Conta corrente</li>
            <li className={styles.columnListItem}>Conta PJ</li>
            <li className={styles.columnListItem}>Cartão de crédito</li>
          </ul>
        </div>

        {/* Coluna 2 - Contato */}
        <div className={styles.column}>
          <p className={styles.columnTitle}>Contato</p>
          <ul className={styles.columnList}>
            <li className={styles.columnListItem}>0800 504 3058</li>
            <li className={styles.columnListItem}>suporte@bytebank.com</li>
            <li className={styles.columnListItem}>contato@bytebank.com</li>
          </ul>
        </div>

        {/* Coluna 3 - Developed by Front-End */}
        <div className={styles.column}>
          <p className={styles.columnTitle}>Developed by Front-End</p>
          <div>
            {/* Usamos a tag <img> padrão do HTML */}
            <img
              src="/footer/ft-logo.svg"
              className={styles.logo}
              alt="Bytebank Logo"
              width={80}
              height={24}
            />
            <div className={styles.socialIcons}>
              <img
                src="/footer/ft-instagram.svg"
                alt="Instagram"
                width={20}
                height={20}
              />
              <img
                src="/footer/ft-youtube.svg"
                alt="YouTube"
                width={20}
                height={20}
              />
              <img
                src="/footer/ft-whatsapp.svg"
                alt="Whatsapp"
                width={20}
                height={20}
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}