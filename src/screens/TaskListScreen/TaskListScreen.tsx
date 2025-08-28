import { useTaskContext } from '@/src/hooks';
import { TaskList } from '@/src/organisms';
import { PageTemplate } from '@/src/templates';
import { useFocusEffect, useRouter } from 'expo-router';  // IMPORTA useRouter
import React, { useCallback } from 'react';
import { Button } from 'react-native';

export const TaskListScreen: React.FC = () => {
  const {
    tasks,
    refreshing,
    toggleTaskCompletion,
    deleteTask,
    onRefresh,
    getTaskStats,
  } = useTaskContext();

  const router = useRouter();  // Usa o hook useRouter

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
        onPress={() => router.push('/login')}  // Navega para a tela de login
      />
    </PageTemplate>
  );
};
