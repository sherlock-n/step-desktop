import React from 'react'
import { getEmployee } from '../services/Employee'
import moment from 'moment'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';


class Employee extends React.Component {
    state = {
        employee: {}
    }

    componentDidMount = async () => {
        const employee = await getEmployee(this.props.match.params.id)
        try {
            this.setState({ employee })
        } catch (error) {

        }
    }
    renderDetails = () => {
        const { birthdate, email, phone, address, address2, city, state, zip } = this.state.employee
        const { status, statusExpiresOn, statusDocName, statusDocNumber, passportNumber, passportIssueCountry, passportIssuedOn,
            passportExpiresOn } = this.state.employee
        const { clientName, clientLocation, role, supervisor, employmentStartDate } = this.state.employee
        const { employeeStartDate, rate, salary, pto, loan } = this.state.employee

        const ADDRESS = `${address},   ${address2},  ${city}, ${state} - ${zip}`
        return (
            <div class="card ">
                <div class="card-header">
                    <Tabs >
                        <TabList>
                            <Tab>Personal</Tab>
                            <Tab>Status </Tab>
                            <Tab>Client </Tab>
                            <Tab>Employement </Tab>
                        </TabList>

                        <TabPanel>
                            <div class="row">
                                <div class="col col-2">
                                    Email
                                 </div>
                                <div class="col">
                                    :<span className='tab'></span> {email}
                                </div>
                            </div>
                            <div class="row">
                                <div class="col col-2">
                                    Phone
                             </div>
                                <div class="col">
                                    :<span className='tab'></span> {phone}
                                </div>
                            </div>
                            <div class="row">
                                <div class="col col-2">
                                    Address
                             </div>
                                <div class="col">
                                    :<span className='tab'></span> {ADDRESS}
                                </div>
                            </div>
                            <div class="row">
                                <div class="col col-2">
                                    BirthDate
                         </div>
                                <div class="col">
                                    :<span className='tab'></span> {moment.utc(birthdate).format('MMM/DD/YYYY')}
                                </div>
                            </div>

                        </TabPanel>
                        <TabPanel>
                            <div class="row">
                                <div class="col col-4">
                                    Status
                         </div>
                                <div class="col">
                                    :<span className='tab'></span> {status}
                                </div>
                            </div>
                            <div class="row">
                                <div class="col col-4">
                                    Status Expires On
                                 </div>
                                <div class="col">
                                    :<span className='tab'></span> {moment.utc(statusExpiresOn).format('MMM/DD/YYYY')}
                                </div>
                            </div>
                            <div class="row">
                                <div class="col col-4">
                                    Status Document Name
                                 </div>
                                <div class="col">
                                    :<span className='tab'></span> {statusDocName}
                                </div>
                            </div>
                            <div class="row">
                                <div class="col col-4">
                                    Status Document Number
                             </div>
                                <div class="col">
                                    :<span className='tab'></span> {statusDocNumber}
                                </div>
                            </div>
                            <div class="row">
                                <div class="col col-4">
                                    Passport Number
                                </div>
                                <div class="col">
                                    :<span className='tab'></span> {passportNumber}
                                </div>
                            </div>
                            <div class="row">
                                <div class="col col-4">
                                    Passport Issue Country
                                 </div>
                                <div class="col">
                                    :<span className='tab'></span> {passportIssueCountry}
                                </div>
                            </div>
                            <div class="row">
                                <div class="col col-4">
                                    Passport Issued On
                                 </div>
                                <div class="col">
                                    :<span className='tab'></span> {moment.utc(passportIssuedOn).format('MMM/DD/YYYY')}
                                </div>
                            </div>  <div class="row">
                                <div class="col col-4">
                                    Passport Expires On
                                </div>
                                <div class="col">
                                    :<span className='tab'></span> {moment.utc(passportExpiresOn).format('MMM/DD/YYYY')}
                                </div>
                            </div>


                        </TabPanel>
                        <TabPanel>
                            <div class="row">
                                <div class="col col-2">
                                    Client Name
                                 </div>
                                <div class="col">
                                    :<span className='tab'></span> {clientName}
                                </div>
                            </div>
                            <div class="row">
                                <div class="col col-2">
                                    Location
                                </div>
                                <div class="col">
                                    :<span className='tab'></span> {clientLocation}
                                </div>
                            </div><div class="row">
                                <div class="col col-2">
                                    Role
                                 </div>
                                <div class="col">
                                    :<span className='tab'></span> {role}
                                </div>
                            </div><div class="row">
                                <div class="col col-2">
                                    Supervisor
                                 </div>
                                <div class="col">
                                    :<span className='tab'></span> {supervisor}
                                </div>
                            </div><div class="row">
                                <div class="col col-2">
                                    Start Date
                                </div>
                                <div class="col">
                                    :<span className='tab'></span> {moment.utc(employmentStartDate).format('MMM/DD/YYYY')}
                                </div>
                            </div>





                        </TabPanel>
                        <TabPanel>
                            <div class="row">
                                <div class="col col-4">
                                    Employement Start Date
                                </div>
                                <div class="col">
                                    :<span className='tab'></span> {moment.utc(employeeStartDate).format('MMM/DD/YYYY')}
                                </div>
                            </div><div class="row">
                                <div class="col col-4">
                                    Rate
                                 </div>
                                <div class="col">
                                    :<span className='tab'></span> $ {rate}
                                </div>
                            </div><div class="row">
                                <div class="col col-4">
                                    Salary
                                 </div>
                                <div class="col">
                                    :<span className='tab'></span> $ {salary}
                                </div>
                            </div>
                            <div class="row">
                                <div class="col col-4">
                                    Paid-Time-Off
                                 </div>
                                <div class="col">
                                    :<span className='tab'></span> {pto} -days
                                </div>
                            </div>

                            <div class="row">
                                <div class="col col-4">
                                    Loan
                                </div>
                                <div class="col">
                                    :<span className='tab'></span> {loan}
                                </div>
                            </div>
                        </TabPanel>
                    </Tabs>
                </div>


            </div>


        )
    }


    render() {

        return (
            <div className='container mt-4'>
                <div class="card-group">
                    <div class="card col-4 text-center">
                        <img src='./download.jpeg' class="card-img-top" alt="Image not available" />
                        <div class="card-body">
                            <h5 class="card-title "><u>{this.state.employee.name}</u></h5>
                            <p class="card-text">{this.state.employee.role}</p>
                            <p class="card-text">@ <b>{this.state.employee.clientName}</b></p>
                            <p class="card-text"><small class="text-muted">Employeed Since {moment.utc(this.state.employee.employmentStartDate).format('DD/MMM/YYYY')}</small></p>
                        </div>
                    </div>


                    <div class="card">
                        {this.renderDetails()}
                    </div>
                </div>



            </div>
        )
    }
}

export default Employee