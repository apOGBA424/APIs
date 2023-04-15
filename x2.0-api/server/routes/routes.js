const express = require('express');
const UserModel = require('../models/models.js');

const router = express.Router();


// ******************* perform CRUD operation *******************
// CREATE: posting data to database
router.post('/post', (req, res) => {
    const user = new UserModel({
        name: req.body.name,
        age: req.body.age
    })

    try {
        user.save();
        res.status(201).json(user)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})

// READ: get all data from the database
router.get('/getAll', async(req, res)=>{
    try {
        const data = await UserModel.find();
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json({msg:error.message});
    }
});

// READ: get a data base on ID
router.get('/getOne/:id', async(req, res)=>{
    try {
        const data = await UserModel.findById(req.params.id);
        res.json(data);
    } catch (error) {
        res.status(500).json({msg:error.message});
    }
});

// UPDATE: edit a document use ID as target
router.patch('/update/:id', async (req, res)=>{
    try {
        const user_id = req.params.id;
        const edited_data = req.body;
        const options = {new: true};

    const result = await UserModel.findByIdAndUpdate(
        user_id, edited_data, options
    );
        res.status(202).json(result);
        
    } catch (error) {
        res.status(400).json({msg: error.message});
    }

});

// DELETE: remove a document base on an ID
router.delete('/delete/:id', async (req, res)=>{
    try {
        const id = req.params.id;
        const data = await UserModel.findByIdAndDelete(id)
        res.send(`Document with ${data.name} has been deleted..`)
    } catch (err) {
        res.status(400).json({msg:err.message})
    }
});


module.exports = {router};
