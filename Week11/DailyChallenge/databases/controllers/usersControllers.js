import { createNewUser, userLogIn, getAll, specificUser, updateUser } from "../models/UManagmentModels.js";
import bcrypt from 'bcrypt'

export async function uLogIn(req, res){
    const {username, plainPwd} = req.body;

     try{   
        const result = await userLogIn(username);

        
            if (result.rows.length === 0){
                return false
            }
        
            const currentUser = result.rows[0];
        
            const response =  await bcrypt.compare(plainPwd, currentUser.passwordhash)
        
            if (response) {
                return res.status(200).json({ 
                    success: true, 
                    message: "Success.." 
                });
            } else {
                return res.status(401).json({ 
                    success: false, 
                    message: "Incorrect Password" 
                });}
    }
    catch(error){
        console.error(error);
        res.status(500).json({ success: false, message: "Error connecting to the database" })
    }
}

export async function newUser(req, res){
    const {email, username, fName, lName, plainPwd} = req.body;
    try {
        const result = await createNewUser(email, username, fName, lName, plainPwd);
        res.status(200).json({ 
                    success: true, 
                    message: "Success.." 
                })

    } catch (error) {
        console.error(error);
        res.status(500).json({success: false, message: "Error connecting to the database" })
    }
}

export async function allUsers(req, res){
    try {
        const result = await getAll();
        res.status(200).json({success: true, 
                    message: "Success.." ,
                    data: result.rows})
    } catch (error) {
        console.error(error);
        res.status(500).json({success: false, message: "Error"})
    } 
}

export async function getUser(req, res){
    const { id }= req.params;
    try {
        const result = await specificUser(id);

        if (result.rows.length === 0){
            res.status(404).json({message: 'user not found'})
        }else{
        res.status(200).json({success: true, 
                    message: "Success.." })
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({success: false, message: "Error"})
    }
}

export async function putUser(req, res){
    const { id }= req.params;
    const { email, username } = req.body;

    if(!email || !username){
        res.status(400).json({success: false, message: "Id and Username required"})
    }

    try {
        const result = await updateUser(id, email, username);
        if (result.rows.length === 0){
            res.status(404).json({message: 'user not found'})
        }
        else{
            res.status(200).json({success: true, 
                    message: "Success.." })
        }
        
    } catch (error) {
        console.error(error);
        res.status(500).json({success: false, message: "Error"})
    }
}