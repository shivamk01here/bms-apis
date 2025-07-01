const userService = require('../services/user.service');

const savName = async(req, res) =>{
    const {name} = req.body;
    const result = await userService.savName(name);
    res.json({success : true, 'message' : 'name saved successfully'});
}