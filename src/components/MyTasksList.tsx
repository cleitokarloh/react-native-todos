import React from 'react';
import { FlatList, TouchableOpacity, View, Text, StyleSheet, FlatListProps } from 'react-native';

interface FlatListHeaderProps {
  isDark: boolean;
}
function FlatListHeaderComponent({isDark}: FlatListHeaderProps) {
  return (
    <View>
      <Text style={[styles.header, {color: (isDark) ? '#BF4AD4' : '#3D3D4D'}]}>Minhas tasks</Text>
    </View>
  )
}

interface MyTasksListProps {
  tasks: {
    id: number;
    title: string;
    done: boolean;
  }[];
  onPress: (id: number) => void;
  onLongPress: (id: number) => void;
  isDark: boolean;
}

export function MyTasksList({ tasks, onLongPress, onPress, isDark }: MyTasksListProps) {
  return (
    <FlatList
      data={tasks}
      keyExtractor={item => String(item.id)}
      renderItem={({ item, index }) => {
        return (
          <TouchableOpacity
            testID={`button-${index}`}
            activeOpacity={0.7}
            style={ [
              styles.taskButton,
              (isDark) ? (item.done) ? {
                backgroundColor: '#222222'
              } : {
                backgroundColor: 'transparent'
              } : (item.done) ? {
                backgroundColor: 'rgba(25, 61, 223, 0.1)'
              } : {
                backgroundColor: 'transparent'
              } 
            ]
              }
            onPress={() => onPress(item.id)}
            onLongPress={() => onLongPress(item.id)}
          >
            <View 
              testID={`marker-${index}`}
              style={[styles.taskMarker,
                (isDark) ? (item.done) ? {
                  borderColor: '#12A952', 
                  backgroundColor: '#12A952'
                } : {
                  borderColor: '#12A952',
                } : (item.done) ? {
                  borderColor: '#273FAD', 
                  backgroundColor: '#273FAD'
                } : {
                  borderColor: '#3D3D4D',
                }]}
            />
            <Text 
              style={ [
                (isDark) ? (item.done) ?  styles.taskTextDoneDark : styles.taskTextDark : (item.done) ? styles.taskTextDone : styles.taskText, 
                , 
              ]}
            >
              {item.title}
            </Text>
          </TouchableOpacity>
        )
      }}
      ListHeaderComponent={<FlatListHeaderComponent isDark={isDark} />}
      ListHeaderComponentStyle={{
        marginBottom: 20
      }}
      style={[{
        marginHorizontal: 24,
        marginTop: 32
      },
      { backgroundColor: (isDark) ? '#1F1F1F' : '#FFF'}
    ]}
    />
  )
}

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    fontFamily: 'Poppins-SemiBold'
  },
  taskButton: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  taskMarker: {
    height: 16,
    width: 16,
    borderRadius: 8,
    borderWidth: 1,
    marginRight: 10
  },
  taskText: {
    color: '#3D3D4D',
  },
  taskTextDark: {
    color: '#E1E1E6',
  },
  taskTextDone: {
    color: '#A09CB1',
    textDecorationLine: 'line-through'
  },
  taskTextDoneDark: {
    color: '#E1E1E6',
    textDecorationLine: 'line-through'
  },
  taskButtonDone: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    backgroundColor: 'rgba(25, 61, 223, 0.1)',
    flexDirection: 'row',
    alignItems: 'center'
  },
  taskButtonDoneDark: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    backgroundColor: 'rgba(34, 34, 34, 0.1)',
    flexDirection: 'row',
    alignItems: 'center'
  },
  taskMarkerDone: {
    height: 16,
    width: 16,
    borderRadius: 8,
    marginRight: 10
  },
  taskMarkerDoneDark: {
    height: 16,
    width: 16,
    borderRadius: 8,
    backgroundColor: '#12A952',
    marginRight: 10
  },
})