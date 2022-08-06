import Patient from "../models/Patient.js";
import mongoose from "mongoose";

export const getPatients = async (req, res) => { 
    try {
        const patients = await Patient.find()
        res.json(patients)
    } catch (error) {
        console.log(error)
    }
}

export const getPatient = async (req, res) => {
    try {
        const { id } = req.params
        const patient = await Patient.findById(id)
        res.json(patient)
    } catch (error) {
        console.log(error)
    }
}

export const deletePatient = async (req, res) => {
    try {
        const { id }  = req.params
        await Patient.findByIdAndDelete(id)
        res.json({message: 'deleted'})
    } catch (error) {
        console.log(error)
    }
}

export const updatePatient = async (req, res) => {
    try {
        const { id } = req.params
        const newPatient = req.body

        if(!mongoose.Types.ObjectId.isValid(id)) 
            return res.status(404).send('No Patient with that ID')

        const updated = {...newPatient, _id: id}
        await Patient.findByIdAndUpdate(id, updated, {new: true})
        res.json(updated)
    } catch (error) {
        console.log(error)
    }
}