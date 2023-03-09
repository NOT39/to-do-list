import styled from 'styled-components'

export const FallbackContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  align-items: center;
  align-content: center;

  padding: 4rem 0;

  border-top: 1px solid ${(props) => props.theme['gray-400']};
  border-radius: 8px;
`

export const FallbackText = styled.span`
  text-align: center;

  > strong {
    font-weight: bold;
  }
`
