import React from 'react'
import { createPortal } from 'react-dom'

export const Modal = ({ maskCloseable, visible, onCancel, children }) => {
    if (!visible) {
        return null
    }

    const onMaskClick = () => {
        if(maskCloseable) onCancel?.()
    }

    return (
        createPortal(
            <div className="popup-video" onClick={onMaskClick}>
                <div className="wrap">
                    {children}
                </div>
                <div className="close" onClick={onCancel} />
            </div>,
            document.body
        )
    )
}
