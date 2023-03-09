import styled from 'styled-components'
import { rgba } from 'polished'

import * as Checkbox from '@radix-ui/react-checkbox'

export const TaskContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;

  background-color: ${(props) => props.theme['gray-500']};
  border: 1px solid ${(props) => props.theme['gray-400']};
  border-radius: 8px;

  padding: 1rem;

  > p {
    font-size: 0.875rem;
    flex-grow: 1;
  }
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
  }

  ${CheckboxContainer}[data-state='checked']:hover & {
    background-color: ${(props) => props.theme.purple};
    border: ${(props) => props.theme.purple};
  }
`

export const CheckboxIndicator = styled(Checkbox.Indicator)`
  all: unset;
  width: 0.75rem;
  height: 0.75rem;
`

export const TrashContainer = styled.div`
  flex-shrink: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  height: 1.5rem;
  width: 1.5rem;
  line-height: 0;
  border-radius: 4px;

  cursor: pointer;

  > svg {
    height: 0.875rem;
    width: 0.875rem;
  }

  :hover {
    background-color: ${(props) => props.theme['gray-400']};

    > svg {
      color: ${(props) => props.theme.danger};
    }
  }
`
