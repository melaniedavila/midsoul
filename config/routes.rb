Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create, :update, :show, :index] do
      resources :feed_items, only: [:index]
    end # /users/:id/feed_items
    resources :routes, only: [:create, :show, :destroy, :update, :index]
    resources :runs, only: [:create, :show, :destroy, :update, :index]
    resources :feed_items, only: [:index]
    resources :friendships, only: [:index], path: 'friends'
    resources :friendships, only: [:create, :destroy]
    resources :friend_requests, only: [:index, :create, :update]
  end
end
