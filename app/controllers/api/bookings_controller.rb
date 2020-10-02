class Api::BookingsController < ApplicationController
    before_action :ensure_logged_in!, only: [:create]

    def create
        @booking = Booking.new(booking_params)

        if @booking.save
        else
            render json: ['Incomplete Booking'], status: 403
        end
    end

    private

    def booking_params
        params.require(:booking).permit(:start_date, :end_date, :housing_id, :guest_id)
    end
end
