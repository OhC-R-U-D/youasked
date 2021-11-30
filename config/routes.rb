Rails.application.routes.draw do
  
  resources :answers
  resources :questions
  devise_for :users, controllers: { registrations: "registrations"}
  get '*path', to: 'home#index', constraints: ->(request){ request.format.html? }
  root 'home#index'
end
