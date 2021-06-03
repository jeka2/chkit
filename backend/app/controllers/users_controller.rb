class UsersController < ApplicationController 
    def create
        @user = User.new(user_params)
        if @user.save 
            give_token
            render json: { 
                status: 201,
                user: @user
            }
        else
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
                user: @user
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