source "https://rubygems.org"
git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end
gem "letter_opener", :group => :development
gem "figaro"
gem "mini_racer"
gem "bcrypt", "3.1.12"
gem "rails", "~> 5.1.6"
gem "mysql2"
gem "puma", "~> 3.7"
gem "sass-rails", "~> 5.0"
gem "uglifier", ">= 1.3.0"
gem "coffee-rails", "~> 4.2"
gem "turbolinks", "~> 5"
gem "jbuilder", "~> 2.5"
gem "bootstrap", "~> 4.1.3"
gem "animate-rails"
gem "owlcarousel-rails"
gem "jquery-rails"
gem "font-awesome-rails" , "~> 4.7.0"
gem "carrierwave", "1.2.2"
gem "mini_magick", "4.7.0"
gem "fog", "1.42"
gem "config"
gem "magnific-popup-rails", "~> 1.1.0"
gem "sticky-rails"
gem "scroll-up", "~> 0.0.5"
gem "will_paginate", "~> 3.1.7"
gem "tinymce-rails"
gem "chartkick"
gem "faker"
gem "bootstrap-will_paginate"
gem "rails_12factor", group: :production
group :development, :test do
  gem "byebug", platforms: [:mri, :mingw, :x64_mingw]
  gem "capybara", "~> 2.13"
  gem "selenium-webdriver"
end
group :development do
  gem "web-console", ">= 3.3.0"
  gem "listen", ">= 3.0.5", "< 3.2"
  gem "spring"
  gem "spring-watcher-listen", "~> 2.0.0"
end
gem "tzinfo-data", platforms: [:mingw, :mswin, :x64_mingw, :jruby]
