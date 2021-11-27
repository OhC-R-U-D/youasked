require 'rails_helper'

RSpec.describe "Questions", type: :request do
  let(:user) do
    User.create alias: 'testing_alias', email: 'test@testing.com', password: '123456', password_confirmation: '123456'
  end

  # -----index-----
  describe "GET /index" do
    it "gets a list of questions" do
      Question.create post: 'Is this toast burnt?', img_url: 'https://live.staticflickr.com/298/31930376435_7d1dcc40ef_b.jpg', user_id: user.id

      get '/questions'

      question = JSON.parse(response.body)
      expect(response).to have_http_status(200)
      expect(question.length).to eq 1
    end
  end

  # -----create-----
  describe "POST /create" do
    it "creates a question" do
      question_params = {
        question: {
          post: 'Is this toast burnt?',
          img_url: 'https://live.staticflickr.com/298/31930376435_7d1dcc40ef_b.jpg',
          user_id: user.id
        }
      }

      post '/questions', params: question_params
      expect(response).to have_http_status(200)

      question = Question.first
      expect(question.post).to eq 'Is this toast burnt?'
      expect(question.img_url).to eq 'https://live.staticflickr.com/298/31930376435_7d1dcc40ef_b.jpg'
    end
  end
  
  # -----Destroy-----
  describe "DELETE /destroy" do
    it 'deletes a question' do
      question_params = {
        question: {
          post: 'Is this toast burnt?',
          img_url: 'https://live.staticflickr.com/298/31930376435_7d1dcc40ef_b.jpg',
          user_id: user.id
        }
      }
      post '/questions', params: question_params
      question = Question.first
      
      delete "/questions/#{question.id}"
      expect(response).to have_http_status(200)
      questions = Question.all
      expect(questions).to be_empty
    end
  end


  # -----Validations-----
  describe 'question validation error codes' do
    it 'does not create a question without a post' do
      question_params = {
        question: {
          img_url: 'https://live.staticflickr.com/298/31930376435_7d1dcc40ef_b.jpg'
        }
      }
      post '/questions', params: question_params 
      expect(response.status).to eq 422
      json = JSON.parse(response.body)
      expect(json['post']).to include "can't be blank"
    end
  
    it 'cannot create a question without a post that is at least 10 characters' do
      question_params = {
        question: {
          post: 'Hello?',
          img_url: 'https://live.staticflickr.com/298/31930376435_7d1dcc40ef_b.jpg'
        }
      }
      post '/questions', params: question_params
      expect(response).to have_http_status(422)
      json = JSON.parse(response.body)
      expect(json['post']).to include "is too short (minimum is 10 characters)"
    end        
  end

end
