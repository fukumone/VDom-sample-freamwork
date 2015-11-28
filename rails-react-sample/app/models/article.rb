class Article < ActiveRecord::Base
  validates :name, :body, presence: true
end
