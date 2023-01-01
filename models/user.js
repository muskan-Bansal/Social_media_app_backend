 import mongoose from 'mongoose';

 const UserSchema=mongoose.Schema({
  name:{type:String,required:true},
  email:{type:String,required:true},
  password:{type:String,required:true},
  id:{type:String },
 })

 const user=mongoose.model("user",UserSchema);
 export default user;