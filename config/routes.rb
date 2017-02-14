Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create]
  end
end
