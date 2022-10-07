import m from "mithril"
import TasksView from "./components/TasksView"

m.route(document.body, "/", {
    "/": {
        render: () => {
            return m(TasksView)
        }
    },
    "/test": {
        render: () => {
            return m('h1', "Awesome! Internal routing works!")
        }
    },
})