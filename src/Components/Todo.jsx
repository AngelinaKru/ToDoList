import './CSS/Todo.css';
import { useState, useRef, useEffect } from 'react';
import TodoItems from './TodoItems';

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [count, setCount] = useState(() => {
    const storedCount = localStorage.getItem('todosCount');
    return storedCount ? parseInt(storedCount, 10) : 0;
  });
  const inputRef = useRef(null);

  const addTodo = () => {
    setTodos([...todos, { no: count, text: inputRef.current.value, display: "" }]);
    setCount(prevCount => prevCount + 1);
    inputRef.current.value = "";
    localStorage.setItem('todosCount', count + 1);
  };

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  useEffect(() => {
    setTimeout(() => {
      localStorage.setItem('todos', JSON.stringify(todos));
    }, 100);
  }, [todos]);

  return (
    <div className="todo">
      <div className="todo-header">To-Do list</div>
      <div className="todo-add">
        <input type="text" placeholder="Add a new task" className='todo-input' ref={inputRef} />
        <div className="todo-add-btn" onClick={addTodo}>ADD TASK</div>
      </div>
      <div className="todo-list">
        {todos.map((item, index) => (
          <TodoItems key={index} setTodos={setTodos} no={item.no} text={item.text} display={item.display} />
        ))}
      </div>
    </div>
  );
};

export default Todo;
