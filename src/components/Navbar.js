import React from 'react'
import { Link } from 'react-router-dom'
import logo from './s_logotm.png'

class Navbar extends React.Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light ">
                    <Link className="navbar-brand" to="/"><img src={logo} alt='logo' /></Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">

                        </ul>

                    </div>

                    <button className='btn btn-outline-success'><i className='user  icon'></i>Login</button>
                </nav>

            </div>
        )
    }
}

export default Navbar