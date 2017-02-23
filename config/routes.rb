Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create, :update, :show, :index] do
      resources :feed_items, only: [:index]
    end
    resources :routes, only: [:create, :show, :destroy, :update, :index] do
      resources :comments, only: [:index, :create]
    end
    resources :runs, only: [:create, :show, :destroy, :update, :index] do
      resources :comments, only: [:index, :create]
    end
    resources :feed_items, only: [:index]
    resources :friendships, only: [:index], path: 'friends'
    resources :friendships, only: [:create, :destroy]
    resources :friend_requests, only: [:index, :create, :update]
    resources :comments, only: [:destroy]
  end
end
