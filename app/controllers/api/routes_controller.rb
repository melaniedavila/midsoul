class Api::RoutesController < ApplicationController
  def create
    @route = Route.new(route_params)
    # @route.creator_id = current_user.id

    ##### below for testing only
    @route.creator_id = 8
    @route.image_url = 'url'
    @route.distance = 1
    @route.elevation_gain = 1
    ##### above for testing only

    ensure_stat_and_image_attributes!(@route)
    if @route.save
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
    params.require(:route).permit(:title, :description, :path)
  end

  def ensure_stat_and_image_attributes!(route)
    generate_distance!(route)
    generate_elevation_gain!(route)
    generate_image_url!(route)
  end

  def generate_distance!(route)
    ###
  end

  def generate_elevation_gain!(route)
    ###
  end

  def generate_image_url!(route)
    ###
  end
end
