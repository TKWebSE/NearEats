Rails.application.routes.draw do
  # mount_devise_token_auth_for 'User', at: 'auth', controllers: {
  #         registrations: 'api/v1/auth/registrations'
  #     }
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do

      resources :users,:foods,:orders

      mount_devise_token_auth_for 'User', at: 'auth', controllers: {
          registrations: 'api/v1/auth/registrations'
          # sessions: 'api/v1/devise_token_auth/sessions'
      }

      # post '/signup', to: 'users#signup'

      # post '/login', to: 'sessions#login'
      # delete '/logout', to: 'sessions#logout'
      # get '/logged_in', to: 'sessions#logged_in?'
    end
  end
end
