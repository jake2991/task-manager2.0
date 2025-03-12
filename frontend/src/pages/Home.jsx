import { useEffect, useState } from "react"
import api from '../api'
import Task from '../components/Task'
import '../styles/Home.module.css'

function Home () {
    const [tasks, setTasks] = useState([])
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    useEffect(() => {
        getTasks()
    }, [])

    const getTasks = async () => {
        try {
            const res = await api.get('/api/tasks/')
            setTasks(res.data)
            console.log(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    const addTask = async(e) => {
        e.preventDefault()
        try {
            const res = await api.post('/api/tasks/', {title, content})
            setTasks([...tasks, res.data])
            setTitle('')
            setContent('')
        } catch (error) {
            alert('Something went wrong...')
            console.log(error)
        }
    }

    const handleDelete = async(id) => {
        try {
            await api.delete(`/api/tasks/delete/${id}/`)
            setTasks(tasks.filter(task => task.id !== id))
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
        <div className="wrapper">
            <form onSubmit={addTask} className="form-container">
                <input type="text" className="form-input" value={title} onChange={(e) => setTitle(e.target.value)} />
                <input type="text" className="form-input"  value={content} onChange={(e) => setContent(e.target.value)}/>
                <button className="submit-button" type="submit">
                    Create
                </button>
            </form>
        </div>
        <div>
            {tasks.map((task) => <Task task={task} onDelete={handleDelete} key={task.id} />)}
        </div>
        </>
    )
}

export default Home