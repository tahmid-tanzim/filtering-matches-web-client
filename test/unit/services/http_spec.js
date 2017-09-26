describe('Unit: HTTP Service', function () {

    let http, service;

    beforeEach(function () {
        // instantiate the app module
        angular.mock.module('app');

        // mock the service
        angular.mock.inject(($httpBackend, HTTP) => {
            http = $httpBackend;
            service = HTTP;
        });
    });

    it('should exist', function () {
        expect(service).toBeDefined();
    });

    it('should retrieve data', function (done) {
        http.expect('GET', 'http://localhost:8080/api/v1/person?age=40&age=60&compatibility_score=80&compatibility_score=99&distance_index=1&favourite=false&has_photo=true&height=135&height=151&in_contact=true').respond(200, { matches: [ Object({ display_name: 'Clare', age: 40, job_title: 'Accountant', height_in_cm: 144, city: Object({ name: 'Bournemouth', lat: 50.720806, lon: -1.904755, distance_in_km: 192.12345678 }), main_photo: 'http://thecatapi.com/api/images/get?format=src&type=gif', compatibility_score: 0.9, contacts_exchanged: 8, favourite: false, religion: 'Christian' }) ] });

        var filter = {
            age: [40, 60],
            compatibility_score: [80, 99],
            height: [135, 151],
            distance_index: 1,
            favourite: false,
            has_photo: true,
            in_contact: true
        };

        service.get(filter).then(({data}) => {
            expect(data).toEqual({
                    matches: [
                        {
                            display_name: 'Clare',
                            age: 40,
                            job_title: 'Accountant',
                            height_in_cm: 144,
                            city: {
                                name: 'Bournemouth',
                                lat: 50.720806,
                                lon: -1.904755,
                                distance_in_km: 192.12345678
                            },
                            main_photo: 'http://thecatapi.com/api/images/get?format=src&type=gif',
                            compatibility_score: 0.90,
                            contacts_exchanged: 8,
                            favourite: false,
                            religion: 'Christian'
                        }
                    ]
                }
            );
        }).catch((error) => {
            expect(error).toBeUndefined();
        }).then(done);

        http.flush();
    });
});
