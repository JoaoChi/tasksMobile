import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Icon, PriorityIndicator } from '@/src/atoms';
import { Task } from '@/src/types';
import React from 'react';
import { StyleSheet, TouchableOpacity, useColorScheme } from 'react-native';
import { Colors } from '../../../constants/Colors';

export interface TaskItemProps {
  task: Task;
  onPress?: (task: Task) => void;
  onToggleComplete?: (taskId: string) => void;
  onDelete?: (taskId: string) => void;
}

export const TaskItem: React.FC<TaskItemProps> = ({
  task,
  onPress,
  onToggleComplete,
  onDelete,
}) => {
  const scheme = useColorScheme() ?? 'light';
  const c = Colors[scheme];

  return (
    <TouchableOpacity
      style={[
        styles.container,
        task.completed && styles.completedContainer,
        { backgroundColor: c.card, borderColor: c.border },
      ]}
      onPress={() => onPress?.(task)}
    >
      <ThemedView style={styles.content}>
        <ThemedView style={styles.mainContent}>
          <ThemedView style={styles.titleRow}>
            <ThemedText
              style={[
                styles.title,
                task.completed && styles.completedText,
                { color: task.completed ? c.subText : c.text },
              ]}
              numberOfLines={1}
            >
              {task.title}
            </ThemedText>
            <PriorityIndicator priority={task.priority} size="medium" />
          </ThemedView>

          {task.description && (
            <ThemedText
              style={[
                styles.description,
                task.completed && styles.completedText,
                { color: task.completed ? c.subText : c.text },
              ]}
              numberOfLines={2}
            >
              {task.description}
            </ThemedText>
          )}
        </ThemedView>

        <ThemedView style={styles.actions}>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => onToggleComplete?.(task.id)}
          >
            <Icon
              name={task.completed ? 'checkmark.circle.fill' : 'circle'}
              size={24}
              color={task.completed ? c.tint : c.icon}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => onDelete?.(task.id)}
          >
            <Icon name="trash" size={20} color={c.danger} />
          </TouchableOpacity>
        </ThemedView>
      </ThemedView>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 12,
    borderRadius: 12,
    borderWidth: 1,
  },
  completedContainer: {
    opacity: 0.7,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: 16,
  },
  mainContent: {
    flex: 1,
    marginRight: 12,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    flex: 1,
    marginRight: 8,
  },
  description: {
    fontSize: 14,
    lineHeight: 20,
  },
  completedText: {
    textDecorationLine: 'line-through',
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionButton: {
    padding: 8,
    marginLeft: 4,
  },
});
