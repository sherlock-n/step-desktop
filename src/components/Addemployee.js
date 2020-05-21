import React from 'react'
import Personal from './Personal'
import Status from './Status'
import Client from './Client'
import Employment from './Employment'
import Confrim from './Confirm'
import Success from './Success'

class Addemployee extends React.Component {
    state = {
        step: 1,
        personal: {
            name: '',
            bday: '',
            email: '',
            phone: '',
            address: '',
            address2: '',
            city: '',
            state: '',
            zip: ''
        },
        status: {
            status: '',
            statusExpiresOn: '',
            statusDocName: '',
            statusDocNumber: '',
            passportNumber: '',
            passportIssueCountry: '',
            passportIssuedOn: '',
            passportExpiresOn: ''
        },
        client: {
            clientName: '',
            clientLocation: '',
            role: '',
            supervisor: '',
            employmentStartDate: ''
        },
        employment: {
            employeeStartDate: '',
            rate: '',
            salary: '',
            pto: '',
            loan: ''
        }

    }
    handleChangePersonal = async (e) => {
        const personal = { ...this.state.personal }
        personal[e.target.name] = e.target.value
        await this.setState({ personal, errMsg: '' })
        console.log(this.state.personal)
    }
    handleChangeStatus = async (e) => {
        const status = { ...this.state.status }
        status[e.target.name] = e.target.value
        await this.setState({ status })
        console.log(this.state.status)
    }
    handleChangeClient = async (e) => {
        const client = { ...this.state.client }
        client[e.target.name] = e.target.value
        await this.setState({ client })
        console.log(this.state.client)
    }
    handleChangeEmployment = async(e) => {
        const employment={...this.state.employment}
        employment[e.target.name]=e.target.value
        await this.setState({employment})
        console.log(this.state.employment)
    }
    nextStep = () => {
        const step = this.state.step
        this.setState({ step: step + 1 })
    }
    prevStep = () => {
        const step = this.state.step
        this.setState({ step: step - 1 })
    }
    render() {

        switch (this.state.step) {
            case 1: return (
                <Personal
                    personal={this.state.personal}
                    onChange={this.handleChangePersonal}
                    nextStep={this.nextStep}
                />
            )
            case 2: return (
                <Status
                    status={this.state.status}
                    onChange={this.handleChangeStatus}
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                />
            )
            case 3: return (
                <Client
                    client={this.state.client}
                    onChange={this.handleChangeClient}
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                />
            )
            case 4: return (
                <Employment
                    employment={this.state.employment}
                    onChange={this.handleChangeEmployment}
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                />
            )
            case 5: return (
                <Confrim
                    personal={this.state.personal}
                    status={this.state.status}
                    client={this.state.client}
                    employment={this.state.employment}
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                />
            )
            case 6: return (
                <Success/>
            )
            
        }

    }
}

export default Addemployee