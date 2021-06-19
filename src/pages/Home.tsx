import React, { useState } from 'react';
import {View} from 'react-native';

import { Header } from '../components/Header';
import { MyTasksList } from '../components/MyTasksList';
import { TodoInput } from '../components/TodoInput';

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {
   const [tasks, setTasks] = useState<Task[]>([]);
   const [isDark, setIsDark] = useState(false);


  function handleAddTask(newTaskTitle: string) {
    if(newTaskTitle == '') {
      return ;
    }

    const data = {
      id: new Date().getTime(),
      title: newTaskTitle,
      done: false
    }

    setTasks((state) => [...tasks, data]);
  }

  function handleChangeThemeMode() {
    setIsDark(state => !state);
  }

  function handleMarkTaskAsDone(id: number) {
    const updatedTasks = tasks.map((task) => {
       if(task.id == id) { 
         return { id: task.id, title: task.title, done: !task.done }
        }

        return task;
    });
    setTasks(updatedTasks);
  }

  function handleRemoveTask(id: number) {
    const updatedTasks = tasks.filter((task) => {
      if(task.id !== id) { 
        return task;
       }
   });
   setTasks(updatedTasks);
  }

  return (
    <View style={ { backgroundColor: (isDark) ? '#1F1F1F' : '#FFF', flex:1}}>
      <Header changeThemeMode={handleChangeThemeMode} isDark={isDark} />
      
      <TodoInput addTask={handleAddTask} isDark={isDark} />

      <MyTasksList 
        isDark={isDark}
        tasks={tasks} 
        onPress={handleMarkTaskAsDone} 
        onLongPress={handleRemoveTask} 
      />
    </View>
  )
}