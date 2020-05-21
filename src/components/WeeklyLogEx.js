import React from 'react'
import moment from 'moment'

class WeeklyLog extends React.Component {
    state = {
        weekLog: {
            mon: '',
            tue: '',
            wed: '',
            thu: '',
            fri: '',
            sat: '',
            sun: ''
        },
        totalHours: '',
        ErrMsg: ''
    }

    handleSave = () => {
        this.setState({ ErrMsg: 'Hours Saved Successfully' })
    }
    handleInputChange = async (e) => {
        var weekLog = { ...this.state.weekLog }
        weekLog[e.target.name] = e.target.value
        await this.setState({ weekLog })
        console.log(this.state.weekLog)
    }
    render() {
        const week = this.props.week

        return (
            <div>
                {this.state.ErrMsg && <div class="alert alert-success alert-dismissible fade show" role="alert">
                    <strong>{this.state.ErrMsg}</strong> 
                <button type="button" class="close" data-dismiss="alert" aria-label="Close"
                onClick={()=>{this.setState({ErrMsg:''})}}
                >
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>}
                <table className='table table-bordered text-center'>

                    <thead>
                        <tr className='table-primary'>

                            <th scope="col">MON</th>
                            <th scope="col">TUE</th>
                            <th scope="col">WED</th>
                            <th scope="col">THU</th>
                            <th scope="col">FRI</th>
                            <th scope="col">SAT</th>
                            <th scope="col">SUN</th>
                            <th scope='col'>Total</th>
                        </tr>
                        <tr>
                            {week.map(w => {
                                return (
                                    <React.Fragment key={w}>
                                        <th scope="col">{moment.utc(w).format('DD-MMM-YY')}</th>
                                    </React.Fragment>
                                )
                            })}
                            <th scope='col' className='table-primary'>Hours</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row"><input
                                name='mon'
                                value={this.state.weekLog.mon}
                                onChange={e => this.handleInputChange(e)}
                            /></th>
                            <th scope="row"><input
                                name='tue'
                                value={this.state.weekLog.tue}
                                onChange={e => this.handleInputChange(e)}
                            /></th>
                            <th scope="row"><input
                                name='wed'
                                value={this.state.weekLog.wed}
                                onChange={e => this.handleInputChange(e)}
                            /></th>
                            <th scope="row"><input
                                name='thu'
                                value={this.state.weekLog.thu}
                                onChange={e => this.handleInputChange(e)}
                            /></th>
                            <th scope="row"><input
                                name='fri'
                                value={this.state.weekLog.fri}
                                onChange={e => this.handleInputChange(e)}
                            /></th>
                            <th scope="row"><input
                                name='sat'
                                value={this.state.weekLog.sat}
                                onChange={e => this.handleInputChange(e)}
                            /></th>
                            <th scope="row"><input
                                name='sun'
                                value={this.state.weekLog.sun}
                                onChange={e => this.handleInputChange(e)}
                            /></th>
                            <th scope="row"><input readOnly value='0' /></th>

                        </tr>
                    </tbody>
                </table>
                <button className='btn btn-primary'
                    onClick={this.handleSave}
                >Save</button>
            </div>
        )
    }
}


export default WeeklyLog



//////////////////////////////////////////////////////////////
import React from 'react'
import moment from 'moment'

class WeeklyLog extends React.Component {
    state = {

        weekLog: {
            // mon: '',
            // tue: '',
            // wed: '',
            // thu: '',
            // fri: '',
            // sat: '',
            // sun: ''

        },
        totalHours: 0,
        ErrMsg: '',
        weekId: ''
    }

    handleSave = () => {
        var weekId = this.props.weekId
        console.log(weekId)
        console.log(this.state.weekLog)
        this.setState({ ErrMsg: 'Hours Saved Successfully' })
    }
    handleInputChange = async (e) => {
        var weekLog = { ...this.state.weekLog }
        weekLog[e.target.name] = e.target.value
        await this.setState({ weekLog })
        this.totalWeekHours()
    }
    totalWeekHours = () => {
        var m = parseInt(this.state.weekLog.mon) || 0
        var t = parseInt(this.state.weekLog.tue) || 0
        var w = parseInt(this.state.weekLog.wed) || 0
        var th = parseInt(this.state.weekLog.thu) || 0
        var f = parseInt(this.state.weekLog.fri) || 0
        var s = parseInt(this.state.weekLog.sat) || 0
        var su = parseInt(this.state.weekLog.sun) || 0

        var totalHours = m + t + w + th + f + s + su
        this.setState({ totalHours })
    }
    render() {
        var week = this.props.week

        return (
            <div>
                {
                    this.state.ErrMsg && <div class="alert alert-success alert-dismissible fade show" role="alert">
                        <strong>{this.state.ErrMsg}</strong>
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close"
                            onClick={() => { this.setState({ ErrMsg: '' }) }}
                        >
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                }
                <table className='table table-bordered text-center'>

                    <thead>
                        <tr className='table-primary'>
                            <th scope="col"><u>MON</u></th>
                            <th scope="col"><u>TUE</u></th>
                            <th scope="col"><u>WED</u></th>
                            <th scope="col"><u>THU</u></th>
                            <th scope="col"><u>FRI</u></th>
                            <th scope="col"><u>SAT</u></th>
                            <th scope="col"><u>SUN</u></th>
                            <th scope='col' >Total</th>
                        </tr>
                        <tr>
                            {week.map((w) => {
                                var key = moment.utc(w).format('DD-MMM-YY')
                                return (
                                    <th scope="col" key={key}>{moment.utc(w).format('DD-MMM-YY')}
                                        <input
                                            name={key}
                                            value={this.state.weekLog.key}
                                            onChange={e => this.handleInputChange(e)}
                                        />
                                    </th>
                                )
                            })}
                            <th scope="row" className='table-dark'>Hours<input readOnly value='0' value={this.state.totalHours} /></th>
                        </tr>
                    </thead>

                </table>
                <button className='btn btn-primary'
                    onClick={this.handleSave}
                >Save</button>
            </div >
        )
    }
}


export default WeeklyLog
