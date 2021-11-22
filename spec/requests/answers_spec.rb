require 'rails_helper'

RSpec.describe "Answers", type: :request do
  let(:user) do
    User.create alias: 'test', email: 'test@testing.com', password: '123456', password_confirmation: '123456'
  end
  let(:question) do
    Question.create post: 'Is this toast burnt?', img_url: 'https://live.staticflickr.com/298/31930376435_7d1dcc40ef_b.jpg', user_id: user.id
  end

  # -----index-----
  describe "GET /index" do
    it "gets a list of answers" do
      Answer.create comment: "Time to move on", question_id: question.id, user_id: user.id
      
      get '/answers'

      answer = JSON.parse(response.body)
      expect(response).to have_http_status(200)
      expect(answer.length).to eq 1  
    end
  end

  # -----create-----
  describe "POST /create" do
    it "creates a new answer" do
      answer_params = {
        answer: {
          comment: "Time to move on",
          question_id: question.id,
          user_id: user.id
        }
      }

      post '/answers', params: answer_params
      expect(response).to have_http_status(200)

      answer = Answer.first 
      expect(answer.comment).to eq 'Time to move on'
    end
  end

  # -----update-----
  describe "PATCH /update" do
    it 'updates a comment' do
      answer_params = {
        answer: {
          comment: "Time to move on",
          question_id: question.id,
          user_id: user.id
        }
      }
      post '/answers', params: answer_params
      answer = Answer.first

      updated_answer_params = {
        answer: {
          comment: "Atleast you aren't sitting in rush hour traffic!",
          question_id: question.id,
          user_id: user.id
        }
      }
      patch "/answers/#{answer.id}", params: updated_answer_params
      answer = Answer.first
      expect(response).to have_http_status(200)
      expect(answer.comment).to eq "Atleast you aren't sitting in rush hour traffic!"
    end
  end

  # -----Destroy-----
  describe "DELETE /destroy" do
    it 'deletes an answer' do
      answer_params = {
        answer: {
          comment: "Time to move on",
          question_id: question.id,
          user_id: user.id
        }
      }
      post '/answers', params: answer_params
      answer = Answer.first
      
      delete "/answers/#{answer.id}"
      expect(response).to have_http_status(200)
      answers = Answer.all
      expect(answers).to be_empty
    end
  end
end