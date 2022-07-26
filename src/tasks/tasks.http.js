const { getAllTasks, getAllTasksById, createNewTasks, deleteTask, updateTasks} = require('./tasks.controllers')

const getAll = (req, res) => {
    const data = getAllTasks()
    res.status(200).json(data)
}
const getById = (req, res) => {
    const id = Number(req.params.id)
    if(id){
        const data = getAllTasksById(id)
        if(data.id){
            res.status(200).json(data)
        }else{
            res.status(400).json({message: 'Invalid Id'})
        }
    }else{
        res.status(400).json({message: 'Id is not a number'})
    }
}
const create = (req, res) => {
    const tasksObj = req.body
    if(tasksObj){
        const data = createNewTasks(tasksObj)
        res.status(200).json(data)
    }else{
        res.status(400).json({message: 'Data invalid'})
    }
}
const deleteById = (req, res) => {
    const id = Number(req.params.id)
    if(id){
        const data = deleteTask(id)
        res.status(200).json(data)
    }else{
        res.status(400).json({message: 'Id invalid'})
    }
}
const updateById = (req,res) => {
    const id = Number(req.params.id)
    const tasksObj = req.body
    if(id){
        if((tasksObj.name || tasksObj.description) || (tasksObj.completed === null || tasksObj === undefined || tasksObj.completed === "")){
            res.status(400).json({message: 'Data invalid'})
        }else{
            if(tasksObj.completed === true || tasksObj.completed === false){
                const data = updateTasks(tasksObj,id)
                res.status(200).json(data)
            }
        }
    }else{
        res.status(400).json({message: 'Id invalid'})
    }
}

module.exports = {
    getAll,
    getById,
    create,
    deleteById,
    updateById
}