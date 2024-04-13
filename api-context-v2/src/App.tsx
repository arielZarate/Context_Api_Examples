// App.tsx

import TodoProvider from './context/TodoContext'
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'
import './App.css'

export default function App() {
  return (
    <TodoProvider>
      <main className='App'>
        <h1 className='font-bold text-gray-700 text-center ' > Todos App con Api context</h1>
        <AddTodo />
        <Todos />
      </main>
    </TodoProvider>
  )
}

