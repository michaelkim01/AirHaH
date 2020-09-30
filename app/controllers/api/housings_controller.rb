class Api::HousingsController < ApplicationController
    def show
        @housing = Housing.find(params[:id])
        render :show
    end

    def index
        @housings = Housing.all
        render :index
    end

end
