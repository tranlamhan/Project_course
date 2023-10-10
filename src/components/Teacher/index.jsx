import React from 'react'

export const Teacher = ({avatar,title,position,description,website}) => {
    return (
        <div className="teacher">
            <div className="avatar">
                <img src={avatar} alt="" />
            </div>
            <div className="info">
                <div className="name">{title}</div>
                <div className="title">{position}</div>
                <p className="intro" dangerouslySetInnerHTML={{ __html: description }}></p>
                {
                    website && <p><strong>Website:</strong> <a href={website}>{website}</a></p>
                }

            </div>
        </div>
    )
}
