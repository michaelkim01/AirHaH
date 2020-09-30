@housings.each do |housing|
    json.set! housing.id do
        json.extract! housing, :id, :name, :host_id, :address, :housing_type, :bedrooms, :beds, :baths, :guests, :price, :host
        if housing.photo.attached?
            json.photoUrl url_for(housing.photo)
        end
    end
end