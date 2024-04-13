// components/Todo.tsx
import * as React from 'react';
import { ITodo } from '../@Types/Todo';

type Props = {
  todo: ITodo;
  updateTodo: (id: number) => void;
};



//FIXME: AYUDA CON LOS PARAMETROS EN ESTO
const Todo: React.FC<Props> = ({ todo, updateTodo }) => {
  // console.log(todo)

  const checkTodo: string = todo.status ? `line-through` : '';
  return (

    <div className="bg-slate-500 w-40 rounded p-1">
      <h3 className={checkTodo}>{todo.name}</h3>
      <h4 className={checkTodo}>{todo.description}</h4>

      <button onClick={() => updateTodo(todo.id)} className={todo.status ? `hidden` : 'bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded'}>
        complete
      </button>
    </div>
  );
};
export default Todo;

/*
   
    <button onClick={() => updateTodo(todo.id)} className={todo.status ? `hide-button` : 'Card--button'}>
        complete
      </button>

*/