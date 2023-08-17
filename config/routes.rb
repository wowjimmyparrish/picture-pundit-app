Rails.application.routes.draw do
  resources :movies, only: [:show, :index, :create, :destroy] do
    resources :reviews, only: [:show, :index]
end

resources :reviews

resources :users do
    resources :movies, only: [:show, :index] 
end


  



 post "/signup", to: "users#create"
 get "/me", to: "users#show"
 post "/login", to: "sessions#create"
 delete "/logout", to: "sessions#destroy"
 



  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end
