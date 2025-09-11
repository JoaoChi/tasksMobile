import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import React from 'react';
import { StyleSheet, TextInput, TextInputProps, useColorScheme } from 'react-native';
import { Colors } from '../../../constants/Colors';

export interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
  multiline?: boolean;
  maxLength?: number;
  showCharCount?: boolean;
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  multiline = false,
  maxLength,
  showCharCount = false,
  style,
  value,
  ...props
}) => {
  const scheme = useColorScheme() ?? 'light';
  const c = Colors[scheme];

  return (
    <ThemedView style={styles.container}>
      {label && (
        <ThemedText style={[styles.label, { color: c.text }]}>{label}</ThemedText>
      )}

      <TextInput
        style={[
          styles.input,
          multiline && styles.multilineInput,
          error && styles.inputError,
          style,
          { backgroundColor: c.background, color: c.text, borderColor: c.tint },
        ]}
        value={value}
        maxLength={maxLength}
        multiline={multiline}
        textAlignVertical={multiline ? 'top' : 'center'}
        placeholderTextColor={c.icon}
        {...props}
      />

      <ThemedView style={styles.footer}>
        {error && (
          <ThemedText style={[styles.error, { color: c.tint }]}>{error}</ThemedText>
        )}
        {showCharCount && maxLength && (
          <ThemedText style={styles.charCount}>
            {(value?.length || 0)}/{maxLength}
          </ThemedText>
        )}
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
  input: {
    borderWidth: 1,
    borderRadius: 12,
    padding: 16,
    fontSize: 16,
    minHeight: 48,
  },
  multilineInput: {
    height: 100,
    textAlignVertical: 'top',
  },
  inputError: {
    borderColor: '#FF6B6B',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 4,
  },
  error: {
    fontSize: 12,
  },
  charCount: {
    fontSize: 12,
  },
});
