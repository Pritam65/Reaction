import './App.css';
import {useState} from "react";
import {Task} from "./Task";

function App() {
    const [todolist, setTodoList] = useState([]);
    const [newtask, setNewTask] = useState("");

    const addTask = () => {
        const task = {
            id:todolist.length === 0 ? 1 : todolist[todolist.length - 1].id + 1,
            task: newtask,
        };
        setTodoList([...todolist, task]);
    }

    const handelChange = (event) => {
        setNewTask(event.target.value);
    }

    const deleteTask = (id) => {
        setTodoList(todolist.filter((task) => task.id !== id))
    }

    return (
        <div className="App">
            <div className={"addtask"}>
                <input  placeholder={"Enter task"} onChange={handelChange}/>
                <button onClick={addTask}>
                    Add
                </button>
            </div>
            <div className={"taskList"}>
                {todolist.map((task, index) => {
                    return (
                       <Task task={task.task} id={task.id} deleteTask={deleteTask}/>
                    )
                })}
            </div>
        </div>
    )
};

export default App;
