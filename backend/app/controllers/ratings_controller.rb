class RatingsController < ApplicationController
    skip_before_action :verify_authenticity_token
    def create
        token = params[:token]
        user_id = retrieve_user_from_token(token)
        post = Post.find(params["post_id"])
        if user_id
            rating = Rating.find_by(user_id: user_id, post_id: params[:post_id])
            if rating 
                if rating.rating_type == 'increase'
                    if params[:type] == 'decrease'
                        post.update(score: post.score - 1)
                        rating.destroy
                    end
                else
                    if params[:type] == 'increase'
                        rating.destroy
                        post.update(score: post.score + 1)
                    end
                end
            else
                Rating.create(user_id: user_id, post_id: params[:post_id], rating_type: params[:type])
                params[:type] == 'increase' ? post.update(score: post.score + 1) : post.update(score: post.score - 1)
            end
        render json: {
            status: 200,
            post_id: post.id,
            post_score: post.score
        }
        else
            render json: {
                status: 400,
                errors: ['You are not allowed to do this']
            }
        end
    end

    def update
        binding.pry
    end
end