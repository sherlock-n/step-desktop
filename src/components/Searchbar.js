import React from 'react'

class Searchbar extends React.Component {

    render() {
        return (
            <div>

                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search Employee"
                        onChange={e => this.props.onChange(e)}

                    />

                   { //<div className="input-group-append">
                       // <button className="btn btn-outline-primary" type="button" id="button-addon2">Search</button>
                    //</div>
                }
                </div>

            </div>
        )
    }

}

export default Searchbar