import { ClipboardText } from 'phosphor-react'
import { FallbackContainer, FallbackText } from './styles'

export function TasksFallback() {
  return (
    <FallbackContainer>
      <ClipboardText size={56} />

      <FallbackText>
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <div>Crie tarefas e organize seus itens a fazer</div>
      </FallbackText>
    </FallbackContainer>
  )
}
