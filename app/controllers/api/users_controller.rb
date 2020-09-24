class Api::UsersController < ApplicationController
    def show
        @user = User.find(params[:id])
        
    end

    def create
        @user = User.new(user_params)

        if @user.save
            log_in!(@user)
        else
            render json: @user.errors.full_messages, status: 403
        end
    end

    private

    def user_params
        params.require(:user).permit(:first_name, :last_name, :birthdate, :email, :password)
    end
end