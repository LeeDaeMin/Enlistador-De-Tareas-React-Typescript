import { type Filtervalue } from '../types'
import { Filters } from './Filters'

interface Props {
  activeCount: number
  completedCount: number
  filterSelect: Filtervalue
  onClearCompleted: () => void
  handleFilterChange: (filter: Filtervalue) => void
}
export const Footer: React.FC<Props> = ({
  activeCount = 0,
  completedCount = 0,
  filterSelect,
  handleFilterChange,
  onClearCompleted
}) => {
  return (
        <footer className="footer">
            <span className="todo-count">
                <strong>{activeCount}</strong> Items
            </span>

            <Filters
                filterSelect={filterSelect}
                onFilterCheck={handleFilterChange}
            />
        </footer>
  )
}
