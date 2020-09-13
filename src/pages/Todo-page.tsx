import React, {useEffect, useState} from 'react'
import {TodoForm} from '../components/Todo-form'
import {TodoList} from '../components/Todo-list'
import { Itodo } from '../interfaces'

declare var confirm: (question: string) => boolean

export const TodoPage: React.FC = () => {
  const [todo, setTodo] = useState<Itodo[]>([])

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('todos') || '[]') as Itodo[]
    setTodo(saved)
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todo))
  }, [todo])

  const addHandler = (title: string) => {
    const newTodo: Itodo = {
      title: title,
      id: Date.now(),
      completed: false,
    }
    setTodo((prev) => [newTodo, ...prev])
  }

  const toggleHandler = (id: number) => {
    setTodo((prev) =>
      prev.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
    )
  }

  const removeHandler = (id: number) => {
    const shouldRemove = confirm('Are you sure?')
    if (shouldRemove) {
      setTodo((prev) => prev.filter((todo) => todo.id !== id))
    }
  }
  return (
    <>
      <TodoForm onAdd={addHandler} />
      <TodoList
        todo={todo}
        onRemove={removeHandler}
        onToggle={toggleHandler}
      />
    </>
  )
}
