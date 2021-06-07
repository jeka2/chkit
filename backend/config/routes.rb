Rails.application.routes.draw do
  resources :users, only: [:create, :show] do 
    resources :posts, only: [:index, :show, :create, :destroy]
  end

  resources :categories, only: [:show] do
    resources :posts, only: [:index]
  end

  resources :ratings, only: [:create, :update]

  post '/login', to: 'sessions#create'
  post '/logout', to: 'sessions#destroy'

  post '/users/authenticate', to: 'sessions#authenticate'

  get '/categories/:category_id/posts/pages/:page_id', to: 'posts#index'
  
end
