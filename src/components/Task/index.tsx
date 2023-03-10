import * as AlertDialog from '@radix-ui/react-alert-dialog'

import { Trash, Check } from 'phosphor-react'

import {
  CheckboxContainer,
  CheckboxIndicator,
  IndicatorContainer,
  TaskContainer,
  TaskTitleContainer,
  TrashModalOverlay,
  TrashDialogTrigger,
  TrashModalContent,
  TrashModalCancelButton,
  TrashModalConfirmButton,
  TrashModalTitle,
  TrashModalDescription,
} from './styles'

interface ITaskProps {
  id: string
  title: string
  completed: boolean

  switchCompleteTask: (id: string) => void
  deleteTask: (id: string) => void
}

export function Task({
  id,
  title,
  completed,
  switchCompleteTask,
  deleteTask,
}: ITaskProps) {
  function handleSwitchCompleteTask() {
    switchCompleteTask(id)
  }

  function handleDeleteTask() {
    deleteTask(id)
  }

  return (
    <TaskContainer>
      <CheckboxContainer checked={completed} onClick={handleSwitchCompleteTask}>
        <IndicatorContainer>
          <CheckboxIndicator asChild>
            <Check weight="bold" />
          </CheckboxIndicator>
        </IndicatorContainer>
      </CheckboxContainer>

      <TaskTitleContainer completed={completed}>{title}</TaskTitleContainer>

      <AlertDialog.Root>
        <TrashDialogTrigger>
          <Trash />
        </TrashDialogTrigger>
        <AlertDialog.Portal>
          <TrashModalOverlay />

          <TrashModalContent>
            <TrashModalTitle>
              Você tem certeza que deseja deletar essa tarefa?
            </TrashModalTitle>
            <TrashModalDescription>
              Essa ação não pode ser desfeita. Isto irá deletar permanentemente
              a tarefa selecionada.
            </TrashModalDescription>
            <div>
              <TrashModalCancelButton>Cancelar</TrashModalCancelButton>

              <TrashModalConfirmButton onClick={handleDeleteTask}>
                Sim, deletar a tarefa
              </TrashModalConfirmButton>
            </div>
          </TrashModalContent>
        </AlertDialog.Portal>
      </AlertDialog.Root>
    </TaskContainer>
  )
}
