import styled from "styled-components";

export const ToDoListStyle = styled.div`
    background-color: #fff;
    margin-top: 100px;

    .input-group{
        display: flex;
    
        input{
            padding: 10px;
            outline: none;
            flex: 1;
            border: solid 1px #ccc;
        }
    
        button{
            background-color: #ccc;
            cursor: pointer;
    
            &:disabled{
                cursor: no-drop;
            }
        }
    }

    .list-board{
        display: flex;
        gap: 20px;
        background-color: #fff;

        .board{
            flex: 1;

            .title{
                font-size: 30px;
                font-weight: bold;
                background-color: #fff;
                padding: 20px 0;
            }
        }
    }

    .clearTask{
        width: fit-content;
        padding: 10px 20px;
        background-color: #ccc;
        cursor: pointer;
        margin: 50px auto 0;

        &:hover{
            background-color: green;
        }
    }
`

export const ToDoItemStyle = styled.div`
    display: flex;
    background-color: #fff;
    border: 1px solid #ccc;
    padding: 10px 5px;
    
    .name{
        flex: 1;
    }

    button{
        background-color: #fff;
        padding: 10px;

        &:hover{
            background-color: #ccc;
            cursor: pointer;
        }
    }

    &.completed{
        background-color: #eee;
        
        .name{
            text-decoration: line-through;
        }
    }
`