const chai = require('chai');
const expect = chai.expect; // is the function for expect

var Review = require('../models/Review') //required review class

describe('Review', function() {
    
    it('this should show review comments and ratings', function (){
    var review1 = new Review(5, "Excellent hotel, very clean", "2018-12-17")
    expect(review1.rating).to.equal(5)
    expect(review1.comment).to.equal("Excellent hotel, very clean")
    expect(review1.date).to.equal("2018-12-17")
    })
    
    it('should return the correct amount of stars for the rating', () =>{
        var review1 = new Review(3, "Excellent hotel, very clean", "2018-12-17")
        expect(review1.ratingAsStars()).to.equal('⭐️⭐️⭐️')
    })

    it('this should show review comments and ratings', function (){
        var review2 = new Review(1, "Terrible hotel, smelled of mice", "2018-01-01")
        expect(review2.ratingAsStars()).to.equal('⭐️')

    })
    


})