require 'rails_helper'

RSpec.describe "Favorites", type: :request do

  let(:user) do
    User.create alias: 'testing_alias', email: 'test@testing.com', password: '123456', password_confirmation: '123456'
  end

  let(:question) do
    Question.create post: 'Is this toast burnt?', img_url: 'https://live.staticflickr.com/298/31930376435_7d1dcc40ef_b.jpg', user_id: user.id
  end


  let(:favorite_params) do
    {
      favorite: {
        favorite_id: question.id,
        user_id: user.id,
        favorite_type: "Question"
      }
    }
  end

  describe "POST /create" do
    it "creates a new favorite" do
  
      post '/favorites', params: favorite_params
      expect(response).to have_http_status(200)
      
      
  
      favorite = Favorite.first 
    end
  end

end
