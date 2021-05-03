Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      resources :restaurants do
        resources :foods
      end
      resources :foods,only: [:index, :show, :new, :create, :destroy, :edit, :update] do
      end
    end
  end
end
