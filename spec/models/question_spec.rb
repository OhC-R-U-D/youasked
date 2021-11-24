require 'rails_helper'

RSpec.describe Question, type: :model do

  it "should validate question" do 
    question = Question.create img_url: 'https://live.staticflickr.com/298/31930376435_7d1dcc40ef_b.jpg'
    expect(question.errors[:post]).to_not be_empty
  end

  it 'should have a image link' do
    question = Question.create post: 'Is this toast burnt?'
    expect(question.errors[:img_url].first).to eq "can't be blank"
  end
  
  it 'should have an question entry of at least 10 characters' do
    question = Question.create(post: 'Too happy', img_url: 'https://live.staticflickr.com/298/31930376435_7d1dcc40ef_b.jpg')
    expect(question.errors[:post].first).to eq 'is too short (minimum is 10 characters)'
  end
  
end
