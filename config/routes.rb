Rails.application.routes.draw do
  root to: 'users#index'
  
  resources :users
  resources :messages
  resources :chatrooms
  
  # Serve websocket cable requests in-process
  mount ActionCable.server => '/cable'
end
