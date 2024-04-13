// components/AddTodo.tsx
import * as React from 'react';
import { TodoContext } from '../context/TodoContext';
import { TodoContextType, ITodo } from '../@Types/Todo';


///componente Add Todo 


const AddTodo: React.FC = () => {

  //use context
  const { saveTodo } = React.useContext(TodoContext) as TodoContextType;

  //use State
  const [formData, setFormData] = React.useState<ITodo | {}>();


  //handle Form
  const handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  };


  const handleSaveTodo = (e: React.FormEvent, formData: ITodo | any) => {
    e.preventDefault();

    console.log(formData)
    saveTodo(formData);
  };
  return (

    <div className='flex flex-col justify-center items-center'>
      <form className="'bg-slate-800 border-2 border-green-500  rounded-lg w-48 p-3 text-white bg-slate-900" onSubmit={(e) => handleSaveTodo(e, formData)}>
        <h3 className='text-center text-gray-200 font-bold'>Formulario</h3>

        <div>
          <label htmlFor="name">Titulo</label>
          <input onChange={handleChange} type="text" id="name" name="name"
            className='rounded-md w-40 bg-slate-700 border-2 border-green-600'
          />
        </div>
        <div>
          <label htmlFor="description">Descripcion</label>
          <input onChange={handleChange} type="text" id="description" name="description"
            className='rounded-md w-40 bg-slate-700 border-2 border-green-600'
          />
        </div>
        <button
          disabled={formData === undefined}
          className={`rounded-md border-2 w-40 my-4 ${formData === undefined
            ? 'bg-slate-500 border-slate-900'
            : 'bg-green-500 border-slate-900 hover:bg-green-800'
            }`}
        >
          Agregar Todo
        </button>
      </form>


    </div>

  );
};
export default AddTodo;