Rails.application.routes.draw do
  get 'auth/:provider/callback', to: 'sessions#create'
  get 'auth/failure', to: redirect('/')
  get 'signout', to: 'sessions#destroy', as: 'signout'
  get 'login', to: 'home#show'
  post 'login', to: 'sessions#create'

  resources :users, only: [:new, :create]

  resources :sessions, only: [:create, :destroy]
  resource :home, only: [:show]

  root to: "home#show"

  namespace :api, defaults: { format: :json } do
    resources :users, only: [ :update, :show ]
  end

  get '/games', to: 'games#index'
end
