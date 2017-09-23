function Utility() {
    'ngInject';

    const service = {};

    function deg2rad(deg) {
        return deg * (Math.PI / 180)
    }

    service.getDistanceFromLatLonInKm = function (lat1, lon1, lat2, lon2, dp = 1) {
        var R = 6371; // Radius of the earth in km
        var dLat = deg2rad(lat2 - lat1);  // deg2rad below
        var dLon = deg2rad(lon2 - lon1);
        var a =
                Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
                Math.sin(dLon / 2) * Math.sin(dLon / 2)
            ;
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c; // Distance in km
        return d.toFixed(dp);
    };


    var lat20 = 50.768036,
        lon20 = 0.290472,
        lat10 = 51.509865,
        lon10 = -0.118092;

    /* 87.27340233087423 */
    console.log("Distance in km: ", service.getDistanceFromLatLonInKm(lat10, lon10, lat20, lon20));
    return service;

}

export default {
    name: 'Utility',
    fn: Utility
};
