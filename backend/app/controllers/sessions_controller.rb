class SessionsController < ApplicationController
    skip_before_action :verify_authenticity_token
    def create
        @user = User.find_by(username: session_params[:username])

        if @user && @user.authenticate(session_params[:password])
            render json: {
                logged_in: true,
                user: @user,
                token: token_encode({ user_id: @user.id })
            }
        else
            render json: {
                status: 401,
                errors: ['no such user']
            }
        end
    end

    def destroy
        render json: {
            status: 200,
            logged_out: true
        }
    end

    def authenticate
        user_id = retrieve_user_from_token(params[:token]) if params[:token]
        user = User.find_by_id(user_id)

        if user
            render json: {
                status: 200,
                user: user.attributes_to_send
            }
        else
            render json: {
                status: 400,
                errors: ['Something went wrong']
            }
        end
    end

private
    def session_params
        params.require(:user).permit(:username, :password)
    end

end