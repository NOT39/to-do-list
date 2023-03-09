import { Trash, Check } from 'phosphor-react'

import {
  CheckboxContainer,
  CheckboxIndicator,
  IndicatorContainer,
  TaskContainer,
  TrashContainer,
} from './styles'

interface ITaskProps {
  id: string
  title: string
  completed: boolean

  handleDeleteTask: (id: string) => void
}

export function Task({ id, title, completed, handleDeleteTask }: ITaskProps) {
  return (
    <TaskContainer>
      <CheckboxContainer checked={completed}>
        <IndicatorContainer>
          <CheckboxIndicator asChild>
            <Check weight="bold" />
          </CheckboxIndicator>
        </IndicatorContainer>
      </CheckboxContainer>

      <p>{title}</p>

      <TrashContainer>
        <Trash />
      </TrashContainer>
    </TaskContainer>
  )
}
