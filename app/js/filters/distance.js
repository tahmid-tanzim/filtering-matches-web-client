function distance(Utility) {
    'ngInject';

    return function ({lat, lon}) {
        const my_city = {
            lat: 52.412811,
            lon: -1.778197
        };
        return Utility.getDistanceFromLatLonInKm(lat, lon, my_city.lat, my_city.lon);
    };

}

export default {
    name: 'distance',
    fn: distance
};
