export const fetchToDos = (setTasks) => {
    fetch("https://playground.4geeks.com/todo/users/KharisKGB")
        .then((response) => {
            console.log("response from API;", response)
            if (!response.ok) {
                throw new Error("failed to fetch toDoList", response.status)
            }
            return response.json();
        })
        .then((data) => {
            console.log("respone jsonified", data)
            if (data && Array.isArray(data.todos)) {
                setTasks(data.todos);
            } else {
                setTasks([]);
            }

        })
        .catch((error) => {
            console.error("Theres been a problem with your fetch operation", error);
             addUser();
        });
}
export const addToDo = (newToDo, setTasks) => {
    fetch("https://playground.4geeks.com/todo/todos/KharisKGB", {
        method: "POST",
        body: JSON.stringify({
            label: newToDo,
            is_done: false
        }),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then((response) => {
            console.log("response from API;", response)
            if (!response.ok) {
                throw new Error("failed to fetch toDoList", response.status)
            }
            return response.json();
        })
        .then((data) => {
            console.log("respone jsonified", data)
            fetchToDos(setTasks);

        })
        .catch((error) => {
            console.error("Theres been a problem with your fetch operation", error);
            addUser();
        });

}
export const deleteToDo = (toDoID, setTasks) => {
    fetch(`https://playground.4geeks.com/todo/todos/${toDoID}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then((response) => {
            console.log("response from API;", response)
            if (!response.ok) {
                throw new Error("failed to fetch toDoList", response.status)
            }
            fetchToDos(setTasks);
            // return response.json();
        })
        
        .catch((error) => {
            console.error("Theres been a problem with your fetch operation", error);
        });
}
export const deleteUser = (setTasks) => {
    fetch("https://playground.4geeks.com/todo/users/KharisKGB" , {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then((response) => {
            console.log("response from API;", response)
            if (!response.ok) {
                throw new Error("failed to fetch toDoList", response.status)
            }
            alert("User and ToDo's have been successfully deleted from the API.");
            // return response.json();
        })
        
        .catch((error) => {
            console.error("Theres been a problem with your fetch operation", error);
        });
}
export const addUser = () => {
    fetch("https://playground.4geeks.com/todo/users/KharisKGB" , {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify([])
    })
        .then((response) => {
            console.log("response from API;", response)
            if (!response.ok) {
                throw new Error("failed to fetch toDoList", response.status)
            }
            alert("User has been successfully created, you may save tasks to API.");
            // return response.json();
        })
        
        .catch((error) => {
            console.error("Theres been a problem with your fetch operation", error);
        });
}