import {View, Text, FlatList, StyleSheet} from 'react-native';

type Task = {
  id: string;
  title: string;
  description?: string; 
};

export default function HomeScreen() {
  const tasks: Task[] = [
    {id: '1', title: 'Buy a bread', description: 'I need to fullcorn bread'},
    {id: '2', title: 'Call mama'},
    {id: '3', title: 'Finish project'}
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>My tasks</Text>
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
  }
})