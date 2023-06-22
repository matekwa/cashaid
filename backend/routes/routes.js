const express = require('express');
const router = express.Router();
const signUpTemplateCopy = require('../models/signupModels.js');
const cashTransactionTemplate = require('../models/cashTransactionModel.js');
const mpesaTransactionTemplate = require('../models/mpesaModel.js');
const creditCardTransactionTemplate = require('../models/creditCardModel.js');
const shopModelTemplate = require('../models/shopModel.js');
const employeesModelTemplate = require('../models/employeesModel.js');
const categoriesModelTemplate = require('../models/categoriesModel.js');
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
        return res.json('No account with that email was found');
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
  const { token } = req.body; //Obtain token from request body
  try {
    const user = jwt.verify(token, JWT_SECRET); //Authenticate the token with JWT_SECRET - If valid then returns an object with email value
    const email = user.email;
    await signUpTemplateCopy.findOne({ email }).then((data)=>{res.json({status:"ok", data:data})}).catch((error)=> {res.json({status:"error", error: error})});
  } catch (error) {
    res.json({ status: 'error', error: error });
  }
});

router.post("/fetchMpesaTrans", async (req, res)=>{
    const { business_id } = req.body;
    try{
         await mpesaTransactionTemplate.find({business_id}).then((data)=>{res.json({status: "ok", data: data})}).catch((error)=>{res.json({status: "error", data: error})});
    }
    catch(error){
        return res.json({status: "Something went wrong", error: error});
    }
});
router.post("/fetchCreditCardTrans", async (req, res)=>{
    const { business_id } = req.body;
    try{
         await creditCardTransactionTemplate.find({business_id}).then((data)=>{res.json({status: "ok", data: data})}).catch((error)=>{res.json({status: "error", data: error})});
    }
    catch(error){
        return res.json({status: "Something went wrong", error: error});
    }
});
router.post("/fetchCashTrans", async (req, res)=>{
    const { business_id } = req.body;
    try{
         await cashTransactionTemplate.find({business_id}).then((data)=>{res.json({status: "ok", data: data})}).catch((error)=>{res.json({status: "error", data: error})});
    }
    catch(error){
        return res.json({status: "Something went wrong", error: error});
    }
});
router.post("/addShopName/:id", async (req, res) => {
  try {
    const name = req.body.businessName;
    const nameExists = await shopModelTemplate.findOne({ name });
    if (!nameExists) {
      //Shop name doesn't exist
      const shop = new shopModelTemplate({
        name,
        ownerID: req.params
    })
    shop.save().then(data => {res.json(data)}).catch(error => {res.json(error)});
    } else {
      //Name already exists
      return  res.status(409).json({ status: "exists" });
    }
  } catch (error) {
     res.status(500).json({ error: error.message });
  }
});

router.post("/addOutlet", async (req, res) => {
      const  ownerID = req.body.ownerID;
  try {
      const outlet = {
          location: req.body.OutletLocation,
          name: req.body.outletName
    }
      await shopModelTemplate.findByIdAndUpdate({ownerID}, outlet);
  } catch (error) {
     res.status(500).json({ error: error.message });
  }
});

router.post("/fetchOutlets", async (req, res)=>{
    const ownerID = req.body.ownerID;
    try{
         await shopModelTemplate.find({ownerID}).then((data)=>{res.json({status: "ok", data: data})}).catch((error)=>{res.json({status: "error", data: error})});
    }
    catch(error){
        return res.json({status: "Something went wrong", error: error});
    }
});

router.post("/addEmployee", async (req, res)=> {
    const saltedPassword = await bcrypt.genSalt(10);
    const securedPassword = await bcrypt.hash(req.body.password, saltedPassword);
    const employee = new employeesModelTemplate({
        email: req.body.email,
        name: req.body.name,
        outletID: req.body.outletID,
        role: req.body.role,
        outletID: req.body.outletID,
        password: securedPassword
    })
    employee.save().then((data) => {res.json({status: "ok", data: data})} ).catch((error)=> {res.json({error: "error", data:error})});
    //Update shops collection with _id: 'outleID' - Cashier or Manager
});

router.post("/addCategory", async (req, res) => {
  try {
      const categoryName = req.body.categoryName;
      const ownerID = req.body.ownerID;
      
      const category = new categoriesModelTemplate({
        categoryName: req.body.categoryName,
        ownerID: req.body.ownerID
    })
    employee.save().then((data) => {res.json({status: "ok", data: data})} ).catch((error)=> {res.json({error: "error", data:error})});

    //Update shops collection to add category
  } catch (error) {
     res.status(500).json({ error: error.message });
  }
});

router.put("/addSupplier", async (req, res) => {
  const ownerID = req.body.ownerID;
  try {
      const supplierData = {
          firstName: req.body.firstName,
          secondName: req.body.secondName,
          email: req.body.email,
          address: req.body.address,
          town: req.body.town,
          phoneNumber: req.body.phoneNumber,
          businessName: req.body.businessName
      } 
      
      //update shopModelTemplate where ownerID, suppliers
    
  } catch (error) {
     res.status(500).json({ error: error.message });
  }
});
module.exports = router;