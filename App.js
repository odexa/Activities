import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [inputText, setInputText] = useState('');

  const addTask = () => {
    if (inputText.trim() === '') {
      return;
    }

    const newTask = {
      id: Date.now().toString(),
      title: inputText.trim(),
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setInputText('');
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(
      tasks.filter((task) => task.id !== id)
    );
  };

  const completedTasks = tasks.filter(
    (task) => task.completed
  ).length;

  const renderTask = ({ item }) => (
    <View
      style={[
        styles.taskCard,
        item.completed && styles.completedCard,
      ]}
    >
      <TouchableOpacity
        style={[
          styles.checkButton,
          item.completed && styles.checkedButton,
        ]}
        onPress={() => toggleTask(item.id)}
      >
        {item.completed && (
          <Text style={styles.checkmark}>✓</Text>
        )}
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.taskContent}
        onPress={() => toggleTask(item.id)}
      >
        <Text
          style={[
            styles.taskText,
            item.completed && styles.completedText,
          ]}
        >
          {item.title}
        </Text>

        <Text style={styles.taskStatus}>
          {item.completed ? 'Completed' : 'Tap to complete'}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => deleteTask(item.id)}
      >
        <Text style={styles.deleteText}>×</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>

      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>
            MY TASKS
          </Text>

          <Text style={styles.title}>
            To-Do List
          </Text>

          <Text style={styles.subtitle}>
            Stay organized and get things done.
          </Text>
        </View>

        <View style={styles.headerIcon}>
          <Text style={styles.headerIconText}>✓</Text>
        </View>
      </View>

      {/* Statistics */}
      <View style={styles.statsContainer}>

        <View style={styles.statCard}>
          <Text style={styles.statNumber}>
            {tasks.length}
          </Text>

          <Text style={styles.statLabel}>
            Total
          </Text>
        </View>

        <View style={styles.statCard}>
          <Text style={styles.statNumber}>
            {completedTasks}
          </Text>

          <Text style={styles.statLabel}>
            Done
          </Text>
        </View>

        <View style={styles.statCard}>
          <Text style={styles.statNumber}>
            {tasks.length - completedTasks}
          </Text>

          <Text style={styles.statLabel}>
            Pending
          </Text>
        </View>

      </View>

      {/* Add Task */}
      <View style={styles.addSection}>
        <Text style={styles.sectionTitle}>
          Add a new task
        </Text>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="What needs to be done?"
            placeholderTextColor="#A0A0A0"
            value={inputText}
            onChangeText={setInputText}
            onSubmitEditing={addTask}
          />

          <TouchableOpacity
            style={styles.addButton}
            onPress={addTask}
          >
            <Text style={styles.addButtonText}>
              +
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Task Section */}
      <View style={styles.listHeader}>
        <Text style={styles.listTitle}>
          Your Tasks
        </Text>

        <Text style={styles.taskCount}>
          {tasks.length} {tasks.length === 1 ? 'task' : 'tasks'}
        </Text>
      </View>

      {/* Task List */}
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={renderTask}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={
          tasks.length === 0
            ? styles.emptyList
            : styles.list
        }
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <View style={styles.emptyIcon}>
              <Text style={styles.emptyIconText}>
                ✓
              </Text>
            </View>

            <Text style={styles.emptyTitle}>
              No tasks yet
            </Text>

            <Text style={styles.emptyText}>
              Add your first task above and start
              organizing your day.
            </Text>
          </View>
        }
      />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F7FB',
    paddingHorizontal: 20,
  },

  /* HEADER */

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 15,
    paddingBottom: 20,
  },

  greeting: {
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 2,
    color: '#6C63FF',
    marginBottom: 5,
  },

  title: {
    fontSize: 34,
    fontWeight: '800',
    color: '#1D1D2B',
  },

  subtitle: {
    fontSize: 14,
    color: '#858592',
    marginTop: 5,
  },

  headerIcon: {
    width: 52,
    height: 52,
    borderRadius: 18,
    backgroundColor: '#0edcebf3',
    justifyContent: 'center',
    alignItems: 'center',
  },

  headerIconText: {
    color: '#FFFFFF',
    fontSize: 25,
    fontWeight: 'bold',
  },

  /* STATISTICS */

  statsContainer: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 25,
  },

  statCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    paddingVertical: 16,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ECECF3',
  },

  statNumber: {
    fontSize: 24,
    fontWeight: '800',
    color: '#1D1D2B',
  },

  statLabel: {
    fontSize: 12,
    color: '#858592',
    marginTop: 3,
  },

  /* ADD TASK */

  addSection: {
    marginBottom: 25,
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#2183bb',
    marginBottom: 10,
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 6,
    borderWidth: 1,
    borderColor: '#E7E7EF',
  },

  input: {
    flex: 1,
    height: 48,
    paddingHorizontal: 14,
    fontSize: 15,
    color: '#128999',
  },

  addButton: {
    width: 48,
    height: 48,
    borderRadius: 13,
    backgroundColor: '#1da2b9',
    justifyContent: 'center',
    alignItems: 'center',
  },

  addButtonText: {
    color: '#FFFFFF',
    fontSize: 30,
    fontWeight: '300',
    lineHeight: 32,
  },

  /* LIST HEADER */

  listHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },

  listTitle: {
    fontSize: 19,
    fontWeight: '800',
    color: '#292936',
  },

  taskCount: {
    fontSize: 13,
    color: '#858592',
  },

  /* TASK CARD */

  list: {
    paddingBottom: 30,
  },

  taskCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 15,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#ECECF3',
  },

  completedCard: {
    opacity: 0.75,
  },

  checkButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#D4D4DF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 13,
  },

  checkedButton: {
    backgroundColor: '#16b2c7',
    borderColor: '#0b8bb3',
  },

  checkmark: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: 'bold',
  },

  taskContent: {
    flex: 1,
  },

  taskText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#0cd8d8',
  },

  completedText: {
    textDecorationLine: 'line-through',
    color: '#9999A5',
  },

  taskStatus: {
    fontSize: 11,
    color: '#9999A5',
    marginTop: 4,
  },

  deleteButton: {
    width: 34,
    height: 34,
    borderRadius: 10,
    backgroundColor: '#FFF0F0',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },

  deleteText: {
    fontSize: 22,
    color: '#E85D5D',
    fontWeight: '400',
  },

  /* EMPTY STATE */

  emptyList: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 80,
  },

  emptyContainer: {
    alignItems: 'center',
    paddingHorizontal: 30,
  },

  emptyIcon: {
    width: 80,
    height: 80,
    borderRadius: 25,
    backgroundColor: '#EDEBFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 18,
  },

  emptyIconText: {
    fontSize: 38,
    color: '#6C63FF',
    fontWeight: 'bold',
  },

  emptyTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: '#292936',
    marginBottom: 7,
  },

  emptyText: {
    fontSize: 14,
    lineHeight: 21,
    color: '#9999A5',
    textAlign: 'center',
  },
});