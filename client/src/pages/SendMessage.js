import { Button, TextField, Typography, Paper, Grid } from '@mui/material'
import { Container } from '@mui/system'
import React, { useState } from 'react'
import Navbar from '../Components/Navbar/Navbar'
import { sendText } from '../actions/sendMessage'
import { useNavigate } from 'react-router-dom'
import Alert from '@mui/material/Alert';

const SendMessage = () => {
    const defaultMessage = 
    "This is a reminder from Robert D Nguyen's DDS Dentist Office that your annual check-up and cleaning are due. Please call 714-895-6330 to make an appointment. Thank you.\n\n14035 Goldenwest St, Westminster, CA 92683"
    const [recipient, setRecipient] = useState('')
    const [message, setMessage] = useState(defaultMessage)
    const [alert, setAlert] = useState()
    const navigate = useNavigate()

    const handleSend = async () => {
        if(recipient.length < 10)
        {
            setAlert('Please enter at least 1 phone number')
        }
        else
        {
            const recipients = recipient.split(',')
            const data = {recipient: recipients, message: message}
            setAlert('')
            setRecipient('')
            await sendText(data)           
        }
    }
  return (
    <div>
        <Navbar/>
        <Container maxWidth='xs'>
            <Typography variant='h4' style={{marginTop: '10px', marginBottom: '10px'}}>Send Reminder Message</Typography>
            <Paper style={{padding: '10px', justifyContent: 'center'}}>
                <Typography variant='h5'>SMS</Typography>
                <Grid container spacing={1} style={{marginTop: '10px'}}>
                    { alert &&
                    <Grid item xs={12}>
                        <Alert severity="error">Enter a number</Alert>
                    </Grid>
                    }
                    <Grid item xs={12}>
                        <TextField
                            multiline
                            rows={2}
                            label='Recipients'
                            value={recipient}
                            style={{minWidth: '300px'}}
                            onChange={(e) => {setRecipient(e.target.value)}}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField 
                            multiline
                            rows={4}
                            defaultValue={message}
                            style={{minWidth: '300px'}} 
                            label="Message" 
                            onChange={(e) => {setMessage(e.target.value)}}
                        />
                    </Grid>
                </Grid>
                <div style={{marginTop: '20px'}}>
                    <Button color='success' variant='contained' onClick={handleSend} style={{marginRight: '15px'}}>Submit</Button>
                    <Button color='error' variant='contained' onClick={() => {navigate('/patients')}}>Cancel</Button>
                </div>

            </Paper>
        </Container>
    </div>
  )
}

export default SendMessage