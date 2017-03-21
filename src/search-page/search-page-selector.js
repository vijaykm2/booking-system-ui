import { createSelector } from 'reselect';

const locationsList = state => state !== undefined ? state.locations : [];

const getLocations = () => {
    return createSelector([locationsList], locations => {
        return locations;
    });
};
export default getLocations;