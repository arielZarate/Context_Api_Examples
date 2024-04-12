# Context API en React

La Context API es una característica de React que proporciona una forma de pasar datos a través del árbol de componentes sin tener que pasar props manualmente en cada nivel de padre a hijo , nietos y asi (se vuelve engorroso). Permite compartir datos que son considerados "globales" para un árbol de componentes en particular, permitiendo que cualquier componente pueda acceser al arbol en cualquier momento y obtener los datos generales .

### ejemplo sin context

![sin context api](/api-context%20v.1/public/c1.png)

####

### ejemplo con context

![sin context api](/api-context%20v.1/public/c2.png)

## ¿Cómo funciona?

1. **Creación de un contexto**: Primero, creamos un contexto utilizando la función `createContext()` de React. Este contexto servirá como el contenedor para los datos que queremos compartir entre componentes.

2. **Proveedor de contexto**: Utilizamos un componente `<Context.Provider>` para envolver el árbol de componentes que necesitan acceder a los datos del contexto. Este proveedor acepta un prop `value`, que es el valor que queremos proporcionar a los componentes descendientes.

3. **Consumidor de contexto**: Los componentes que necesitan acceder a los datos del contexto utilizan la función `useContext()` o el componente `<Context.Consumer>` para acceder a los datos proporcionados por el proveedor de contexto.

## ¿Cuándo usarlo?

La Context API es útil cuando tienes datos que son necesarios en múltiples componentes anidados. Algunos casos de uso comunes incluyen:

- Tema de la aplicación (modo oscuro / modo claro).
- Autenticación del usuario.
- Configuración global.
- Traducciones de idiomas.

Sin embargo, hay que tener en cuenta que Context API no es la solución adecuada para todos los casos. Si tus datos solo se necesitan en componentes específicos o si tus componentes se vuelven demasiado acoplados, es posible que sea mejor pasar los datos a través de props o utilizar otro estado de gestión como Redux que usa la estructura del store, actions , reducer , thunks . todo depende si se usa redux viejo o toolkit.
ver redux pagina oficial `"https://redux.js.org/"`

## Ejemplo

Supongamos que tenemos una aplicación de lista de tareas donde queremos compartir el estado de la lista de tareas entre varios componentes.

```jsx
import React, { createContext, useState, useContext } from "react";

// 1. Creación de un contexto
const TaskContext = createContext();

// 2. Proveedor de contexto
function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([]);

  return (
    <TaskContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TaskContext.Provider>
  );
}

// 3. Consumidor de contexto
function TaskList() {
  const { tasks } = useContext(TaskContext);

  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
}

function AddTask() {
  const { tasks, setTasks } = useContext(TaskContext);
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    setTasks([...tasks, newTask]);
    setNewTask("");
  };

  return (
    <div>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
}

function App() {
  return (
    <TaskProvider>
      <div>
        <h1>Task Manager</h1>
        <AddTask />
        <TaskList />
      </div>
    </TaskProvider>
  );
}

export default App;
```

## Fuente de informacion original

- `https://react.dev/reference/react/createContext`
