const express = require('express');

const router = express.Router();



const todos = [
    { id: 1, task: 'Comprar leche', completed: false },
    { id: 2, task: 'Estudiar Express.js', completed: true }
];



router.get('/', (req, res)=>{
    res.json(todos)
})

router.post('/',(req, res)=>{
    const { task } = req.body;

    if (!task || task.trim() === "") {
        return res.status(400).json({ error: 'Task, is a mandatory field' });
    }

    const newTodo = {
        id: todos.length + 1, 
        task: task.task.trim(),
        completed: false 
    };

    todos.push(newTodo);

    res.status(200).json(newTodo)

})


router.put('/:id', (req, res)=>{
    const id = Number(req.params.id);

    const index = todos.findIndexndex(task=>task.id === id);

    if(index === -1){
        return res.status(404).json({error: "task not found"});
        
    }

    const updatedTask = {
        id: todos[index].id,
        task: req.body.task,
        completed: req.body.completed
    };

    todos[index]= updatedTask;

    res.status(200).json('Task Updated Succesfully')
})

router.delete('/:id',(req, res)=>{

    const id = Number(req.params.id);

    const index = todos.findIndex(task=>task.id === id);

    if(index === -1){
        return res.status(404).json({error: "Task Not Found"});
        
    }


    todos.splice(index, 1);

    res.status(200).json('Task deleted Succesfully')
} )

module.exports = router;

