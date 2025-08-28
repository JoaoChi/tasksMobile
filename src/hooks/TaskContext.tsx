import { CreateTaskData, Task, UpdateTaskData } from '@/src/types';
import * as Notifications from 'expo-notifications';
import React, { createContext, useContext } from 'react';
import { useTasks } from './useTasks';

interface TaskContextType {
  tasks: Task[];
  isLoading: boolean;
  refreshing: boolean;
  createTask: (taskData: CreateTaskData) => Promise<Task>;
  updateTask: (taskId: string, updates: UpdateTaskData) => Promise<void>;
  toggleTaskCompletion: (taskId: string) => Promise<void>;
  deleteTask: (taskId: string) => Promise<void>;
  getTaskById: (taskId: string) => Task | undefined;
  onRefresh: () => Promise<void>;
  getTaskStats: () => { total: number; completed: number; pending: number };
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const TaskProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const taskHook = useTasks();
  const { createTask, updateTask, deleteTask } = taskHook;

  const scheduleTaskNotification = async (task: Task) => {
    if (!task.dueDate) return; 

    const trigger = new Date(task.dueDate).getTime(); 

    await Notifications.scheduleNotificationAsync({
      content: {
        title: `Lembrete: ${task.title}`,
        body: task.description || 'Sua task está chegando a data de vencimento.',
      },
      trigger,
      identifier: task.id, 
    });
  };


  const cancelTaskNotification = async (taskId: string) => {
    await Notifications.cancelScheduledNotificationAsync(taskId);
  };

  const createTaskWithNotification = async (taskData: CreateTaskData) => {
    const newTask = await createTask(taskData);
    scheduleTaskNotification(newTask);
    return newTask;
  };

  return (
    <TaskContext.Provider
      value={{ ...taskHook, createTask: createTaskWithNotification, updateTask: async (taskId, updates) => { await updateTask(taskId, updates); const updatedTask = taskHook.getTaskById(taskId); if (updatedTask) { cancelTaskNotification(updatedTask.id); if (!updatedTask.completed) { scheduleTaskNotification(updatedTask); } } }, deleteTask: async (taskId) => { await deleteTask(taskId); cancelTaskNotification(taskId); } }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskContext = (): TaskContextType => {
  const context = useContext(TaskContext);
  if (context === undefined) {
    throw new Error('useTaskContext must be used within a TaskProvider');
  }
  return context;
};
