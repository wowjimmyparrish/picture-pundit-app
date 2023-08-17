class ReviewsController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    before_action :authorize
    skip_before_action :authorize, only: [:index, :show]

    def index 
          reviews = Review.all
          render json: reviews, status: :ok
    end 
    

    def show 
        review = find_review 
        if review 
            render json: review, status: :ok 
        else 
            render json: {error: "Review not found"}, status: :not_found 
        end
    end 

    def create 
        review = user.reviews.create!(review_params)
        render json: review, status: :created 
    end 
    

    def destroy 
        review = find_review
          
        if review && review.user_id == session[:user_id]
            review.destroy 
            render json: {}
        elsif review.nil?
            render json: { error: "Review not found" }, status: :not_found
        else
            render json: { error: "Unauthorized" }, status: :unauthorized
        end
    end


    private 

    def find_review
        Review.find_by(id: params[:id]) 
    end

    def review_params 
        params.permit(:review, :movie_id)
    end
    
    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors }, status: :unprocessable_entity
    end

    def authorize
        return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
      end


end
