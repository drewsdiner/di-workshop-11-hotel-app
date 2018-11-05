class Hotel {
    constructor(name, city){
        this.name = name
        this.city = city 
        this.reviews = []
        
    }

    reviewCount(){
        return 0
    }

    rating(){
        return 0
    }

    ratingAsStars(){
        if (this.reviewCount()==0){
            return ''
        }
    }

    urlSlug(){
        let slug = this.name + '_' + this.city
        slug = slug.replace(/ /g, '_').toLowerCase()
        return slug
    }

    //urlSlug() {
        //var underscoredName = this.name.split('').join('')
        //var underscoredCity = this.name.split('').join('')
        //return underscored_name + '_' + this.city
        //return stringToReturn.toLowerCase()
    //}

}

module.exports = Hotel