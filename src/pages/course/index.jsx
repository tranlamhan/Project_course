import React from 'react'
import ListCourse from '../../components/ListCourse'
import { useScrollTop } from '../../hooks/useScrollTop'

function Course() {
    // useScrollTop()
    return (
        <main className="homepage" id="main">
            <ListCourse/>
        </main>
    )
}

export default Course