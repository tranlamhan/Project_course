import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { ToDoListStyle, ToDoItemStyle } from './style'

const ToDoItem = ({id, name, isCompleted , changeStatus, removeItem }) => {
    return (
        <ToDoItemStyle className={isCompleted && 'completed'}>
            <div className="name">{name}</div>
            <div className="buttonGroup">
                <button onClick={() => {removeItem(id)}}>remove item</button>
                <button onClick={() => {changeStatus(id)}}>{isCompleted ? '❌' : '✓'}</button>
            </div>
        </ToDoItemStyle>
    )
}

export default function ToDoList({ listJob, onAdd, clearTask, changeStatus, removeItem }) {
    const listDoing = listJob.filter(ele => !ele.isCompleted)
    const listDone = listJob.filter(ele => ele.isCompleted)
    const [value, setValue] = useState('')

    const _clickAdd = () => {
        onAdd(value.trim())
        setValue('')
    }

    const _onEnter = (ev) => {
        if (ev.key === "Enter") {
            ev.preventDefault();
            _clickAdd()
        }
    }



    return (
        <ToDoListStyle>
            <div className='input-group'>
                <input onKeyUp={_onEnter} value={value} onChange={(ev) => setValue(ev.target.value)} type="text" placeholder='Công việc...' />
                <button disabled={!value.trim()} onClick={_clickAdd} >Thêm</button>
            </div>
            <div className="list-board">
                <div className="board">
                    <div className="title">Doing</div>
                    <div className="items">
                        {
                            listDoing.map(ele => <ToDoItem {...ele} key={ele.id} removeItem={removeItem} changeStatus={changeStatus} />)
                        }
                    </div>
                </div>
                <div className="board">
                    <div className="title">Done</div>
                    <div className="items">
                        {
                            listDone.map(ele => <ToDoItem {...ele} key={ele.id} removeItem={removeItem} changeStatus={changeStatus} />)
                        }
                    </div>
                </div>
            </div>
            <div className="clearTask" onClick={clearTask}>Clear all your task</div>
        </ToDoListStyle>
    )
}
