import React, { useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import PageviewIcon from '@mui/icons-material/Pageview';
import { useNavigate } from 'react-router-dom';
import { Button, TextField, Typography } from '@mui/material'
import { deletePatient } from '../../actions/patients';
import { useDispatch } from 'react-redux';

const PatientsTable = ({ data }) => {
    const [filterPatient, setFilterPatient] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleDelete = (id) => {
        dispatch(deletePatient(id))
    }

  return (
    <div>
        <div style={{display: 'flex'}}>
            <Typography variant='h5' style={{marginRight: '100px'}}>Patients Appointments Data</Typography> 
            <TextField size='small' placeholder='Filter Name' value={filterPatient} onChange={(e) => {setFilterPatient(e.target.value)}}/>
        </div><br/>
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>DOB</TableCell>
                        <TableCell>Phone Number</TableCell>
                        <TableCell align='center'>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.filter((val) => {
                        if(filterPatient === '')
                            return val
                        else
                            return val.name.toLowerCase().includes(filterPatient.toLowerCase())
                    }).map((val, i) => (
                        <TableRow key={i}>
                            <TableCell>
                                <Typography>{val.name}</Typography>
                            </TableCell>
                            <TableCell>
                                <Typography>{val.dateOfBirth}</Typography>
                            </TableCell>
                            <TableCell>
                                <Typography>{val.phoneNumber}</Typography>
                            </TableCell>
                            <TableCell align='center'>
                                <Button size='small' onClick={() => {navigate(`/patients/${val._id}`)}}><PageviewIcon/></Button>
                                <Button size='small' onClick={() => {handleDelete(val._id)}} color='error'><DeleteIcon/></Button>
                                <Button size='small' color='warning' onClick={() => {navigate(`/patients/edit/${val._id}`)}}><EditIcon/></Button>
                            </TableCell>                                             
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    </div>
    
  )
}

export default PatientsTable