import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const Header = styled.header`
  height: 200px;
  flex-grow: 1;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${(props) => props.theme['gray-700']};
`

export const TasksContainer = styled.div`
  margin: auto;
  width: 100%;
  max-width: 46rem;
`

export const ContentContainer = styled.main`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

export const TasksInfo = styled.div`
  display: flex;
  justify-content: space-between;

  margin: 1.5rem 0;

  div:first-of-type > strong {
    color: ${(props) => props.theme.blue};
  }

  div:last-of-type > strong {
    color: ${(props) => props.theme.purple};
  }

  > div {
    display: flex;
    align-items: center;

    gap: 0.5rem;
    font-weight: bold;

    > span {
      display: flex;
      justify-content: center;
      align-items: center;
      color: ${(props) => props.theme['gray-200']};

      background-color: ${(props) => props.theme['gray-400']};
      border-radius: 9999px;

      padding: 0.125rem 0.5rem;
    }
  }
`
