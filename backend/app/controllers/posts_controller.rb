class PostsController < ApplicationController
    #before_action :filter_language

    def index 
        category = Category.friendly.find_by(name: params[:category_id])
        page = params[:page_id]
        item_offset = (page.to_i - 1) * 10 

        posts = category.posts.offset(item_offset).first(10)

    
        if category 
            render json: {
                posts: posts
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