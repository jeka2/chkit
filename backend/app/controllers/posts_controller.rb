class PostsController < ApplicationController
    #before_action :filter_language

    def index 
        category = Category.friendly.find_by(name: params[:category_id])
        page = params[:page_id]
        item_offset = (page.to_i - 1) * 10 

        posts = category.posts.offset(item_offset)
        posts_to_send = posts.first(10)

        number_of_pages = posts.count / 10 + 1
    
        if category 
            render json: {
                posts: posts_to_send,
                pages: number_of_pages
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
        post = Post.find(params[:id])

        if post
            render json: {
                post: post
            }
        else
            render json: {
                errors: ['Something went wrong']
            }
        end
    end

    def destroy 
        # gonna need an authentication
    end
end