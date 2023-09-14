const express=require("express")
const mongoose=require('mongoose')
const cors=require("cors")
const EmployeeModel=require('./models/Employee')
const PORT=3001;

const app=express();
app.use(express.json())
app.use(cors())
require('./db/conn');

// mongoose.connect("mongodb://127.0.0.1:27017/employee");

// app.post('/register',(req,res)=>{
//     EmployeeModel.create(req.body)
//     .then(employees=>res.json(employees))
//     .catch(err=>res.json(err));
// })

app.post("/login",(req,res)=>{
    const {email,password}=req.body;
    EmployeeModel.findOne({email:email})
    .then(user=>{
        if(user){
        if(user.password===password){
            res.json("Success")
        }else{
            res.json("the password is incorrect")
        }
    }else{
        res.json("No record exist");
    }
    })
})
app.post('/register', async (req, res) => {
    try {
        const employee = await EmployeeModel.create(req.body);
        res.status(201).json(employee); // Return the created employee
        console.log(employee)
    } catch (error) {
        console.error('Error creating employee:', error);
        res.status(500).json({ error: 'Failed to create employee' });
    }
});
app.get('/',(req,res)=>{
    // res.cookie("jwqwerty","ritik");
    res.send("hello contact world world");   
    console.log("hello")
  })

  app.listen(PORT,()=>{
    console.log(`server is running ${PORT} `);
})