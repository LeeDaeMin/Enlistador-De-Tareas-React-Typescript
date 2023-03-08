import { useState } from 'react'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Todos } from './components/Todos'
import { TODO_FILTERS } from './const'
import { type TodoId, type Todo as TodoType, type Filtervalue, type TodoTittle } from './types'

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
  },
  {
    id: '4',
    tittle: 'Todo 4',
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

  const handleRemoveAllCompleted = (): void => {
    const newTodos = todos.filter(todo => !todo.completed)
    setTodo(newTodos)
  }

  const handleAddTodo = ({ title }: TodoTittle): void => {
    const newTodo = {
      title,
      id: crypto.randomUUID(),
      completed: false
    }
    const newTodos = [...todos, newTodo]
    setTodo(newTodos)
  }

  return (
    <div className='todoapp'>
      <Header onAddTodo={handleAddTodo} />
      <Todos
        onToggleCompleteTodo = {handleComplete}
        onRemoveTodo = {handleRemove}
        todos = {filteredTodos} />
        <Footer
          activeCount={activeCount}
          completedCount={completedCount}
          filterSelect = {filterSelect}
          onClearCompleted = {handleRemoveAllCompleted}
          handleFilterChange = {handleFilterChange}
        />
    </div>
  )
}

export default App
