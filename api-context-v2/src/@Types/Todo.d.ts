// @types.todo.ts
export interface ITodo {
    id: number;
    name: string;
    description: string;
    status: boolean;
}



//el type es como una definicion de como sera todos los tipos o todo el contexto global de la app 
//la intrefces define el tipo de datos que usar una sola Clase
export type TodoContextType = {
    todos: ITodo[]; //un array de tipo ITodo
    saveTodo: (todo: ITodo) => void; //no devuelve nada
    updateTodo: (id: number) => void;  //no devuelve nada
};