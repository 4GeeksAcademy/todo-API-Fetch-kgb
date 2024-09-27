
import React, { useState, useEffect } from "react";
import { fetchToDos, addToDo , deleteToDo, deleteUser} from "../update-API";

function ToDoList() {
	const [tasks, setTasks] = useState([]);
	const [input, setInput] = useState("");
	const [isTearing, setIsTearing] = useState(false);

	useEffect(() => {
		fetchToDos(setTasks);
	}, [])

	const addTask = () => {
		 addToDo(input.trim(), setTasks)
		setInput("")
	};




	const deleteTask = (index) => {
		const toDoID = tasks[index].id;
		 deleteToDo(toDoID, setTasks);
	};

	const deleteAllTasks = () => {
		setIsTearing(true);
		setTimeout(() => {
			setTasks([]);
			setIsTearing(false);
		}, 800);
		deleteUser();
	};



	return (
		<div className="ToDoList" style={{ position: "relative" }}>
			{" "}
			<h2>To-Do List</h2>
			<input
				type="text"
				value={input}
				onChange={(e) => setInput(e.target.value)}
				onKeyDown={(e) => e.key === "Enter" && addTask()}
			/>
			<button onClick={addTask}>Add Task</button>
			<button onClick={deleteAllTasks}>Delete All Tasks</button>
			<ul>
				{tasks.map((task, index) => (
					<li
						key={task.id}
						className={` ${isTearing ? "tearingAway" : ""
							}`}
						style={{
							textDecoration: "none"
						}}
					>
						{task.label}
						<button onClick={() => deleteTask(index)}>Delete</button>
					</li>
				))}
			</ul>
			<div className="counter">
				Total Tasks: {tasks.length}
			</div>
		</div>
	);
}

export default ToDoList;