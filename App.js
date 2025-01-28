import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import Tasks from './components/Tasks';
import NewTask from './components/NewTask';
import { useState } from 'react';

const data = [{
  title: "This is main",
  body: "Desc goes here"
}, {
  title: "Go to gym",
  body: "Desc goes here"
}, {
  title: "Ride a bike",
  body: "Desc goes here"
}];

export default function App() {
  const [tasks, setTasks] = useState(data);

  function setNewTask(task) {
    setTasks((prev) => ([...prev, { title: task }]));
  }

  function completeTask(taskTitle) {
    const filterTasks = tasks.filter(t => t.title !== taskTitle);
    setTasks(filterTasks);
  }
  return (
    <View style={styles.container}>

      {/* Lists */}
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>Today's Tasks</Text>
        <View style={styles.items}>
          <FlatList
            data={tasks}
            renderItem={({ item }) => <TouchableOpacity key={item.title} onPress={() => completeTask(item.title)}><Tasks title={item.title} /></TouchableOpacity>}
          />
        </View>
      </View>

      {/* New Task */}
      <NewTask onTaskUpdated={setNewTask} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED'
  },
  taskWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  items: {
    marginTop: 30
  }
});
