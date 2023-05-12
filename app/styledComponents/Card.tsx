import styled from 'styled-components'

interface CardProps {
  center?: boolean;
  between?: boolean;
}


export const Card = styled.div<CardProps>`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  padding: 20px;
  width: 90%;
  max-width: 400px;
  margin: 0 auto;
  text-align: left;
  ${props => props.center && `
    display: flex;
    justify-content: center;
  `}
  
`
