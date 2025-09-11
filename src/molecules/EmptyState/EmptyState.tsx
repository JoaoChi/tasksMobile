import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Icon } from '@/src/atoms';
import React from 'react';
import { StyleSheet, useColorScheme } from 'react-native';
import { Colors } from '../../../constants/Colors';

export interface EmptyStateProps {
  icon?: string;
  title: string;
  subtitle?: string;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  icon = 'checklist',
  title,
  subtitle,
}) => {
  const scheme = useColorScheme() ?? 'light';
  const c = Colors[scheme];

  return (
    <ThemedView style={[styles.container, { backgroundColor: c.background }]}>
      <Icon name={icon} size={64} color={c.icon} />
      <ThemedText style={[styles.title, { color: c.text }]}>{title}</ThemedText>
      {subtitle && (
        <ThemedText style={[styles.subtitle, { color: c.subText }]}>
          {subtitle}
        </ThemedText>
      )}
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginTop: 16,
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 22,
  },
});
