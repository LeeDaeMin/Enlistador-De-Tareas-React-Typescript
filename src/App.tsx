import { useState } from 'react'
import { Todos } from './components/Todos'
import { type TodoId, type Todo as TodoType } from './types'

const mockTodos = [
  {
    id: '1',
    title: 'Todo 1',
    completed: true
  },
  {
    id: '2',
    title: 'Todo 2',
    completed: false
  },
  {
    id: '3',
    title: 'Todo 3',
    completed: false
  }
]

const App = (): JSX.Element => {
  const [todos, setTodo] = useState(mockTodos)

  const handleRemove = ({ id }: TodoId): void => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodo(newTodos)
  }

  const handleComplete = ({ id, completed }: Pick<TodoType, 'id' |
  'completed'>): void => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed
        }
      }
      return todo
    })
    setTodo(newTodos)
  }

  return (
    <div className='todoapp'>
      <Todos
        onToggleCompleteTodo = {handleComplete}
        onRemoveTodo = {handleRemove}
        todos = {todos} />
    </div>
  )
}

export default App
