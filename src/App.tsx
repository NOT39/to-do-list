import {
  Container,
  ContentContainer,
  Header,
  TasksContainer,
  TasksInfo,
} from './app.styles'

import todoLogo from './assets/todo-logo.svg'
import { useEffect, useState } from 'react'
import { TasksFallback } from './components/TasksFallback'
import { NewTaskForm } from './components/NewTaskForm'
import { Task } from './components/Task'

interface ITask {
  id: string
  title: string
  completed: boolean
}

export function App() {
  const [tasks, setTasks] = useState([] as ITask[])

  useEffect(() => {
    const abortController = new AbortController()

    fetch('https://jsonplaceholder.typicode.com/todos', {
      signal: abortController.signal,
    })
      .then((response) => response.json())
      .then((json) => setTasks(json))

    return () => abortController.abort()
  }, [])

  const completedTasksAmount = tasks.reduce((completedAmount, task) => {
    return task.completed ? completedAmount + 1 : completedAmount
  }, 0)

  function createNewTask(title: string) {
    setTasks((prevTasks) => [
      ...prevTasks,
      {
        title,
        id: String(new Date()),
        completed: false,
      },
    ])
  }

  function deleteTask(id: string) {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id))
  }

  return (
    <Container>
      <Header>
        <img src={todoLogo} alt="" />
      </Header>

      <TasksContainer>
        <NewTaskForm handleCreateNewTask={createNewTask} />

        <TasksInfo>
          <div>
            <strong>Tarefas criadas</strong>
            <span>{tasks.length}</span>
          </div>

          <div>
            <strong>Concluídas</strong>
            <span>
              {completedTasksAmount} de {tasks.length}
            </span>
          </div>
        </TasksInfo>

        <ContentContainer>
          {tasks.length === 0 ? (
            <TasksFallback />
          ) : (
            tasks.map((task) => (
              <Task
                key={task.id}
                id={task.id}
                title={task.title}
                completed={task.completed}
                handleDeleteTask={deleteTask}
              />
            ))
          )}
        </ContentContainer>
      </TasksContainer>
    </Container>
  )
}
