const mongoose= require('mongoose');

const connectDb=()=>{
    mongoose.connect("mongodb+srv://abhi:abhi@cluster1.p6lnqsp.mongodb.net/fileflow")
    .then(()=>console.log("Connected to database"))
    .catch((err)=>console.log("something went wrong",err));
}
module.exports = connectDb;