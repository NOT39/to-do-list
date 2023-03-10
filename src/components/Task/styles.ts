import styled from 'styled-components'
import { rgba } from 'polished'

import * as Checkbox from '@radix-ui/react-checkbox'
import * as AlertDialog from '@radix-ui/react-alert-dialog'

export const TaskContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;

  background-color: ${(props) => props.theme['gray-500']};
  border: 1px solid ${(props) => props.theme['gray-400']};
  border-radius: 8px;

  padding: 1rem;
`

export const CheckboxContainer = styled(Checkbox.Root)`
  flex-shrink: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 1.5rem;
  height: 1.5rem;
  line-height: 0;

  background-color: transparent;
  border: none;

  cursor: pointer;
`

export const IndicatorContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 1.125rem;
  width: 1.125rem;

  border-radius: 9999px;
  border: 2px solid ${(props) => props.theme.blue};

  ${CheckboxContainer}:hover > & {
    background-color: ${(props) => rgba(props.theme['blue-dark'], 0.2)};
    border-color: ${(props) => props.theme['blue-dark']};
  }

  ${CheckboxContainer}[data-state='checked'] & {
    background-color: ${(props) => props.theme['purple-dark']};
    border-color: ${(props) => props.theme['purple-dark']};
    color: white;

    :hover {
      background-color: ${(props) => props.theme.purple};
      border: ${(props) => props.theme.purple};
    }
  }
`

export const CheckboxIndicator = styled(Checkbox.Indicator)`
  all: unset;
  width: 0.75rem;
  height: 0.75rem;
`

interface TaskTitleContainerProps {
  completed: boolean
}

export const TaskTitleContainer = styled.p<TaskTitleContainerProps>`
  overflow: hidden;
  flex-grow: 1;

  font-size: 0.875rem;
  color: ${(props) =>
    props.completed ? props.theme['gray-300'] : props.theme['gray-100']};
  text-decoration: ${(props) => (props.completed ? 'line-through' : 'none')};
`

export const TrashDialogTrigger = styled(AlertDialog.Trigger)`
  flex-shrink: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  height: 1.5rem;
  width: 1.5rem;
  line-height: 0;

  border: transparent;
  border-radius: 4px;

  background-color: transparent;

  cursor: pointer;

  > svg {
    color: ${(props) => props.theme['gray-300']};
    height: 1rem;
    width: 1rem;
  }

  :hover {
    background-color: ${(props) => props.theme['gray-400']};

    > svg {
      color: ${(props) => props.theme.danger};
    }
  }
`

export const TrashModalOverlay = styled(AlertDialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.75);
`

export const TrashModalContent = styled(AlertDialog.Content)`
  border-radius: 8px;
  width: 100%;
  max-width: 46rem;
  padding: 2.5rem 3rem;
  background-color: ${(props) => props.theme['gray-400']};

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  > div {
    margin-top: 2rem;
    margin-left: auto;
    width: fit-content;
    display: flex;
    gap: 0.5rem;
  }
`

export const TrashModalTitle = styled(AlertDialog.Title)`
  font-weight: bold;
  color: ${(props) => props.theme['gray-100']};
`

export const TrashModalDescription = styled(AlertDialog.Description)`
  margin-top: 1rem;
  color: ${(props) => props.theme['gray-300']};
`

export const TrashModalCancelButton = styled(AlertDialog.Cancel)`
  background-color: ${(props) => props.theme['blue-dark']};
  color: ${(props) => props.theme['gray-100']};

  padding: 1rem;
  border-radius: 8px;
  border: none;

  cursor: pointer;
`

export const TrashModalConfirmButton = styled(AlertDialog.Action)`
  background-color: ${(props) => props.theme.danger};
  color: ${(props) => props.theme['gray-100']};

  padding: 1rem;
  border-radius: 8px;
  border: none;

  cursor: pointer;
`
