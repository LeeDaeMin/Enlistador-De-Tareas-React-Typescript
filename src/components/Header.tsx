import { type TodoTittle } from '../types'
import { CreateTodo } from './CreateTodo'

interface Props {
  onAddTodo: ({ title }: TodoTittle) => void
}

export const Header: React.FC<Props> = ({ onAddTodo }) => {
  return (
        <header className="header">
            <h1>todos<img
                style={{ width: '60px', height: 'auto' }}
                src="https://cdn-icons-png.flaticon.com/512/5042/5042956.png"/>
            </h1>
            <CreateTodo saveTodo={onAddTodo} />
        </header>
  )
}
