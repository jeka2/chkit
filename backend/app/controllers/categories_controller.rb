class CategoriesController < ApplicationController
    extend FriendlyId
    friendly_id :name, use: :slugged
    def show
        binding.pry
    end
end