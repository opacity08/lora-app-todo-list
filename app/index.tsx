import { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TextInput, Button } from 'react-native';

type Task = {
  id: string;
  title: string;
  description?: string; 
};

export default function HomeScreen() {
  const [tasks, setTasks] = useState<Task[]>([]);


  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newTaskDesc, setNewTaskDesc] = useState('');

  function addTask() {
    if (!newTaskTitle.trim()) return;

    const newTask = {
      id: String(Date.now()),
      title: newTaskTitle.trim(),
      description: newTaskDesc.trim()
    }

    setTasks([newTask, ...tasks]);
    setNewTaskTitle('');
    setNewTaskDesc('');


  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>My tasks</Text>

      <TextInput
        style={styles.input}
        placeholder='Enter task title'
        value={newTaskTitle}
        onChangeText={setNewTaskTitle}
        autoCorrect={false}
      />
      <TextInput
        style={[styles.input, styles.inputDesk]}
        placeholder='Optional description'
        value={newTaskDesc}
        onChangeText={setNewTaskDesc}
        multiline={true}
        numberOfLines={3}
        autoCorrect={false}
      />
      <Button title='Add task' onPress={addTask} disabled={!newTaskTitle.trim()} />
      {tasks.length === 0 ? <Text style={styles.noTasks}>All tasks have done</Text> 
        : 
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
          <View style={styles.task}>
            <Text style={styles.taskTitle}>{item.title}</Text>
            {item.description && <Text style={styles.taskDesc}>{item.description}</Text>}
          </View>
        )}
      />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  task: {
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#f2f2f2',
    marginBottom: 12,
  },
  taskTitle: {
    fontSize: 16,
  },
  taskDesc: {
    fontSize: 12,
  },
  noTasks: {
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    borderRadius: 6,
    marginBottom: 12,
  },
  inputDesk: {
    minHeight: 60,
    textAlignVertical: 'top'
  }
})