import React from 'react'
import "./Sidebarrow.css"

function Sidebarrow({selected,title,Icon}) {
    return (
        <div className={`sidebarRow  ${selected && "selected"}`}>
            <Icon className="sidebar__icon"/>
            <h2>{title}</h2>
        </div>
    )
}

export default Sidebarrow
