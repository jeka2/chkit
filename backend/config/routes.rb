Rails.application.routes.draw do
  resources :users, only: [:create, :show]

  post '/login', to: 'sessions#create'
  post '/logout', to: 'sessions#destroy'
  
end
