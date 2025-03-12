import React, { useState } from "react";

function Task({ task, onDelete, onUpdate }) {
    const formattedDate = new Date(task.created_at).toLocaleDateString('en-us');
    const [isEditing, setIsEditing] = useState(false);
    const [title, setTitle] = useState(task.title);
    const [content, setContent] = useState(task.content);

    const handleUpdate = () => {
        onUpdate(task.id, { title, content });
        setIsEditing(false);
    };

    return (
        <div 
            className="flex flex-col p-4 text-center
            border border-gray-300 rounded-lg shadow-md items-center"
        >
            {isEditing ? (
                <div>
                    <input 
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}  
                    />
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />
                    <button
                        onClick={handleUpdate}
                    >
                        Submit changes
                    </button>
                </div>
            ) : (
                <div>
                    <p className="font-semibold text-lg mb-2">{task.title}</p>
                    <p className="text-gray-700 mb-4">{task.content}</p>
                    <p className="text-sm text-gray-500 mb-4">{formattedDate}</p>
                    <button
                        className="py-2 px-4 w-20 
                        bg-red-500 text-white rounded hover:bg-red-900 
                        transition duration-300 cursor-pointer"
                        onClick={() => onDelete(task.id)}
                    >
                        Delete
                    </button>
                    <button 
                        className="py-2 px-4 w-20 
                        bg-yellow-200 text-white rounded hover:bg-yellow-600 
                        transition duration-300 cursor-pointer"
                        onClick={() => setIsEditing(true)}
                    >
                        Update
                    </button>
                </div>
            )}
        </div>
    );
}

export default Task;
