import React, { useState } from 'react';
import { Image, Platform, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';

import checkIcon from '../assets/icons/Check.png';

interface TodoInputProps {
  addTask: (task: string) => void;
  isDark: Boolean;
}

export function TodoInput({ addTask, isDark }: TodoInputProps) {
  const [task, setTask] = useState('');

  function handleAddNewTask() {
    addTask(task);
    setTask('');
  }

  return (
    <View style={[styles.inputContainer, Platform.OS === 'ios' ? styles.inputIOSShadow : styles.inputAndroidShadow, {backgroundColor: (isDark) ? '#303030': '#F5F4F8'}]}>
      <TextInput 
        style={[styles.input, {
          backgroundColor: (isDark) ? '#303030': '#F5F4F8',
          color: (isDark) ? '#e4e4e9' : '#000',
        }]} 
        placeholder="Adicionar novo todo..."
        returnKeyType="send"
        placeholderTextColor={(isDark) ? '#E1E1E6': '#A09CB1'}
        onChangeText={setTask}
        onSubmitEditing={handleAddNewTask}
        value={task}
      />
      <TouchableOpacity
        testID="add-new-task-button"
        activeOpacity={0.7}
        style={[styles.addButton, {backgroundColor: (isDark) ? '#181818' : '#3FAD27'}]}
        onPress={handleAddNewTask}
      >
        <Image source={checkIcon} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    borderRadius: 5,
    marginTop: -25,
    marginHorizontal: 40,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    paddingLeft: 12,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  inputIOSShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84
  },
  inputAndroidShadow: {
    elevation: 5
  },
  addButton: {
    height: 50,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
});