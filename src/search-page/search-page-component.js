import React, {Component, PropTypes} from 'react';
import TextInput from '../custom-components/TextInput';
import NavigationBar from '../custom-components/NavigationBar';
import FlightTab from './flight-tab';
import CarTab from './car-tab';
import HotelTab from './hotel-tab';

class SearchPageComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visibleTab: 'Flight'
        };
    }

    handleVisibleTab = tab => {
        this.setState( {
            visibleTab: tab
        });
    };

    render() {

        return (
            <div>
                <NavigationBar/>
            <header className="w3-display-container w3-content w3-hide-small" style={{maxWidth: 1500}}>
                <img className="w3-image" src="/w3-images/london2.jpg" alt="London" width="1500" height="700"/>


                <div className="w3-display-middle" style={{width:'65%' }}>
                    <div className="w3-bar w3-black">
                        <button className="w3-bar-item w3-button tablink" onClick={ () =>this.handleVisibleTab('Flight')}><i className="fa fa-plane w3-margin-right"></i>Flight</button>
                        <button className="w3-bar-item w3-button tablink" onClick={ ()=>this.handleVisibleTab('Hotel')}><i className="fa fa-bed w3-margin-right"></i>Hotel</button>
                        <button className="w3-bar-item w3-button tablink" onClick={ ()=>this.handleVisibleTab('Car') }><i className="fa fa-car w3-margin-right"></i>Rental</button>
                    </div>
                    {this.state.visibleTab === 'Flight' ? <FlightTab/>: undefined}

                    { this.state.visibleTab === 'Hotel' ? <HotelTab/> : undefined }

                    { this.state.visibleTab === 'Car' ? <CarTab/>: undefined}
                </div>
                <h2>Search Page</h2>
                <TextInput type="text"
                           labelText=" Enter something"
                           required={true}
                           labelIconClasses="fa fa-comment-o"
                           containerDivClasses="w3-col m3"
                           inputClasses="w3-input w3-border"
                />
            </header>
            </div>
        );
    }
}
export default SearchPageComponent;