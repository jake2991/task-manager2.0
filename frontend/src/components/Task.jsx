import React from "react"

function Task({task, onDelete}) {
    const formattedDate = new Date(task.created_at).toLocaleDateString('en-us')

    return (
        <div className="task-container">
            <p className="task-title">{task.title}</p>
            <p className="task-content">{task.content}</p>
            <p className="task-date">created on:{formattedDate}</p>
            <button className="delete-button" onClick={() => onDelete(task.id)}>
                Delete
            </button>
            <button className="update-button" >
                Update
            </button>
        </div>
    )
}

export default Task