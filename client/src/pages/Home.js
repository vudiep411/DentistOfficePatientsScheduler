import * as React from 'react'
import { useEffect } from 'react'
import Paper from '@mui/material/Paper';
import { ViewState, EditingState, IntegratedEditing } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  DayView,
  WeekView,
  MonthView,
  Toolbar,
  DateNavigator,
  Appointments,
  AllDayPanel,
  ViewSwitcher,
  AppointmentForm,
  AppointmentTooltip,
  DragDropProvider
} from '@devexpress/dx-react-scheduler-material-ui';
import { addAppointment, deleteAppointment, getAppointments, updateAppointment } from '../actions/appointments';
import { Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux'
import Navbar from '../Components/Navbar/Navbar';


const Home = () => {
    const dispatch = useDispatch()
    const appointments = useSelector((state) => state.appointment)

    // Fetch all appointments 
    useEffect(() => {
      dispatch(getAppointments())
    }, [dispatch])

    // Handle submit appointment
    const saveAppointment = (data) => {
      if(data.added)
      {
        dispatch(addAppointment(data))
      }
      else if(data.changed)
      {
        let chosenApp = {}
        appointments.map(app => {
          if (data.changed[app.id])
            chosenApp = {...app, ...data.changed[app.id]}
          return app
        })
        dispatch(updateAppointment(chosenApp))
      }
      else if(data.deleted !== undefined)
      {
        dispatch(deleteAppointment(data.deleted))
      }
    }

    // Add, Editing Appointment Form
    const BasicLayout = ({ onFieldChange, appointmentData, ...restProps }) => {
      const onNameChange = (nextValue) => {
        onFieldChange({ name: nextValue});
      };

      const onPhoneChange = (nextValue) => {
        onFieldChange({ phoneNumber: nextValue});
      };

      const onNoteChange = (nextValue) => {
        onFieldChange({ note: nextValue});
      };

      const onDOBChange = (nextValue) => {
        onFieldChange({ dateOfBirth: nextValue});
      };
    
      return (
        <AppointmentForm.BasicLayout
          appointmentData={appointmentData}
          onFieldChange={onFieldChange}
          locale='en-US'
          {...restProps}
        >
          <AppointmentForm.TextEditor
            value={appointmentData.name}
            onValueChange={onNameChange}
            placeholder="Name"
          />
          <AppointmentForm.TextEditor
            value={appointmentData.phoneNumber}
            onValueChange={onPhoneChange}
            placeholder="Phone-Number"
          />
          <AppointmentForm.TextEditor
            value={appointmentData.note}
            onValueChange={onNoteChange}
            placeholder="Additional information"
          />
          <AppointmentForm.TextEditor
            value={appointmentData.dateOfBirth}
            onValueChange={onDOBChange}
            placeholder="Date of Birth"
          />
        </AppointmentForm.BasicLayout>
      );
    };

    const Content = (({
      children, appointmentData, ...restProps
    }) => (
      <AppointmentTooltip.Content {...restProps} appointmentData={appointmentData}>
        <div style={{marginLeft: '60px'}}>
          <Typography variant='body2'>{appointmentData.name} - {appointmentData.dateOfBirth} - {appointmentData.phoneNumber}</Typography>
          { appointmentData.note &&
          <Typography variant='body2'>{appointmentData.note}</Typography>}
        </div>
        
      </AppointmentTooltip.Content>
    ));

    const TextEditor = (props) => {
      // eslint-disable-next-line react/destructuring-assignment
      if (props.type === 'multilineTextEditor') {
        return null;
      } return <AppointmentForm.TextEditor {...props} />;
    };


  return (
    <div>
      <Navbar/>
      <Paper>
        <Scheduler
          data={appointments}
          >
          <ViewState defaultCurrentDate={new Date()} defaultCurrentViewName='Week'/>
          <EditingState 
            onCommitChanges={(data) => {saveAppointment(data)}}
            />
          <IntegratedEditing/>
          <DayView startDayHour={7} endDayHour={19} displayName='Day'/>
          <WeekView startDayHour={7} endDayHour={19} displayName='Week'/>
          <MonthView startDayHour={7} endDayHour={19} displayName='Month'/>
          <Appointments/>     
          <Toolbar />
          <DateNavigator />
          <ViewSwitcher />
          <AppointmentTooltip
            contentComponent={Content}
            showOpenButton
            showCloseButton
          />
          <AppointmentForm
            basicLayoutComponent={BasicLayout}
            textEditorComponent={TextEditor}
          />
          <AllDayPanel/>
          <DragDropProvider/>  
          </Scheduler>
        </Paper>
    </div>
  )
}

export default Home