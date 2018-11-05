const chai = require('chai');
const expect = chai.expect; // is the function for expect

var Hotel = require('../models/hotel') //required hotel class

describe('Hotel', function () {
    describe('constructor', function () {
        it('sets the name attribute from its inputs', function () {
            var hotel = new Hotel("Hilton Metropole", "London")
            expect(hotel.name).to.equal('Hilton Metropole')

        })

        it('sets the city attribute from its inputs', function () {
            var hotel = new Hotel("Hilton Metropole", "London")
            expect(hotel.city).to.equal('London')
        })

        it('sets the review attribute to an empty array', function () {
            var hotel = new Hotel("Hilton Metropole", "London")
            expect(hotel.reviews).to.deep.equal([]) //adding to.deep to equal when it comes to Arrays
        })

    })

    //describe block

    describe('reviewCount', function(){
        it('returns 0 when there are no reviews', function(){
            var hotel = new Hotel("Hilton Metropole", "London")
            var result = hotel.reviewCount() //to verify method
            expect(result).to.equal(0) //verifying

        })

    describe('rating', function(){
        it('returns 0 where there are no ratings', function(){
            var hotel = new Hotel("Hilton Metropole", "London")
            var result = hotel.rating()
            expect(result).to.equal(0)
        })
    })

    })

});