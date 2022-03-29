const { response } = require('express');
const User=require('../model/user.model');

exports.signup = (request,response,next)=>{
    
    User.create({
        name:request.body.name,
        email:request.body.email,
        password:request.body.password
    })
    .then((Result)=>{
        console.log(Result);
        return response.status(201).json(Result);
    })
    .catch((err)=>{
        console.log(err);
        return response.status(500).json(err);
    });
};

exports.signin=(request,response)=>{
    User.findOne({
        email:request.body.email,
        password:request.body.password

    })
    .then(result=>{
        console.log(result);
        return response.status(200).json(result);
    })
    .catch(err=>{
        console.log(err);
        return response.status(500).json({
            err:"something went wrong"
        })
    })
}