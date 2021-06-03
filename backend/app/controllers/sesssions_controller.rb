class SessionsController < ApplicationController
    def create
        @user = User.find_by(username: session_params[:username])

        if @user && @user.authenticate(session_params[:password])
            give_token
            render json: {
                logged_in: true,
                user: @user
            }
        else
            render json: {
                status: 401,
                errors: ['no such user']
            }
        end
    end

    def destroy
        revoke_token
        render json: {
            status: 200,
            logged_out: true
        }
    end

private
    def session_params
        params.require(:user).permit(:username, :password)
    end
end