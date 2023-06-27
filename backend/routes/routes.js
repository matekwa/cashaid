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
        ownerID: req.params.id
    })
    shop.save().then(data => {res.json({status:"ok", data:data})}).catch(error => {res.json(error)});
    } else {
      //Shop name already exists
      return  res.status(409).json({ status: "exists" });
    }
  } catch (error) {
     res.status(500).json({ error: error.message });
  }
});

router.put("/addOutlet", async (req, res) => {
    const ownerID = req.body.ownerID;
    try {
      const outlet = {
        location: req.body.outletLocation,
        outletName: req.body.outletName
      };
  
      await shopModelTemplate.findOneAndUpdate({ ownerID }, { $push: { outlets: outlet } });
  
      res.status(200).json({ status: "ok" });
    } catch (error) {
      res.json({ status: "error", error: error });
    }
  });

  router.get("/fetchOutlets", async (req, res) => {
    const ownerID = req.query.ownerID;
  
    try {
      const data = await shopModelTemplate.find({ ownerID });
      const outlets = data.length > 0 ? data[0].outlets : [];
      res.json({ status: "ok", data: outlets });
    } catch (error) {
      res.json({ status: "error", data: error });
    }
  });

  router.get("/fetchCategories", async (req, res) => {
    const shopID = req.query.ownerID;
  
    try {
      const data = await categoriesModelTemplate.find({ shopID });
      const categories = data.length > 0 ? data : [];
      res.json({ status: "ok", data: categories });
    } catch (error) {
      res.json({ status: "error getting categories", data: error });
    }
  });
  
  

  router.get("/fetchUsers", async (req, res) => {
    const shopID = req.query.shopID;
  
    try {
      const data = await employeesModelTemplate.find({ shopID });
      res.json({ status: "ok", data: data });
    } catch (error) {
      res.json({ status: "error", data: error });
    }
  });
  
router.post("/addEmployee", async (req, res)=> {
    const ownerID = req.body.ownerID;
    const saltedPassword = await bcrypt.genSalt(10);
    const securedPassword = await bcrypt.hash(req.body.password, saltedPassword);
    const employee = new employeesModelTemplate({
        email: req.body.email,
        name: req.body.name,
        outletID: req.body.outletID,
        role: req.body.role,
        outletID: req.body.outletID,
        shopID: ownerID,
        phoneNumber: req.body.phoneNumber,
        password: securedPassword
    })
    employee.save().then((data) => {res.json({status: "ok", data: data})} ).catch((error)=> {res.json({error: "error", data:error})});
    try{
      if(employee.role === "Cashier"){
        await shopModelTemplate.findOneAndUpdate(
          { ownerID: ownerID },
          { $set: { 'outlets.$.cashier': employee.name  } },
          { new: true }
        )
      } else if(employee.role = "Manager"){
        await shopModelTemplate.findOneAndUpdate(
          { ownerID: ownerID },
          { $set: { 'outlets.$.manager': employee.name  } },
          { new: true }
        )
      }
    }
    catch(error){
      return res.json({status:"error updating role", data: error});
    }
});

router.post("/addCategory", async (req, res) => {
  const ownerID = req.body.shopID;
  try {
      const category = new categoriesModelTemplate({
        categoryName: req.body.categoryName,
        shopID: req.body.shopID,
        outletID: req.body.outletID
    })
    category.save().then((data) => {res.json({status: "ok", data: data})} ).catch((error)=> {res.json({error: "error adding category", data:error})});
    await shopModelTemplate.findOneAndUpdate({ ownerID }, { $push: { categories: req.body.categoryName } });
  } catch (error) {
     res.json({ status: "error", error: error.message });
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
      await shopModelTemplate.findOneAndUpdate({ ownerID }, { $push: { suppliers: supplierData } });
      res.json({ status: "ok" });
  } catch (error) {
     res.json({status:"updateSupplierError", error: error.message });
  }
});
module.exports = router;