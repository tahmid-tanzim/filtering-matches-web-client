function distance(Utility) {
    'ngInject';

    return function ({lat, lon}) {
        const myCity = {
            lat: 52.412811,
            lon: -1.778197
        };
        return Utility.getDistanceFromLatLonInKm(lat, lon, myCity.lat, myCity.lon);
    };

}

export default {
    name: 'distance',
    fn: distance
};
