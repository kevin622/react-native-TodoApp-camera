import React, { useState } from 'react';
import { StyleSheet, Text, SafeAreaView, View } from 'react-native'; // SafeAreaView는 디바이스 크기를 인식해서 padding 적용하는 듯...?
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';


export default function App() {
  // todos: { id: Number, textValue: string, checked: boolean }
  const [todos, setTodos] = useState([])
  
  const addTodo = text => {
    setTodos([
      ...todos,
      {id: Math.random().toString(), textValue: text, checked: false},
    ])
  }

  const onRemove = id => e => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const onToggle = id => e => {
    setTodos(
      todos.map(todo => 
        todo.id === id ? {...todo, checked: !todo.checked} : todo,
      ),
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.appTitle}>TodoList App</Text>
      <View style={styles.card}>
        <TodoInsert onAddTodo={addTodo} />
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
      </View>
      {/* <Text>
        Hello
      </Text> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3143e8',
  },
  appTitle: {
    color: 'white',
    fontSize: 36,
    marginTop: 30,
    marginBottom: 30,
    fontWeight: '300',
    textAlign: 'center',
    backgroundColor: '#3143e8',
  },
  card: {
    backgroundColor: '#fff',
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    flex: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
});
