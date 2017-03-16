Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :comments, only: [:destroy]
    resources :feed_items, only: [:index]
    resources :friend_requests, only: [:index, :create, :update]
    resources :friendships, only: [:create, :destroy]
    resources :friendships, only: [:index], path: 'friends'
    resource :session, only: [:create, :destroy]

    resources :routes, only: [:create, :show, :destroy, :update, :index] do
      resources :comments, only: [:index, :create]
    end

    resources :runs, only: [:create, :show, :destroy, :update, :index] do
      resources :comments, only: [:index, :create]
    end

    resources :users, only: [:create, :update, :show, :index] do
      resources :feed_items, only: [:index]
    end
  end
end
