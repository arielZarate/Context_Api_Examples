// context/todoContext.tsx
import * as React from 'react';
import { TodoContextType, ITodo } from '../@Types/Todo';

export const TodoContext = React.createContext<TodoContextType | null>(null);



//: React.FC<{ children: React.ReactNode }>
const TodoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {



    ///estado global es un array
    const [todos, setTodos] = React.useState<ITodo[]>(
        //notar el array con los corchetes , aca almacena todos los datos
        [
            {
                id: 1,
                name: 'post 1',
                description: 'this is a description',
                status: false,
            },
            {
                id: 2,
                name: 'post 2',
                description: 'this is a description',
                status: true,
            },
        ])



    //create todo function
    const saveTodo = (todo: ITodo) => {
        const newTodo: ITodo = {
            id: Math.random(), // not really unique - but fine for this example
            name: todo.name,
            description: todo.description,
            status: false,
        }
        setTodos([...todos, newTodo])
    }


    //update function
    const updateTodo = (id: number) => {
        todos.filter((todo: ITodo) => {
            if (todo.id === id) {
                todo.status = true
                setTodos([...todos])
            }
        })
    }


    // context/todoContext.tsx  

    //eta funciones se las paso por parametro entre llaves
    return (
        <TodoContext.Provider value={{ todos, saveTodo, updateTodo }}>
            {children}
        </TodoContext.Provider>
    );
};

export default TodoProvider;