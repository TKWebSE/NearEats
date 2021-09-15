Rails.application.routes.draw do
  # mount_devise_token_auth_for 'User', at: 'auth', controllers: {
  #         registrations: 'api/v1/auth/registrations'
  #     }
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      resources :users
      resources :foods do
        get 'searchIndex', to: 'foods#searchIndex'
        get 'myfoods', to: 'foods#myfoods'
      end

      resources :orders do
        get 'taskIndex', to: 'orders#taskIndex'
        get 'taskShow', to: 'orders#taskShow'
        put 'taskUpdate', to: 'orders#taskUpdate'
        put `updateValuation`, to: `orders#updateValuation`
      end

      mount_devise_token_auth_for 'User', at: 'auth', controllers: {
          registrations: 'api/v1/auth/registrations'
      }

      namespace :auth do
        resources :sessions, only: %i[index]
      end
      
    end
  end
end
