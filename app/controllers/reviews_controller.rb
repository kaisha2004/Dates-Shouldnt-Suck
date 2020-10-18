class ReviewsController < ApplicationController
  before_action :authorize_request, only: [ :create, :destroy]
  before_action :set_review, only: [ :update, :destroy]
 

  # GET /reviews
  def index
    @reviews = Review.all

    render json: @reviews, include: [:user, :date_ideas]

  # GET /reviews/1
  def show
    @review = Review.find(params[:id])
    render json: @review, include: [:user, :date_ideas]
  end

  # POST /reviews
  def create
    puts params
    @date = DateIdea.find(params[:id])
    @review = Review.new(review_params)
    @review.user = @current_user
    @review.date_idea = @date

    if @review.save
      render json: @review, status: :created
    else
      render json: @review.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /reviews/1
  def update
  
    if @review.update(review_params)
      render json: @review
    else
      render json: @review.errors, status: :unprocessable_entity
    end
  end

  # DELETE /reviews/1
  def destroy
    @review.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_review
      @review = @current_user.reviews.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def review_params
      params.require(:review).permit(:content, :id)
    end
end
