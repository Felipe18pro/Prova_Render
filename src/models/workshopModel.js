import {Schema, model} from "mongoose";

const workshopModel = Schema({
   nome:{
      type:String, 
      required:true},
   adress:{
      type:String, 
      required:true},
   specialities:{
      type:String, 
      enum:['motor','freio','suspensão'], 
      required:true}
})

export default model("Workshop", workshopModel)