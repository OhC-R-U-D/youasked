class AnswersController < ApplicationController

    def index
        answers = Answer.all
        render json: answers
    end

    def create
        answer = Answer.create(answer_params)
        render json: answer
    end

    def update
        answer = Answer.find(params[:id])
        answer.update(answer_params)
        if answer.valid?
          render json: answer
        else
          render json: answer.errors, status: 422
        end
    end

    def destroy
        answer = Answer.find(params[:id])
        answer.destroy
        render json: answer
    end

    private

    def answer_params
        params.require(:answer).permit(:comment, :question_id, :user_id)
    end
end
