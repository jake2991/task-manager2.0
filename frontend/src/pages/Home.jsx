import { useEffect, useState } from 'react';
import api from '../api';
import Task from '../components/Task';
import NavBar from '../components/NavBar';
import NewTaskForm from '../components/NewTaskForm';

function Home() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        getTasks();
    }, []);

    const getTasks = async () => {
        try {
            const res = await api.get('/api/tasks/');
            setTasks(res.data);
            console.log(res.data);
        } catch (error) {
            console.log(error);
        }
    };

    const addTask = async ({ title, content }) => {
        try {
            const res = await api.post('/api/tasks/', { title, content });
            setTasks([...tasks, res.data]);
        } catch (error) {
            alert('Something went wrong...');
            console.log(error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await api.delete(`/api/tasks/delete/${id}/`);
            setTasks(tasks.filter(task => task.id !== id));
        } catch (error) {
            console.log(error);
        }
    };

    const handleUpdate = async (id, updatedTask) => {
        try {
            const res = await api.put(`/api/tasks/update/${id}/`, updatedTask);
            setTasks(tasks.map(task => (task.id === id ? res.data : task)));
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <div>
                <NavBar/>
            </div>
            <NewTaskForm onSubmit={addTask} />
            <div className="max-w-lg mx-auto p-4 bg-white shadow-md rounded-md">
                {tasks.map((task) => (
                    <Task
                        key={task.id}
                        task={task}
                        onDelete={handleDelete}
                        onUpdate={handleUpdate}
                    />
                ))}
            </div>
        </>
    );
}

export default Home;
