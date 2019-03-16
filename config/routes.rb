Rails.application.routes.draw do
  root "homes#index"
  get "/index", to: "homes#index"
  get "/about", to: "homes#about"

  get "/signup",to: "users#new"
  post "/signup",to: "users#create"

  get "/signin" ,to: "sessions#new"
  post "/signin" ,to: "sessions#create"
  resources :users
end
