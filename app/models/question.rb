class Question < ApplicationRecord
    belongs_to :user  
    has_many :answers
    has_many :favorites, as: :favorite

    validates :post, presence: true
    validates :post, length: {minimum: 10}
end
