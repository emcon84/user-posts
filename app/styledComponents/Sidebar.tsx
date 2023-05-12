import styled from 'styled-components'

interface SidebarProps {
    open?: boolean
}

export const Sidebar = styled.div<SidebarProps>`
    position: fixed;
    top: 0;
    right: -300px;
    width: 300px;
    height: 100%;
    padding: 20px;
    background-color: #fff;
    transition: transform 0.3s ease-in-out;
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
    transform: ${(props) => (props.open ? 'translateX(-300px)' : '')};
`