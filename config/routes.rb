Rails.application.routes.draw do
  # mount_devise_token_auth_for 'User', at: 'auth', controllers: {
  #         registrations: 'api/v1/auth/registrations'
  #     }
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      
      resources :users do
        get 'sendAuthCodeChangeEmail', to: 'users#send_change_email'
        get 'sendAuthCodeChangePassword', to: 'users#send_change_password'

        put 'updateEmail', to: 'users#update_email'
        put 'updatePassword', to: 'users#update_password'
      end
      
      resources :foods do
        get 'myfoods', to: 'foods#myfoods'
      end

      resources :orders do
        get 'taskIndex', to: 'orders#taskIndex'
        get 'taskShow', to: 'orders#taskShow'
        put 'taskUpdate', to: 'orders#taskUpdate'
        put 'updateValuation', to: 'orders#updateValuation'
      end

      mount_devise_token_auth_for 'User', at: 'auth', controllers: {
          passwords:     'api/v1/auth/passwords',
          registrations: 'api/v1/auth/registrations',
      }

      namespace :auth do
        resources :sessions, only: %i[index]
      end
      
    end
  end
end
