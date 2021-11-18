Rails.application.routes.draw do

  get '*path', to: 'home#index', constraints: ->(request){ request.format.html? }
  resources :answers
  resources :questions
  devise_for :users
  root 'home#index'
end
