import React, {useState} from 'react';

function TodoForm(props) {
  const [value, setValue] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    props.addTodo(value);
    setValue('');
  };
  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
      <input
        type='text'
        className='todo-input'
        placeholder='new task'
        onChange={e => setValue(e.target.value)}
        value={value}
      />
      <button className='todo-btn'>Add a task</button>
    </form>
  );
}

export default TodoForm;
