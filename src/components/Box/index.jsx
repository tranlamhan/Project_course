// import styled from "./style.module.css"
import styled from "styled-components"

function Box(props){
    const BoxStyle = styled.div`
        width: 500px;
        height: 500px;
        display: flex;
        align-items: center;
        justify-content: center;

        .button{
            font-size: 50px;
        }
    `
    return(
        <BoxStyle style={{
            backgroundColor: props.backgroundColor,
            fontSize: props.fontSize || 50,
        }}>
            Box
            <button className="button">This is button</button>
        </BoxStyle>
    )
}

export default Box