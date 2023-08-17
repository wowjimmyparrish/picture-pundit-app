class MoviesController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    before_action :authorize
    skip_before_action :authorize, only: [:index, :show]

    def index 
          movies = Movie.all
          render json: movies, status: :ok
    end

    
    def show 
        movie = find_movie
        if movie 
            render json: movie, status: :ok 
        else 
            render json: {error: "Movie not found"}, status: :not_found 
        end
    end 
    
    def create 
        movie = user.created_movies.create!(movie_params) 
        render json: movie, status: :created 
    end
        
    
    def destroy 
        movie = find_movie
      
        if movie && movie.user_id == session[:user_id]
          movie.destroy 
          render json: {}
        elsif movie.nil?
          render json: { error: "Movie not found" }, status: :not_found
        else
          render json: { error: "Unauthorized" }, status: :unauthorized
        end
      end

      
        private 
        

        def find_movie
            Movie.find_by(id: params[:id]) 
        end

        def movie_params
            params.permit(:name, :genre, :year, :image_file, :director)
        end

        def render_unprocessable_entity_response(invalid)
            render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
        end

        def authorize
            return render json: { error: "Not authorized, please log in" }, status: :unauthorized unless session.include? :user_id
          end
    
end