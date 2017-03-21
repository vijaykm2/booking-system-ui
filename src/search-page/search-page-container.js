/**
 * Created by vijay on 3/14/17.
 */

import { connect } from 'react-redux';
import  getLocations from './search-page-selector';
import SearchPageComponent from './search-page-component';
import {getLocationsList} from './search-page-actions';

const makeMapStateToProps = () => {
    const locations = getLocations();
    const mapStateToProps = (state, props )=> {
        return {
            locationsList : locations(state, props)
        };
    };
    return mapStateToProps;
};

const mapDispatchToProps = dispatch => {
    return {
        getLocationsList: () => {
            dispatch(getLocationsList());
        }
    };
};

const SearchPageContainer = connect(makeMapStateToProps, mapDispatchToProps)(SearchPageComponent);

export default SearchPageContainer;
