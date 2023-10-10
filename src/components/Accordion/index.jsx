import classNames from 'classnames'
import React, { createContext, useContext, useState } from 'react'
import styled from 'styled-components'

const ContentWrap = styled.div`
    display: block !important;
`

const context = createContext()
export const Accordion = ({ date, title, children, index }) => {

    const { onActive, activeContent } = useContext(context)

    return (
        <div onClick={() => onActive(index)} className={classNames('accordion', {
            'active': (activeContent == index)
        })}>
            <div className="accordion__title">
                {date && <div className="date">Ngày {date}</div>}
                <h3>{title}</h3>
            </div>
            {(activeContent == index) && <ContentWrap className="content" dangerouslySetInnerHTML={{ __html: children }}></ContentWrap>}
        </div>
    )
}

Accordion.group = ({ children }) => {
    const [activeContent, setActiveContent] = useState(-1)

    const onActive = (i) => {
        setActiveContent(i == activeContent ? -1 : i)
    }


    return (
        <context.Provider value={{ activeContent, onActive }}>
            {
                React.Children.map(children, (child, i) => React.cloneElement(child, { index: i }))
            }
        </context.Provider>
    )
}

export function Accordion2({ date, title, children, active, onclick }) {
    return (
        <div onClick={onclick} className={classNames('accordion', {
            'active': active
        })}>
            <div className="accordion__title">
                {date && <div className="date">Ngày {date}</div>}
                <h3>{title}</h3>
            </div>
            {active && <ContentWrap className="content" dangerouslySetInnerHTML={{ __html: children }}></ContentWrap>}
        </div>
    )
}
