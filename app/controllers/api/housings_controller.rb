class HousingsController < ApplicationController
    def show
        @housing = Housing.find(params[:id])
    end


end
