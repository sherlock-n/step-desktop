import React from 'react'

class Client extends React.Component {
    state = {
        errMsg: '',
        cname:''
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.nextStep()
    }
   
    render() {
        const { clientName, clientLocation, role, supervisor, employmentStartDate } = this.props.client
        return (
            <div className='container'>
                <div className="alert alert-dark " role="alert">
                    <h4>  Client Details</h4>
                </div>

                {this.state.errMsg &&
                    <div className="alert alert-danger" role="alert">
                        {this.state.errMsg}
                    </div>
                }
                <form onSubmit={this.handleSubmit}>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="inputEmail4">Name</label>
                            <input type="text" className="form-control" id="inputEmail4"
                                name='clientName'
                               value={clientName}
                                onChange={e => this.props.onChange(e)}
                              

                            />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputPassword4">Location
                        
                            </label>

                            <input type="text" className="form-control" id="inputPassword4"
                                name='clientLocation'
                                value={clientLocation}
                                onChange={e => this.props.onChange(e)}
                            />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="inputEmail4">Role
                            <small className=" text-muted">(optional)</small>
                            </label>
                            <input type="text" className="form-control" id="inputEmail4"
                                name='role'
                                value={role}
                                onChange={e => this.props.onChange(e)}
                            />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputPassword4">Supervisor</label>
                            <input type="text" className="form-control" id="inputPassword4"
                                name='supervisor'
                                value={supervisor}
                                onChange={e => this.props.onChange(e)}
                            />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputPassword4">Employement Start Date</label>
                            <input type="date" className="form-control" id="inputPassword4"
                                name='employmentStartDate'
                                value={employmentStartDate}
                                onChange={e => this.props.onChange(e)}
                            />
                        </div>
                    </div>
                    <button type='button' className="btn btn-outline-secondary mr-2"
                        onClick={this.props.prevStep}
                    >Back</button>
                    <button type="submit" className="btn btn-primary">Continue</button>
                </form>
            </div>
        )
    }
}

export default Client