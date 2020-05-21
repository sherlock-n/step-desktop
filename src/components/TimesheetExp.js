import React from 'react'
import Calendar, { MonthView, YearView } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import WeeklyLog from './WeeklyLog'
import moment from 'moment'

class Timesheet extends React.Component {
    state = {
        date: new Date(),
        week: [],
        weekStart: '',
        ErrMsg: '',
        showLog: false,
        showCalender: true,
        weekNumber: '',
        button: false,

    }

    handleWeekNumber = async (weekNumber, date) => {
        await this.setState({ weekNumber, date })
        this.createStartDateforLog()
    }
    createStartDateforLog = () => {
        var week = []
        var date = this.state.date
        function addDays(date, days) {
            var result = new Date(date);
            result.setDate(result.getDate() + days);
            return result;
        }
        for (var i = 0; i <= 6; i++) {
            week.push(addDays(date, i))
        }
        this.setState({ weekStart: date, week, ErrMsg: '', showLog: true, showCalender: false, button: true })
    }
    handleClickDay = () => {
        this.setState({ ErrMsg: 'Please Select Week Number - Not The Date!!!', showLog: false })
    }
    handleButton = () => {
        this.setState({ showCalender: true, button: false, showLog: false })
    }
    handlePreviousWeek = async () => {
        var date = new Date()
        function addDays(date) {
            var result = new Date(date);
            result.setDate(result.getDate() - 7);
            return result;
        }
        date = addDays(this.state.date)
        var weekNumber = this.state.weekNumber-1
        await this.setState({ date, weekNumber })
        this.createStartDateforLog()

    }
    handleNextWeek = async () => {
        var date = new Date()
        function addDays(date) {
            var result = new Date(date);
            result.setDate(result.getDate() + 7);
            return result;
        }
        date = addDays(this.state.date)
        var weekNumber = this.state.weekNumber+1
        await this.setState({ date,weekNumber })
        this.createStartDateforLog()
    }
    render() {
        var result = new Date(this.state.weekStart);
        const weekEnd = result.setDate(result.getDate() + 6);
        var weekId = this.state.weekNumber +
            moment.utc(this.state.weekStart).format('YYYY')
           
        return (
            <div className='container mt-3'>
                <div class="alert alert-secondary" role="alert">
                    <b>Timesheet</b>
                </div>
                {this.state.ErrMsg && <div class="alert alert-danger" role="alert">
                    <strong>{this.state.ErrMsg}</strong>
                </div>
                }
                {this.state.showCalender && <span class="badge badge-primary">Select Week Number </span>}
                {
                    this.state.showCalender && <Calendar className='mb-3'
                        onChange={this.onChange}
                        value={this.state.date}
                        onClickWeekNumber={this.handleWeekNumber}
                        showWeekNumbers={true}
                        onClickDay={this.handleClickDay}
                    />
                }

                <div class="container">
                    <div class="row">
                        <div class="col-sm-2 mt-2">
                            {this.state.button && 
                               
                              
                                <button className='btn  btn-link  mb-3'
                                onClick={this.handleButton}
                            > <i className='calendar alternate outline icon'></i>Calendar </button>
                            
                        }
                        </div>

                        {this.state.button && <button className='btn btn-link btn-sm mb-3'
                            onClick={this.handlePreviousWeek}
                        > <i className='backward icon'></i>Previous Week</button>}

                        <div class="col-sm">
                            {this.state.button &&
                                <div class="alert alert-info text-center" role="alert">

                                    <strong>
                                        <div class="container">
                                            <div class="row">
                                                <div class="col-sm">

                                                    <i className='angle  left icon'></i>{moment.utc(this.state.weekStart).format('DD/MMM/YYYY')}
                                                </div>
                                    --
                                      <div class="col-sm">
                                                    {moment.utc(weekEnd).format('DD/MMM/YYYY')}<i className='angle  right icon'></i>
                                                </div>
                                            </div>
                                        </div>
                                    </strong>
                                </div>
                            }
                        </div>

                        {this.state.button && <button className='btn btn-link btn-sm mb-3'
                            onClick={this.handleNextWeek}
                        > <i className='forward icon'></i>Next Week</button>}

                    </div>
                </div>

                {
                    this.state.showLog && <WeeklyLog
                        week={this.state.week}
                        weekId={this.state.weekNumber+moment.utc(this.state.weekStart).format('YYYY')}

                    />
                }
            </div>
        )
    }
}

export default Timesheet