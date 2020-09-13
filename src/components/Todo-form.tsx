import React, { useState, useRef } from 'react'

interface TodoFormProps {
  onAdd(title: string): void
}

export const TodoForm: React.FC<TodoFormProps> = (props) => {
  // const [title, setTitle] = useState<string>('')
  const ref = useRef<HTMLInputElement>(null)
  // const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setTitle(event.target.value)
  // }

  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      props.onAdd(ref.current!.value)
      ref.current!.value = ''
      // setTitle('')
    }
  }

  return (
    <div className="input-field mt2">
      <input
        id="title"
        type="text"
        ref={ref}
        // value={title}
        // onChange={changeHandler}
        onKeyPress={keyPressHandler}
        placeholder="Enter text"
      />
      <label htmlFor="title" className="active">
        Entern text
      </label>
    </div>
  )
}
