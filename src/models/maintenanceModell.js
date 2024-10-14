import {Schema, model} from "mongoose";

const maintenanceModel = Schema({
    workshop:{type:Schema.Types.ObjectId,
        ref: "Worksop",
        required:true},
    vehicle:{
        type:Schema.Types.ObjectId,
        ref: "Vehicle",
        required:true
    },
    services:[{
        name:{type:String}, 
        price:{type:Number}
    }],
    date:{type: String, required:true},
    totalCost:{type: Number, required:true}
})

export default model("Maintenance", maintenanceModel)