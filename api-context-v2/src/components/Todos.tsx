// containers/Todos.tsx
import * as React from 'react';
import { TodoContextType, ITodo } from '../@Types/Todo';
import { TodoContext } from '../context/TodoContext';
import Todo from '../components/Todo';

const Todos = () => {
  const { todos, updateTodo } = React.useContext(TodoContext) as TodoContextType;
  return (
    <>

      <div className='flex flex-col  justify-center items-center gap-2'>
        <h1 className='text-indigo-800 font-bold'>Lista de Todos</h1>
        {todos.map((todo: ITodo) => (
          <>
            {console.log(todo)}
            <Todo key={todo.id} updateTodo={updateTodo} todo={todo} />
          </>

        ))}
      </div>
    </>
  );
};

export default Todos;