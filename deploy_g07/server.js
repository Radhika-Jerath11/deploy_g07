const express=require("express");
const app=express();
app.use(express.json());
const {connection}=require("./config/db");
const {router}=require("./Routes/student.routes");
app.use("/",router)
app.listen(8000,async()=>{  
    try{
        await connection;
        console.log("Connected to DB");
    }
    catch(err){
        console.error(err);
    }
})