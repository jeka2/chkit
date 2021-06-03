class UsersController < ApplicationController
    skip_before_action :verify_authenticity_token 
    def create
        @user = User.new(user_params)
        if @user.save
            give_token
            render json: { 
                status: 201,
                user: @user.slice(:created_at, :email, :id, :username),
                token: token_encode({ user_id: @user.id })
            }
        else
            binding.pry
            render json: {
                status: 500,
                errors: @user.errors.full_messages
            }
        end
    end

    def show
        #binding.pry
        @user = User.find_by_id(params[:id])
        if @user
            render json: {
                user: @user,
                token: token_encode(user_token: "#{@user.id}#{@user.password_digest}")
            }
        else
            render json: {
                status: 500,
                errors: ['no such user']
            }
        end
    end

private 

    def user_params 
        params.require(:user).permit(:username, :password, :password_confirmation)
    end
end