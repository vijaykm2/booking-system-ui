import React, {Component} from 'react';

class HotelTab extends Component {
    render() {

        return (
            <div id="Hotel" className="w3-container w3-white w3-padding-16 myLink">
                <h3>Find the best hotels</h3>
                <p>Book a hotel with us and get the best fares and promotions.</p>
                <p>We know hotels - we know comfort.</p>
                <p><button className="w3-button w3-dark-grey">Search Hotels</button></p>
            </div>
        );
    }
}

export default HotelTab;