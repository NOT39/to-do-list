import { useEffect, useState } from 'react'
import z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'

import {
  Container,
  ContentContainer,
  Header,
  TasksContainer,
  TasksInfo,
} from './app.styles'

import todoLogo from './assets/todo-logo.svg'
import { TasksFallback } from './components/TasksFallback'
import { NewTaskForm } from './components/NewTaskForm'
import { Task } from './components/Task'

const newTaskFormSchema = z.object({
  title: z.string().min(1),
})

export type NewTaskFormData = z.infer<typeof newTaskFormSchema>

interface ITask {
  id: string
  title: string
  completed: boolean
}

export function App() {
  const [tasks, setTasks] = useState([] as ITask[])

  const completedTasksAmount = tasks.reduce((completedAmount, task) => {
    return task.completed ? completedAmount + 1 : completedAmount
  }, 0)

  useEffect(() => {
    const abortController = new AbortController()

    fetch('https://jsonplaceholder.typicode.com/todos/', {
      signal: abortController.signal,
    })
      .then((response) => response.json())
      .then((json) => setTasks(json))

    return () => abortController.abort()
  }, [])

  function createNewTask(data: NewTaskFormData) {
    setTasks((prevTasks) => [
      {
        title: data.title,
        id: String(new Date()),
        completed: false,
      },
      ...prevTasks,
    ])

    reset()
  }

  function deleteTask(id: string) {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id))
  }

  function switchCompleteTask(id: string) {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    )
  }

  const newTaskForm = useForm<NewTaskFormData>({
    resolver: zodResolver(newTaskFormSchema),
    defaultValues: {
      title: '',
    },
  })

  const { reset } = newTaskForm

  return (
    <Container>
      <Header>
        <img src={todoLogo} alt="" />
      </Header>

      <TasksContainer>
        <FormProvider {...newTaskForm}>
          <NewTaskForm handleCreateNewTask={createNewTask} />
        </FormProvider>

        <TasksInfo>
          <div>
            <strong>Tarefas criadas</strong>
            <span>{tasks.length}</span>
          </div>

          <div>
            <strong>Conclu??das</strong>
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
                deleteTask={deleteTask}
                switchCompleteTask={switchCompleteTask}
              />
            ))
          )}
        </ContentContainer>
      </TasksContainer>
    </Container>
  )
}
