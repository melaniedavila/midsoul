Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create, :update, :show]
    resources :routes, only: [:create, :show, :destroy, :update, :index]
    resources :runs, only: [:create, :show, :destroy, :update, :index]
    resources :feeds, only: [:show]
  end
end
