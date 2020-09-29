class Api::HousingsController < ApplicationController
    def show
        @housing = Housing.find(params[:id])
    end

    def index
        @housings = Housing.all
        render :index
    end

end
