

const Users = require('../models/Users') 

class UserControler{
    async create(req, res){
        const verifyUser = await Users.findOne({
            where: {
                email: req.body.email,
            },
        });

        if(verifyUser){
            return res.status(400).json({message: 'User already exists'})
        }

        if(!user){
            return res.status(400).json({message: 'Failed to create a user!'})
        }
        
        const user = await Users.create(req.body)
        return res.send({ message: 'User created' })
          
    }
}


module.exports = new UserControler()