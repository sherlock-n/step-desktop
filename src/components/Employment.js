import React from 'react'


class Employment extends React.Component {
    state = {
        errMsg: '',
        rate:''
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        this.props.nextStep()
    }

   
    render() {
        const { employeeStartDate, rate, salary, pto, loan } = this.props.employment
        return (
            <div className='container'>
                <div className="alert alert-dark " role="alert">
                    <h4>  Employement Details</h4>
                </div>

                {this.state.errMsg &&
                    <div className="alert alert-danger" role="alert">
                        {this.state.errMsg}
                    </div>
                }
                <form onSubmit={this.handleSubmit}>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="inputPassword4">Employement Start Date</label>
                            <input type="date" className="form-control" id="inputPassword4"
                                name='employeeStartDate'
                                value={employeeStartDate}
                                onChange={e => this.props.onChange(e)}
                            />

                        </div>
                        <div className="form-group col-md-6">


                            <label htmlFor="inputPassword4">Rate
                      
                            </label>

                            <input type="number" className="form-control" id="inputPassword4"
                                name='rate'
                                value={rate}
                                onChange={e => this.props.onChange(e)}
                
                            />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="inputEmail4">Salary</label>
                            <input type="text" className="form-control" id="inputEmail4"
                                name='salary'
                                value={salary}
                                onChange={e => this.props.onChange(e)}
                            />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputPassword4">Paid-Time-Off</label>
                            <input type="text" className="form-control" id="inputPassword4"
                                name='pto'
                                value={pto}
                                onChange={e => this.props.onChange(e)}
                            />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputEmail4">Loan
                            <small className=" text-muted">(optional)</small>
                            </label>
                            <input type="number" className="form-control" id="inputEmail4"
                                name='loan'
                                value={loan}
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

export default Employment