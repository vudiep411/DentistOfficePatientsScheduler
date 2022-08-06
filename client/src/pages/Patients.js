import { Container } from '@mui/system'
import React, {useEffect} from 'react'
import Navbar from '../Components/Navbar/Navbar'
import { useDispatch, useSelector } from 'react-redux';
import { getPatients } from '../actions/patients';
import PatientsTable from '../Components/PatientsTable/PatientsTable';

const Patients = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPatients())
    }, [dispatch])

    const data = useSelector(state => state.patients)

    
  return (
    <div>
        <Navbar/><br/>
        <Container maxWidth='md'>
            <PatientsTable data={data}/>
        </Container>
    </div>
  )
}

export default Patients