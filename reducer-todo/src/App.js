import React, {useState, useReducer} from 'react';
import './Todo.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import {todoReducer, initialState} from './reducer/todoReducer'

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const [newTask, setNewTask] = useState('');

  // Form Change handler
  const handleChanges = e => {
    setNewTask(e.target.value);
  };

  // Form Submit handler
  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: 'ADD_TODO', payload: newTask })
    setNewTask('')
  }


  return (
    <div className='main-content'>
      <h1>To-do App!</h1>
      <h2>List</h2>
      <TodoForm handleChanges={handleChanges} handleSubmit={handleSubmit} dispatch={dispatch} newTask={newTask}/>
      <TodoList taskList={state} dispatch={dispatch}/>
    </div>
  );
}

export default App;
