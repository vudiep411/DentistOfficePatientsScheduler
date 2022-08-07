import Appointment from "../models/Appointment.js";
import Patient from "../models/Patient.js";
import mongoose from "mongoose";

export const getAppointments = async (req, res) => {
    try {
        const appointments = await Appointment.find()
        res.json(appointments)
    } catch (error) {
        console.log(error)
    }
}

export const addAppointment = async (req, res) => {
    const { added } = req.body

    const appInfo = {
        name: added.name,
        id: mongoose.Types.ObjectId(),
        dateOfBirth: added.dateOfBirth,
        phoneNumber: added.phoneNumber,
        allDay: added.allDay,
        startDate: added.startDate,
        endDate: added.endDate, 
        note: added.note,
        title: added.title,
        rRule: added.rRule
    }
    const appointment = new Appointment({
        ...appInfo
    }) 
    try {
        await appointment.save()

        const patient = await Patient.find({name: added.name, dateOfBirth: added.dateOfBirth})

        if(patient.length === 0)
        {
            const appArr = [appInfo]
            const newPatient = new Patient({
                name: added.name,
                dateOfBirth: added.dateOfBirth,
                phoneNumber: added.phoneNumber,
                appointments: appArr
            })
            await newPatient.save()
        }
        else
        {
            patient[0].appointments.push(appInfo)
            await Patient.findByIdAndUpdate(patient[0].id, patient, {new: true})
        }

        res.json(appointment)
    } catch (error) {
        console.log(error)
    }
} 

export const updateAppointment = async (req, res) => {
    try {
        let changed = req.body
        const _id = changed._id

        console.log(changed)
        if(!mongoose.Types.ObjectId.isValid(_id)) 
            return res.status(404).send('No Post with that ID')

        // update appointment db
        const updated = {...changed}
        await Appointment.findByIdAndUpdate(_id, updated, {new: true})

        // update patient db
        const patient = await Patient.findOne({name: changed.name, dateOfBirth: changed.dateOfBirth})
        changed.note += ' (Modified/Reschedule)'
        if(patient) // if patient exists
        {
            patient.appointments.push(changed)
            await Patient.findByIdAndUpdate(patient._id, patient, {new: true})
        }
        else
        {
            const arrApp = [{...changed}]
            const newPatient = new Patient({
                name: changed.name,
                dateOfBirth: changed.dateOfBirth,
                phoneNumber: changed.phoneNumber,
                appointments: arrApp
            })
            await newPatient.save()
        }
        
        res.json(updated)
    } catch (error) {
        console.log(error)
    }
}

export const deleteAppointment = async (req, res) => {
    try {
        const { data } = req.body
        await Appointment.deleteOne({id: data})
        res.json({message: 'Deleted'})
    } catch (error) {
        console.log(error)
    }
}