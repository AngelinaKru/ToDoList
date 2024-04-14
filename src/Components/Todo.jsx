import './CSS/Todo.css'

const Todo = () => {
  return (
      <div className="todo">
        <div className="todo-header">To-Do list</div>
        <div className="todo-add">
            <input type="text" placeholder="Add a new task" className='todo-input' />
            <div className="todo-add-btn">Add</div>
        </div>
        <div className="todo-list">
            
        </div>
    </div>
  )
}

export default Todo
