const express = require('express');
const router = express.Router();
const signUpTemplateCopy = require('../models/signupModels.js');
const cashTransactionTemplate = require('../models/cashTransactionModel.js');
const mpesaTransactionTemplate = require('../models/mpesaModel.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const JWT_SECRET = 'Ra./"hmsjhmj2@92mm9290()jk82.290/o2F9%Y68][]jkh&mk';

router.post("/signup", async (req, res)=> {
    const saltedPassword = await bcrypt.genSalt(10);
    const securedPassword = await bcrypt.hash(req.body.password, saltedPassword);

    const signedupUser = new signUpTemplateCopy({
        email: req.body.email,
        username: req.body.username,
        password: securedPassword
    })
    signedupUser.save().then(data => {res.json(data)}).catch(error => {res.json(error)});
});

router.post("/login", async (req, res)=> {
    const { email, password } = req.body;

    const user = await signUpTemplateCopy.findOne({email});
    if(!user){
        return res.json('No account with that email found');
    }
    if(await bcrypt.compare(password, user.password)){
        const token = jwt.sign({email:user.email}, JWT_SECRET);

        if(res.status(201)){
            return res.json({status: "ok", data: token});
        } else{
            return res.json({error: "error"});
        }
    } else{
        return res.json({status: "error", error: "Invalid password"});
    }
});

router.post("/emailverification", async (req, res)=> {
    const { email } = req.body;

    const user = await signUpTemplateCopy.findOne({email});
    if(!user){
        return res.json('No account with that email found');
    }
     else{
        return res.json({status: "ok", data: 'User Found'});
    }
});


router.post('/details', async (req, res) => {
  const { token } = req.body;
  try {
    const user = jwt.verify(token, JWT_SECRET);
    const userEmail = user.email;
    const data = await signUpTemplateCopy.findOne({ email: userEmail });
    res.json({ status: 'ok', data: data });
  } catch (error) {
    res.json({ status: 'error', error: error });
  }
});

router.post("/transaction_analytics", async (req, res)=>{
    const { business_id } = req.body;
    try{
         await mpesaTransactionTemplate.find({business_id}).then((data)=>{res.json({status: "ok", data: data})}).catch((error)=>{res.json({status: "error", data: error})});
    }
    catch(error){
        return res.json({status: "Something went wrong", error: error});
    }
});

module.exports = router;