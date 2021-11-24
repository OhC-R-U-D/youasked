require 'rails_helper'

RSpec.describe Answer, type: :model do
  
  it "should validate answer" do 
    answer = Answer.create 
    expect(answer.errors[:comment]).to_not be_empty
  end
  
end
