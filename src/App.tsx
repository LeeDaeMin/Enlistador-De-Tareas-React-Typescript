import { useState } from 'react'
import { Footer } from './components/Footer'
import { Todos } from './components/Todos'
import { TODO_FILTERS } from './const'
import { type TodoId, type Todo as TodoType, type Filtervalue } from './types'

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
  const [filterSelect, SetFilterSelect] = useState<Filtervalue>(TODO_FILTERS.ALL)

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

  const handleFilterChange = (filter: Filtervalue): void => {
    SetFilterSelect(filter)
  }

  const activeCount = todos.filter(todo => !todo.completed).length
  const completedCount = todos.length - activeCount

  const filteredTodos = todos.filter(todo => {
    if (filterSelect === TODO_FILTERS.ACTIVE) return !todo.completed
    if (filterSelect === TODO_FILTERS.COMPLETED) return todo.completed
    return todo
  })

  return (
    <div className='todoapp'>
      <Todos
        onToggleCompleteTodo = {handleComplete}
        onRemoveTodo = {handleRemove}
        todos = {filteredTodos} />
        <Footer
          activeCount={activeCount}
          completedCount={completedCount}
          filterSelect = {filterSelect}
          onClearCompleted = {() => {}}
          handleFilterChange = {handleFilterChange}
        />
    </div>
  )
}

export default App
