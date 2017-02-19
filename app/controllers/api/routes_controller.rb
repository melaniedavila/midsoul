class Api::RoutesController < ApplicationController
  def create
    @route = Route.new(route_params)
    @route.creator_id = current_user.id

    ##### below for testing only
    # @route.creator_id = 8
    # @route.distance = 1
    # @route.elevation_gain = 1
    # @route.polyline ||= 'foo'
    ##### above for testing only

    if @route.save!
      render :show
    else
      render json: @route.errors.full_messages, status: 422
    end
  end

  def show
    @route = Route.find(params[:id])
    render :show
  end

  def destroy
    @route = Route.find(params[:id])
    @route.destroy
    @routes = Route.all
    render :show
  end

  def update
    @route = Route.find(params[:id])
    if @route.update(route_params)
      render :show
    else
      render json: @route.errors.full_messages, status: 422
    end
  end

  def index
    @routes = Route.all
    render :index
  end

  private
  def route_params
    params.require(:route).permit(:title, :description, :polyline, :distance, :elevation_gain)
  end
end
