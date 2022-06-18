import m from 'mithril'
import Data from './Data'
    
var TasksView = {
    oninit: () => {
        Data.getTasks()
    },
    view: function(vnode) {
        return [
            m(".p-6", [
                m(".title-bar", [
                    m("p.title", "SimpleTODO"),
                    m(".buttons.ml-auto", [
                        m("button.button.is-responsive.is-danger.is-outlined", { onclick: () => Data.removeAll() }, [
                            m("i.fas.fa-trash.mr-2"),
                            "Delete All"
                        ]),
                        m("button.button.is-responsive.is-warning", { onclick: () => Data.removeCompleted() }, [
                            m("i.fas.fa-filter.mr-2"),
                            "Delete Completed"
                        ]),
                        m("button.button.is-responsive.is-success", { onclick: () => Data.addTask() }, m("span.icon.is-small", m("i.fas.fa-plus"))),
                    ])
                ]),
                Data.tasks.length == 0 && m("p.title.headline", "👍🏻 All done!"),
                m(".tasks", [
                    Data.tasks.map((task, index) => {
                        return m(".task", [
                            m("input.toggle.mr-3", { checked: task.complete, oninput: () => Data.toggleComplete(index), type: "checkbox" }),
                            m("p.mb-0", { id: `task-${index}`, contenteditable: "true", oninput: () => Data.updateName(index, $(`#task-${index}`).html()) }, m.trust(task.name)),
                            m("button.button.is-danger.ml-auto", { onclick: () => Data.removeTask(index) }, m("span.icon.is-small", m("i.fas.fa-trash")))
                        ])
                    })
                ])
            ]),
        ]
    },
    oncreate: () => {
        var list = document.querySelector(".tasks")
        var sortable = Sortable.create(list, {
            animation: 150,
            ghostClass: "none",
            sort: true
        })
    }
}
    
export default TasksView