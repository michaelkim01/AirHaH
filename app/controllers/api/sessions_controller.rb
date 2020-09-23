class Api::SessionsController < ApplicationController
    before_action :ensure_logged_in!, only: [:destroy]

    def new
    end

    def create
        @user = User.find_by_credentials(
            params[:user][:email],
            params[:user][:password]
        )

        if @user
            log_in!(@user)
        else
            # flash[:errors] = ['Invalid credentials']
            render json: ['Invalid credentials'], status: 403
        end
    end

    def destroy
        log_out!
    end
end