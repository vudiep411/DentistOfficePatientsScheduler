import { Paper, Container, Typography, TextField, Button, Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { getPatient } from '../actions/patients'
import Navbar from '../Components/Navbar/Navbar'
import { updatePatient } from '../actions/patients'

const EditPatientForm = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [formData, setFormData] = useState({name: '', dateOfBirth: '', phoneNumber: ''})
    const [patient, setPatient] = useState()
    
    useEffect(() => {
        async function getData()
        {
            const p = await dispatch(getPatient(id))
            if(p)
            {
                setFormData({name: p.name, dateOfBirth: p.dateOfBirth, phoneNumber: p.phoneNumber})
                setPatient(p)
            }    
        }
        getData()   
    }, [id])

    if (!patient) return null

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name] : e.target.value})
    }

    const handleSubmit = () => {
        const newPatient = {...patient, ...formData}
        dispatch(updatePatient(id, newPatient))
        navigate('/patients')
    }

  return (
    <div>
        <Navbar/>
        <Container maxWidth='xs'>
            <Paper style={{padding: '10px'}}>
                <Typography variant='h5'>Edit Patient Info</Typography>
                {/* <div style={{marginTop: '20px', display: 'flex', justifyContent: 'space-between'}}> */}
                <Grid container spacing={1} style={{marginTop: '10px'}}>
                    <Grid item xs={7}>
                        <TextField 
                            id="name"
                            name='name'
                            style={{maxWidth: '200px'}} 
                            defaultValue={patient.name} 
                            label='Name' 
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={5}>
                        <TextField 
                            name='dateOfBirth'
                            defaultValue={patient.dateOfBirth}
                            label='Birthdate'
                            style={{maxWidth: '160px'}}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField 
                            name="phoneNumber"
                            defaultValue={patient.phoneNumber}
                            style={{maxWidth: '200px', marginTop: '15px'}} 
                            label="Phone Number" 
                            onChange={handleChange}
                        />
                    </Grid>
                </Grid>
                <div style={{marginTop: '20px'}}>
                    <Button color='success' variant='contained' onClick={handleSubmit} style={{marginRight: '15px'}}>Submit</Button>
                    <Button color='error' variant='contained' onClick={() => {navigate('/patients')}}>Cancel</Button>
                </div>

            </Paper>
        </Container>
    </div>
  )
}

export default EditPatientForm