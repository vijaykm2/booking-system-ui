import React, {Component } from 'react';

class CarTab extends Component {
    render() {
        return (
            <div id="Car" className="w3-container w3-white w3-padding-16 myLink">
                <h3>Best car rental in the world!</h3>
                <p><span className="w3-tag w3-deep-orange">DISCOUNT!</span> Special offer if you book today: 25% off anywhere in the world with CarServiceRentalRUs</p>
                <input className="w3-input w3-border" type="text" placeholder="Pick-up point"/>
                <p><button className="w3-button w3-dark-grey">Search Availability</button></p>
            </div>
        );
    }
}
export default CarTab;