class UsersController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    rescue_from ActiveRecord::RecordNotFound, with: :userNotLoggedIn

    def create 
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    def show 
        user = User.find_by!(id: session[:user_id]) 
                                        # Logged in users created_movies and reviews with associated movie.  adapter: nil bypasses user serializer. 
                                        
        render json: user, include: [:created_movies, :reviews => {:include => :movie} ], adapter: nil
    end

    def destroy
        user = find_user
      
        if user == session[:user_id]
          user.destroy 
          render json: {}
        elsif user.nil?
          render json: { error: "User not found" }, status: :not_found
        else
          render json: { error: "Unauthorized" }, status: :unauthorized
        end
    end

    private 

    def find_user
        User.find_by(id: params[:id])
    end

    def userNotLoggedIn
        return render json: {error: "User is not logged in"}, status: :unauthorized
    end

    def user_params 
        params.permit(:username, :password, :password_confirmation)
    end

      def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity unless session.include? :user_id
    end

    
end