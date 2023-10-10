import React from 'react'
import { createPortal } from 'react-dom'

export const VideoModal = ({ maskCloseable, visible, onCancel }) => {

    const onMaskClick = () => {
        if(maskCloseable) onCancel?.()
    }

    if (!visible) {
        return null
    }


    return (
        createPortal(
            <div className="popup-video" onClick={onMaskClick}>
                <div className="wrap">
                    <iframe width="800" height="450" src="https://www.youtube.com/embed/FfAAEJvYIvc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
                <div className="close" onClick={onCancel} />
            </div>,
            document.body
        )
    )
}
