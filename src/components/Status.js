import React from 'react'

class Status extends React.Component {
    state = {
        errMsg: '',
        className: ''
    }
    handleSubmit = (e) => {
        e.preventDefault()



        if (this.props.status.status === '') {
            setTimeout(() => {
                this.setState({ errMsg: '' })
                return
            }, 2000);

            this.setState({ errMsg: 'Please Enter Status' })
        }

        else if (this.props.status.statusExpiresOn === '') {
            setTimeout(() => {
                this.setState({ errMsg: '' })
                return
            }, 2000);

            this.setState({ errMsg: 'Please Enter Status Expiry Date' })
        }

        else
            this.props.nextStep()
    }
    render() {
        const { status, statusExpiresOn, statusDocName, statusDocNumber, passportNumber, passportIssueCountry, passportIssuedOn,
            passportExpiresOn } = this.props.status
        return (
            <div className='container'>

                <div className="alert alert-dark " role="alert">
                    <h4>  Status Details</h4>
                </div>
                {this.state.errMsg &&
                    <div className="alert alert-danger" role="alert">
                        {this.state.errMsg}
                    </div>
                }
                <form onSubmit={this.handleSubmit}>
                    <div className="form-row">
                        <div className="form-group col-md-4">
                            <label htmlFor="inputState">Status</label>
                            <select id="inputState" className="form-control"
                                name='status'
                                value={status}
                                onChange={e => this.props.onChange(e)}
                            >
                                <option value></option>
                                <option>H1</option>
                                <option>EAD</option>
                                <option>OPT/CPT</option>
                                <option>GC</option>
                                <option>Citizen</option>
                                <option>Other</option>
                            </select>
                        </div>
                        <div className="form-group col-md-8">
                            <label htmlFor="inputPassword4">Status Expires On</label>
                            <input type="date" className="form-control" id="inputPassword4"
                                name='statusExpiresOn'
                                value={statusExpiresOn}
                                onChange={e => this.props.onChange(e)}
                            />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="inputAddress">Status Document Name</label>
                            <input type="text" className="form-control" id="inputAddress" placeholder=""
                                name='statusDocName'
                                value={statusDocName}
                                onChange={e => this.props.onChange(e)}
                            />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputAddress2">Status Document Number</label>
                            <input type="text" className="form-control" id="inputAddress2" placeholder=""
                                name='statusDocNumber'
                                value={statusDocNumber}
                                onChange={e => this.props.onChange(e)}
                            />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="inputCity">Passport Number</label>
                            <input type="text" className="form-control" id="inputCity"
                                name='passportNumber'
                                value={passportNumber}
                                onChange={e => this.props.onChange(e)}
                            />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputCity">Issue Country</label>
                            <input type="text" className="form-control" id="inputCity"
                                name='passportIssueCountry'
                                value={passportIssueCountry}
                                onChange={e => this.props.onChange(e)}
                            />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="inputCity">Issued On </label>
                            <input type="date" className="form-control" id="inputCity"
                                name='passportIssuedOn'
                                value={passportIssuedOn}
                                onChange={e => this.props.onChange(e)}
                            />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputCity">Expires On </label>
                            <input type="date" className="form-control" id="inputCity"
                                name='passportExpiresOn'
                                value={passportExpiresOn}
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

export default Status