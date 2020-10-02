@housings.each do |housing|
    json.set! housing.id do
        json.extract! housing, :id, :name, :host_id, :address, :housing_type, :bedrooms, :beds, :baths, :guests, :price, :city, :lat, :lng, :host, :reviews, :bookings
        json.average_rating housing.average_rating.round(2)
        if housing.reviews
            housing.reviews.each do |review|
                json.set! review.id do
                    json.extract! review, :author
                end
            end
        end
        if housing.bookings
            housing.bookings.each do |booking|
                json.set! booking.id do
                    json.extract! booking, :guest
                end
            end
        end
        if housing.photo.attached?
            json.photoUrl url_for(housing.photo)
        end
    end
end