
import styled from 'styled-components';

const BoxStyle = styled.div`
    width: 500px;
    height: 500px;
    background-color: ${props => props.background ?? 'red'};
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 50px;
    gap: 20px;

    button{
        font-size: 50px;
        width: 100px;
        height: 100px;
        border: none;
        outline: none;
    }
    `

export default BoxStyle