const express = require('express');
const bcrypt = require('bcrypt');
const TeamMember = require('../models/teamMember');


function list(req,res,next){
  TeamMember.find().then(objs => res.status(200).json({
        message: "ok",
        obj:objs
    })).catch(ex => res.status(500).json({
        message: "error",
        obj:ex
    }))
}

function index(req,res,next){
    TeamMember.findOne({"_id":id}).then(objs => res.status(200).json({
        message: "ok",
        obj:objs
    })).catch(ex => res.status(500).json({
        message: "error",
        obj:ex
    }))
}

async function create(req, res, next) {
    
    let name = req.body.name;
    let lastName = req.body.lastName;
    let email = req.body.email;
    let password = req.body.password;
    let curp = req.body.curp;
    let rfc = req.body.rfc;
    let skills = req.body.skills;
    let rol = req.body.rol;

    //Generar el salt con las iteraciones para generar la cadena
    const salt = await bcrypt.genSalt(10);

    const passwordHash = await bcrypt.hash(password, salt);

    let teamMember = new TeamMember({
        name: name,
        lastName: lastName,
        email: email,
        password: passwordHash,
        salt: salt,
        curp: curp,
        rfc:rfc,
        skills:skills,
        rol:rol
    });

    console.log(teamMember);
    
    teamMember.save().then(objs => res.status(200).json({
        message: "ok",
        obj:objs
    })).catch(ex => res.status(500).json({
        message: "error",
        obj:ex
    }));
}


async function update(req, res, next) {
    try{
        const userId = req.params.id;
        const {currerntPassword, newPassword} = req.body;
        const user = await TeamMember.findById(userId);
        if(!user){
            return res.status(400).json({
                message:"error"
            });
        }
        const isMatch = await bcrypt.compare(currerntPassword,user.password);
        if(!isMatch){
            return res.status(400).json({
                message:"error"
            })

        }
        const salt = await bcrypt.genSalt(10);
        const newPasswordHash = await bcrypt.hash(newPassword,salt);
        await TeamMember.updateOne({"_id":userId},{password:newPasswordHash,salt:salt})
        res.status(200).json({
            message: "ok"
        })
    }catch( err ){
        res.status(500).json({
            message: "error",
            ex:err
        });
    }
}

async function destroy(req, res, next) {
    try {
        const userId = req.params.id;
        const result = await TeamMember.deleteOne({_id: userId});
        if (result.deletedCount === 1) {
            res.status(200).json({
                message: "ok"
            });
        } else {
            res.status(404).json({
                message: "error"
            });
        }
    } catch (error) {
        res.status(500).json({
            message: "error",
            obj: error
        });
    }
    
}

module.exports = { 
    create,
    update,
    destroy,
    list,
    index
};