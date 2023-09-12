const express = require("express");
const Person = require("../model/personModel");
const router = express.Router();

router.post("/api", async (req, res) => {
    
    try {
        const queryName = req.query.name;
        const { name } = req.body;
        let newPerson;
        if (queryName) {
            newPerson = await Person.create({
                name: queryName,
            });
        }else {
            newPerson = await Person.create({
                name
            });
        }

        res.status(201).json({
            status: "success",
            newPerson
        });

    } catch(error){
        console.error(error);
        res.status(400).json({
            status: "error",
            message: "An error occured while creating a new person."
        });
    }

});

router.get("/api/:user_id", async (req, res) => {
    
    try{
        const queryName = req.query.name;
        const userId = req.params.user_id;
        let user;

        if(queryName) {
            user = await Person.findOne({ name: queryName });
        } else {
            user = await Person.findById(userId);
        }

        if (!user) {
            res.status(404).json({
                status: "error",
                message: "User not found"
            });
        } else {
            res.json(user);
        }
        
    }catch(error){
        res.status(400).json({ error: 'Invalid ID or database error' });
    }
});

router.patch("/api/:user_id", async (req, res) => {
    try{
        const userId = req.params.user_id;
        const queryName = req.query.name;
        const name = req.body;
        let updatedPerson;
        if(queryName) {
            updatedPerson = await Person.findOneAndUpdate({ name: queryName }, name, {
                new: true,
            });
        }else {
            updatedPerson = await Person.findByIdAndUpdate(userId, name, {
                new: true,
            });
        }


        if (!updatedPerson) {
            res.status(404).json({ error: "User not found!" });
        }else {
            res.json(updatedPerson);
        }
    }catch(error){
        res.status(400).json({ error: "Invalid data, ID, or database error" });
    } 
});

router.delete("/api/:user_id", async (req, res) => {
    try{
        const userId = req.params.user_id;
        const queryName = req.query.name;
        let deletedPerson;
        if (queryName) {
            deletedPerson = await Person.findOneAndRemove({ name: queryName });
        } else {
            deletedPerson = await Person.findByIdAndRemove(userId);
        }
        if(!deletedPerson) {
            res.status(404).json({ error: "User not found" })
        }else {
            res.status(204).send();
        }

    }catch(error){
        res.status(400).json({ error: "Invalid ID or database error" });
    }
});

module.exports = router;