require 'test_helper'

class DateIdeasControllerTest < ActionDispatch::IntegrationTest
  setup do
    @date_idea = date_ideas(:one)
  end

  test "should get index" do
    get date_ideas_url, as: :json
    assert_response :success
  end

  test "should create date_idea" do
    assert_difference('DateIdea.count') do
      post date_ideas_url, params: { date_idea: { price_exp: @date_idea.price_exp, title: @date_idea.title, user_id: @date_idea.user_id } }, as: :json
    end

    assert_response 201
  end

  test "should show date_idea" do
    get date_idea_url(@date_idea), as: :json
    assert_response :success
  end

  test "should update date_idea" do
    patch date_idea_url(@date_idea), params: { date_idea: { price_exp: @date_idea.price_exp, title: @date_idea.title, user_id: @date_idea.user_id } }, as: :json
    assert_response 200
  end

  test "should destroy date_idea" do
    assert_difference('DateIdea.count', -1) do
      delete date_idea_url(@date_idea), as: :json
    end

    assert_response 204
  end
end
