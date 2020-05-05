import React from 'react';

import './Location.css';

function Location(props) {
    return( <div className="Location" >
                <p className="font-weight-bold">{props.location}</p>
                <p className="font-weight-light">{props.code}</p>
            </div>)
}

export default Location;