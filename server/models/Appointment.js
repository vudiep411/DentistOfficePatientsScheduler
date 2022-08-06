import mongoose from "mongoose";

const AppointmentSchema = mongoose.Schema({
    name: String,
    id: String,
    dateOfBirth: String,
    phoneNumber: String,
    allDay: Boolean,
    startDate: {type: String, required: true},
    endDate: {type: String, required: true}, 
    note: String,
    title: String,
    rRule: String  
})

const Appointment = mongoose.model('Appointment', AppointmentSchema)

export default Appointment