import React from 'react';
import { PageTemplate } from '@/src/templates';
import { View, Text, StyleSheet } from 'react-native';

export const AboutScreen: React.FC = () => {
  return (
    <PageTemplate title="Sobre o App" subtitle="Conheça mais sobre esta aplicação">
      <View style={styles.content}>
        <Text style={styles.paragraph}>
          Este aplicativo foi desenvolvido para ajudar você a organizar suas tarefas de forma simples e eficiente.
        </Text>
        <Text style={styles.paragraph}>
          Com ele, você pode adicionar, remover e acompanhar o progresso das suas atividades diárias.
        </Text>
        <Text style={styles.paragraph}>
          Criado com a arquitetura Atomic Design, o app é modular, reutilizável e escalável.
        </Text>
        <Text style={styles.version}>Versão 1.0.0</Text>
      </View>
    </PageTemplate>
  );
};

const styles = StyleSheet.create({
  content: {
    gap: 12,
    marginTop: 12,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    color: '#444',
  },
  version: {
    marginTop: 16,
    fontSize: 14,
    color: '#888',
  },
});
