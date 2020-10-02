class Api::HousingsController < ApplicationController
    def show
        @housing = Housing.find(params[:id])
        @host = @housing.host
        @reviews = @housing.reviews
        render :show
    end

    def index
        @housings = Housing.all
        render :index
    end

end
