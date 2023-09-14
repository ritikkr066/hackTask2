const mongoose=require('mongoose');
// const DB=process.env.DATABASE;

mongoose.connect("mongodb://127.0.0.1:27017/employee",{
    useNewUrlParser:true ,
   
    useUnifiedTopology:true,
   
}).then(()=>{
    console.log("conn successfull")
}).catch((e)=>{
    console.log(e);
})