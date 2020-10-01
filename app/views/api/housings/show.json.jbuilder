json.set! @housing.id do
    json.extract! @housing, :id, :name, :host_id, :address, :housing_type, :bedrooms, :beds, :baths, :guests, :price, :city, :lat, :lng, :host
    if @housing.photo.attached?
        json.photoUrl url_for(@housing.photo)
    end
end

json.housing do
end

json.user do
    json.set! @host.id do
        json.extract! @host, :first_name, :last_name, :id
    end
end