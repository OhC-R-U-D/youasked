class QuestionsController < ApplicationController
    def set_current_user
        User.current = current_user
      end
    def index 
        questions = Question.all 
        render json: questions
        
    end
    def create
        question = Question.create(question_params)
        if question.valid?
            render json: question
        else
            render json: question.errors, status: 422
        end
    end
    def destroy
        question = Question.find(params[:id])
        question.destroy
        render json: question
    end

    private
    def question_params
        params.require(:question).permit(:post, :img_url, :user_id)
    end
end
