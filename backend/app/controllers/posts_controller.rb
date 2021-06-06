class PostsController < ApplicationController
    #before_action :filter_language

    def index 
        category = Category.friendly.find_by(name: params[:category_id])

        if category 
            render json: {
                posts: category.posts
            } 
        else
            render json: {
                errors: ["No Such Category"]
            }
        end
    end

    def create
        # gonna need an authentication
    end

    def show

    end

    def destroy 
        # gonna need an authentication
    end
end