const chai = require('chai');
const expect = chai.expect; // is the function for expect

var Hotel = require('../models/hotel') //required hotel class

describe('Hotel', function () {

    it('sets the name attribute from its inputs', function () {
        var hotel = new Hotel("Hilton Metropole", "London")
        expect(hotel.name).to.equal('Hilton Metropole')
        expect(hotel.city).to.equal('London')
        expect(hotel.reviews).to.deep.equal([]) //adding to.deep to equal when it comes to Arrays
    })

    it('returns 0 when there are no reviews', function () {
        var hotel = new Hotel("Hilton Metropole", "London")
        var result = hotel.reviewCount() //to verify method
        expect(result).to.equal(0) //verifying

    })

    it('returns 0 where there are no ratings', function () {
        var hotel = new Hotel("Hilton Metropole", "London")
        var result = hotel.rating()
        expect(result).to.equal(0)
    })

    it('should return no stars when there are no reviews', function(){
        var hotel = new Hotel("Hilton Metropole", "London")
        expect(hotel.ratingAsStars()).to.equal('')
    })

    it('should return the hotel name and location with the underscore instead of space', ()=> {
        var hotel = new Hotel("Hilton Metropole", "London")
        expect(hotel.urlSlug()).to.equal('hilton_metropole_london')

    })

    it('should return the hotel name and location with the underscore instead of space', ()=> {
        var hotel = new Hotel("one two three", "four five six")
        expect(hotel.urlSlug()).to.equal('one_two_three_four_five_six')

    })

    


});