import React from 'react'
import { Itodo } from '../interfaces'

type TodoListProps = {
  todo: Itodo[]
  onToggle(id: number): void
  onRemove(id: number): void
}

export const TodoList: React.FC<TodoListProps> = ({
  todo,
  onToggle,
  onRemove,
}) => {
  const removeHandler = (event: React.MouseEvent, id: number) => {
    event.preventDefault()
    onRemove(id)
  }

  if (!todo.length) {
    return <p>Nothing to do yet ...</p>
  }
  return (
    <ul>
      {todo.map((item) => {
        const classes = ['todo']
        if (item.completed) {
          classes.push('completed')
        }

        return (
          <li className={classes.join(' ')} key={item.id}>
            <label>
              <input
                type="checkbox"
                checked={item.completed}
                onChange={() => onToggle(item.id)}
              />
              <span>{item.title}</span>
              <i
                className="material-icons red-text"
                onClick={(event) => removeHandler(event, item.id)}
              >
                delete
              </i>
            </label>
          </li>
        )
      })}
    </ul>
  )
}
