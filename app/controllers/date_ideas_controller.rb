class DateIdeasController < ApplicationController
  before_action :authorize_request, only: [ :create, :update, :destroy]
  before_action :set_date_idea, only:  [:update]
 
  # one of the routes have to give unauthorized users access...is my line #3 index route is exposed

  # GET /date_ideas
  def index
    @date_ideas = DateIdea.all

    render json: @date_ideas, include: [:user, :reviews]
  end

  # GET /date_ideas/1
  def show
    @date_idea = DateIdea.find(params[:id])
    render json: @date_idea, include: [:user, :reviews]
  end

  # POST /date_ideas
  def create
    @date_idea = DateIdea.new(date_idea_params)
    @date_idea.user = @current_user

    if @date_idea.save
      render json: @date_idea, status: :created
    else
      render json: @date_idea.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /date_ideas/1
  def update
    if @date_idea.update(date_idea_params)
      render json: @date_idea
    else
      render json: @date_idea.errors, status: :unprocessable_entity
    end
  end

    # DELETE /date_ideas/1
    def destroy
      @date_idea= DateIdea.find(params[:id])
        if @date_idea.destroy 
        render json: {message: "Deleted"}
        else 
          render json: @date_idea.errors, status: :unprocessable_entity
        end
    end

 

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_date_idea
      @date_idea = @current_user.date_ideas.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def date_idea_params
      params.require(:date_idea).permit(:title, :img_url, :category, :city)
    end
end
