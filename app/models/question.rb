class Question < ApplicationRecord
    belongs_to :user  
    has_many :answers, dependent: :destroy

    validates :post, presence: true
    validates :post, length: {minimum: 10}
end
