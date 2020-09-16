class DateIdeasController < ApplicationController
  before_action :set_date_idea, only: [:show, :update, :destroy]

  # GET /date_ideas
  def index
    @date_ideas = DateIdea.all

    render json: @date_ideas
  end

  # GET /date_ideas/1
  def show
    render json: @date_idea
  end

  # POST /date_ideas
  def create
    @date_idea = DateIdea.new(date_idea_params)

    if @date_idea.save
      render json: @date_idea, status: :created, location: @date_idea
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
    @date_idea.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_date_idea
      @date_idea = DateIdea.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def date_idea_params
      params.require(:date_idea).permit(:title, :price_exp, :user_id)
    end
end
