Rails.application.routes.draw do
  # mount_devise_token_auth_for 'User', at: 'auth', controllers: {
  #         registrations: 'api/v1/auth/registrations'
  #     }
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do

      resources :guests do
        post 'activate', to: 'guests#activate'        
      end

      resources :users do
        get 'fetchCurrentUser', to: 'users#fetchCurrentUser'
        get 'sendAuthCodeChangeEmail', to: 'users#send_change_email'
        get 'sendAuthCodeChangePassword', to: 'users#send_change_password'

        post 'activate', to: 'users#activate'
        put 'updateEmail', to: 'users#update_email'
        put 'updatePassword', to: 'users#update_password'
      end
      
      resources :foods do
        get 'myfoods', to: 'foods#myfoods'
        put 'buyfood', to: 'foods#buyfood'
        put 'updateNoImageFood', to: 'foods#updateNoImageFood'
        delete 'destroyAllFoodForOneUser', to: 'foods#destroyAllFoodForOneUser'
      end

      resources :orders do
        get 'taskIndex', to: 'orders#taskIndex'
        get 'taskShow', to: 'orders#taskShow'
        put 'taskUpdate', to: 'orders#taskUpdate'
        put 'updateValuation', to: 'orders#updateValuation'
      end

      get 'productIndex', to: 'stripes#product_index'
      post 'checkout', to: 'stripes#checkout'
      post 'webhook', to: 'stripes#webhook'

      mount_devise_token_auth_for 'User', at: 'auth', controllers: {
          # passwords:     'api/v1/auth/passwords',
          sessions: 'api/v1/auth/sessions',
          registrations: 'api/v1/auth/registrations',
      }

      # devise_scope  :auth do
      #   resources :sessions, only: [:index,:create]
      # end
      
    end
  end
end
