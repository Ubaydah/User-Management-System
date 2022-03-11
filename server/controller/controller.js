const Userdb = require('../model/model');

//create and save a new user
exports.create = (req, res)=>{
    //validate request
    if(!req.body){
        res.status(400).send({message:"Cotent cannot be empty."});
        return;
    }
    //new user
    const user = new Userdb({
        name: req.body.name,
        email: req.body.email,
        gender: req.body.gender,
        status: req.body.status
    });
    //save user
    user
        .save(user)
        .then(data=>{
            res.send(data);
        })
        .catch(err=>{
            res.status(500).send({message:err.message || "Some error occured during create"})
        })

};

//retrieve and return all users/ retreive and return a single user
exports.find = (req, res)=>{
    Userdb.find()
    .then(user=>{
        res.send(user)
    })
    .catch(err=>{
        res.status(500).send({message:err.message||"Error occured while getting data"})
    })
}

//update a new user using the user id
exports.update = (req,res)=>{

};

//delete a user with specified user id
exports.delete = (req,res)=>{

};