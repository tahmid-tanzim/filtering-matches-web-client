function HTTP($http) {
    'ngInject';

    const service = {};

    service.get = function () {
        return new Promise((resolve, reject) => {
            $http.get('apiPath').success((data) => {
                resolve(data);
            }).error((err, status) => {
                reject(err, status);
            });
        });
    };

    service.matches = function () {
        return {
            matches: [
                {
                    display_name: "Caroline",
                    age: 41,
                    job_title: "Corporate Lawyer",
                    height_in_cm: 153,
                    city: {
                        name: "Leeds",
                        lat: 53.801277,
                        lon: -1.548567
                    },
                    main_photo: "http://thecatapi.com/api/images/get?format=src&type=gif",
                    compatibility_score: 0.76,
                    contacts_exchanged: 2,
                    favourite: true,
                    religion: "Atheist"
                },
                {
                    display_name: "Sharon",
                    age: 47,
                    job_title: "Doctor",
                    height_in_cm: 161,
                    city: {
                        name: "Solihull",
                        lat: 52.412811,
                        lon: -1.778197
                    },
                    main_photo: "http://thecatapi.com/api/images/get?format=src&type=gif",
                    compatibility_score: 0.97,
                    contacts_exchanged: 0,
                    favourite: false,
                    religion: "Islam"
                },
                {
                    display_name: "Natalia",
                    age: 38,
                    job_title: "Project Manager",
                    height_in_cm: 144,
                    city: {
                        name: "Cardiff",
                        lat: 51.481583,
                        lon: -3.17909
                    },
                    main_photo: "http://thecatapi.com/api/images/get?format=src&type=gif",
                    compatibility_score: 0.47,
                    contacts_exchanged: 5,
                    favourite: false,
                    religion: "Christian"
                },
                {
                    display_name: "Marta",
                    age: 55,
                    job_title: "Finance",
                    height_in_cm: 140,
                    city: {
                        name: "Eastbourne",
                        lat: 50.768036,
                        lon: 0.290472
                    },
                    main_photo: "http://thecatapi.com/api/images/get?format=src&type=gif",
                    compatibility_score: 0.95,
                    contacts_exchanged: 0,
                    favourite: false,
                    religion: "Agnostic"
                },
                {
                    display_name: "Maria",
                    age: 43,
                    job_title: "CEO",
                    height_in_cm: 175,
                    city: {
                        name: "London",
                        lat: 51.509865,
                        lon: -0.118092
                    },
                    main_photo: "http://thecatapi.com/api/images/get?format=src&type=gif",
                    compatibility_score: 0.88,
                    contacts_exchanged: 0,
                    favourite: false,
                    religion: "Christian"
                },
                {
                    display_name: "Stephanie",
                    age: 39,
                    job_title: "Project Manager",
                    height_in_cm: 153,
                    city: {
                        name: "London",
                        lat: 51.509865,
                        lon: -0.118092
                    },
                    compatibility_score: 0.87,
                    contacts_exchanged: 4,
                    favourite: false,
                    religion: "Christian"
                },
                {
                    display_name: "Claire",
                    age: 48,
                    job_title: "GP",
                    height_in_cm: 167,
                    city: {
                        name: "London",
                        lat: 51.509865,
                        lon: -0.118092
                    },
                    main_photo: "http://thecatapi.com/api/images/get?format=src&type=gif",
                    compatibility_score: 0.83,
                    contacts_exchanged: 6,
                    favourite: false,
                    religion: "Atheist"
                },
                {
                    display_name: "Colette",
                    age: 39,
                    job_title: "Doctor - Hospital",
                    height_in_cm: 177,
                    city: {
                        name: "Swindon",
                        lat: 51.568535,
                        lon: -1.772232
                    },
                    main_photo: "http://thecatapi.com/api/images/get?format=src&type=gif",
                    compatibility_score: 0.89,
                    contacts_exchanged: 2,
                    favourite: false,
                    religion: "Christian"
                },
                {
                    display_name: "Caroline",
                    age: 43,
                    job_title: "Marketing Consultant",
                    height_in_cm: 160,
                    city: {
                        name: "Oxford",
                        lat: 51.752022,
                        lon: -1.257677
                    },
                    main_photo: "http://thecatapi.com/api/images/get?format=src&type=gif",
                    compatibility_score: 0.91,
                    contacts_exchanged: 1,
                    favourite: false,
                    religion: "Atheist"
                },
                {
                    display_name: "Kate",
                    age: 42,
                    job_title: "Psychologist",
                    height_in_cm: 160,
                    city: {
                        name: "Salisbury",
                        lat: 51.068787,
                        lon: -1.794472
                    },
                    main_photo: "http://thecatapi.com/api/images/get?format=src&type=gif",
                    compatibility_score: 0.97,
                    contacts_exchanged: 10,
                    favourite: false,
                    religion: "Buddhist"
                },
                {
                    display_name: "Katie",
                    age: 40,
                    job_title: "Lawyer",
                    height_in_cm: 148,
                    city: {
                        name: "Weymouth",
                        lat: 50.614429,
                        lon: -2.457621
                    },
                    compatibility_score: 0.94,
                    contacts_exchanged: 0,
                    favourite: false,
                    religion: "Atheist"
                },
                {
                    display_name: "Clare",
                    age: 40,
                    job_title: "Accountant",
                    height_in_cm: 144,
                    city: {
                        name: "Bournemouth",
                        lat: 50.720806,
                        lon: -1.904755
                    },
                    main_photo: "http://thecatapi.com/api/images/get?format=src&type=gif",
                    compatibility_score: 0.9,
                    contacts_exchanged: 8,
                    favourite: false,
                    religion: "Christian"
                },
                {
                    display_name: "Laura",
                    age: 39,
                    job_title: "Lawyer",
                    height_in_cm: 160,
                    city: {
                        name: "Plymouth",
                        lat: 50.376289,
                        lon: -4.143841
                    },
                    main_photo: "http://thecatapi.com/api/images/get?format=src&type=gif",
                    compatibility_score: 0.89,
                    contacts_exchanged: 0,
                    favourite: false,
                    religion: "Christian"
                },
                {
                    display_name: "Katlin",
                    age: 39,
                    job_title: "Barrister",
                    height_in_cm: 153,
                    city: {
                        name: "Inverness",
                        lat: 57.477772,
                        lon: -4.224721
                    },
                    main_photo: "http://thecatapi.com/api/images/get?format=src&type=gif",
                    compatibility_score: 0.87,
                    contacts_exchanged: 0,
                    favourite: true,
                    religion: "Jewish"
                },
                {
                    display_name: "Tracy",
                    age: 39,
                    job_title: "Lawyer",
                    height_in_cm: 153,
                    city: {
                        name: "Aberdeen",
                        lat: 57.149651,
                        lon: -2.099075
                    },
                    main_photo: "http://thecatapi.com/api/images/get?format=src&type=gif",
                    compatibility_score: 0.87,
                    contacts_exchanged: 0,
                    favourite: false,
                    religion: "Christian"
                },
                {
                    display_name: "Angie",
                    age: 50,
                    job_title: "Accountant",
                    height_in_cm: 153,
                    city: {
                        name: "Ayr",
                        lat: 55.458565,
                        lon: -4.629179
                    },
                    main_photo: "http://thecatapi.com/api/images/get?format=src&type=gif",
                    compatibility_score: 0.93,
                    contacts_exchanged: 8,
                    favourite: true,
                    religion: "Atheist"
                },
                {
                    display_name: "Samantha",
                    age: 32,
                    job_title: "Project Manager",
                    height_in_cm: 161,
                    city: {
                        name: "Belfast",
                        lat: 54.607868,
                        lon: -5.926437
                    },
                    main_photo: "http://thecatapi.com/api/images/get?format=src&type=gif",
                    compatibility_score: 0.89,
                    contacts_exchanged: 0,
                    favourite: false,
                    religion: "Christian"
                },
                {
                    display_name: "Elizabeth",
                    age: 41,
                    job_title: "Dentist",
                    height_in_cm: 145,
                    city: {
                        name: "Londonderry",
                        lat: 55.006763,
                        lon: -7.318268
                    },
                    main_photo: "http://thecatapi.com/api/images/get?format=src&type=gif",
                    compatibility_score: 0.83,
                    contacts_exchanged: 4,
                    favourite: true,
                    religion: "Islam"
                },
                {
                    display_name: "Emma",
                    age: 40,
                    job_title: "Banker",
                    height_in_cm: 150,
                    city: {
                        name: "Leeds",
                        lat: 53.801277,
                        lon: -1.548567
                    },
                    main_photo: "http://thecatapi.com/api/images/get?format=src&type=gif",
                    compatibility_score: 0.73,
                    contacts_exchanged: 0,
                    favourite: false,
                    religion: "Christian"
                },
                {
                    display_name: "Diana",
                    age: 44,
                    job_title: "Consultant",
                    height_in_cm: 153,
                    city: {
                        name: "London",
                        lat: 51.509865,
                        lon: -0.118092
                    },
                    main_photo: "http://thecatapi.com/api/images/get?format=src&type=gif",
                    compatibility_score: 0.5,
                    contacts_exchanged: 0,
                    favourite: false,
                    religion: "Atheist"
                },
                {
                    display_name: "Kysha",
                    age: 45,
                    job_title: "Lawyer",
                    height_in_cm: 144,
                    city: {
                        name: "London",
                        lat: 51.509865,
                        lon: -0.118092
                    },
                    compatibility_score: 0.88,
                    contacts_exchanged: 10,
                    favourite: true,
                    religion: "Islam"
                },
                {
                    display_name: "Anne",
                    age: 38,
                    job_title: "Marketing Consultant",
                    height_in_cm: 170,
                    city: {
                        name: "Swindon",
                        lat: 51.568535,
                        lon: -1.772232
                    },
                    main_photo: "http://thecatapi.com/api/images/get?format=src&type=gif",
                    compatibility_score: 0.88,
                    contacts_exchanged: 0,
                    favourite: false,
                    religion: "Jewish"
                },
                {
                    display_name: "Daniela",
                    age: 37,
                    job_title: "Doctor",
                    height_in_cm: 177,
                    city: {
                        name: "Bournemouth",
                        lat: 50.720806,
                        lon: -1.904755
                    },
                    main_photo: "http://thecatapi.com/api/images/get?format=src&type=gif",
                    compatibility_score: 0.76,
                    contacts_exchanged: 0,
                    favourite: false,
                    religion: "Christian"
                },
                {
                    display_name: "Katherine",
                    age: 39,
                    job_title: "Lawyer",
                    height_in_cm: 177,
                    city: {
                        name: "London",
                        lat: 51.509865,
                        lon: -0.118092
                    },
                    main_photo: "http://thecatapi.com/api/images/get?format=src&type=gif",
                    compatibility_score: 0.99,
                    contacts_exchanged: 50,
                    favourite: true,
                    religion: "Atheist"
                },
                {
                    display_name: "Susan",
                    age: 25,
                    job_title: "Project Manager",
                    height_in_cm: 166,
                    city: {
                        name: "Harlow",
                        lat: 51.772938,
                        lon: 0.10231
                    },
                    main_photo: "http://thecatapi.com/api/images/get?format=src&type=gif",
                    compatibility_score: 0.88,
                    contacts_exchanged: 0,
                    favourite: false,
                    religion: "Christian"
                }
            ]
        };
    };

    return service;

}

export default {
    name: 'HTTP',
    fn: HTTP
};
