import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { PriorityIndicator } from '@/src/atoms';
import { TaskPriority } from '@/src/types';
import React from 'react';
import { StyleSheet, TouchableOpacity, useColorScheme } from 'react-native';
import { Colors } from '../../../constants/Colors';

export interface PrioritySelectorProps {
  selectedPriority: TaskPriority;
  onPriorityChange: (priority: TaskPriority) => void;
  label?: string;
}

const PRIORITY_OPTIONS: { value: TaskPriority; label: string }[] = [
  { value: 'baixa', label: 'Baixa' },
  { value: 'média', label: 'Média' },
  { value: 'alta', label: 'Alta' },
];

export const PrioritySelector: React.FC<PrioritySelectorProps> = ({
  selectedPriority,
  onPriorityChange,
  label = 'Prioridade',
}) => {
  const scheme = useColorScheme() ?? 'light';
  const c = Colors[scheme];

  return (
    <ThemedView style={[styles.container, { backgroundColor: c.background }]}>
      <ThemedText style={[styles.label, { color: c.text }]}>{label}</ThemedText>
      <ThemedView style={styles.optionsContainer}>
        {PRIORITY_OPTIONS.map((option) => (
          <TouchableOpacity
            key={option.value}
            style={[
              styles.option,
              selectedPriority === option.value && styles.selectedOption,
              {
                borderColor: c.border,
                backgroundColor:
                  selectedPriority === option.value ? c.tint : c.card,
              },
            ]}
            onPress={() => onPriorityChange(option.value)}
          >
            <PriorityIndicator priority={option.value} size="medium" />
            <ThemedText
              style={[
                styles.optionText,
                selectedPriority === option.value && styles.selectedOptionText,
                {
                  color:
                    selectedPriority === option.value
                      ? c.background
                      : c.subText, // Se selecionado, texto claro (fundo escuro)
                },
              ]}
            >
              {option.label}
            </ThemedText>
          </TouchableOpacity>
        ))}
      </ThemedView>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  optionsContainer: {
    flexDirection: 'row',
    gap: 12,
  },
  option: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderWidth: 2,
    borderRadius: 12,
  },
  selectedOption: {
    borderWidth: 2,
    borderRadius: 12,
  },
  optionText: {
    fontSize: 14,
    fontWeight: '500',
    marginLeft: 8,
  },
  selectedOptionText: {
    fontWeight: '600',
  },
});
