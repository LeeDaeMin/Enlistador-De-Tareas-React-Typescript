import { useState } from 'react'
import { Todos } from './components/Todos'

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
  const [todos] = useState(mockTodos)

  return (
    <div className='todoapp'>
      <Todos todos = {todos} />
    </div>
  )
}

export default App
