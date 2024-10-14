import {Schema, model} from "mongoose";

const vehicleModel = Schema({
    plate:{
        type: String, 
        required:true
    },
    model:{
        type: String, 
        required:true
    },
    year:{
        type: String, 
        required: true
    },
    owner:{
        type:String, 
        required:true
    },
    maintenances:[{
        type:Schema.Types.ObjectId,
        ref: "Maintenances",
        required:true
    }]
})

export default  model("Vehicle", vehicleModel);

