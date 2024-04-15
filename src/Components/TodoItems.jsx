import './CSS/TodoItems.css'
import cross from './Assets/cross.png'
import square from './Assets/square.png'
import tick from './Assets/tick.png'


const TodoItems = ({ no, text, display, setTodos }) => {

const deleteTodo = (no) => {
  let data = JSON.parse(localStorage.getItem('todos'));
  data = data.filter((todo)=>todo.no !== no);
  setTodos(data);
}
  const toggle = (no) => {
    let data = JSON.parse(localStorage.getItem('todos'));
    const newData = data.map(item => {
      if (item.no === no) {
        return { ...item, display: item.display === "" ? "line-through" : "" };
      }
      return item;
    });
    localStorage.setItem('todos', JSON.stringify(newData));
    setTodos(newData);
  };
  
  return (
    <div className='todoitems'>
      <div className={`todoitems-container ${display}`} onClick={()=>{toggle(no)}}>
        {display === "" ? <img className='todoitems-icons' src={square} alt="Blank checkbox" /> : <img className='todoitems-icons' src={tick} alt="Tick icon" />}
        <div className="todoitems-text">{text}</div>
      </div>
      <img className='todoitems-cross-icon' onClick={()=>{deleteTodo(no)}} src={cross} alt="Crossed checkbox" />
    </div>
  )
}

export default TodoItems
