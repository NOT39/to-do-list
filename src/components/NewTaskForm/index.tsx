import z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { PlusCircle } from 'phosphor-react'
import { FormContainer } from './styles'

const newTaskFormSchema = z.object({
  description: z.string().min(1),
})

interface NewTaskFormProps {
  handleCreateNewTask: (description: string) => void
}

export function NewTaskForm({ handleCreateNewTask }: NewTaskFormProps) {
  const {
    control,
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(newTaskFormSchema),
  })

  return (
    <FormContainer>
      <input type="text" required placeholder="Adicione uma nova tarefa" />
      <button type="submit" disabled={isSubmitting}>
        <span>Criar</span>
        <PlusCircle weight="bold" />
      </button>
    </FormContainer>
  )
}
