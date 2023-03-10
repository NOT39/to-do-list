import { PlusCircle } from 'phosphor-react'
import { useFormContext } from 'react-hook-form'
import { NewTaskFormData } from '../../App'
import { FormContainer } from './styles'

interface NewTaskFormProps {
  handleCreateNewTask: (data: NewTaskFormData) => void
}

export function NewTaskForm({ handleCreateNewTask }: NewTaskFormProps) {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useFormContext<NewTaskFormData>()

  return (
    <FormContainer onSubmit={handleSubmit(handleCreateNewTask)}>
      <input
        type="text"
        required
        placeholder="Adicione uma nova tarefa"
        {...register('title')}
      />
      <button type="submit" disabled={isSubmitting}>
        <span>Criar</span>
        <PlusCircle weight="bold" />
      </button>
    </FormContainer>
  )
}
