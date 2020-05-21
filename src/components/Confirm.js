import React from 'react'
import { postEmployee } from '../services/Employee'



class Confirm extends React.Component {
    state = {
        errMsg: ''
    }

    handleClick = async () => {
        try {
            const employee = this.createDataToSave()
            await postEmployee(employee)
            this.props.nextStep()

        } catch (error) {
            this.setState({ errMsg: 'Something Went Wrong...Please Try Again' })
            console.log(error)
        }



    }
    handleSaveData = () => {

    }
    createDataToSave = () => {
        const employee = {}
        const { name, bday, email, phone, address, address2, city, state, zip } = this.props.personal
        const { status, statusExpiresOn, statusDocName, statusDocNumber, passportNumber, passportIssueCountry, passportIssuedOn,
            passportExpiresOn } = this.props.status
        const { clientName, clientLocation, role, supervisor, employmentStartDate } = this.props.client
        const { employeeStartDate, rate, salary, pto, loan } = this.props.employment
        employee.name = name
        employee.bday = bday
        employee.email = email
        employee.phone = phone
        employee.address = address
        employee.address2 = address2
        employee.city = city
        employee.state = state
        employee.zip = zip

        employee.status = status
        employee.statusExpiresOn = statusExpiresOn
        employee.statusDocName = statusDocName
        employee.statusDocNumber = statusDocNumber
        employee.passportNumber = passportNumber
        employee.passportIssueCountry = passportIssueCountry
        employee.passportIssuedOn = passportIssuedOn
        employee.passportExpiresOn = passportExpiresOn

        employee.clientName = clientName
        employee.clientLocation = clientLocation
        employee.role = role
        employee.supervisor = supervisor
        employee.employmentStartDate = employmentStartDate

        employee.employeeStartDate = employeeStartDate
        employee.rate = rate
        employee.salary = salary
        employee.pto = pto
        employee.loan = loan

        return employee
    }
    render() {
        const { name, bday, email, phone, address, address2, city, state, zip } = this.props.personal
        const { status, statusExpiresOn, statusDocName, statusDocNumber, passportNumber, passportIssueCountry, passportIssuedOn,
            passportExpiresOn } = this.props.status
        const { clientName, clientLocation, role, supervisor, employmentStartDate } = this.props.client
        const { employeeStartDate, rate, salary, pto, loan } = this.props.employment


        return (
            <div className='container'>
                <div className="alert alert-info " role="alert">
                    <h4>  Confrim Details</h4>
                </div>
                {this.state.errMsg &&
                    <div className="alert alert-danger" role="alert">
                        {this.state.errMsg}
                    </div>
                }

                <div className="card mb-3">
                    <div className="card-header">
                        <h4>Personal Details</h4>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Name: {name}</h5>
                        <p className="card-text">Birth date:{bday}</p>
                        <p className="card-text">Email:{email}</p>
                        <p className="card-text">Phone:{phone}</p>
                        <p className="card-text">Address:{address}</p>
                        <p className="card-text">Address2:{address2}</p>
                        <p className="card-text">City:{city},State:{state} Zip:{zip}</p>


                    </div>
                </div>

                <div class="card mb-3">
                    <div class="card-header">
                        <h4>Status Details</h4>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Status:{status}</h5>
                        <p className="card-text">Status Expires On:{statusExpiresOn}</p>
                        <p className="card-text">Status Document Name:{statusDocName}</p>
                        <p className="card-text">Status Document Number:{statusDocNumber}</p>
                        <p className="card-text">Passport Number:{passportNumber}</p>
                        <p className="card-text">Passport Issued Country:{passportIssueCountry}</p>
                        <p className="card-text">Passport Issued On:{passportIssuedOn}</p>
                        <p className="card-text">Passport Expires On:{passportExpiresOn}</p>

                    </div>
                </div>


                <div className="card mb-3">
                    <div className="card-header">
                        <h4>Client Details</h4>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Client Name:{clientName}</h5>
                        <p className="card-text">Client Location:{clientLocation}</p>
                        <p className="card-text">Role:{role}</p>
                        <p className="card-text">Supervisor:{supervisor}</p>
                        <p className="card-text">Employment Start Date:{employmentStartDate}</p>
                    </div>
                </div>


                <div className="card mb-3">
                    <div className="card-header">
                        <h4>Employment Details</h4>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Employment Start Date:{employeeStartDate}</h5>
                        <p className="card-text">Rate:{rate}</p>
                        <p className="card-text">Salary:{salary}</p>
                        <p className="card-text">Paid Time Off:{pto}</p>
                        <p className="card-text">Loan:{loan}</p>
                    </div>
                </div>

                <button type='button' className="btn btn-outline-secondary mr-2"
                    onClick={this.props.prevStep}
                >Back</button>
                <button className='btn btn-success'
                    onClick={this.handleClick}
                >Save</button>
            </div>

        )
    }
}

export default Confirm