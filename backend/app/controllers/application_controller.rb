class ApplicationController < ActionController::Base
    #skip_before_action :verify_authenticity_token


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

    def token_encode(payload, exp = 72.hours.from_now)
        payload[:exp] = exp.to_i
        JWT.encode(payload, Rails.application.secrets.secret_key_base)
    end

    def token_decode(token)
        JWT.decode(token, Rails.application.secrets.secret_key_base)[0]
    end

    def retrieve_user_from_token(token)
        begin
            user_id = token_decode(token)["user_id"]
        rescue Exception => error
            return nil
        else
            return user_id
        end
    end

    helper_method :give_token, :logged_in?, :current_user, :authorized?, :token_encode, :token_decode,
        :retrieve_user_from_token

end
