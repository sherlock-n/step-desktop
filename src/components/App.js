import React from 'react';
import '../App.css'
import { BrowserRouter, Route, NavLink } from 'react-router-dom'
import Navbar from './Navbar'
import Employees from './Employees'
import Employee from './Employee'
import Addemployee from './Addemployee';
import Userprofile from './Userprofile';
import TimesheetExp from './TimesheetExp'

function App() {
  return (
    <BrowserRouter >
      <Navbar />
      <div className="sidebar">
        <NavLink exact={true} to="/"> <i class="tachometer alternate  icon"></i> Dashboard</NavLink>
        <NavLink to="/employees"><i class="fa fa-users"></i> Employees</NavLink>
        <NavLink to="/profile"><i class="fa fa-id-card"></i> My Profile</NavLink>
        <NavLink to="/invoice"><i class="file alternate icon"></i> Invoice</NavLink>
        <NavLink to="/timesheet"><i class="clock icon"></i> Timesheets</NavLink>
        <NavLink to="/about"><i className='info circle icon'></i>About</NavLink>
      </div>

      <div className="content">
        <Route exact={true} path='/' component={''} />
        <Route exact={true} path='/employees' component={Employees} />
        <Route exact={true} path='/addemployee/:id' component={Addemployee} />
        <Route exact={true} path='/employee/:id' component={Employee} />
        <Route exact={true} path='/profile' component={Userprofile} />
        <Route exact={true} path='/timesheet' component={TimesheetExp} />
      </div>



    </BrowserRouter >
  );
}

export default App;
