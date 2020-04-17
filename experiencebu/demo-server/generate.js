module.exports = function(){
    var faker = require("faker");
    var _ = require("lodash");
    return {
        clubs: _.times(100, function(n) {
            return {
                id:n,
                name:faker.company.companyName(),
                picture:faker.image.image(),
                description:faker.lorem.sentences(),
                requirements: "N/A",
                eboard: "N/A",
                time: "12:00:00",
                location: faker.address.streetAddress(),
                contact: faker.internet.email(),
                tags: "N/A"
            }
        }),
        events:  _.times(100, function(n) {
            return {
                id:n,
                name: faker.company.companyName(),
                affiliation: n,
                picture: faker.image.image(),
                description: faker.lorem.sentences(), 
                time: "12:00:00",
                location: faker.address.streetAddress(),
                type: "N/A",
                tags: "N/A",
                contact: faker.internet.email()
            }
        })
    }
}
