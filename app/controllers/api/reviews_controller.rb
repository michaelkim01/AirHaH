class ReviewsController < ApplicationController
    before_action :ensure_logged_in!, only: [:create]

    def create
        @review = Review.new(review_params)

        if @review.save
        else
            render json: ['Incomplete Review'], status: 403
        end
    end

    private

    def review_params
        params.require(:review).permit(:rating, :body, :housing_id, :author_id)
    end
end
