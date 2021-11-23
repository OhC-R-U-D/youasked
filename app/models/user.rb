class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  has_many :questions
  has_many :answers

    # validates :alias, presence: true
  validates :alias, presence: true, length: { minimum: 5 }, :uniqueness => {:message => 'already taken, alias must be unique'}
  validates :email, format: { with: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/, message: "must be a valid email address", :multiline => true } 
  validates :password, :password_confirmation, length: { in: 6..20 }

end


