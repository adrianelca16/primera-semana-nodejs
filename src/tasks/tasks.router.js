const router = require('express').Router()
const httpTasks = require('./tasks.http')

router.route('/task')
    .get(httpTasks.getAll)
    .post(httpTasks.create)
router.route('/task/:id')
    .get(httpTasks.getById)
    .delete(httpTasks.deleteById)
    .put(httpTasks.updateById)

module.exports = {
    router
}