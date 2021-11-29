class Answer < ApplicationRecord
    belongs_to :question
    belongs_to :user
    has_many :favorites, as: :favorite

    validates :comment, presence: true, allow_blank: false
end
