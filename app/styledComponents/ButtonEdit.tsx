import styled from 'styled-components'

interface ButtonEditProps {
    open?: boolean
}

export const ButtonEdit = styled.div<ButtonEditProps>`
    top: 20px;
    right: 20px;
    z-index: 9999;
    margin: 5px;
    padding:10px;
    background-color: #888;
    color: #fff;
    border-radius: 5px;
    border: none;
    cursor: pointer;
`