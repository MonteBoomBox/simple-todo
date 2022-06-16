var Data = {
    tasks: [],

    toggleComplete: (index) => {
        Data.tasks[index].complete = !Data.tasks[index].complete
        Data.setTasks()
    },

    updateName: (index, value) => {
        Data.tasks[index].name = value
        Data.setTasks()
    },

    addTask: () => {
        Data.tasks.push({
            name: "New Task",
            complete: false
        })
        Data.setTasks()
    },

    removeTask: (index) => {
        Data.tasks.splice(index, 1)
        Data.setTasks()
    },

    removeCompleted: () => {
        Data.tasks = Data.tasks.filter((task) => !task.complete)
        Data.setTasks()
    },

    removeAll: () => {
        Data.tasks = []
        Data.setTasks()
    },

    setTasks: () => {
        localStorage.setItem("tasks", JSON.stringify(Data.tasks))
    },

    getTasks: () => {
        var tasks = JSON.parse(localStorage.getItem("tasks"))
        if (!tasks) {
            Data.tasks = []
        } else {
            Data.tasks = tasks
        }
    }
}

export default Data