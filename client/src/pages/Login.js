import { Alert, AppBar, Button, Grid, Paper, TextField, Toolbar, Typography } from '@mui/material'
import { Container } from '@mui/system'
import React, { useState } from 'react'
import { signin } from '../actions/auth'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

const Login = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [alert, setAlert] = useState()

    const handleSignIn = async (e) => {
        e.preventDefault()
        if(!username || !password)
            setAlert('Please Enter the required fields')
        else {
            // signin
            const msg = await dispatch(signin({username: username, password: password}, navigate))
            if(msg)
                setAlert(msg)
        }
    }
  return (
    <div>
        <AppBar color='default'>
            <Toolbar>
                <Typography variant='h6'><b>Admin Login</b></Typography>

            </Toolbar>
        </AppBar>
        <Container style={{marginTop: '100px'}} maxWidth='xs'>
            {alert &&
            <div style={{marginBottom: '20px'}}>
                <Alert severity='error'>{alert}</Alert>
            </div>
                
            }
            <Paper style={{padding: '15px', justifyContent:'center', paddingBottom: '25px'}}>
                <Typography variant='h5' style={{marginLeft: '100px'}}><b>Admin Login</b></Typography><br/>
                <Grid container spacing={2} style={{justifyContent: 'center'}}>
                    <Grid item style={{alignItems: 'center'}}>
                        <Typography variant='h6'>Username</Typography>
                        <TextField 
                        size='small'
                        onChange={(e) => {setUsername(e.target.value)}}
                        />
                    </Grid>
                    <Grid item style={{alignItems: 'center'}}>
                        <Typography variant='h6'>Password</Typography>
                        <TextField
                        size='small'
                        type='password'
                        onChange={(e) => {setPassword(e.target.value)}}/>
                    </Grid>
                    <Grid item xs={12} style={{marginLeft: '71px', marginTop: '10px'}}>
                        <Button variant='contained' color='primary'
                        onClick={handleSignIn}>Login</Button>
                    </Grid>
                </Grid>
            </Paper>  
        </Container>

    </div>
  )
}

export default Login