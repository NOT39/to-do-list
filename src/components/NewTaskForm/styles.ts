import styled from 'styled-components'

export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  gap: 0.5rem;

  transform: translateY(-50%);

  input {
    flex-grow: 1;
    background-color: ${(props) => props.theme['gray-500']};

    border: 1px solid ${(props) => props.theme['gray-700']};
    border-radius: 8px;
    padding: 1rem;

    color: ${(props) => props.theme['gray-100']};

    ::placeholder {
      color: ${(props) => props.theme['gray-300']};
    }

    :focus {
      border: 1px solid ${(props) => props.theme.purple};
    }
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    color: ${(props) => props.theme['gray-100']};
    font-weight: bold;

    padding: 1rem;
    background-color: ${(props) => props.theme['blue-dark']};

    border-radius: 8px;
    border: 1px solid ${(props) => props.theme['blue-dark']};

    cursor: pointer;

    > svg {
      height: 1rem;
      width: 1rem;
    }

    :hover {
      background-color: ${(props) => props.theme.blue};
      border: 1px solid ${(props) => props.theme.blue};
    }
  }
`
