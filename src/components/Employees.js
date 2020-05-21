import React from 'react'
import { getEmployees } from '../services/Employee'
import Searchbar from './Searchbar'
import { Link } from 'react-router-dom'


class Employees extends React.Component {
    constructor() {
        super()
        this.state = {
            employees: [],
            searchText: ''
        }
    }
    componentDidMount = async () => {
        try {
            const employees = await getEmployees()
            this.setState({ employees })

        } catch (error) {

        }
    }
    handleChange = (e) => {
        const searchText = e.target.value
        this.setState({ searchText })
    }

    renderEmployeeList = () => {
        let employees
        if (this.state.searchText !== '') {
            const filterelist = this.state.employees.filter((emp) => {
                return emp.name.toLowerCase().startsWith(this.state.searchText.toLowerCase())
            })
            employees = filterelist
        }
        else {
            employees = this.state.employees
        }
        return (
            <div >
                Total Employees Found: <span className="badge badge-pill badge-info">{employees.length}</span>
                <table className='table table-striped table-bordered table-sm mt-2'>
                    <thead>
                        <tr>
                            <th># Serial</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                        </tr>
                    </thead>

                    <tbody>
                        {employees.map((emp, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td><Link to={`/employee/${emp._id}`}>{emp.name}</Link></td>
                                    <td>{emp.email}</td>
                                    <td>{emp.phone}</td>
                                </tr>

                            )
                        })}


                    </tbody>
                </table>

            </div >
        )

    }

    render() {
        return (
            <div className='container'>
                <Link className='btn btn-outline-primary mb-3 mt-3'
                    to={`/addemployee/new`}
                >Add Employee</Link>
                <Searchbar onChange={this.handleChange} />
                {this.renderEmployeeList()}
            </div>
        )
    }
}

export default Employees