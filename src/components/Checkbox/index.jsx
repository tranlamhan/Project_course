import React from 'react'

export const Checkbox = ({children,onChange}) => {
    const _onChange = (ev) => {
        // console.log(ev.target.checked);
        onChange({target : {value : ev.target.checked}})
    }
    return (
        <div className="checkcontainer">
            {children}
            <input type="checkbox" onChange={_onChange} />
            <span className="checkmark"  />
        </div>
    )
}
