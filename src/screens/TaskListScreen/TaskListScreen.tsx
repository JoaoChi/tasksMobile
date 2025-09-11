import { useTaskContext } from '@/src/hooks';
import { TaskList } from '@/src/organisms';
import { PageTemplate } from '@/src/templates';
import { useFocusEffect, useRouter } from 'expo-router';
import React, { useCallback } from 'react';
import { Button, StyleSheet, useColorScheme } from 'react-native';
import { Colors } from '../../../constants/Colors';

export const TaskListScreen: React.FC = () => {
  const {
    tasks,
    refreshing,
    toggleTaskCompletion,
    deleteTask,
    onRefresh,
    getTaskStats,
  } = useTaskContext();

  const router = useRouter();
  const scheme = useColorScheme() ?? 'light';
  const c = Colors[scheme];

  useFocusEffect(
    useCallback(() => {
      // Pode fazer algo quando a tela focar
    }, [])
  );

  const stats = getTaskStats();
  
  return (
    <PageTemplate
      title="Minhas Tarefas"
      subtitle={`${stats.pending} pendentes de ${stats.total}`}
    >
      <TaskList
        tasks={tasks}
        refreshing={refreshing}
        onRefresh={onRefresh}
        onToggleComplete={toggleTaskCompletion}
        onDeleteTask={deleteTask}
      />
      <Button 
        title="Ir para Login"
        onPress={() => router.push('/login')}
      />
    </PageTemplate>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#4CAF50', // Pode ser ajustado com base no tema
  },
});
