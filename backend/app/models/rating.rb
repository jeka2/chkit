class Rating < ApplicationRecord
  belongs_to :user
  belongs_to :post

  def get_tally(post_id)
    all_rating = self.class.where(post_id: post_id)

    positive_ratings = all_ratings.where(rating_type: 'increase').count
    negative_ratings = all_ratings.count - positive_ratings

    positive_ratings - negative_ratings
  end
end
