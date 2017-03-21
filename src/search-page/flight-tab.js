import React, {Component } from 'react';


class FlightTab extends Component {
    render() {

        sdsdss=sd+sdsd
        return (
            <div id="Flight" className="w3-container w3-white w3-padding-16 myLink">
                <h3>Travel the world with us</h3>
                <div className="w3-row-padding" style={{margin:'0 -16px'}}>
                    <div className="w3-half">
                        <label>From</label>
                        <input className="w3-input w3-border" type="text" placeholder="Departing from"/>
                    </div>
                    <div className="w3-half">
                        <label>To</label>
                        <input className="w3-input w3-border" type="text" placeholder="Arriving at"/>
                    </div>
                </div>
                <p><button className="w3-button w3-dark-grey">Search and find dates</button></p>
            </div>
        );
    }
}

export default FlightTab;