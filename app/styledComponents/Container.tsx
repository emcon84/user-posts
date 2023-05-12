import styled from 'styled-components'

interface ContainerProps {
  blue?: boolean;
  hScreen?: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => (props.blue ? '#AED6F1' : '')};
  height: ${(props) => (props.hScreen ? '100vh' : '')};
`