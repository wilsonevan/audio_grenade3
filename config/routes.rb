Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api do
    resources :orders
    resources :products
    # resources :users
    put 'add_to_cart', to: 'users#add_to_cart'
  end

  get '*other', to: 'static#index'
  
end
