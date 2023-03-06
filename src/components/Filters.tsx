import { FILTERS_BUTTONS } from '../const'
import { type Filtervalue } from '../types'

interface Props {
  onFilterCheck: (filter: Filtervalue) => void
  filterSelect: Filtervalue
}

export const Filters: React.FC<Props> = ({ filterSelect, onFilterCheck }) => {
  return (
        <ul className="filters">
            {
                Object.entries(FILTERS_BUTTONS).map(([key, { href, literal }]) => {
                  const isSelect = key === filterSelect
                  const className = isSelect ? 'selected' : ''
                  return (
                      <li key={key}>
                        <a
                          href={href}
                          className={className}
                          onClick={(event) => {
                            event.preventDefault()
                            onFilterCheck(key as Filtervalue)
                          }}
                        >
                          {literal}
                        </a>
                    </li>
                  )
                })
            }
        </ul>
  )
}
