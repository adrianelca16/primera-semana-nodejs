const tasksBD = [
    {
        id: 1,
        name: 'learn python',
        description: 'learn python in the fourth module',
        completed: false
    },
    {
        id: 2,
        name: 'learn react',
        description: 'learn react in the second module',
        completed: true
    }
]

const getAllTasks = ()=>{
    return tasksBD
}
const getAllTasksById = (id)=>{
    const filtereBD = tasksBD.filter((item) => item.id === id)
    
    return filtereBD[0]
}
const createNewTasks = (tasksObj)=>{
    if(tasksBD.length === 0){
        const newTask = {
            id: 1,
            name: tasksObj.name,
            description: tasksObj.description,
            completed: tasksObj.completed
        }
        tasksBD.push(newTask)
        return newTask
    }else{
        const newTask = {
            id: tasksBD[tasksBD.length - 1].id + 1,
            name: tasksObj.name,
            description: tasksObj.description,
            completed: tasksObj.completed
        }
        tasksBD.push(newTask)
        return newTask
    }

}
const deleteTask = (id)=>{
    const index = tasksBD.findIndex(item => item.id === id)
    if(index !== -1 ){
        tasksBD.splice(index, 1)
        return tasksBD
    }

}
const updateTasks = (tasksObj, id)=>{
    const index = tasksBD.findIndex(item => item.id === id)
    if(index !== -1){
        tasksBD[index] = {
            id: id,
            name: tasksBD[index].name,
            description: tasksBD[index].description,
            completed: tasksObj.completed
        }
        return tasksBD[index]
    } else{
        createNewTasks(tasksObj)
    }
}

module.exports = {
    getAllTasks,
    getAllTasksById,
    createNewTasks,
    deleteTask,
    updateTasks
}