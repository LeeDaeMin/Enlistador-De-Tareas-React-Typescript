export const Filters: React.FC<Props> = ({ filterSelect, onFilterCheck }) => {
  return (
        <ul className="filters">
        <li>
            <a
            className={`${filterSelect === 'all' ? 'selected' : ''}`}
            onClick={() => {
              onFilterCheck('all')
            }}
        >
            Todo
            </a>
        </li>
        <li>
            <a
            className={`${filterSelect === 'active' ? 'selected' : ''}`}
            onClick={() => {
              onFilterCheck('active')
            }}
        >
            Active
            </a>
        </li>
        <li>
            <a
            className={`${filterSelect === 'completed' ? 'selected' : ''}`}
            onClick={() => {
              onFilterCheck('completed')
            }}
        >
            Completed
            </a>
        </li>
        </ul>
  )
}
