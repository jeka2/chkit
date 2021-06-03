class ApplicationController < ActionController::Base
    skip_before_action :verify_authenticity_token

    def give_token 
        session[:user_id] = @user.id
    end

    def logged_in?
        !!session[:user_id]
    end 

    def current_user 
        @current_user ||= User.find(session[:user_id]) if session[:user_id]
    end

    def authorized?
        @user == current_user
    end

    def revoke_token 
        session[:user_id] = nil
    end

    helper_method :give_token, :logged_in?, :current_user, :authorized?
end
