require 'rails_helper'

RSpec.describe User, type: :model do

  it "should validate alias" do 
    user = User.create 
    expect(user.errors[:alias]).to_not be_empty
  end

end
