import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getEmployee } from '../services/Employee'


class Userprofile extends React.Component {
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
        return (
            <div class="card ">
                <div class="card-header">
                    <Tabs >
                        <TabList >
                            <Tab>Personal</Tab>
                            <Tab>Status </Tab>
                            <Tab>Client </Tab>
                            <Tab>Employement </Tab>
                        </TabList>

                        <TabPanel>
                            <h2>Personal content 1</h2>
                        </TabPanel>
                        <TabPanel>
                            <h2>Status content 2</h2>
                        </TabPanel>
                        <TabPanel>
                            <h2>Client content 1</h2>
                        </TabPanel>
                        <TabPanel>
                            <h2>Employement content 1</h2>
                        </TabPanel>
                    </Tabs>
                </div>


            </div>


        )
    }

    renderImage = () => {
        return (
            <div class="card-group ">
                <div class="card" style={{ width: "8rem" }}>
                    <img src="./admin.jpg" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">ADMIN</h5>
                        <p class="card-text">Senior Developer at SOME COMPANY.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div >
        )
    }
    render() {
        return (
            <div className='container mt-4'>
                <div class="card-group">
                    <div class="card col-3">
                        <img src="./download.jpeg" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title"><u>ADMIN </u></h5>
                            <p class="card-text">Welcome</p>
                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
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


export default Userprofile
