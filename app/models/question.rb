class Question < ApplicationRecord
    belongs_to :user  
    has_many :answers

    validates :post, :img_url, presence: true
    validates :post, length: {minimum: 10}
end
