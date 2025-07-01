const express = require('express');

const router = express.Router();

router.get('/', (req, res) =>{
    res.json({success : true, 'message' : "maa ki aankh"});
})

router.post('/save-name', validateSaveName, userController.saveName);