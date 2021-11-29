class FavoritesController < ApplicationController
    def create
        favorite = Favorite.create(favorite_params)
        if favorite.valid?
            render json: favorite
        else
            render json: favorite.errors, status: 422
        end 
    end

    private
    
    def favorite_params
        params.require(:favorite).permit(:favorite_id, :favorite_type, :user_id)
    end
end
