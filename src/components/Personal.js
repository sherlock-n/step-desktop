import React from 'react'

class Personal extends React.Component {
    constructor(props) {
        super()
    }
    state = {
        errMsg: '',
        className: ''
    }

    handleSubmit = (e) => {
        e.preventDefault()
        if (this.props.personal.name === '') {
            setTimeout(() => {
                this.setState({ errMsg: '' })
            }, 2000);

            this.setState({ errMsg: 'Please Enter Name', className: 'alert alert-danger' })
        }
        this.props.nextStep()
    }
    render() {
        console.log(this.props)
        const { name, bday, email, phone, address, address2, city, state, zip } = this.props.personal
        return (
            <div className='container'>

                <div className="alert alert-dark " role="alert">
                    <h4>  Personal Details</h4>
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
                                name='name'
                                value={name}
                                onChange={e => this.props.onChange(e)}

                            />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputPassword4">Birthdate
                            <small className=" text-muted">(optional)</small>
                            </label>

                            <input type="date" className="form-control" id="inputPassword4"
                                name='bday'
                                value={bday}
                                onChange={e => this.props.onChange(e)}
                            />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="inputEmail4">Email</label>
                            <input type="email" className="form-control" id="inputEmail4"
                                name='email'
                                value={email}
                                onChange={e => this.props.onChange(e)}
                            />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputPassword4">Phone</label>
                            <input type="text" className="form-control" id="inputPassword4"
                                name='phone'
                                value={phone}
                                onChange={e => this.props.onChange(e)}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputAddress">Address</label>
                        <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"
                            name='address'
                            value={address}
                            onChange={e => this.props.onChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputAddress2">Address 2</label>
                        <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"
                            name='address2'
                            value={address2}
                            onChange={e => this.props.onChange(e)}
                        />
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="inputCity">City</label>
                            <input type="text" className="form-control" id="inputCity"
                                name='city'
                                value={city}
                                onChange={e => this.props.onChange(e)}
                            />
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="inputState">State</label>
                            <select id="inputState" className="form-control"
                                name='state'
                                value={state}
                                onChange={e => this.props.onChange(e)}
                            >
                                <option value></option>
                                <option>AZ</option>
                                <option>CA</option>
                                <option>MI</option>

                            </select>
                        </div>
                        <div className="form-group col-md-2">
                            <label htmlFor="inputZip">Zip</label>
                            <input type="text" className="form-control" id="inputZip"
                                name='zip'
                                value={zip}
                                onChange={e => this.props.onChange(e)}

                            />
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary">Continue</button>
                </form>

            </div>
        )
    }
}

export default Personal