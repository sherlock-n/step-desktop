import React from 'react'
import {Link} from 'react-router-dom'


const Success = () => {
    return (
        <div className='container'>
            <div class="alert alert-success" role="alert">
                Employee Saved Successfully. <Link to="/Employees" class="alert-link">Click Here </Link> to return to Employee page.
</div>
          
        </div>
    )
}

export default Success