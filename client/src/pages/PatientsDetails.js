import { Divider, Typography } from '@mui/material'
import { Container } from '@mui/system'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getPatient } from '../actions/patients'
import Navbar from '../Components/Navbar/Navbar'
import moment from 'moment'

const PatientsDetails = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const patient = useSelector(state => state.patients[0])

    useEffect(() => {
        dispatch(getPatient(id))
    }, [])

    if(!patient) return null
    const appointments = patient.appointments
    if(!appointments) return null
    //console.log(appointments)

  return (
    <div>
        <Navbar/>
        <Container maxWidth='sm'>
            <Typography><b>Name:</b> {patient.name}</Typography>
            <Typography><b>DOB:</b> {patient.dateOfBirth}</Typography>
            <Typography><b>Phone Number:</b> {patient.phoneNumber}</Typography><br/>
            <Divider/><br/>
            <Typography>Appointments Logs:</Typography><br/>
            {
                appointments.map((app, i) => {
                    const formatStartDate = moment(app.startDate)
                    const formatEndDate = moment(app.formatEndDate)
                    return(
                        <div key={i}>
                            <Typography><b>id:</b> {i+1}</Typography>
                            <Typography><b>Title:</b> {app.title}</Typography>
                            <Typography><b>Start Date:</b> {formatStartDate.format('YYYY/MM/DD hh:mm A')}</Typography>
                            <Typography><b>End Date:</b> {formatEndDate.format('YYYY/MM/DD hh:mm A')}</Typography>
                            <Typography><b>Title:</b> {app.note}</Typography><br/>
                        </div>
                        
                    )
                })
            }
        </Container>
    </div>
  )
}

export default PatientsDetails