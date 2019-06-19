module.exports = app => {
    let employeeController = require('./controllers/EmployeeController');

    app.route('/employees')
        .get(employeeController.getAll)
        .post(employeeController.store);

    app.route('/employees/:id')
        .get(employeeController.getById)
        .put(employeeController.updateById)
        .delete(employeeController.deleteById);
};