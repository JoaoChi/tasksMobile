import { Tabs } from 'expo-router';
import React, { useEffect, useRef } from 'react';
import { Platform, Animated } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

function RotatingLabel({ label }: { label: string }) {
  const rotateAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(rotateAnim, {
        toValue: 1,
        duration: 30000, 
        useNativeDriver: true,
      })
    ).start();
  }, [rotateAnim]);

  const rotate = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <Animated.Text
      style={{
        transform: [{ rotate }],
        fontSize: 12,
        textAlign: 'center',
      }}
    >
      {label}
    </Animated.Text>
  );
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            position: 'absolute',
          },
          default: {},
        }),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: () => <RotatingLabel label="Minhas Tarefas" />,
          tabBarIcon: ({ color, focused }) => (
            <IconSymbol
              size={focused ? 30 : 26}
              name={focused ? 'checklist' : 'list.bullet'}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          tabBarLabel: () => <RotatingLabel label="Nova tarefa" />,
          tabBarIcon: ({ color, focused }) => (
            <IconSymbol
              size={focused ? 32 : 28}
              name={focused ? 'plus.circle.fill' : 'plus.circle'}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
