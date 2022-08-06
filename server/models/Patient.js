import mongoose from "mongoose";

const PatientSchema = new mongoose.Schema({
    name: {type: String, required: true},
    dateOfBirth: {type: String, required: true},
    phoneNumber: String,
    appointments :[
    {type: {
        name: String,
        dateOfBirth: String,
        phoneNumber: String,
        allDay: Boolean,
        startDate: {type: String, required: true},
        endDate: {type: String, required: true}, 
        note: String,
        title: String,
        rRule: String  
    }, default: []}
]
})

const Patient = mongoose.model('Patient', PatientSchema)

export default Patient