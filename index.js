import m from "mithril"
import TasksView from "./components/TasksView"

m.route(document.body, "/", {
    "/": {
        render: () => {
            return m(TasksView)
        }
    }
})