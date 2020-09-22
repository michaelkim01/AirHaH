class UsersController < ApplicationController
    def show
        @user = User.find(params[:id])
    end

    def new
        @user = User.new
    end

    def create
        @user = User.new(user_params)

        if @user.save
        else
            flash[:errors] = @user.errors.full_messages
        end
    end

    private

    def user_params
        params.require(:user).permit(:email, :password)
    end
end