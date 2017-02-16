class Api::RoutesController < ApplicationController
  def create
    @route = Route.new(route_params)
    @route.creator_id = current_user.id
    ensure_stat_and_image_attributes!(@route)
    if @route.save
      render :show
    else
      render json: { base: @route.errors.full_messages }, status: 422
    end
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
