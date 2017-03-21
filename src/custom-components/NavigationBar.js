/**
 * Created by vijay on 3/20/17.
 */
import React from 'react';

const NavigationBar = props => {
    return (
        <div className="w3-bar w3-white w3-border-bottom w3-xlarge">
            <a href="#" className="w3-bar-item w3-button w3-text-red w3-hover-red"><b><i className="fa fa-map-marker w3-margin-right"></i>Logo</b></a>
            <a href="#" className="w3-bar-item w3-button w3-right w3-hover-red w3-text-grey"><i className="fa fa-search"></i></a>
        </div>
    );
};

export default NavigationBar;