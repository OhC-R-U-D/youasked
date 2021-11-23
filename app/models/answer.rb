class Answer < ApplicationRecord
    belongs_to :question
    belongs_to :user

    validates :comment, presence: true, allow_blank: false
end
