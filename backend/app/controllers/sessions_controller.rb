class SessionsController < ApplicationController
    skip_before_action :verify_authenticity_token
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

    def authenticate
        if logged_in?
            token_decode(params[:token])
            # token decode should return proper user id
            # then see if current_users session_id matches
        else
            render json: {
                status: 400,
                errors: ['Please Log In']
            }
        end
    end

private
    def session_params
        params.require(:user).permit(:username, :password)
    end
end