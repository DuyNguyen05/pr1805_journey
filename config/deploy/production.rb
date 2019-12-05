set :stage, :production
set :rails_env, :production
set :deploy_to, "home/ubuntu/pr1805_journey"
set :branch, :master
server "3.134.252.73", user: "ubuntu", roles: %w(web app db)
